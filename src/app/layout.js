import './globals.sass'
import noise from '../assets/noise.png'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head />
        <body style={{backgroundImage: `url(${noise.src})`}}>
        {children}
        </body>
    </html>
  )
}
