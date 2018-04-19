import Recipe from './Recipe'

const Menu = ({ recipes }) => 
  <article>
    <header>
      <h1>Delitious Recipes</h1>
    </header>
    <div className="recipes">
      { recipes.map((recipe, index) => 
        <Recipe key={index} {...recipe}/>
      )}
    </div>
  </article>

export default Menu
