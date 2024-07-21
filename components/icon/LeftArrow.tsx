import { iconType } from "@/types/iconType";

export function LeftArrow({
    size = 24,
    color = "white"
}: iconType) {
    return (
        <svg height={size} width={size} fill="none" strokeWidth="1.5" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    );
};