import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>
        Home Page
      </h1>
      <p>
      Part or all of this entry has been imported from the 1913 edition of Webster’s Dictionary, which is now free of copyright and hence in the public domain. The imported definitions may be significantly out of date, and any more recent senses may be completely missing.
      </p>
      <p>
      Part or all of this entry has been imported from the 1913 edition of Webster’s Dictionary, which is now free of copyright and hence in the public domain. The imported definitions may be significantly out of date, and any more recent senses may be completely missing.
      </p>
      <Link href='/ninja'>
        <a>
          see ninja listing
        </a>
      </Link>
      <Footer/>
    </div>
  )
}
