import React from 'react'
import Styles from './main-styles.scss'

const Main: React.FC = () => {
  return (
    <div className={Styles.main}>
      <header className={Styles.header}></header>
      <form className={Styles.form}>
          Hello LIvre Reload!
      </form>
      <footer className={Styles.footer}></footer>
    </div>
  )
}

export default Main
