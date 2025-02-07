import { useState } from 'react'
import './App.css'
import card from './card'

function App() {

  return (
    <>
<nav>
  <div>
    <h1>Trendy News</h1>
  </div>
  <ul>
   <a>All News</a>
   <a>Trending</a>
  </ul>


  <div className="searchbar">
    <input type="text" />
    <button>Search</button>
  </div>
</nav>   

<div className="head">
  <p> Stay Updated</p>
</div>

<div className="categoryBtn">
<button>sports</button>
<button>Politics</button>
<button>Entertainment</button>
<button>Health</button>
<button>Fitness</button>
  </div>

<card/>

      </>
  )
}

export default App
