import React, { useEffect, useRef, useState } from 'react';
import {

    ChatBubbleLeftEllipsisIcon,
    BellIcon,
    ArrowsPointingOutIcon,
    Squares2X2Icon
} from '@heroicons/react/24/outline';

const Topbar2: React.FC = ({ title }) => {
    const [messagesOpen, setMessagesOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [overlayOpen, setOverlayOpen] = useState(false);

    const messagesRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                notificationsRef.current && !notificationsRef.current.contains(event.target as Node) &&
                messagesRef.current && !messagesRef.current.contains(event.target as Node)
            ) {
                setNotificationsOpen(false);
                setMessagesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen().catch((err) => {
                console.error(`Error attempting to exit fullscreen mode: ${err.message} (${err.name})`);
            });
        }
    };

    return (
        <nav className="w-full   bg-neutral-900  px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
                <h4 className="text-gray-100 hover:cursor-pointer px-2">{title}</h4>
            </div>

            <div className="flex items-center space-x-4">


                <div className="relative" ref={messagesRef}>
                    <button
                        onClick={() => setMessagesOpen(!messagesOpen)}
                        className="relative text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    {messagesOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-md">
                            <div className="p-4">
                                <div className="flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full mr-3" />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold">
                                            Brad Diesel
                                            <span className="float-right text-xs text-red-500"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-xs text-gray-600">Call me whenever you can...</p>
                                        <p className="text-xs text-gray-500"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full mr-3" />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold">
                                            John Pierce
                                            <span className="float-right text-xs text-gray-500"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-xs text-gray-600">I got your message bro</p>
                                        <p className="text-xs text-gray-500"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="flex items-center">
                                    <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full mr-3" />
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold">
                                            Nora Silvester
                                            <span className="float-right text-xs text-yellow-500"><i className="fas fa-star"></i></span>
                                        </h3>
                                        <p className="text-xs text-gray-600">The subject goes here</p>
                                        <p className="text-xs text-gray-500"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 my-2"></div>
                                <a href="#" className="text-sm text-gray-700 hover:text-gray-900">See All Messages</a>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative" ref={notificationsRef}>
                    <button
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                        className="relative text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-yellow-500 rounded-full"></span>
                    </button>
                    {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 shadow-md">
                            <div className="p-4">
                                <span className="text-sm font-semibold">15 Notifications</span>
                                <div className="border-t border-gray-200 my-2"></div>
                                <a href="#" className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                                    <span className="ml-auto text-xs text-gray-500">3 mins</span>
                                </a>
                                <div className="border-t border-gray-200 my-2"></div>
                                <a href="#" className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                                    <i className="fas fa-users mr-2"></i> 8 friend requests
                                    <span className="ml-auto text-xs text-gray-500">12 hours</span>
                                </a>
                                <div className="border-t border-gray-200 my-2"></div>
                                <a href="#" className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                                    <i className="fas fa-file mr-2"></i> 3 new reports
                                    <span className="ml-auto text-xs text-gray-500">2 days</span>
                                </a>
                                <div className="border-t border-gray-200 my-2"></div>
                                <a href="#" className="text-sm text-gray-700 hover:text-gray-900">See All Notifications</a>
                            </div>
                        </div>
                    )}
                </div>

                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={toggleFullscreen}>
                    <ArrowsPointingOutIcon className="h-6 w-6" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
                    <Squares2X2Icon className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
};

export default Topbar2;
