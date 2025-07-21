import { LuGlobe, LuMail, LuInstagram, LuTwitter } from "react-icons/lu";
import { FaTelegramPlane } from "react-icons/fa";
import { IconType } from "react-icons";

export const socialMediaData: {
    id: number;
    link: string;
    icon: IconType;
    title: string;
}[] = [
    {
        id: 1,
        link: "",
        title: "Website",
        icon: LuGlobe
    },
    {
        id: 2,
        link: "",
        title: "Telegram",
        icon: FaTelegramPlane
    },
    {
        id: 3,
        link: "",
        title: "Instagram",
        icon: LuInstagram
    },
    {
        id: 4,
        link: "",
        title: "Twitter",
        icon: LuTwitter
    },
    {
        id: 5,
        link: "",
        title: "Email",
        icon: LuMail
    },
];

export const galleryItems = [
    {
        id: 1,
        img: "/img/1.jpg"
    },
    {
        id: 2,
        img: "/img/2.jpg"
    },
    {
        id: 3,
        img: "/img/3.jpg"
    },
    {
        id: 4,
        img: "/img/4.jpg"
    },
];