"use client";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

import { QrCode } from "@/components/icon/Qr";
import { Link } from "@/components/ui/Link";

import { SocialMedia } from "../social";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Check } from "@/components/icon/Check";

export function DialogOpen() {
    const [isCopy, setIsCopy] = useState<boolean>(false);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" size="icon" className="h-12 w-12">
                    <QrCode color="black" size={26} />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <div className="flex flex-col justify-center items-center gap-y-8">
                    <h1 className="text-2xl text-white font-semibold">
                        Share
                    </h1>
                    <div className="flex flex-col items-center justify-center gap-y-4">
                        <h5 className="text-base text-white text-opacity-85 font-normal">
                            Scan the QR code
                        </h5>
                        <img src="/img/qrcode.png" alt="qr code" className="h-44 w-44 object-fill object-center rounded-xl" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-4 w-full px-7">
                        <h5 className="text-base text-white text-opacity-85 font-normal">
                            Copy the link
                        </h5>
                        <Button variant="copy" asChild className={cn(
                            "cursor-pointer py-5",
                            isCopy ? "bg-green-500" : "bg-white hover:bg-white/90"
                        )} onClick={() => {
                            setIsCopy(true);
                            navigator.clipboard.writeText("https://www.tmod-gallery.ir/");
                            setTimeout(() => {
                                setIsCopy(false);
                            }, 2000);
                        }}>
                            <div className="flex flex-row justify-between items-center w-full">
                                <h1 className={cn(
                                    isCopy ? "text-white" : "text-gray-5"
                                )}>
                                    {
                                        isCopy ? "Link copied" : "Copy link"
                                    }
                                </h1>
                                {
                                    isCopy ? <Check color="white" /> : <Link color="black" />
                                }
                            </div>
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-4 w-full px-7">
                        <h5 className="text-base text-white text-opacity-85 font-normal">
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