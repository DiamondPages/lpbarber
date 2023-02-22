import styles from '@/components/Pages/Guarantee/Guarantee.module.sass'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import guarantee from '@/assets/images/guarantee.png'
import Button from '@/components/Button/Button'

const Guarantee = () => {


  return (
    <div className={styles.guarantee}>
        <Layout>
            <div className={styles.content}>

                <div>
                    <h2>7 Dias de garantia</h2>
                    <p>Caso não esteja satisfeito com o conteúdo do curso você poderá pedir a devolução de 100% do seu dinheiro dentro deste prazo, seu risco é zero.</p>
                    <Button>QUERO O ACESSO COM 7 DIAS DE GARANTIA</Button>
                </div>

                <Image src={guarantee} width={250} alt=''/>
                

            </div>
        </Layout>
    </div>
  )
}

export default Guarantee