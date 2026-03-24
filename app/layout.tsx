import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n/context'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Luis Monzón — CS / Physics / Math / Theology',
  description: 'Exploring the intersection between code, matter, and spirit. Personal portfolio of Luis Monzón.',
  generator: 'luismonz.com',
  metadataBase: new URL('https://luismonz.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Luis Monzón — CS / Physics / Math / Theology',
    description: 'Exploring the intersection between code, matter, and spirit. Personal portfolio of Luis Monzón.',
    url: 'https://luismonz.com',
    siteName: 'Luis Monzón',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Luis Monzón Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Luis Monzón — CS / Physics / Math / Theology',
    description: 'Exploring the intersection between code, matter, and spirit. Personal portfolio of Luis Monzón.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
