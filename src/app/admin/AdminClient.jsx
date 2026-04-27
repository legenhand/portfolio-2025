'use client';

import { useState, useEffect } from 'react';
import { Shield, Save, CheckCircle, AlertTriangle, LogOut } from 'lucide-react';
import HeroEditor from './editors/HeroEditor';
import ExperienceEditor from './editors/ExperienceEditor';
import SkillsEditor from './editors/SkillsEditor';
import EducationEditor from './editors/EducationEditor';
import ContactEditor from './editors/ContactEditor';
import ProjectsEditor from './editors/ProjectsEditor';

const TABS = [
    { id: 'hero', label: 'Hero' },
    { id: 'experiences', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
    { id: 'projects', label: 'Projects' },
];

export default function AdminClient() {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('hero');
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState(null);
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const saved = sessionStorage.getItem('admin_password');
        if (saved) {
            setPassword(saved);
            setAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (authenticated) fetchData();
    }, [authenticated]);

    useEffect(() => {
        if (toast) {
            const t = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(t);
        }
    }, [toast]);

    const fetchData = async () => {
        const res = await fetch('/api/portfolio');
        const json = await res.json();
        setData(json);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        try {
            const res = await fetch('/api/portfolio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
            });
            if (res.status === 401) {
                setLoginError('Wrong password');
                return;
            }
            sessionStorage.setItem('admin_password', password);
            setAuthenticated(true);
        } catch {
            setLoginError('Connection error');
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/portfolio', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'x-admin-password': sessionStorage.getItem('admin_password') },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (json.success) {
                setToast({ type: 'success', message: json.message || 'Saved!' });
            } else {
                setToast({ type: 'error', message: json.error || 'Save failed' });
            }
        } catch {
            setToast({ type: 'error', message: 'Network error' });
        }
        setSaving(false);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_password');
        setAuthenticated(false);
        setData(null);
        setPassword('');
    };

    const updateData = (key, value) => {
        setData(prev => ({ ...prev, [key]: value }));
    };

    if (!authenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary">
                <div className="w-full max-w-md mx-4">
                    <div className="bg-[#111113] rounded-xl border border-tertiary overflow-hidden">
                        <div className="flex items-center px-4 py-3 bg-[#161618] border-b border-tertiary">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-error"></div>
                                <div className="w-3 h-3 rounded-full bg-warning"></div>
                                <div className="w-3 h-3 rounded-full bg-accent"></div>
                            </div>
                            <span className="flex-1 text-center text-xs text-gray-500 font-mono">admin@portfolio: ~/auth</span>
                        </div>
                        <form onSubmit={handleLogin} className="p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="w-6 h-6 text-accent" />
                                <h1 className="text-xl font-bold text-white font-mono">Authentication Required</h1>
                            </div>
                            <div className="mb-2 font-mono text-sm text-gray-500">
                                <span className="text-accent">$</span> sudo authenticate --admin
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password..."
                                className="w-full p-3 bg-primary border border-tertiary rounded-lg focus:ring-1 focus:ring-accent focus:border-accent outline-none text-white placeholder-gray-600 font-mono mb-4"
                                autoFocus
                            />
                            {loginError && <p className="text-error text-sm font-mono mb-4">[ERROR] {loginError}</p>}
                            <button type="submit" className="w-full py-3 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-primary transition-all font-mono font-semibold">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-primary">
                <div className="text-accent font-mono animate-pulse">Loading data...</div>
            </div>
        );
    }

    const renderEditor = () => {
        switch (activeTab) {
            case 'hero': return <HeroEditor data={data.hero} onChange={(v) => updateData('hero', v)} />;
            case 'experiences': return <ExperienceEditor data={data.experiences} onChange={(v) => updateData('experiences', v)} />;
            case 'skills': return <SkillsEditor data={data.skills} onChange={(v) => updateData('skills', v)} />;
            case 'education': return <EducationEditor data={data.education} onChange={(v) => updateData('education', v)} />;
            case 'contact': return <ContactEditor data={data.contact} onChange={(v) => updateData('contact', v)} />;
            case 'projects': return <ProjectsEditor data={data.projects} onChange={(v) => updateData('projects', v)} />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-primary">
            {/* Toast */}
            {toast && (
                <div className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg border font-mono text-sm flex items-center gap-2 animate-slide-in ${toast.type === 'success' ? 'bg-accent/10 border-accent/30 text-accent' : 'bg-error/10 border-error/30 text-error'}`}>
                    {toast.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {toast.message}
                </div>
            )}

            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#111113]/90 backdrop-blur-lg border-b border-tertiary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-accent" />
                        <span className="font-mono text-white font-bold">admin<span className="text-accent">.</span>panel</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={handleSave} disabled={saving}
                            className="flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-primary transition-all font-mono text-sm font-semibold disabled:opacity-50">
                            <Save className="w-4 h-4" />
                            {saving ? 'Saving...' : 'Save & Push'}
                        </button>
                        <button onClick={handleLogout} className="p-2 text-gray-500 hover:text-error transition-colors" title="Logout">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                    {TABS.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-lg font-mono text-sm whitespace-nowrap transition-all border ${activeTab === tab.id ? 'bg-accent/10 text-accent border-accent/20' : 'text-gray-500 border-transparent hover:text-white hover:bg-white/5'}`}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Editor Area */}
                {renderEditor()}
            </div>
        </div>
    );
}
