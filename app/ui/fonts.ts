import { Public_Sans, Marcellus, Marcellus_SC, Montserrat } from 'next/font/google';

export const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-public-sans',
});

// Display serif for headlines, via `font-secondary`
export const marcellus = Marcellus({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
});

// Small caps for eyebrows and the wordmark, via `font-tertiary`
export const marcellusSC = Marcellus_SC({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus-sc',
});

// Geometric sans for the hero headline and header nav, via `font-display`.
// Variable weight, so 300 (nav) through 800 (headline) come from one file.
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
