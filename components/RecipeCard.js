import Link from 'next/link'
import Image from 'next/image'
//import Table from '../pages/table';
import styles from '../styles/Home.module.css'
import Getdata  from './Table1'
export default function RecipeCard({ recipe }) {

  const { title, slug, cookingTime, thumbnail, cvs } = recipe.fields
  
  const result = cvs.result
  const res = result[0]
  console.log(res)
  //res1 = JSON.parse(res)
  return (
    <div className="card">
      <div className="featured">
        <Image 
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Takes approx { cookingTime } mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}><a>Click here to see the detail</a></Link>
        </div>
      </div>
      <div className="App">
      <br/>Today Stock Information
    
      {/*<Table data = {res} />*/}
      <Getdata props = {res} />
     <br/>

      </div>
          <style jsx>{`
          .card{
            text-align:center;
            margin:0 auto;
          }
          .App {
            text-align: center;
            margin: 0 auto;
          }
          .Table1{
            text-align:center;
            margin: 0 auto;
          }
          .content {
            
            margin: 0;
            position: relative;
            
          }
          
      `}</style>
      
    </div>
  )
}
