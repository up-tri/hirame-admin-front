import type { NextPage } from 'next'
import { AppEditor } from '../components/organisms/AppEditor'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <AppEditor />
    </div>
  )
}

export default Home
