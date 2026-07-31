import './globals.css'
import type { Metadata } from 'next'
import { publicSans } from './ui/fonts';
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from '@/components/providers/toaster.provider';

export const metadata: Metadata = {
  title: {
    default: 'TNSES — The National Socio-Economic Support',
    template: '%s | TNSES',
  },
  description:
    'TNSES is a registered Cape Town nonprofit (NPO 240-957) offering applied digital skills training, funding and application support, and job readiness coaching.',
  openGraph: {
    title: 'TNSES — The National Socio-Economic Support',
    description:
      'Applied digital skills training, funding and application support, and job readiness coaching from a registered Cape Town nonprofit.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth scroll-pt-10 md:scroll-auto">
        <body className={`${publicSans.className} antialiased`}>
          <ToastProvider />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
