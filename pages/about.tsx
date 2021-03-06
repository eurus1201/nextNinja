import * as React from 'react';
import Head from 'next/head'

const About = () => {
    return (<>
        <Head>
            <title>Ninja List | About</title>
            <meta name="keywords" content="ninja" />
        </Head>
        <div>
            <h1>
                About
            </h1>
            <p>
                Part or all of this entry has been imported from the 1913 edition of Webster’s Dictionary, which is now free of copyright and hence in the public domain. The imported definitions may be significantly out of date, and any more recent senses may be completely missing.
            </p>
        </div>
    </>)
}

export default About