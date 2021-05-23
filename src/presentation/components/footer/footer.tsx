import React, { memo } from 'react'
import Styles from './footer-styles.scss'

type Props = React.HtmlHTMLAttributes<HTMLElement>

const Footer: React.FC<Props> = (props: Props) => {
  return (
    <footer className={Styles.footer}></footer>
  )
}

export default memo(Footer)
