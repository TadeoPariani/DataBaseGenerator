import Head from 'next/head'
import Link from 'next/link';

export default function Page() {
    return(
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      <Head>
        <title>DBG</title>
        <meta name="description" content="What is Nesting in NextJS" />
        <link rel="icon" href="/LogoDB.png" />
      </Head>
      <main className="flex-grow text-center">
        <div className="mt-14 mb-4 border border-green p-4 m-10">
            <h1 className="text-4xl font-bold">Qué es Nesting o Anidamiento</h1>
            <p className="text-lg mt-4">
            En el contexto de Next.js, el anidamiento se refiere a la capacidad de cargar una ruta dentro de otra ruta. Para implementar el anidamiento en Next.js, se puede utilizar el componente Layout que engloba a las páginas donde se tiene el menú lateral. En _app.js, se puede utilizar el componente Layout para toda la aplicación o en cada pantalla que lo requiera.
            </p>
            <div className="flex justify-center space-x-4 p-4 mt-4">
                <Link href="/Nextjs/App-Route">
                    <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                        App Route
                    </button>
                </Link>
                <Link href="/Nextjs">
                    <button className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded">
                        Nextjs
                    </button>
                </Link>
            </div>
        </div>
      </main>
    </div>
    )
}
