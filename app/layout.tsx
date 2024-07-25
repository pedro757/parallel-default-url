export default function RootLayout({ children, mymodal }) {
  return (
    <html>
      <head />
      <body>
        {mymodal}
        {children}
      </body>
    </html>
  );
}
