import './globals.css';

export const metadata = {
  title: 'Syed Hammad Ali | Software Engineer',
  description: 'Portfolio of Syed Hammad Ali - Associate Software Engineer skilled in React.js, Next.js, and modern web technologies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}