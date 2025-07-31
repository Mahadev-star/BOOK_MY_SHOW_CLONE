import React from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import tempMovies from "../utils/temp.movies";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <PosterSlider title="Now Showing" posters={tempMovies} />
    </div>
  );
};

export default Home;
