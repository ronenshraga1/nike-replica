import React from 'react'
import LinkIcon from './Components/LinkIconComponent/LinkIcon';
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.upperFooter}>
            <section className={styles.linkSection}>
                <Link href="/" className={styles.headline}>FIND A STORE</Link>
                <Link href="/" className={styles.headline}>BECOME A PARTNER</Link>
                <Link href="/" className={styles.headline}>SIGNUP FOR EMAIL</Link>
                <Link href="/" className={styles.headline}>SEND US FEEDBACK</Link>
                <Link href="/" className={styles.headline}>STUDENT DISCOUNT</Link>
            </section>
            <section className={styles.linkSection}>
                <Link href="/" className={styles.headline}>GET HELP</Link>
                <Link href="/" className={styles.regular}>Order Status</Link>
                <Link href="/" className={styles.regular}>Shipping and Delivery</Link>
                <Link href="/" className={styles.regular}>Returns</Link>
                <Link href="/" className={styles.regular}>Payment OLinktions</Link>
                <Link href="/" className={styles.regular}>Contact Us</Link>
            </section>
            <section className={styles.linkSection}>
                <Link href="/" className={styles.headline}>ABOUT NIKE</Link>
                <Link href="/" className={styles.regular}>News</Link>
                <Link href="/" className={styles.regular}>Careers</Link>
                <Link href="/" className={styles.regular}>Investors</Link>
                <Link href="/" className={styles.regular}>Sustainability</Link>
            </section>
            <section className={styles.iconSection}>
                <LinkIcon href='http://twitter.com/Nike' imgUrl='/icons/twitter.svg'/>
                <LinkIcon href='http://www.facebook.com/nike' imgUrl='/icons/facebook.svg'/>
                <LinkIcon href='http://www.youtube.com/user/nike' imgUrl='/icons/youtube.svg'/>
                <LinkIcon href='http://instagram.com/nike' imgUrl='/icons/instagram.svg'/>
            </section>
        </div>
        <div className={styles.lowerFooter}>
            <div className={styles.credits}> 
                <Image src="/icons/location.svg" width={20} height={20} alt='' />
                 <p className={styles.country}>Israel</p>
                <p className={styles.regular}>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className={styles.links}>
                <Link href="/" className={styles.regular}>Guides</Link>
                <Link href="/" className={styles.regular}>Terms of Use</Link>
                <Link href="/" className={styles.regular}>Terms of Sale</Link>
                <Link href="/" className={styles.regular}>Company Details</Link>
                <Link href="/" className={styles.regular}>Privacy & Cookie Policy</Link>
                <Link href="/" className={styles.regular}>Cookie Settings</Link>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;