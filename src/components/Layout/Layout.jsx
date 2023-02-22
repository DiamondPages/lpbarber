'use client'
import React from 'react'
import styles from '@/components/Layout/Layout.module.sass'
import Image from 'next/image'

const Layout = (props) => {

  return (
    <div className={styles.layout}>

        {props.background && 
            <Image className={styles.background} 
            src={props.background} alt='background' priority quality={70}/>

        }
        {props.children}
    </div>
  )
}

export default Layout