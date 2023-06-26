import '/styles/globals.css'


export const metadata = {
  title: 'Ezediniru Daniel',
  description: 'Ezediniru Daniel || @amdanielbrytre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
