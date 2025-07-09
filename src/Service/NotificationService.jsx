import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const successNotification = (title, message) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        position: 'top-center',
        icon: <IconCheck size={24} style={{ color: "#22c55e" }} />, // Green icon fix
        color: "teal",
        withBorder: true,
        classNames: {
            root: "bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] border border-red-500 shadow-lg text-black py-4 mb-2",
            title: "font-semibold text-lg",
            message: "text-sm"
        },
        radius: "md",
        autoClose: 4000, 
    });
};

const errorNotification = (title, message) => {
    notifications.show({
        title: title,
        message: message,
        withCloseButton: true,
        position: 'top-center',
        icon: <IconX size={24} style={{ color: "#ef4444" }} />, // Red icon fix
        color: "red",
        withBorder: true,
        classNames: {
            root: "bg-gradient-to-r from-[#A9A9D2] to-[#C4C4DE] border border-red-500 shadow-lg text-black py-4 mb-2",
            title: "font-semibold text-lg",
            message: "text-sm"
        },
        radius: "md",
        autoClose: 3000, 
    });
};

export { successNotification, errorNotification };
