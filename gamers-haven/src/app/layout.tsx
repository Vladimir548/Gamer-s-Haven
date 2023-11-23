import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import './globals.scss';
import QueryProviders from '@/providers/QueryProviders';
import Sidebar from '@/app/components/sidebar/Sidebar';
import Header from '@/app/components/header/Header';

const noto = Noto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GamersHaven',
  description: 'All information about games',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <QueryProviders>
          <div className="flex">
            <div className={''}>
              <Sidebar />
            </div>
            <main className={'relative w-full '}>
              <Header />
              <div className="px-2  ">{children}</div>
            </main>
          </div>
        </QueryProviders>
      </body>
    </html>
  );
}
