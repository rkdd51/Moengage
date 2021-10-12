import React, { useState, useEffect } from "react";

const AnimeCard = ({ image_url, title, url, score, type, episodes }) => {
  return (
    <div className="anime-container">
      <img src={image_url} alt={title}></img>
      <div className="anime-info">
        <h3>{title}</h3>
        <p>{score}</p>
      </div>
      <div className="additonal-info">
        <h2>{title}</h2>
        <p>Type: {type}</p>
        <p>Episodes: {episodes}</p>
        <a href={url} target="blank_">
          More...
        </a>
      </div>
    </div>
  );
};

export default AnimeCard;
