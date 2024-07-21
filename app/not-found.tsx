import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center h-screen gap-y-5 text-center px-3">
            <h1 className="font-semibold text-white text-xl md:text-3xl">
                Oops! Page Not Found
            </h1>
            <p className="max-w-md text-sm md:text-base font-normal text-gray-4">
                It appears you&apos;ve reached a realm that doesn&apos;t exist in our digital universe. Fear not, fellow traveler! Let&apos;s navigate you back to familiar constellations.
            </p>
            <Button variant="default" size="default" asChild>
                <Link href="/">
                    Go to homepage
                </Link>
            </Button>
        </section>
    );
};