import Head from 'next/head'

const Jigsaw = () => {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Jigsaw Puzzle | Interludere</title>
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Jigsaw Puzzle</h1>
                <p className="text-xl">Play Jigsaw Puzzle here.</p>
            </main>
        </div>
    )
}

export default Jigsaw
