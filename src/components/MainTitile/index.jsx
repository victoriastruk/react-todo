import styles from './MainTitle.module.sass'

function MainTitle({title}) {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default MainTitle
