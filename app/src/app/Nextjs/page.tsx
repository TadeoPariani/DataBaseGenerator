import Head from 'next/head'
import Link from 'next/link';
import '../globals.css'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Head>
        <title>DBG</title>
        <meta name="description" content="What is NextJS" />
        <link rel="icon" href="/LogoDB.png" />
      </Head>
      <main className="flex-grow text-center">
        <div className="mt-14 mb-4 border border-green p-4 m-10">
            <h1 className="text-4xl font-bold">Qué es Next.js</h1>
            <p className="text-lg mt-4">
                Next.js es un marco de trabajo de React que facilita la creación de aplicaciones web modernas y eficientes con React. Ofrece características como el rendimiento optimizado, un enrutamiento y anidamiento de paginas muy sencillo y la renderización del lado del servidor.
            </p>
            <div className="flex justify-center space-x-4 p-4 m-4">
                <Link href="Nextjs/App-Route">
                    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                        App Route
                    </button>
                </Link>
                <Link href="Nextjs/Nesting">
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
                        Nesting
                    </button>
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
