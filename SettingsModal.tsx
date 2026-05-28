import { X, CheckCircle2 } from 'lucide-react';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-[var(--shadow-modal)] w-full max-w-md flex flex-col max-h-[90vh]">
                <div className="flex justify-between items-center p-6 border-b border-[#DADCE0]">
                    <h2 className="text-xl font-semibold text-[#202124]">Settings</h2>
                    <button
                        onClick={onClose}
                        className="text-[#5F6368] hover:text-[#202124] hover:bg-gray-100 rounded-full p-2 transition-colors -mr-2"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-[#202124] mb-1">Clinic Name</label>
                        <input type="text" className="material-input" defaultValue="Downtown Dental Care" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#202124] mb-1">Reply-to Email</label>
                        <input type="email" className="material-input" defaultValue="hello@downtowndental.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#202124] mb-1">Calendly Link</label>
                        <input type="url" className="material-input" defaultValue="https://calendly.com/downtowndental" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#202124] mb-1">Intake Form Link</label>
                        <input type="url" className="material-input" defaultValue="https://forms.patientli.com/dt-dental" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[#202124] mb-1">HubSpot API Token</label>
                        <input type="password" className="material-input" defaultValue="pat-na1-1234-5678-abcd" />
                    </div>

                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-[#DADCE0]">
                        <p className="text-sm font-medium text-[#202124] mb-2">System Status</p>
                        <div className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-[#188038]" />
                            <span className="text-[#188038] font-medium">n8n Connected</span>
                            <span className="text-[#5F6368] ml-auto">Last synced: Just now</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-[#DADCE0] bg-gray-50 rounded-b-xl flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 font-medium text-[#5F6368] hover:text-[#202124] hover:bg-gray-200 rounded-full transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="material-button"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
