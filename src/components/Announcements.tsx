import React from 'react';
import { Megaphone, Calendar, Tag, ArrowUpRight } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: "M211 Firmware v2.1 Update Release",
    date: "April 8, 2026",
    category: "Product Update",
    content: "The newest firmware brings auto-calibration improvements for continuous tapes. Ensure your enterprise clients upgrade via the Express Labels App.",
    isNew: true,
  },
  {
    id: 2,
    title: "New Cartridges: High-Temp Vinyl",
    date: "March 29, 2026",
    category: "New Product",
    content: "We are launching the M21-750-595-WT labels specifically engineered for high-heat environments. Perfect for outdoor datacenter applications.",
    isNew: false,
  },
  {
    id: 3,
    title: "Q2 Pricing Tier Adjustments",
    date: "March 15, 2026",
    category: "Sales Strategy",
    content: "Review the updated volume discounts for bulk M211 purchases. Minimum order quantities for Tier 1 pricing have been reduced.",
    isNew: false,
  }
];

export default function Announcements() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-on-surface font-display mb-3">Important Announcements</h1>
        <p className="text-on-surface-variant font-medium">
          Stay up to date with the latest product drops, firmware changes, and pricing updates.
        </p>
      </div>

      <div className="space-y-6">
        {announcements.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-2xl p-6 border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative overflow-hidden"
          >
            {item.isNew && (
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-xl font-display">
                New
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="sm:w-48 shrink-0 space-y-3 relative z-10">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">{item.date}</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Tag className="w-4 h-4" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">{item.category}</span>
                </div>
              </div>
              
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                  {item.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -right-12 -bottom-12 opacity-5 text-primary group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
              <Megaphone className="w-48 h-48" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
