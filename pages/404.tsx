import Link from 'next/link'

export interface NotFoundProps {

}

const NotFound: React.SFC<NotFoundProps> = () => {
    return (
        <div className="not-found">
            <h1>Oooooooops...</h1>
            <h2>
                That page cannot be found.
            </h2>
            <p>
                Go back to the
                <Link href='/'>
                    <a>
                        Home Page
                    </a>
                </Link>
            </p>
        </div>
        );
}

export default NotFound;