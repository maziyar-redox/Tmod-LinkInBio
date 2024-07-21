import { Tick } from "@/components/icon/Tick";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

import { SocialMedia } from "./_components/social";
import { DialogOpen } from "./_components/dialog";
import { Gallery } from "./_components/gallery";

import Link from "next/link";
import { Chat } from "@/components/icon/Chat";
import { Button } from "@/components/ui/Button";

export default function Home() {
    return (
        <main className="grid grid-cols-7">
            <section className="col-start-1 md:col-start-3 col-span-full md:col-span-3 mt-4 md:mt-10 flex flex-col mx-4 md:mx-0 relative">
                <div className="absolute flex flex-row justify-between items-center top-5 inset-x-5">
                    <Badge className="rounded-full gap-x-1">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                        </span>
                        <h1 className="font-medium text-gray-5 text-sm">
                            Available
                        </h1>
                    </Badge>
                    <DialogOpen />
                </div>
                <img src="/img/bg.jpg" alt="bg" className="object-cover object-center h-64 w-full rounded-t-2xl" />
                <div className="bg-gray-2 w-full relative flex flex-col items-center justify-center pb-5 rounded-b-2xl">
                    <div className="absolute -top-12">
                        <Avatar className="h-28 w-28 ring-8 ring-gray-2">
                            <AvatarImage src="/img/profile.jpg" />
                            <AvatarFallback>
                                BT
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20">
                        <div className="flex flex-row items-center justify-center gap-x-1.5">
                            <h1 className="text-2xl text-white font-semibold">
                                T Mod Gallery
                            </h1>
                            <Tick color="#48bf40" size={22} />
                        </div>
                        <span className="text-gray-4 text-base font-medium">
                            @t__mod
                        </span>
                    </div>
                    <div className="mt-6 flex flex-row flex-wrap justify-center gap-x-3.5 gap-y-3.5 mx-5">
                        <SocialMedia />
                    </div>
                    <div className="text-center mt-6 max-w-sm">
                        <p className="text-gray-4 text-sm md:text-base font-medium px-4">
                            It&apos;s not about what we create. It&apos;s about why we create. It&apos;s not design by committee or focus group. It&apos;s about germinating these ideas that are done with a truly independent mentality.
                        </p>
                    </div>
                    <Gallery />
                    <div className="flex flex-col gap-y-6 justify-center items-center w-full px-6 mt-6">
                        <h1 className="text-left w-full text-xl">
                            Wanna have some talk?
                        </h1>
                        <div className="flex flex-row items-center justify-between w-full bg-gray-7 border border-white border-opacity-10 p-6 rounded-lg">
                            <div className="flex flex-row justify-center items-center gap-x-2">
                                <Chat color="white" />
                                <h1 className="text-base text-white">
                                    Let&apos;s talk
                                </h1>
                            </div>
                            <Button>
                                Contact
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-x-2 mt-10 mb-2">
                    <h1 className="text-gray-4">Made by</h1>
                    <Link href="/">
                        Maziyar Isanezhad
                    </Link>
                </div>
            </section>
        </main>
    );
};