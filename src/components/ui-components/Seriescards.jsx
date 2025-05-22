import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import DialogBox from "./dialog-box";
import data from "../../servicesess/data.json";

function Cards() {
  const [movies, SetSeries] = useState([]);

  useEffect(() => {
    // Simulating fetching data from data.json
    const seriesOnly= data.filter((item) => item.type === "Series");
    SetSeries(seriesOnly);    
  }, []);

  const CardsTemplate = (cardData) => {
    return (
      <div className="card flex gap-3 m-auto">
        <Card
          key={cardData.id}
          title={cardData.title}
          header={<img alt={cardData.title} src={cardData.thumbnail} />}
        >
        </Card>
      </div>
    );
  };

  return (
    <>
      <div className="p-5">
        <h3>Top Series</h3>
        <Carousel
          value={movies}
          numScroll={1}
          numVisible={4}
          // responsiveOptions={responsiveOptions}
          itemTemplate={CardsTemplate}
        />
      </div>
    </>
  );
}

export default Cards;
