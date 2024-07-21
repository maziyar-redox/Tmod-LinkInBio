import { iconType } from "@/types/iconType";

export function RightArrow({
    size = 20,
    color = "white"
}: iconType) {
    return (
        <svg height={size} width={size} fill="none" strokeWidth="1.5" stroke={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    );
};