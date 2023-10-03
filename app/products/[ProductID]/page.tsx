import React from 'react';
import styles from './page.module.css';
import ImagesContainer from '@/app/Components/ImagesContainer/ImagesContainer';
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
  const jsonResponse =await reponse.json();
  console.log(ProductID);
  console.log(jsonResponse[0]);
  return (
    <div className={styles.pageContainer}>
        <div className={styles.imagesContainer}>
          <ImagesContainer affiliated_images={jsonResponse[0].affiliated_images} />
        </div>
        <div className={styles.productData}></div>
    </div>
  )
}

export default ProdutPage