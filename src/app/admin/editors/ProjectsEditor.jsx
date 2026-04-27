'use client';

import { Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, FieldGroup, Input, AddButton } from './HeroEditor';

const ICON_OPTIONS = ['ServerIcon', 'CommandLineIcon', 'DevicePhoneMobileIcon'];

export default function ProjectsEditor({ data, onChange }) {
    const updateProject = (idx, key, value) => {
        const updated = [...data];
        updated[idx] = { ...updated[idx], [key]: value };
        onChange(updated);
    };

    const updateTech = (projIdx, techIdx, value) => {
        const updated = [...data];
        const tech = [...updated[projIdx].tech];
        tech[techIdx] = value;
        updated[projIdx] = { ...updated[projIdx], tech };
        onChange(updated);
    };

    const addTech = (projIdx) => {
        const updated = [...data];
        updated[projIdx] = { ...updated[projIdx], tech: [...updated[projIdx].tech, ''] };
        onChange(updated);
    };

    const removeTech = (projIdx, techIdx) => {
        const updated = [...data];
        updated[projIdx] = { ...updated[projIdx], tech: updated[projIdx].tech.filter((_, i) => i !== techIdx) };
        onChange(updated);
    };

    const addProject = () => onChange([...data, { title: '', description: '', icon: 'ServerIcon', tech: [''], period: '', website: '' }]);
    const removeProject = (idx) => onChange(data.filter((_, i) => i !== idx));

    const moveUp = (idx) => {
        if (idx === 0) return;
        const updated = [...data];
        [updated[idx - 1], updated[idx]] = [updated[idx], updated[idx - 1]];
        onChange(updated);
    };

    const moveDown = (idx) => {
        if (idx === data.length - 1) return;
        const updated = [...data];
        [updated[idx], updated[idx + 1]] = [updated[idx + 1], updated[idx]];
        onChange(updated);
    };

    return (
        <div className="space-y-6">
            <SectionHeader title="Projects" />
            {data.map((proj, idx) => (
                <div key={idx} className="bg-[#111113] p-6 rounded-xl border border-tertiary space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-mono font-semibold">{proj.title || 'New Project'}</h3>
                        <div className="flex items-center gap-1">
                            <button onClick={() => moveUp(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronUp className="w-4 h-4" /></button>
                            <button onClick={() => moveDown(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronDown className="w-4 h-4" /></button>
                            <button onClick={() => removeProject(idx)} className="p-1.5 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FieldGroup label="Title"><Input value={proj.title} onChange={(v) => updateProject(idx, 'title', v)} /></FieldGroup>
                        <FieldGroup label="Period"><Input value={proj.period} onChange={(v) => updateProject(idx, 'period', v)} /></FieldGroup>
                        <FieldGroup label="Icon">
                            <select value={proj.icon} onChange={(e) => updateProject(idx, 'icon', e.target.value)}
                                className="w-full p-2.5 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white font-sans text-sm">
                                {ICON_OPTIONS.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                            </select>
                        </FieldGroup>
                    </div>
                    <FieldGroup label="Description"><Input value={proj.description} onChange={(v) => updateProject(idx, 'description', v)} /></FieldGroup>
                    <FieldGroup label="Website URL"><Input value={proj.website || ''} onChange={(v) => updateProject(idx, 'website', v)} placeholder="https://..." /></FieldGroup>
                    <FieldGroup label="Tech Stack">
                        <div className="space-y-2">
                            {proj.tech.map((t, tIdx) => (
                                <div key={tIdx} className="flex gap-2">
                                    <Input value={t} onChange={(v) => updateTech(idx, tIdx, v)} />
                                    <button onClick={() => removeTech(idx, tIdx)} className="p-2 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                            <AddButton onClick={() => addTech(idx)} label="Add Tech" />
                        </div>
                    </FieldGroup>
                </div>
            ))}
            <AddButton onClick={addProject} label="Add Project" />
        </div>
    );
}
