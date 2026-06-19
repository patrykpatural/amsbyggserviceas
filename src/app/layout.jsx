import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactModal from '@/components/ContactModal'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://amsbyggservice.pl'),
  title: {
    default: 'AMS BYGGSERVICE AS — Nowoczesne domy skandynawskie',
    template: '%s — AMS BYGGSERVICE AS',
  },
  description:
    'Nowoczesne domy norweskie, energooszczędne i gotowe w 3 miesiące. Skandynawski minimalizm, premium jakość i szybki montaż.',
  keywords: [
    'domy norweskie',
    'domy skandynawskie',
    'domy prefabrykowane',
    'domy energooszczędne',
    'budowa domu Polska',
    'AMS Byggservice',
  ],
  openGraph: {
    siteName: 'AMS BYGGSERVICE AS',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <ContactModal/>
      </body>
    </html>
  )
}