import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import MainMessage from './MainMessage'
import Product from './Components/ProductComponent/Product'
import vapor from '../public/images/vapor.png';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.homePage}>
      <MainMessage />
      <div className={styles.imageContainer}>
        <Image src="/images/nike.jpg" fill alt='' />
      </div>
      <h2 className={styles.trending}>Trending this week</h2>
      <div className={styles.productsContaniner}>
        <Product url={'/images/vapor.png'} productUrl='/' id={'0'} name="Nike Vaporfly 3" description="Men's Road Racing Shoes" price={999.9} />
        <Product url={'/images/vapor.png'} productUrl='/' id={'0'} name="Nike Vaporfly 3" description="Men's Road Racing Shoes" price={999.9} />
        <Product url={'/images/vapor.png'} productUrl='/' id={'0'} name="Nike Vaporfly 3" description="Men's Road Racing Shoes" price={999.9} />
      </div>
    </div>
  )
}
