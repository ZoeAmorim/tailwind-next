import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from './components/Sidebar'

export const metadata: Metadata = {
  title: 'Tailwind Next',
  description: 'Tailwind Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
