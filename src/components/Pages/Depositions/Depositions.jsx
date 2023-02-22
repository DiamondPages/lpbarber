
import React from 'react'
import styles from '@/components/Pages/Depositions/Depositions.module.sass'
import Layout from '../../Layout/Layout'
import SwiperJS from '@/components/Pages/Depositions/SwiperJS'

const Depositions = () => {


  return (
    <div className={styles.depositions}>
        <Layout>

            <div className={styles.content}>

                <h2>depoimentos</h2>

                <p>O que nossos alunos estão falando sobre o curso</p>

                <SwiperJS/>


            </div>

        </Layout>
    </div>
  )
}

export default Depositions