
import { ReactNode } from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer'; 
import '../globals.css'

export default function NextjsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
        <main className="flex-grow text-center">
          <Menu/>
          <div>{children}</div>
        </main>
        <Footer />
      </div>
    </section>
  )
}