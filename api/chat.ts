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

export default async function req(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
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
