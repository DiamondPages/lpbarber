'use client'
import React, { useState } from 'react'
import styles from '@/components/Pages/Faq/Faq.module.sass'
import Layout from '@/components/Layout/Layout'
import Image from 'next/image'
import arrow from '@/assets/svg/arrowdown.svg'
const Faq = () => {


    const [showAnswer1,setShowAnswer1] = useState(false)
    const [showAnswer2,setShowAnswer2] = useState(false)
    const [showAnswer3,setShowAnswer3] = useState(false)
    const [showAnswer4,setShowAnswer4] = useState(false)
    const [showAnswer5,setShowAnswer5] = useState(false)

  return (
    <div className={styles.faq}>
        <Layout>
            <div className={styles.content}>
                    <h2>Dúvidas frequentes</h2>

                    <div className={styles.faqContainer}>
                        <div>
                            <span onClick={()=>setShowAnswer1(!showAnswer1)}>Lorem ipsum dolor sit amet consectetur? 
                            
                            <Image 
                                style={
                                    showAnswer1 ? {rotate:'180deg'} : {}
                                }
                                src={arrow} alt=''/></span>
                            <p style={
                                showAnswer1 ? {opacity: '1',marginTop: '0px'} : {opacity: '0', marginBottom: '-40px',marginTop: '-20px'}

                            }>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim</p>
                        </div>

                        <div>
                            <span onClick={()=>setShowAnswer2(!showAnswer2)}>Lorem ipsum dolor sit amet consectetur? 
                            
                            <Image 
                                style={
                                    showAnswer2 ? {rotate:'180deg'} : {}
                                }
                                src={arrow} alt=''/></span>
                            <p style={
                                showAnswer2 ? {opacity: '1',marginTop: '0px'} : {opacity: '0', marginBottom: '-40px',marginTop: '-20px'}

                            }>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim</p>
                        </div>

                        <div>
                            <span onClick={()=>setShowAnswer3(!showAnswer3)}>Lorem ipsum dolor sit amet consectetur? 
                            
                            <Image 
                                style={
                                    showAnswer3 ? {rotate:'180deg'} : {}
                                }
                                src={arrow} alt=''/></span>
                            <p style={
                                showAnswer3 ? {opacity: '1',marginTop: '0px'} : {opacity: '0', marginBottom: '-40px',marginTop: '-20px'}

                            }>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim</p>
                        </div>

                        <div>
                            <span onClick={()=>setShowAnswer4(!showAnswer4)}>Lorem ipsum dolor sit amet consectetur? 
                            
                            <Image 
                                style={
                                    showAnswer4 ? {rotate:'180deg'} : {}
                                }
                                src={arrow} alt=''/></span>
                            <p style={
                                showAnswer4 ? {opacity: '1',marginTop: '0px'} : {opacity: '0', marginBottom: '-40px',marginTop: '-20px'}

                            }>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim</p>
                        </div>

                        <div>
                            <span onClick={()=>setShowAnswer5(!showAnswer5)}>Lorem ipsum dolor sit amet consectetur? 
                            
                            <Image 
                                style={
                                    showAnswer5 ? {rotate:'180deg'} : {}
                                }
                                src={arrow} alt=''/></span>
                            <p style={
                                showAnswer5 ? {opacity: '1',marginTop: '0px'} : {opacity: '0', marginBottom: '-40px',marginTop: '-20px'}

                            }>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim</p>
                        </div>

                    </div>
            </div>
        </Layout>
    </div>
  )
}

export default Faq