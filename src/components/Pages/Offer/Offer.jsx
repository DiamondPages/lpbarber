import Image from 'next/image'
import React from 'react'
import styles from '@/components/Pages/Offer/Offer.module.sass'
import Layout from '@/components/Layout/Layout'
import check from '@/assets/svg/check.svg'
import whatsapp from '@/assets/svg/whatsapp.svg'
import payments from '@/assets/svg/payments.svg'
import Button from '@/components/Button/Button'

const Offer = () => {
  return (
    <div className={styles.offer}>
        <Layout>
            <div className={styles.content}>
                <h2>Quanto você precisará investir</h2>
                <p>Pra ter acesso ao curso que pode mudar sua vida e sua carreira você precisará pagar:</p>

                <div className={styles.price}>
                    <div>
                        <span>12x de</span>
                        <span><strong>R$00</strong>,99</span>
                        <span>ou <strong>R$00,99</strong> à vista</span>
                    </div>
                    <div>
                        <span><Image alt='' src={check}/>Suporte</span>
                        <span><Image alt='' src={check}/>Material didático</span>
                        <span><Image alt='' src={check}/>Mais de 50 aulas</span>
                        <span><Image alt='' src={check}/>Comunidade no Discord</span>
                    </div>

                    <Button>Quero o Acesso <Image src={whatsapp} alt=''/></Button>

                    <div className={styles.payments}>
                        <Image alt='' src={payments}/>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Offer