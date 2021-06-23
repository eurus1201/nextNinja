

export interface INinja {
    id: string
    name: string
    email: string
}
export interface DetailsProps {
    ninja: INinja
    id: string
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: INinja[] = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {
                id: ninja.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context: any) => {

    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + id)
    const data: INinja = await res.json()

    return {
        props: {
            ninja: data
        }
    }

}


const Details: React.SFC<DetailsProps> = ({ ninja }) => {
    return (
        <div>
            <h1>
                {ninja.name}
            </h1>
            <p>
                {ninja.email}
            </p>
        </div>

    );
}

export default Details;