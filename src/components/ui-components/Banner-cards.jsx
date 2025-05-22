import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import DialogBox from "./dialog-box";
import data from "../../servicesess/data.json";

function Cards() {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);
  console.log(open);
  

  useEffect(() => {
    // Simulating fetching data from data.json
    setMovies(data);
  }, []);

  const CardsTemplate = (cardData) => {
    return (
      <div className="card flex gap-3 m-auto">
        <Card
          key={cardData.id}
          // title={cardData.title}
          onClick={() => setOpen(true)}
          header={
            <img
              style={{ height: "200px", width: "250px" }}
              alt={cardData.title}
              src={cardData.thumbnail}
            />
          }
        ></Card>
      </div>
    );
  };

  return (
    <>
      <div className="p-5">
        <h3>New on Netflix</h3>
        <Carousel
          value={movies}
          numScroll={1}
          numVisible={4}
          // responsiveOptions={responsiveOptions}
          itemTemplate={CardsTemplate}
        />
      </div>
      {open && (
        <DialogBox onClose={() => setOpen(false)} value={open} />
      )}
    </>
  );
}

export default Cards;
