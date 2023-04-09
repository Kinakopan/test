import styles from '../../styles/Home.module.css'


export default function BtnSave({ handleSave }) {
  return (
    <button
      type="submit"
      className={styles.btn}
      onClick={handleSave}
      id="btn">
        Save
      <span></span><span></span><span></span><span></span>
    </button>
  )
}
