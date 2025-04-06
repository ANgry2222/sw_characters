import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Star Wars Characters",
	description: "Interface for swapi.dev characters data",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={karla.className}>
			<head />
			<body>{children}</body>
		</html>
	);
}
