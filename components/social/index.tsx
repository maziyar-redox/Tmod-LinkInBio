"use client";

import { socialMediaData } from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function SocialMedia() {
    return (
        <>
            {socialMediaData.map((item) => (
                <Tooltip key={item.id}>
                    <TooltipTrigger asChild>
                        <Button asChild variant="secondary">
                            <Link href={item.link} className="p-2.5 rounded-md transition-all duration-300 hover:scale-110">
                                <item.icon />
                            </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        {item.title}
                    </TooltipContent>
                </Tooltip>
            ))}
        </>
    );
};