import styles from './Button.module.css'
const Button = ({children, type, onClick, selected}) => {
  return (
   <button
   selected={selected}
   className={`${styles.btn} ${styles[selected]}`}
   type={type}
   onClick={onClick}
   >{children}</button>
  )
}

export default Button