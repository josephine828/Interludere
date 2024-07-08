import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'

const Home = () => {
    return (
        <div className="container bg-cozy text-cozy mx-auto px-4">
            <Head>
                <title>Interludere</title>
                <meta
                    name="description"
                    content="Play fun online games with friends"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8 accent-cozy">
                    Welcome to Interludere
                </h1>
                <p className="text-xl secondary-cozy">
                    A place to play simple and fun games with friends.
                </p>
                <Link
                    href="/games"
                    className="mt-4 px-4 py-2 bg-highlight-cozy text-cozy rounded hover:bg-secondary-cozy transition"
                >
                    Go to Games
                </Link>
            </main>
        </div>
    )
}

export default Home
