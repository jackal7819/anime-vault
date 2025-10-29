import './globals.css';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';

const montserratAlternates = Montserrat_Alternates({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'Anime Vault',
	description: 'Your favorite anime, all in one place.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={montserratAlternates.className}>
			<body>
				<main className='max-w-7xl mx-auto bg-[#0F1117]'>
					<Hero />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
