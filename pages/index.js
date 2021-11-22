import { createClient } from 'contentful'
import RecipeCard from '../component/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    //space: '1k9sc9jp9bgo',
    //accessToken: 'g0D-Nlx4bbMMo7YjrG5pfnTYdELbi-f0TXq9OWI7mWk',
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "receipe" })
  
  return {
    props: {
      recipes: res.items,
    }
  }
}

export default function Recipes({ recipes }) {
  console.log(recipes)
  
  
  return (

    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  
  
  )
}