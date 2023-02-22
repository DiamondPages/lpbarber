import Image from 'next/image'
import React from 'react'
import Layout from '../../Layout/Layout'
import eyeclose from '@/assets/svg/eyeclose.svg'
import unlike from '@/assets/svg/unlike.svg'
import noidea from '@/assets/svg/noidea.svg'
import styles from '@/components/Pages/Problems/Problems.module.sass'


const Problems = () => {
  return (
    <div className={styles.problems}>
        <Layout>

            <div className={styles.content}>
                <h2>Caro Barbeiro</h2>

                <p>Se você está lutando para alcançar o <span>sucesso</span> na sua profissão, você não está sozinho. Muitos profissionais da área enfrentam dificuldades para atrair e reter clientes, resultando em baixa rentabilidade e insatisfação com o trabalho, as principais razões disso são:</p>
            
                <div className={styles.wrapper}>
                    <div>
                        <Image src={eyeclose} alt=''/>
                        <span>Falta de visibilidade</span>
                        <p>Muitos barbeiros enfrentam a dor de não conseguir atrair clientes suficientes para seu estabelecimento. Eles podem estar localizados em uma área pouco movimentada ou não estar sendo encontrados pelos clientes em meios online, como pesquisas de busca ou redes sociais.</p>
                    </div>
                    <div>
                        <Image src={unlike} alt=''/>
                        <span>Baixa qualidade dos serviços</span>
                        <p>Outro fator comum é oferecer serviços de baixa qualidade, resultando em insatisfação dos clientes e falta de recomendações. Isto pode ser causado por falta de treinamento técnico ou falta de atenção aos detalhes durante a execução dos serviços.</p>
                    </div>
                    <div>
                        <Image src={noidea} alt=''/>
                        <span>Falta de inovação</span>
                        <p>Muitos barbeiros não conseguem se destacar da concorrência por não inovarem em seus serviços e experiências de atendimento. Isso pode resultar em falta de diferenciação e atratividade para os clientes.</p>
                    </div>
                </div>

                <p>Se você se identificou e deseja a tão sonhada <span>estabilidade financeira</span>, 
                saiba que o curso <span>Barbeiro de Sucesso</span> foi criado especialmente pra você!</p>
            </div>

        </Layout>

    </div>

  )
}

export default Problems