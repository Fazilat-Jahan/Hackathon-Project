import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from "@/app/Contexts/CartContext"
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import  WishlistProvider  from "@/app/Contexts/WishlistContext"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clothing E-Store',
  description: 'Your one-stop shop for all your needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Toaster />
            <Footer/>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  )
}

