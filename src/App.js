import { useState } from "react"
import allMovies from "./data"
import categories from "./Categories"

const App = () => {
  const [typeOfMovie, setTypeOfMovie] = useState("komedie")

  const resultMovie = allMovies.filter((oneMovie) => {
    return oneMovie["category"] === typeOfMovie
  })

  return <div>
    <div className="all-buttons">
      {
        categories.map((oneCategory, index) => {
          return <button className="one-button" key={index}
            onClick={() => setTypeOfMovie(oneCategory)}>{oneCategory}
          </button>
        })
      }
    </div>
    <div className="all-movies">
      {
        resultMovie.map((oneMovie) => {
          const {id, image, title, age, tags, description, category} = oneMovie

          return <div className="one-movie" key={id}>
            <img src={image} alt="Movie-img" />
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
          </div>
        })
      }
    </div>
  </div>
}

export default App