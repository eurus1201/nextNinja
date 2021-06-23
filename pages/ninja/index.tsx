import styles from '../../styles/Ninja.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    return {
        props: {
            ninjas: data
        }
    }
}

export interface Props {
    data: any
    ninjas: INinjas[]
    id: string
}

export interface INinjas {
    id: string
    name:string
}

const Ninjas: React.SFC<Props> = ({ ninjas }) => {
    return (
        <div>
            <h1>
                All Ninjas
            </h1>
            {ninjas.map(ninja => (
                <Link  href={`/ninja/${ninja.id}`}  key={ninja.id}>
                    <a className={styles.sinfle}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </a>
                </Link>
            ))
            }
        </div>
    );
}

export default Ninjas;