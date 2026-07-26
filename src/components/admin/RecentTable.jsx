import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function RecentTable({ title, items, columns }) {
  return (
    <div className="p-6 rounded-2xl border border-border/40 bg-card">
      <h3 className="font-heading text-lg font-bold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              {columns.map((col) => (
                <th key={col.key} className="text-left py-2 px-2 font-mono uppercase tracking-wider text-xs text-muted-foreground">{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr><td colSpan={columns.length} className="text-center py-8 text-muted-foreground">No records yet</td></tr>
            ) : items.map((item, i) => (
              <tr key={item.id || i} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="py-3 px-2">
                    {col.render ? col.render(item) : (item[col.key] || '—')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}