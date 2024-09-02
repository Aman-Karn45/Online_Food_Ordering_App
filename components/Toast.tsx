import { ToastProps } from "@/interfaces/toast";
import { useEffect, useState } from "react";



const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    const toastClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <div className={`fixed bottom-6 right-4 max-w-xs w-full p-4 rounded-md shadow-lg text-white ${toastClasses[type]} transition-opacity duration-300`}>
            {message}
        </div>
    );
};

export default Toast;
