import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "ScaleFlow | AI & Digital Marketing",
  description: "Масштабируем бренды через AI и Digital Marketing. Full cycle: упаковка + платный трафик + органика.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
