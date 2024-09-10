import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local';
import "./globals.css";

const pixelated = localFont({
  src: [
    {
      path: '../public/pixelated.ttf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const metadata = {
  title: "Séraphin Perrot",
  description: "Hi! I'm Séraphin Perrot a French Developer, this is my website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixelated.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
