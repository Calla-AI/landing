import Link from 'next/link'
import CallaIcon from './icons/CallaIcon'
import type { PropsWithChildren } from 'react'

const Header = ({ children }: PropsWithChildren) => {
    return (
        <header className="w-full flex flex-col fixed bg-primary-foreground z-40 opacity-97">
            <nav className="flex items-center justify-between p-4 w-full">
                <Link href="/" className="flex items-center space-x-1">
                    <CallaIcon width={40} />

                    <h1 className="text-2xl font-semibold">Calla</h1>
                </Link>
                <div className="flex items-center space-x-4">{children}</div>
            </nav>
        </header>
    )
}

export default Header
