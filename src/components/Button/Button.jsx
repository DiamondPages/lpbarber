import React from 'react'
import styles from '@/components/Button/Button.module.sass'

const Button = ({children}) => {
  return (
    <button className={styles.button}>
        <span>{children}</span>
    </button>
  )
}

export default Button