import React from 'react'
import Layout from '../../Layout/Layout'
import styles from '@/components/Pages/Solution/Solution.module.sass'
import Image from 'next/image'
import module1 from '@/assets/images/1.jpg'
import module2 from '@/assets/images/2.jpg'
import module3 from '@/assets/images/3.jpg'
import module4 from '@/assets/images/4.jpg'
import Button from '@/components/Button/Button'

const Solution = () => {
  return (
    <div className={styles.solution}>
        <Layout>

            <div className={styles.content}>
                <div className={styles.explanation}>
                    
                    <h2>O que é o curso <span>Barbeiro de Sucesso?</span></h2>

                    <div className={styles.paragraphs}>
                        <p>
                            Barbeiro de Sucesso é um curso online onde você aprenderá a criar cortes modernos e estilos personalizados, e ficar por dentro das tendências mais recentes da indústria. E o melhor de tudo, você poderá estudar no seu próprio ritmo, de acordo com sua disponibilidade.                       
                        </p>

                        <p>
                            Nossos professores são especialistas na área, com anos de experiência e conhecimento técnico para compartilhar. Eles irão guiá-lo passo a passo, ensinando técnicas avançadas e fornecendo dicas valiosas para alavancar sua carreira. Além disso, você terá acesso a materiais didáticos exclusivos, como vídeos aulas, apostilas e exercícios práticos para aprimorar seus conhecimentos.
                        </p>
                    </div>
                </div>

                <h2>Conteúdo do curso</h2>

                <div className={styles.modules}>
                    <div className={styles.module}>
                        <Image src={module1} alt='' quality={10}/>

                        <span>Módulo 1</span>

                        <span>Nome do Módulo</span>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className={styles.module}>
                        <Image src={module2} alt='' quality={10}/>

                        <span>Módulo 2</span>

                        <span>Nome do Módulo</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className={styles.module}>
                        <Image src={module3} alt='' quality={10}/>

                        <span>Módulo 3</span>

                        <span>Nome do Módulo</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    
                    </div>

                    <div className={styles.module}>
                        <Image src={module4} alt='' quality={10}/>

                        <span>Módulo 4</span>

                        <span>Nome do Módulo</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className={styles.module}>

                        <span>Especial</span>

                        <span>MÓDULO BÔNUS 🎁</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className={styles.module}>

                        <span>Especial 2</span>

                        <span>BÔNUS 2 🎁</span>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                </div>

                <Button>Quero ter acesso ao curso + os bônus</Button>
            </div>

        </Layout>

    </div>

  )
}

export default Solution