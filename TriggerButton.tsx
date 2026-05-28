import { useState, ReactNode } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface TriggerButtonProps {
    label: string;
    icon?: ReactNode;
    successMessage: string;
    onTrigger: () => Promise<void>;
}

export default function TriggerButton({ label, icon, successMessage, onTrigger }: TriggerButtonProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [showToast, setShowToast] = useState(false);
    const [toastLeaving, setToastLeaving] = useState(false);

    const handleClick = async () => {
        if (status !== 'idle') return;

        setStatus('loading');

        try {
            await onTrigger();

            setStatus('success');
            setShowToast(true);
            setToastLeaving(false);

            // Toast hides after 4 seconds
            setTimeout(() => {
                setToastLeaving(true);
                setTimeout(() => setShowToast(false), 300); // 300ms fade out animation
            }, 4000);

            // Button resets after 3 seconds
            setTimeout(() => {
                setStatus('idle');
            }, 3000);

        } catch (e) {
            console.error(e);
            setStatus('idle');
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                disabled={status !== 'idle'}
                className={`material-button flex items-center justify-center gap-2 text-[15px] py-2.5 px-6 min-w-[200px] transition-all duration-300 ${status === 'loading' ? 'bg-[#1B8B5A]/80 cursor-not-allowed opacity-90' :
                        status === 'success' ? 'bg-[#1B8B5A] ring-2 ring-[#E8F5EE]' : ''
                    }`}
            >
                {status === 'idle' && (
                    <>
                        {icon}
                        {label}
                    </>
                )}

                {status === 'loading' && (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="font-medium animate-pulse">Running...</span>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="font-medium">Done!</span>
                    </>
                )}
            </button>

            {/* Toast Notification */}
            {showToast && (
                <div
                    className={`fixed top-4 right-4 z-50 flex items-center gap-3 bg-[#1B8B5A] text-white px-5 py-3.5 rounded-lg shadow-lg font-medium text-sm transition-all duration-300 ${toastLeaving ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0 animate-in slide-in-from-right-8'
                        }`}
                >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p>{successMessage}</p>
                </div>
            )}
        </>
    );
}
