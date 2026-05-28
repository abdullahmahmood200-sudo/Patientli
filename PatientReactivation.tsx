import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import TriggerButton from '../components/TriggerButton';

const mockPatients = [
    { id: 1, name: 'George Miller', daysInactive: 190, step: 'Day 8 (Offer)', progress: 100 },
    { id: 2, name: 'Fiona Gallagher', daysInactive: 215, step: 'Day 4 (Check-in)', progress: 50 },
    { id: 3, name: 'Henry Ford', daysInactive: 185, step: 'Day 1 (We Miss You)', progress: 12.5 },
    { id: 4, name: 'Isabella Swan', daysInactive: 320, step: 'Day 8 (Offer)', progress: 100 },
    { id: 5, name: 'Jack Reacher', daysInactive: 200, step: 'Day 4 (Check-in)', progress: 50 },
];

export default function PatientReactivation() {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleTrigger = async () => {
        setIsProcessing(true);
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setIsProcessing(false);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">

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
                    <p className="text-[#5F6368] text-sm md:text-base">Reactivation campaigns are running.</p>
                </div>
                <div className="flex gap-8 text-sm bg-[#F0FAF5] p-4 rounded-lg border border-[#E8F5EE]">
                    <div>
                        <p className="text-[#5F6368] mb-1">Next Run</p>
                        <p className="font-semibold text-[#202124] text-lg">Mon 9:00 AM</p>
                    </div>
                    <div>
                        <p className="text-[#5F6368] mb-1">Inactive Patients</p>
                        <p className="font-semibold text-[#202124] text-lg">342</p>
                    </div>
                </div>
            </div>

            {/* Button placed upwards */}
            <div className="flex justify-start pt-2 pb-2">
                <TriggerButton
                    label="Run Now"
                    icon={<RotateCcw className="w-4 h-4" />}
                    successMessage="Reactivation sequence started for inactive patients"
                    onTrigger={handleTrigger}
                />
            </div>

            {/* List Card */}
            <div className="material-card overflow-hidden">
                <div className="p-6 border-b border-[#DADCE0] bg-white">
                    <h3 className="text-lg font-semibold text-[#202124]">Currently in Sequence</h3>
                    <p className="text-sm text-[#5F6368]">Patients receiving reactivation emails this week.</p>
                </div>
                <div className="divide-y divide-[#DADCE0]">
                    {mockPatients.map((patient) => (
                        <div key={patient.id} className="p-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#E8F5EE] transition-colors bg-white">
                            <div className="flex-1 min-w-0">
                                <p className="font-medium text-[#202124]">{patient.name}</p>
                                <p className="text-sm text-[#5F6368] mt-0.5">{patient.daysInactive} days inactive</p>
                            </div>
                            <div className="flex-1 max-w-[200px] sm:max-w-[250px] w-full">
                                <div className="flex items-center justify-between text-xs mb-1.5">
                                    <span className="font-medium text-[#202124]">{patient.step}</span>
                                    <span className="text-[#5F6368]">{patient.progress}%</span>
                                </div>
                                <div className="w-full bg-[#E8F5EE] rounded-full h-2 overflow-hidden">
                                    <div
                                        className="bg-[#1B8B5A] h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${patient.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
