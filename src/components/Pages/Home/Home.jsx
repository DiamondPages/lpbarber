import React from 'react'
import Layout from '../../Layout/Layout'
import styles from '@/components/Pages/Home/Home.module.sass'
import Button from '@/components/Button/Button'

const Home = () => {

  return (
    <div 
    className={styles.home}>
        <Layout>

            <div className={styles.logo}>
                <span>LOGO</span>
            </div>

            <div className={styles.disclaimer}>
                <h1>Alcance a <span>estabilidade financeira</span> e se torne um <span>barbeiro de sucesso</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque quasi dolor officiis ab. Neque veniam cum placeat! Tempora assumenda, perferendis dolor </p>
                <Button>Quero me tornar um barbeiro de sucesso</Button>
            </div>


        </Layout>

    </div>

  )
}

export default Home