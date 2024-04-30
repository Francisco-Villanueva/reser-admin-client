import './globals.css'
import { Inter , Montserrat} from 'next/font/google'
import Provider from './Provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Reset | Administration',
  description: 'Administration of reset salon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
