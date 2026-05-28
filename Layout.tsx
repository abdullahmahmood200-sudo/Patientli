import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Settings, HeartPulse, UserCircle } from 'lucide-react';
import SettingsModal from './SettingsModal';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { currentUser, signOut } = useAuth();

    return (
        <div className="min-h-screen flex flex-col bg-[#F0FAF5]">
            <header className="bg-white border-b border-[#DADCE0] sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2 text-[#1B8B5A]">
                            <HeartPulse className="w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tight">PatientLi</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSettingsOpen(true)}
                                className="p-2 text-[#5F6368] hover:text-[#1B8B5A] hover:bg-gray-100 rounded-full transition-colors"
                                aria-label="Settings"
                            >
                                <Settings className="w-6 h-6" />
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="rounded-full overflow-hidden border-2 border-transparent hover:border-[#1B8B5A] transition-colors focus:outline-none flex items-center justify-center p-0.5"
                                >
                                    {currentUser?.photoURL ? (
                                        <img src={currentUser.photoURL} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                                    ) : (
                                        <UserCircle className="w-8 h-8 text-[#5F6368]" />
                                    )}
                                </button>

                                {isProfileOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setIsProfileOpen(false)}
                                        />
                                        <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-[#DADCE0] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <div className="px-4 py-3 border-b border-[#DADCE0]">
                                                <p className="text-sm font-semibold text-[#202124] truncate">
                                                    {currentUser?.displayName || 'Logged in user'}
                                                </p>
                                                <p className="text-xs text-[#5F6368] truncate mt-0.5">
                                                    {currentUser?.email || ''}
                                                </p>
                                            </div>
                                            <div className="pt-2 px-2">
                                                <button
                                                    onClick={() => {
                                                        setIsProfileOpen(false);
                                                        signOut();
                                                    }}
                                                    className="w-full text-left px-3 py-2.5 text-sm font-medium text-[#D93025] hover:bg-red-50 rounded-lg transition-colors flex items-center"
                                                >
                                                    Sign out
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <nav className="flex space-x-8 mt-2 overflow-x-auto no-scrollbar bg-white">
                        {[
                            { path: '/speed-to-lead', label: 'Speed to Lead' },
                            { path: '/no-show-reduction', label: 'No-Show Reduction' },
                            { path: '/patient-reactivation', label: 'Patient Reactivation' },
                        ].map((tab) => (
                            <NavLink
                                key={tab.path}
                                to={tab.path}
                                className={({ isActive }) =>
                                    `pb-4 px-3 border-b-4 font-medium text-sm whitespace-nowrap transition-colors rounded-t-md ${isActive
                                        ? 'border-[#1B8B5A] text-[#1B8B5A] bg-[#E8F5EE]'
                                        : 'border-transparent text-[#5F6368] hover:text-[#202124] hover:bg-gray-50'
                                    }`
                                }
                            >
                                {tab.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </div>
    );
}
