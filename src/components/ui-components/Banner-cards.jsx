import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import DialogBox from "./dialog-box";
import data from "../../servicesess/data.json";
import "./components.scss";

function Cards() {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setMovies(data);
    setLoading(false);
  }, []);

  const CardsTemplate = (cardData) => {
    return (
      <div className="card flex gap-3 m-auto trending-cards-div">
        <Card
          className="trending-cards"
          key={cardData.id}
          onClick={() => {
            setSelectedMovieId(cardData.id);
            setOpen(true);
          }}
          header={
            <img
              style={{ height: "200px", width: "250px" }}
              alt={cardData.title}
              src={cardData.thumbnail}
            />
          }
        >
          <div className="flex flex-column align-items-center">
            <span className="text-center">{cardData.title}</span>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="p-5 trending-div">
        <h3>New on Netflix</h3>
        {loading && <div>Loading movies...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}
        {!loading && !error && movies.length === 0 && (
          <div>No movies found.</div>
        )}
        {!loading && !error && movies.length > 0 && (
          <Carousel
            value={movies}
            numScroll={1}
            numVisible={4}
            itemTemplate={CardsTemplate}
          />
        )}
      </div>
      {open && (
        <DialogBox onClose={() => setOpen(false)} movieId={selectedMovieId} />
      )}
    </>
  );
}

export default Cards;
