import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    return (
        <header className="w-full bg-highlight-cozy p-4 flex flex-row justify-between items-center shadow-md">
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold accent-cozy">Interludere</h1>
                <p className="text-sm secondary-cozy">
                    Play fun online games with friends
                </p>
            </div>
            <nav className="flex space-x-4">
                <Link
                    href="/games"
                    className="text-cozy hover:text-secondary-cozy transition"
                >
                    Games
                </Link>
                <Link
                    href="/leaderboard"
                    className="text-cozy hover:text-secondary-cozy transition"
                >
                    Leaderboard
                </Link>
                <Link
                    href="/login"
                    className="text-cozy hover:text-secondary-cozy transition"
                >
                    Login
                </Link>
                <ThemeToggle />
            </nav>
        </header>
    )
}

export default Header
