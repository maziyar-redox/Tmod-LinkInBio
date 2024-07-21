import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
		<html lang="en" dir="ltr" suppressHydrationWarning>
			<body className={inter.className}>
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