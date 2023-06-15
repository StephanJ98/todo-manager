import Modal from './components/Modal/Modal'
import './globals.css'

export const metadata = {
  title: 'ToDo Manager',
  description: 'Your personal Kamban',
  icons: {
    icon: 'app/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5F6F8]'>
        {children}
        <Modal />
      </body>
    </html>
  )
}
