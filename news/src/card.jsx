import React from 'react';

function Card({ data }) {
  if (!data || !Array.isArray(data)) {
    return <p>Loading news...</p>; 
  }

  const readMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) return null; // Skip items without images

        return (
          <div key={index} className="card">
            <img src={curItem.urlToImage} alt={curItem.title || "news image"} />
            <div className="cardContent">
              <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title}
              </a>
              <p>{curItem.description}</p>
              <button onClick={() => readMore(curItem.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
