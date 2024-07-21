import { Email } from "@/components/icon/Email";
import { Glob } from "@/components/icon/Glob";
import { Instagram } from "@/components/icon/Instagram";
import { Telegram } from "@/components/icon/Telegram";
import { Twitter } from "@/components/icon/Twitter";

export const socialMediaData: {
    id: number;
    link: string;
    icon: JSX.Element
}[] = [
    {
        id: 1,
        link: "",
        icon: Glob({ size: 25, color: "currentColor" })
    },
    {
        id: 2,
        link: "",
        icon: Telegram({ size: 25, color: "currentColor" })
    },
    {
        id: 3,
        link: "",
        icon: Instagram({ size: 25, color: "currentColor" })
    },
    {
        id: 4,
        link: "",
        icon: Twitter({ size: 25, color: "currentColor" })
    },
    {
        id: 5,
        link: "",
        icon: Email({ size: 25, color: "currentColor" })
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