import { Public_Sans, Marcellus, Marcellus_SC } from 'next/font/google';

export const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
});

// Display serif — headlines, via `font-secondary`
export const marcellus = Marcellus({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
});

// Small caps — eyebrows and the wordmark, via `font-tertiary`
export const marcellusSC = Marcellus_SC({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus-sc',
});
