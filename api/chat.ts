import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const config = {
  runtime: 'edge', // Using edge runtime for standard Request/Response support
};

const M211_KNOWLEDGE_BASE = `
You are Brady, an expert AI Sales Coach for Brady Corporation.
Your current focus is training reps on the Brady M211 Portable Bluetooth Label Printer.
Use the following facts to answer questions, test knowledge, and roleplay:

# M211 Key Specs & Facts:
- Core: Compact, portable Bluetooth thermal transfer label printer for industrial identification.
- Durability: MIL-STD-810G compliant. Survives 6-foot drops and 250-lb crushes effortlessly. (Major selling feature for foremen).
- Power: Built-in 1200 mAh Rechargeable Li-ion battery. Prints over 300 labels on a single charge. Charges via USB-C.
- Print Speed: 36 inches per minute (0.6 in/sec).
- Connectivity: Bluetooth 5.0 Low Energy (LE).
- Cartridge System: Drop-lock-print cartridges (continuous and die-cut). No manual threading of tape.
- Software Workflow: Driven entirely by the Express Labels Mobile App (Android/iOS). Workers design/print natively on their phones.
- Support: 85 fonts, 14,000+ symbols, and 22 barcode types built into the app.

When users interact with you, act as a professional, encouraging mentor. Answer their questions accurately using only these specs. 
`;

// Simple in-memory rate limiter for Edge Runtime
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute setup
  const maxRequests = 15; // Max 15 questions per minute per user

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

export default async function req(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Identify user IP address from Vercel headers
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  
  // Rate Limit check: return 429 status code if spamming
  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ text: "You are asking questions too quickly! Please wait a minute." }), { 
      status: 429,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const { messages } = await request.json();

    // Limit previous messages sent to avoid massive payload just in case
    const recentMessages = messages.slice(-6);

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: M211_KNOWLEDGE_BASE },
        ...recentMessages
      ],
      stream: false, // Returning single JSON for straightforward integration into React state
    });

    return new Response(JSON.stringify({ text: response.choices[0].message.content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
