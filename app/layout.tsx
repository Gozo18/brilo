import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

const monserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brilo",
  description: "Brilo test page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={monserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
