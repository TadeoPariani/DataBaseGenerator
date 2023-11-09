import Head from 'next/head'
import Link from 'next/link';

export default function Page() {
    return(
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Head>
        <title>DBG</title>
        <meta name="description" content="What is NextJS" />
        <link rel="icon" href="/LogoDB.png" />
      </Head>
      <main className="flex-grow text-center">
        <div className="mt-14 mb-4 border border-green p-4 m-10">
            <h1 className="text-4xl font-bold">Qué es App Route</h1>
            <p className="text-lg mt-4">
            La App Router de Next.js es un nuevo paradigma para construir aplicaciones utilizando las últimas características de React. Si ya está familiarizado con Next.js, encontrará que la App Router es una evolución natural del enrutador basado en el sistema de archivos existente en el Pages Router. Para nuevas aplicaciones, recomendamos utilizar la App Router. Para aplicaciones existentes, se puede adoptar incrementalmente la App Router. También es posible utilizar ambos enrutadores en la misma aplicación
            </p>
            <div className="flex justify-center space-x-4 p-4 mt-4">
                <Link href="/Nextjs">
                    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                        Nextjs
                    </button>
                </Link>
                <Link href="/Nextjs/Nesting">
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
                        Nesting
                    </button>
                </Link>
            </div>
        </div>
      </main>
    </div>
    )
}
