'use client';

import { Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, FieldGroup, Input, TextArea, AddButton } from './HeroEditor';
import PeriodPicker from './PeriodPicker';

export default function ExperienceEditor({ data, onChange }) {
    const updateExp = (idx, key, value) => {
        const updated = [...data];
        updated[idx] = { ...updated[idx], [key]: value };
        onChange(updated);
    };

    const updatePoint = (expIdx, pointIdx, value) => {
        const updated = [...data];
        const points = [...updated[expIdx].points];
        points[pointIdx] = value;
        updated[expIdx] = { ...updated[expIdx], points };
        onChange(updated);
    };

    const addPoint = (expIdx) => {
        const updated = [...data];
        updated[expIdx] = { ...updated[expIdx], points: [...updated[expIdx].points, ''] };
        onChange(updated);
    };

    const removePoint = (expIdx, pointIdx) => {
        const updated = [...data];
        updated[expIdx] = { ...updated[expIdx], points: updated[expIdx].points.filter((_, i) => i !== pointIdx) };
        onChange(updated);
    };

    const addExperience = () => {
        onChange([...data, { company: '', role: '', startMonth: null, startYear: null, endMonth: null, endYear: null, location: '', website: '', logo: '', points: [''], techlog: '' }]);
    };

    const removeExperience = (idx) => onChange(data.filter((_, i) => i !== idx));

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
            <SectionHeader title="Experience" />
            {data.map((exp, idx) => (
                <div key={idx} className="bg-[#111113] p-6 rounded-xl border border-tertiary space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-mono font-semibold">{exp.company || 'New Experience'}</h3>
                        <div className="flex items-center gap-1">
                            <button onClick={() => moveUp(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronUp className="w-4 h-4" /></button>
                            <button onClick={() => moveDown(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronDown className="w-4 h-4" /></button>
                            <button onClick={() => removeExperience(idx)} className="p-1.5 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FieldGroup label="Company"><Input value={exp.company} onChange={(v) => updateExp(idx, 'company', v)} /></FieldGroup>
                        <FieldGroup label="Role"><Input value={exp.role} onChange={(v) => updateExp(idx, 'role', v)} /></FieldGroup>
                        <PeriodPicker
                            data={{ startMonth: exp.startMonth, startYear: exp.startYear, endMonth: exp.endMonth, endYear: exp.endYear }}
                            onChange={(period) => {
                                const updated = [...data];
                                updated[idx] = { ...updated[idx], ...period };
                                onChange(updated);
                            }}
                        />
                        <FieldGroup label="Location"><Input value={exp.location} onChange={(v) => updateExp(idx, 'location', v)} /></FieldGroup>
                        <FieldGroup label="Website"><Input value={exp.website || ''} onChange={(v) => updateExp(idx, 'website', v)} /></FieldGroup>
                        <FieldGroup label="Logo Path"><Input value={exp.logo || ''} onChange={(v) => updateExp(idx, 'logo', v)} /></FieldGroup>
                    </div>
                    <FieldGroup label="Tech Stack"><Input value={exp.techlog || ''} onChange={(v) => updateExp(idx, 'techlog', v)} placeholder='stack: ["Go", "Python"]' /></FieldGroup>
                    <FieldGroup label="Key Points">
                        <div className="space-y-2">
                            {exp.points.map((point, pIdx) => (
                                <div key={pIdx} className="flex gap-2">
                                    <Input value={point} onChange={(v) => updatePoint(idx, pIdx, v)} />
                                    <button onClick={() => removePoint(idx, pIdx)} className="p-2 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                            <AddButton onClick={() => addPoint(idx)} label="Add Point" />
                        </div>
                    </FieldGroup>
                </div>
            ))}
            <AddButton onClick={addExperience} label="Add Experience" />
        </div>
    );
}
