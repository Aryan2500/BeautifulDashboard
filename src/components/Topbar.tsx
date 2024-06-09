// TopBar.jsx
import { BellIcon, UserCircleIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect, useRef } from 'react';

const TopBar = ({ title }) => {
    const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    const notifications = [
        { id: 1, message: 'Notification 1' },
        { id: 2, message: 'Notification 2' },
        { id: 3, message: 'Notification 3' }
    ];

    const handleClickOutside = (event) => {
        console.log(dropdownRef.current)
        console.log(event.target)

        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setNotificationDropdownOpen(false);
            setUserDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="w-full p-4 bg-neutral-900 flex justify-between items-center">
            <h1 className="text-2xl text-neutral-200">{title}</h1>
            <div className="flex items-center space-x-4">
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                        className="focus:outline-none"
                    >
                        <BellIcon className="h-6 w-6 text-neutral-200" />
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-red-500 text-white text-xs rounded-full">
                            {notifications.length}
                        </span>
                    </button>
                    {notificationDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-64 bg-neutral-700 rounded-md shadow-lg py-1 z-20">
                            {notifications.map((notification) => (
                                <a
                                    key={notification.id}
                                    href="#"
                                    className="flex items-center px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-600"
                                >
                                    <BellIcon className="h-4 w-4 mr-2" />
                                    {notification.message}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                        className="focus:outline-none"
                    >
                        <UserCircleIcon className="h-6 w-6 text-neutral-200" />
                    </button>
                    {userDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-neutral-700 rounded-md shadow-lg py-1 z-20">
                            <a href="#" className="flex items-center px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-600">
                                <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
                                Login
                            </a>
                            <a href="#" className="flex items-center px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-600">
                                <ArrowLeftOnRectangleIcon className="h-4 w-4 mr-2" />
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
