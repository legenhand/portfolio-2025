'use client';

import { FieldGroup } from './HeroEditor';

const MONTHS = [
    { value: '', label: '—' },
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Apr' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Aug' },
    { value: 9, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dec' },
];

const currentYear = new Date().getFullYear();
const YEARS = [
    { value: '', label: '—' },
    ...Array.from({ length: 30 }, (_, i) => {
        const y = currentYear + 2 - i;
        return { value: y, label: String(y) };
    }),
];

const selectClass = "w-full p-2.5 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white font-sans text-sm";

function Select({ value, options, onChange }) {
    return (
        <select
            value={value ?? ''}
            onChange={(e) => onChange(e.target.value === '' ? null : Number(e.target.value))}
            className={selectClass}
        >
            {options.map((opt) => (
                <option key={opt.label} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
}

export default function PeriodPicker({ data, onChange, showMonth = true }) {
    const update = (key, value) => onChange({ ...data, [key]: value });
    const isPresent = data.endYear === null && data.endMonth === null;

    const handlePresentToggle = () => {
        if (isPresent) {
            update('endYear', currentYear);
        } else {
            onChange({ ...data, endMonth: null, endYear: null });
        }
    };

    return (
        <FieldGroup label="Period">
            <div className="space-y-3">
                {/* Start Date */}
                <div>
                    <label className="block text-xs text-gray-500 font-mono mb-1.5">Start</label>
                    <div className="flex gap-2">
                        {showMonth && (
                            <div className="flex-1">
                                <Select value={data.startMonth} options={MONTHS} onChange={(v) => update('startMonth', v)} />
                            </div>
                        )}
                        <div className="flex-1">
                            <Select value={data.startYear} options={YEARS} onChange={(v) => update('startYear', v)} />
                        </div>
                    </div>
                </div>

                {/* End Date */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs text-gray-500 font-mono">End</label>
                        <button
                            type="button"
                            onClick={handlePresentToggle}
                            className={`text-xs font-mono px-2 py-0.5 rounded border transition-all ${isPresent ? 'bg-accent/10 text-accent border-accent/30' : 'text-gray-500 border-tertiary hover:text-white'}`}
                        >
                            Present
                        </button>
                    </div>
                    {!isPresent && (
                        <div className="flex gap-2">
                            {showMonth && (
                                <div className="flex-1">
                                    <Select value={data.endMonth} options={MONTHS} onChange={(v) => update('endMonth', v)} />
                                </div>
                            )}
                            <div className="flex-1">
                                <Select value={data.endYear} options={YEARS} onChange={(v) => update('endYear', v)} />
                            </div>
                        </div>
                    )}
                    {isPresent && (
                        <div className="p-2.5 bg-accent/5 border border-accent/20 rounded-lg text-accent text-sm font-mono text-center">
                            Present
                        </div>
                    )}
                </div>
            </div>
        </FieldGroup>
    );
}
