import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// This is needed for the opengraph and twitter images to work properly.
export const metadata = {
  metadataBase: new URL(`${process.env.PROTOCOL}://${process.env.DOMAIN}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
