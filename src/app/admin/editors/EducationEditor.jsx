'use client';

import { Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader, FieldGroup, Input, AddButton } from './HeroEditor';
import PeriodPicker from './PeriodPicker';

const ICON_OPTIONS = ['AcademicCapIcon', 'BookOpenIcon', 'CodeBracketIcon'];

export default function EducationEditor({ data, onChange }) {
    const updateEdu = (idx, key, value) => {
        const updated = [...data];
        updated[idx] = { ...updated[idx], [key]: value };
        onChange(updated);
    };

    const updateAchievement = (eduIdx, achIdx, value) => {
        const updated = [...data];
        const achievements = [...updated[eduIdx].achievements];
        achievements[achIdx] = value;
        updated[eduIdx] = { ...updated[eduIdx], achievements };
        onChange(updated);
    };

    const addAchievement = (eduIdx) => {
        const updated = [...data];
        updated[eduIdx] = { ...updated[eduIdx], achievements: [...updated[eduIdx].achievements, ''] };
        onChange(updated);
    };

    const removeAchievement = (eduIdx, achIdx) => {
        const updated = [...data];
        updated[eduIdx] = { ...updated[eduIdx], achievements: updated[eduIdx].achievements.filter((_, i) => i !== achIdx) };
        onChange(updated);
    };

    const addEducation = () => onChange([...data, { institution: '', program: '', startMonth: null, startYear: null, endMonth: null, endYear: null, icon: 'AcademicCapIcon', achievements: [''] }]);
    const removeEducation = (idx) => onChange(data.filter((_, i) => i !== idx));

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
            <SectionHeader title="Education & Training" />
            {data.map((edu, idx) => (
                <div key={idx} className="bg-[#111113] p-6 rounded-xl border border-tertiary space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-mono font-semibold">{edu.institution || 'New Education'}</h3>
                        <div className="flex items-center gap-1">
                            <button onClick={() => moveUp(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronUp className="w-4 h-4" /></button>
                            <button onClick={() => moveDown(idx)} className="p-1.5 text-gray-500 hover:text-white transition-colors"><ChevronDown className="w-4 h-4" /></button>
                            <button onClick={() => removeEducation(idx)} className="p-1.5 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FieldGroup label="Institution"><Input value={edu.institution} onChange={(v) => updateEdu(idx, 'institution', v)} /></FieldGroup>
                        <FieldGroup label="Program"><Input value={edu.program} onChange={(v) => updateEdu(idx, 'program', v)} /></FieldGroup>
                        <PeriodPicker
                            data={{ startMonth: edu.startMonth, startYear: edu.startYear, endMonth: edu.endMonth, endYear: edu.endYear }}
                            onChange={(period) => {
                                const updated = [...data];
                                updated[idx] = { ...updated[idx], ...period };
                                onChange(updated);
                            }}
                            showMonth={false}
                        />
                        <FieldGroup label="Icon">
                            <select value={edu.icon} onChange={(e) => updateEdu(idx, 'icon', e.target.value)}
                                className="w-full p-2.5 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white font-sans text-sm">
                                {ICON_OPTIONS.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                            </select>
                        </FieldGroup>
                    </div>
                    <FieldGroup label="Achievements">
                        <div className="space-y-2">
                            {edu.achievements.map((ach, aIdx) => (
                                <div key={aIdx} className="flex gap-2">
                                    <Input value={ach} onChange={(v) => updateAchievement(idx, aIdx, v)} />
                                    <button onClick={() => removeAchievement(idx, aIdx)} className="p-2 text-gray-500 hover:text-error transition-colors"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            ))}
                            <AddButton onClick={() => addAchievement(idx)} label="Add Achievement" />
                        </div>
                    </FieldGroup>
                </div>
            ))}
            <AddButton onClick={addEducation} label="Add Education" />
        </div>
    );
}
