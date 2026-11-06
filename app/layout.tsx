import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', weight: ['600', '700'] });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL('https://dynamedia.mx'),
  title: 'Dynamedia | Diseño web, software y marketing digital en Monterrey',
  description: 'Sitios web, software a la medida, posicionamiento en Google y redes sociales para empresas en Monterrey y todo México.',
  openGraph: { title: 'Dynamedia', description: 'Diseño web, software y marketing digital en Monterrey.', locale: 'es_MX', type: 'website' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${sora.variable} ${manrope.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
