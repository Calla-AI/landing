import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import ThemeToggle from './theme/ThemeToggle'

const Header = () => {
    return (
    <header className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link href="/" className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">Calla</h1>
        </Link>
        <div className="flex items-center space-x-4">
            <Link href="https://github.com/calla-ai" passHref>
                    <GitHubLogoIcon className="h-6 w-6" />
            </Link>
            <ThemeToggle />
        </div>
      </nav>
    </header>
    )
}

export default Header
