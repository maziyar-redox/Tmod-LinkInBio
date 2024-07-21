import { iconType } from "@/types/iconType";

export function Check({
    size = 20,
    color
}: iconType) {
    return (
        <svg height={size} width={size} stroke={color} fill={color} strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M416 128 192 384l-96-96" />
        </svg>
    );
};