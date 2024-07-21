import { socialMediaData } from "@/data";
import Link from "next/link";

export function SocialMedia() {
    return (
        <>
            {socialMediaData.map((item) => (
                <Link href={item.link} className="bg-gray-3 p-2.5 text-gray-6 rounded-md transition-all duration-300 hover:scale-110 hover:text-white" key={item.id}>
                    {item.icon}
                </Link>
            ))}
        </>
    );
};