import { Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 w-full">
            <div>
                <h1 className="text-xl font-semibold text-gray-800">Springfield Clinic</h1>
            </div>
            <div className="flex items-center space-x-4 pr-6">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <Link
                    to="/settings/clinic"
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <Settings className="w-5 h-5" />
                </Link>
            </div>
        </header>
    );
}
