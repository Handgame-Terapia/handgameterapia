import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ClerkProvider, auth } from '@clerk/nextjs'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import NavbarLoged from '@/components/navbarLoged'
import { ThemeProvider } from '@/components/theme-provider'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Handgame Terapia',
  description: 'Um site desenvolvido pelo grupo Handgame Terapia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <ToasterProvider/>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <ModalProvider/>
            {!userId ? 
            (
              <Navbar/>
              ) : (
                <NavbarLoged/>
                )}
              {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
