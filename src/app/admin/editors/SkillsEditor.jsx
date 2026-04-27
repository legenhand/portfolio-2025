'use client';

import { Trash2 } from 'lucide-react';
import { SectionHeader, FieldGroup, Input, AddButton } from './HeroEditor';

export default function SkillsEditor({ data, onChange }) {
    const updateCategory = (idx, key, value) => {
        const updated = [...data];
        updated[idx] = { ...updated[idx], [key]: value };
        onChange(updated);
    };

    const updateItem = (catIdx, itemIdx, value) => {
        const updated = [...data];
        const items = [...updated[catIdx].items];
        items[itemIdx] = value;
        updated[catIdx] = { ...updated[catIdx], items };
        onChange(updated);
    };

    const addItem = (catIdx) => {
        const updated = [...data];
        updated[catIdx] = { ...updated[catIdx], items: [...updated[catIdx].items, ''] };
        onChange(updated);
    };

    const removeItem = (catIdx, itemIdx) => {
        const updated = [...data];
        updated[catIdx] = { ...updated[catIdx], items: updated[catIdx].items.filter((_, i) => i !== itemIdx) };
        onChange(updated);
    };

    const addCategory = () => onChange([...data, { name: '', items: [''] }]);
    const removeCategory = (idx) => onChange(data.filter((_, i) => i !== idx));

    return (
        <div className="space-y-6">
            <SectionHeader title="Skills / Dependencies" />
            {data.map((cat, idx) => (
                <div key={idx} className="bg-[#111113] p-6 rounded-xl border border-tertiary space-y-4">
                    <div className="flex items-center justify-between">
                        <FieldGroup label="Category Name">
                            <Input value={cat.name} onChange={(v) => updateCategory(idx, 'name', v)} placeholder="e.g. backend" />
                        </FieldGroup>
                        <button onClick={() => removeCategory(idx)} className="p-2 text-gray-500 hover:text-error transition-colors ml-4 mt-4">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                    <FieldGroup label="Items">
                        <div className="space-y-2">
                            {cat.items.map((item, iIdx) => (
                                <div key={iIdx} className="flex gap-2">
                                    <Input value={item} onChange={(v) => updateItem(idx, iIdx, v)} />
                                    <button onClick={() => removeItem(idx, iIdx)} className="p-2 text-gray-500 hover:text-error transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            <AddButton onClick={() => addItem(idx)} label="Add Skill" />
                        </div>
                    </FieldGroup>
                </div>
            ))}
            <AddButton onClick={addCategory} label="Add Category" />
        </div>
    );
}
