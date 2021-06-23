import Link from 'next/link'
import Image from 'next/image'

export interface NavbarProps {

}

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav>
            <div className='logo'>
                <Image src='/faq.png' width={128} height={77} />
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