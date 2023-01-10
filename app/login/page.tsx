import Link from 'next/link';
import styles from '../page.module.css'

export default function index(){
  return (
  <div className={styles.main}>
    <Link href="/">Back to home</Link>
    <h1>Login Page</h1>
  </div>
  
  );
}