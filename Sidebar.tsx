import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, Activity, Settings, RotateCcw, PieChart } from 'lucide-react';
import clsx from 'clsx';

export function Sidebar() {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: LayoutDashboard },
        { name: 'Leads', path: '/leads', icon: Users },
        { name: 'Appointments', path: '/appointments', icon: Calendar },
        { name: 'Patients', path: '/patients', icon: Activity },
        { name: 'Reactivation', path: '/reactivation', icon: RotateCcw },
        { name: 'Automations', path: '/automations', icon: Settings },
        { name: 'Reports', path: '/reports', icon: PieChart },
    ];

    return (
        <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0">
            <div className="p-6 flex items-center space-x-3 border-b border-gray-100">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">Patientli</span>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                clsx(
                                    'flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors font-medium text-sm',
                                    isActive
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                )
                            }
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex flex-shrink-0" />
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium text-gray-900 truncate">Dr. Sarah Smith</p>
                        <p className="text-xs text-gray-500 truncate">sarah@patientli.com</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
