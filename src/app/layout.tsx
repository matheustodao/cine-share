import { Inter } from 'next/font/google';
import { MainLayout } from 'presentation/layouts/Main';

const inter = Inter({ subsets: ['latin'], variable: '--title-font' });

export const metadata = {
  title: 'Cine Share',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
