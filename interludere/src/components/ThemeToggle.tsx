import { useState, useEffect } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.body.classList.add(theme)
        return () => {
            document.body.classList.remove(theme)
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-highlight-light dark:bg-highlight-dark text-foreground-light dark:text-foreground-dark"
        >
            {theme === 'light' ? '🌞 Light Mode' : '🌜 Dark Mode'}
        </button>
    )
}

export default ThemeToggle
