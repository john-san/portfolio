import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import StickyHeader from "./components/StickyHeader";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `John Nguyen - Software Engineer, Web Developer, and Problem Solver`, 
  description: `John Nguyen is a Software Engineer with a passion for web development and problem solving. Check out his portfolio and contact him today!`,
	icons: [
		{ 
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon-32x32.png',
		},
		{ 
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon/favicon.ico',
		},
		{
			rel: 'apple-touch-icon',
			type: 'image/png',
			sizes: '180x180',
			url: '/favicon/apple-touch-icon.png',
		},
		{
			rel: 'android-chrome',
			type: 'image/png',
			sizes: '192x192',
			url: '/favicon/android-chrome-192x192.png',
		},
		{
			rel: 'android-chrome',
			type: 'image/png',
			sizes: '512x512',
			url: '/favicon/android-chrome-512x512.png',
		}
	]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<body className={inter.className}>
				<StickyHeader />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}
