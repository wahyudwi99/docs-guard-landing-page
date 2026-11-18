import './globals.css';
const origin = 'https://docsguard-watermark-privacy.wahyudwinugraha99.chatgpt.site';
export const metadata = {
  metadataBase: new URL(origin),
  title: 'DocsGuard — Watermark, Blur & PDF Protection for iPhone',
  description: 'Add custom watermarks, blur sensitive details, and password-protect PDFs with DocsGuard. Prepare your documents before sharing. Download on the App Store.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Meet DocsGuard. Your files. Your rules.', description: 'Watermark documents, blur sensitive details, and protect PDFs. A little extra care before you share.', locale: 'en_US', type: 'website', images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'DocsGuard — Your files. Your rules.' }] },
  twitter: { card: 'summary_large_image', images: ['/social-preview.png'] },
  appleWebApp: { title: 'DocsGuard' },
  icons: { icon: { url: '/favicon.png', type: 'image/png', sizes: '192x192' } },
  other: { 'apple-itunes-app': 'app-id=6774994672' }
};
export default function RootLayout({children}) { return <html lang="en"><body>{children}</body></html> }
