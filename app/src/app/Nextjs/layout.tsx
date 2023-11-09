
import { ReactNode } from 'react';
import Head from 'next/head'
import Menu from '../../components/Menu';
import Footer from '../../components/Footer'; 
import Link from 'next/link';
import '../globals.css'

export default function NextjsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
        <Head>
          <title>DBG</title>
          <meta name="description" content="What is NextJS" />
          <link rel="icon" href="/LogoDB.png" />
        </Head>
        <main className="flex-grow text-center">
          <Menu/>
          <div>{children}</div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </section>
  )
}