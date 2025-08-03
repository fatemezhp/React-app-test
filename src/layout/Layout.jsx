import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'
function Layout({ children }) {
    return (

        <div className={styles.pageWrapper}>
            <header className={`${styles.header}  `}>
                <div className={styles.navbar}>
                    <div className={styles.nleft}>
                        <Link className={styles.header_active} to='/'>home</Link>
                        <Link className={styles.header_active} to='/aboutUs'>about us</Link>

                    </div>
                    <div className={styles.nright}>
                        <Link className={styles.header_active} to='/login'>login</Link>
                    </div>
                </div>
            </header>
           
                <main className={styles.main}>
                    {children}
                </main>
          

            <footer className={styles.footer}> did u see what I've done</footer>
        </div>

    )
}

export default Layout