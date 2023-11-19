import React from 'react';
import styles from './page.module.css';
import ImagesContainer from '@/app/Components/ImagesContainer/ImagesContainer';
import { Item } from '@/typings';
import DetailSection from '@/app/Components/DetailSection/detailSection';
// import ImagesContainer from '@/app/Components/ImagesContainer/ImagesContainer';
type PageProps ={
    params:{
        ProductID:string;
    }
}

async function ProdutPage({params:{ProductID}}:PageProps) {
  // const [pageData,setData] = useState<any>({affiliated_images:[]});
  //   useEffect(()=>{
  //     (async()=>{
  //       const reponse = await fetch(`http://localhost:3000/api/products/${ProductID}`)
  //       const jsonResponse =await reponse.json();
  //       if(jsonResponse.length > 0){
  //       }
  //     })()
  //   },[]);
  const reponse = await fetch(`http://localhost:3000/api/products/${ProductID}`,{cache:"no-store"})
  const allData =await reponse.json();
  const product_details : Item = allData[0];
  console.log(ProductID);
  console.log(product_details);
  return (
    <div className={styles.pageContainer}>
        <div className={styles.imagesContainer}>
          <ImagesContainer affiliated_images={allData[0].affiliated_images} />
          <DetailSection productDetails={product_details} size={allData} />
        </div>
        <div className={styles.productData}></div>
    </div>
  )
}

export default ProdutPage