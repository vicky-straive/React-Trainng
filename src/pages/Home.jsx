import React from "react";
import BannerCards from "../components/ui-components/Banner-cards";
import MovieCards from "../components/ui-components/movieCards";
import SeriesCards from "../components/ui-components/Seriescards";

function Home() {
  return (
    <div>
      <div>
        <BannerCards />
        <MovieCards />
        <SeriesCards />
      </div>
    </div>
  );
}

export default Home;
