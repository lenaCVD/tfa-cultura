import './globals.css'

export const metadata = {
  title: 'Internet en l\'era de la IA',
  description: 'Una aproximació crítica a la transformació d\'Internet en l\'era de la intel·ligència artificial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  )
}