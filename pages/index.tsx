import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        Home Page
      </h1>
      <p className={styles.text}>
        Part or all of this entry has been imported from the 1913 edition of Webster’s Dictionary, which is now free of copyright and hence in the public domain. The imported definitions may be significantly out of date, and any more recent senses may be completely missing.
      </p>
      <p className={styles.text}>
        Part or all of this entry has been imported from the 1913 edition of Webster’s Dictionary, which is now free of copyright and hence in the public domain. The imported definitions may be significantly out of date, and any more recent senses may be completely missing.
      </p>
      <Link href='/ninja'>
        <a className={styles.btn}>
          see ninja listing
        </a>
      </Link>
    </div>
  )
}
