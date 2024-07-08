import Head from 'next/head'
import Link from 'next/link'

const Games = () => {
    return (
        <div className="container bg-cozy text-cozy mx-auto px-4">
            <Head>
                <title>Games | Interludere</title>
            </Head>

            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8 accent-cozy">Games</h1>
                <ul className="space-y-4">
                    <li>
                        <Link href="/games/jigsaw" className="highlight-cozy">
                            Jigsaw Puzzles
                        </Link>
                    </li>
                    <li>
                        <Link href="/games/wordle" className="highlight-cozy">
                            Wordle
                        </Link>
                    </li>
                    <li>
                        <Link href="/games/tetris" className="highlight-cozy">
                            Tetris
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/games/crosswords"
                            className="highlight-cozy"
                        >
                            Crosswords
                        </Link>
                    </li>
                    <li>
                        <Link href="/games/suika" className="highlight-cozy">
                            Suika
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default Games
