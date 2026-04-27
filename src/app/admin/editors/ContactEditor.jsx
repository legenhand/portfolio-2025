'use client';

import { SectionHeader, FieldGroup, Input } from './HeroEditor';

export default function ContactEditor({ data, onChange }) {
    const update = (key, value) => onChange({ ...data, [key]: value });

    return (
        <div className="space-y-6">
            <SectionHeader title="Contact Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldGroup label="Email">
                    <Input value={data.email} onChange={(v) => update('email', v)} />
                </FieldGroup>
                <FieldGroup label="Phone Display">
                    <Input value={data.phone} onChange={(v) => update('phone', v)} placeholder="+62 851-5501-7225" />
                </FieldGroup>
                <FieldGroup label="Phone Raw (for tel: link)">
                    <Input value={data.phoneRaw} onChange={(v) => update('phoneRaw', v)} placeholder="+6285155017225" />
                </FieldGroup>
                <FieldGroup label="Website">
                    <Input value={data.website} onChange={(v) => update('website', v)} placeholder="rizkifirmansyah.com" />
                </FieldGroup>
            </div>
        </div>
    );
}
