import { useState } from 'react';
import { SendHorizontal } from 'lucide-react';
import TriggerButton from '../components/TriggerButton';

const mockAppts = [
    { id: 1, name: 'Alice Walker', time: '09:00 AM', status: 'Confirmed', statusType: 'confirmed' },
    { id: 2, name: 'Bob Harris', time: '10:30 AM', status: '24hr Sent', statusType: 'reminder' },
    { id: 3, name: 'Charlie Day', time: '01:00 PM', status: 'No Show', statusType: 'noshow' },
    { id: 4, name: 'Diana King', time: '02:45 PM', status: 'Confirmed', statusType: 'confirmed' },
    { id: 5, name: 'Evan Peters', time: '04:00 PM', status: '48hr Sent', statusType: 'reminder' },
];

export default function NoShowReduction() {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleTrigger = async () => {
        setIsProcessing(true);
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setIsProcessing(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75">

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
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1B8B5A] opacity-50"></span>
                            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#1B8B5A]"></span>
                        </span>
                        <h2 className="text-xl font-semibold text-[#202124]">Automation Active</h2>
                    </div>
                    <p className="text-[#5F6368] text-sm md:text-base">Smart reminders are currently running.</p>
                </div>
                <div className="bg-[#F0FAF5] p-4 rounded-lg border border-[#E8F5EE] max-w-xs w-full sm:w-auto">
                    <p className="text-[#5F6368] text-sm mb-1 font-medium">Next Reminder</p>
                    <p className="text-[#202124] font-semibold">Alice Walker • 09:00 AM</p>
                </div>
            </div>

            {/* Button placed upwards */}
            <div className="flex justify-start pt-2 pb-2">
                <TriggerButton
                    label="Send Manual Reminder"
                    icon={<SendHorizontal className="w-4 h-4" />}
                    successMessage="Reminders sent to all upcoming patients"
                    onTrigger={handleTrigger}
                />
            </div>

            {/* List Card */}
            <div className="material-card overflow-hidden">
                <div className="p-6 border-b border-[#DADCE0] bg-white">
                    <h3 className="text-lg font-semibold text-[#202124]">Today's Appointments</h3>
                    <p className="text-sm text-[#5F6368]">Reminder status for the current schedule.</p>
                </div>
                <div className="divide-y divide-[#DADCE0]">
                    {mockAppts.map((appt) => (
                        <div key={appt.id} className="p-4 sm:px-6 sm:py-5 flex items-center justify-between hover:bg-[#E8F5EE] transition-colors bg-white">
                            <div>
                                <p className="font-medium text-[#202124]">{appt.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-sm font-medium text-[#5F6368]">{appt.time}</span>
                                </div>
                            </div>
                            <div>
                                <span className={`px-3 py-1.5 rounded-full text-xs font-semibold w-28 text-center inline-block ${appt.statusType === 'confirmed' ? 'bg-[#E8F5EE] text-[#1B8B5A] border border-[#1B8B5A]/20' :
                                        appt.statusType === 'reminder' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                            'bg-red-50 text-red-700 border border-red-200'
                                    }`}>
                                    {appt.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
