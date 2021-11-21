import Link from 'next/link'
import Navbar from './Nav'
import styles from '../styles/Home.module.css'
export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
      <Navbar/>
        <Link href="/">
          <a>
            <h1 className = {styles.title}>
              <span>Neural Matrix </span>
            </h1>
            <h2 className = {styles.title}>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Contact</p>
        <p>About us</p>
        <p>FAQs</p>
        <p>Copyright 2021 Neural Matrix LLC</p>
      </footer>
    </div>
  )
}