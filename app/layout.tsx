import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Rubik({
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "T Mod Gallery",
    description: "T mod clothing shop",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "antialiased",
                    inter.className
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};