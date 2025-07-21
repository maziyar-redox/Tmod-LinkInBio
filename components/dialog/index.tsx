"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogOverlay,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { LuQrCode, LuCheck, LuLink } from "react-icons/lu";

import { SocialMedia } from "@/components/social/index";

import { useState } from "react";
import Image from "next/image";

export function DialogOpen() {
    const [isCopy, setIsCopy] = useState<boolean>(false);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-background" variant="default" size="icon">
                    <LuQrCode size={26} />
                </Button>
            </DialogTrigger>
            <DialogOverlay className="backdrop-blur-sm" />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-2xl">
                        Share
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col justify-center items-center gap-y-8">
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <h5 className="text-base text-muted-foreground font-normal">
                            Scan the QR code
                        </h5>
                        <Image
                            src="/img/qrcode.png"
                            alt="qr code"
                            width={176}
                            height={176}
                            className="object-fill object-center rounded-xl" 
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-4 w-full px-7">
                        <h5 className="text-base text-secondary-foreground font-normal">
                            Copy the link
                        </h5>
                        <Button asChild className={cn(
                            "shadow ease-in-out duration-300",
                            "cursor-pointer py-5",
                            isCopy && "bg-green-500 hover:bg-green-500 hover:opacity-80"
                        )} onClick={() => {
                            setIsCopy(true);
                            navigator.clipboard.writeText("https://www.tmod-gallery.ir/");
                            setTimeout(() => {
                                setIsCopy(false);
                            }, 2000);
                        }}>
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className={cn(
                                    isCopy && "text-secondary-foreground"
                                )}>
                                    {
                                        isCopy ? "Link copied" : "Copy link"
                                    }
                                </h1>
                                {
                                    isCopy ? <LuCheck color="white" /> : <LuLink color="black" />
                                }
                            </div>
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-4 w-full px-7">
                        <h5 className="text-base text-muted-foreground font-normal">
                            Share on social
                        </h5>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-3">
                            <SocialMedia />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};