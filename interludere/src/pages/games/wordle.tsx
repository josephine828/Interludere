import Head from 'next/head'

const Wordle = () => {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Wordle Puzzle | Interludere</title>
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8">Wordle Puzzle</h1>
                <p className="text-xl">Play Wordle Puzzle here.</p>
            </main>
        </div>
    )
}

export default Wordle
