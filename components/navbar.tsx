import Link from 'next/link'


export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav>
            <div className='logo'>
                <h1>
                    Ninja List
                </h1>
            </div>
            <Link href='/'>
                <a>
                    Home
                </a>
            </Link>
            <Link href='/about'>
                <a>
                    About
                </a>
            </Link>
            <Link href='/ninja'>
                <a>
                    Ninja Listing
                </a>
            </Link>
        </nav>
    );
}

export default Navbar;