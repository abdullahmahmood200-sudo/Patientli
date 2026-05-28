import { useState } from 'react';
import { Play } from 'lucide-react';
import TriggerButton from '../components/TriggerButton';

const mockLeads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', time: '10 mins ago', status: 'New' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', time: '1 hour ago', status: 'Booked' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', time: '3 hours ago', status: 'Booked' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', time: '5 hours ago', status: 'New' },
    { id: 5, name: 'Chris Wilson', email: 'chris@example.com', time: '1 day ago', status: 'Booked' },
];

export default function SpeedToLead() {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleTrigger = async () => {
        setIsProcessing(true);
        // Simulate n8n webhook delay
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setIsProcessing(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Status Card */}
            <div className={`material-card status-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${isProcessing ? 'animate-border-pulse' : ''
                }`}>
                {isProcessing && (
                    <div className="absolute top-0 left-0 w-full h-1 overflow-hidden bg-[#E8F5EE]">
                        <div className="w-full h-full bg-[#1B8B5A] animate-progress-loop"></div>
                    </div>
                )}
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="relative flex h-3.5 w-3.5">
                            <span className={`absolute inline-flex h-full w-full rounded-full bg-[#1B8B5A] opacity-50 ${isProcessing ? 'animate-ping' : 'animate-ping'}`}></span>
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#1B8B5A]"></span>
                        </span>
                        <h2 className="text-xl font-semibold text-[#202124]">Automation Active</h2>
                    </div>
                    <p className="text-[#5F6368] text-sm md:text-base">Speed to Lead sequences are running normally.</p>
                </div>
                <div className="flex gap-8 text-sm bg-[#F0FAF5] p-4 rounded-lg border border-[#E8F5EE]">
                    <div>
                        <p className="text-[#5F6368] mb-1">Last triggered</p>
                        <p className="font-semibold text-[#202124] text-lg">10 min ago</p>
                    </div>
                    <div>
                        <p className="text-[#5F6368] mb-1">Total leads</p>
                        <p className="font-semibold text-[#202124] text-lg">1,248</p>
                    </div>
                </div>
            </div>

            {/* Button placed upwards */}
            <div className="flex justify-start pt-2 pb-2">
                <TriggerButton
                    label="Trigger Manually"
                    icon={<Play className="w-4 h-4 fill-current" />}
                    successMessage="Workflow triggered — follow-up emails are sending"
                    onTrigger={handleTrigger}
                />
            </div>

            {/* List Card */}
            <div className="material-card overflow-hidden">
                <div className="p-6 border-b border-[#DADCE0] bg-white">
                    <h3 className="text-lg font-semibold text-[#202124]">Recent Leads</h3>
                    <p className="text-sm text-[#5F6368]">The latest 5 leads captured by the system.</p>
                </div>
                <div className="divide-y divide-[#DADCE0]">
                    {mockLeads.map((lead) => (
                        <div key={lead.id} className="p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-[#E8F5EE] transition-colors bg-white">
                            <div>
                                <p className="font-medium text-[#202124] flex items-center gap-2">
                                    {lead.name}
                                </p>
                                <p className="text-sm text-[#5F6368] mt-0.5">{lead.email}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-[#5F6368] hidden sm:inline-block w-24 text-right">
                                    {lead.time}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold w-20 text-center ${lead.status === 'New'
                                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                        : 'bg-[#E8F5EE] text-[#1B8B5A] border border-[#1B8B5A]/20'
                                    }`}>
                                    {lead.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
