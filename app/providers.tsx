'use client';
import { useMediaQuery } from 'react-responsive';
import { ParallaxProvider } from 'react-scroll-parallax';

export function Providers({ children }: { children: React.ReactNode }) {
	const userPrefersReducedMotion = useMediaQuery({
		query: "(prefers-reduced-motion)",
	});
	// const isMobile = useMediaQuery({ maxWidth: 767 });
  return <ParallaxProvider isDisabled={userPrefersReducedMotion}>{children}</ParallaxProvider>;
}