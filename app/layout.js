import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ManageEngine',
  description: 'ManageEngine buy licence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={"overflow-x-hidden "+inter.className}>
        <AuthProvider>{children}</AuthProvider>
        </body>
    </html>
  )
}
