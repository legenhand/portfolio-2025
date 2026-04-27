'use client';

import { Trash2, Plus } from 'lucide-react';

export default function HeroEditor({ data, onChange }) {
    const update = (key, value) => onChange({ ...data, [key]: value });

    const updateTitle = (idx, value) => {
        const titles = [...data.titles];
        titles[idx] = value;
        update('titles', titles);
    };

    const addTitle = () => update('titles', [...data.titles, '']);
    const removeTitle = (idx) => update('titles', data.titles.filter((_, i) => i !== idx));

    return (
        <div className="space-y-6">
            <SectionHeader title="Hero Section" />
            <FieldGroup label="Full Name">
                <Input value={data.name} onChange={(v) => update('name', v)} />
            </FieldGroup>
            <FieldGroup label="Passion">
                <Input value={data.passion} onChange={(v) => update('passion', v)} />
            </FieldGroup>
            <FieldGroup label="Location">
                <Input value={data.location} onChange={(v) => update('location', v)} />
            </FieldGroup>
            <FieldGroup label="GitHub URL">
                <Input value={data.github} onChange={(v) => update('github', v)} />
            </FieldGroup>
            <FieldGroup label="LinkedIn URL">
                <Input value={data.linkedin} onChange={(v) => update('linkedin', v)} />
            </FieldGroup>
            <FieldGroup label="Typewriter Titles">
                <div className="space-y-2">
                    {data.titles.map((title, idx) => (
                        <div key={idx} className="flex gap-2">
                            <Input value={title} onChange={(v) => updateTitle(idx, v)} />
                            <button onClick={() => removeTitle(idx)} className="p-2 text-gray-500 hover:text-error transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                    <AddButton onClick={addTitle} label="Add Title" />
                </div>
            </FieldGroup>
        </div>
    );
}

// Shared UI components
export function SectionHeader({ title }) {
    return (
        <div className="flex items-center gap-3 pb-4 border-b border-tertiary">
            <h2 className="text-xl font-bold text-white font-mono">{title}</h2>
        </div>
    );
}

export function FieldGroup({ label, children }) {
    return (
        <div className="bg-[#111113] p-4 rounded-xl border border-tertiary">
            <label className="block text-sm text-gray-400 font-mono mb-2">{label}</label>
            {children}
        </div>
    );
}

export function Input({ value, onChange, placeholder, type = 'text' }) {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full p-2.5 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 font-sans text-sm"
        />
    );
}

export function TextArea({ value, onChange, placeholder, rows = 3 }) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={rows}
            className="w-full p-2.5 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 font-sans text-sm resize-none"
        />
    );
}

export function AddButton({ onClick, label }) {
    return (
        <button onClick={onClick} className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-accent border border-dashed border-accent/30 rounded-lg hover:bg-accent/10 transition-all w-full justify-center">
            <Plus className="w-4 h-4" /> {label}
        </button>
    );
}
