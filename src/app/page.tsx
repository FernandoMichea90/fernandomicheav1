import Image from 'next/image'
import styles from './page.module.css'
import HeaderApp from "../layouts/main/HeaderApp"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderApp></HeaderApp>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        
      </div>


    </main>
  )
}
