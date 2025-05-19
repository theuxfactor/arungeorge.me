"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'
import { useEffect } from 'react'
import Navbar from './nav/page'

// export const metadata = {
//   title: 'My Next.js + Bootstrap App',
//   description: 'Using Bootstrap natively in the App Router',
// }

export default function RootLayout({ children }) {

  useEffect(() =>{

    import("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <html lang="en">
      <head />
      <title>Arun George | AI Design</title>
      <body>

       <div className="container"> {children}</div>
      </body>
    </html>
  )
}
