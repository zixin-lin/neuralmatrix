import { createClient } from 'contentful'
import RecipeCard from '../componentfor/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    space: '1k9sc9jp9bgo',
    accessToken: 'g0D-Nlx4bbMMo7YjrG5pfnTYdELbi-f0TXq9OWI7mWk',
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
    
<style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}