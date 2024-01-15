import './ui/global.css';
import { roboto } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}


        <footer className='py-4 hover:py-8 ease-in-out duration-300 flex justify-center items-center bg-black text-white'>
          Hecho con mucho amor por Vercel Team
        </footer>
      </body>
    </html>
  );
}
