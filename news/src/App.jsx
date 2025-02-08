import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const API_KEY = '8e971360b7db46849ffaa847ffb99c1e';

  const getData = async () => {
    try {
      setLoading(true); // Start loading before fetching
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  const userInput = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    getData();
  };

  useEffect(() => {
    getData();
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        
        <div className="searchbar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div className="head">
        <p>{loading ? "Loading news..." : "Stay Updated with latest news "}</p> 
      </div>

      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <Card data={newsData} />
    </>
  );
}

export default App;