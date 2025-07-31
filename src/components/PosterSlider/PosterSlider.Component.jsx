const PosterSlider = ({ title, posters = [] }) => {
  return (
    <div className="my-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="flex gap-4 overflow-x-scroll">
        {posters.map((poster) => (
          <div key={poster.id} className="w-1/4 min-w-[150px]">
            <img
              src={`https://image.tmdb.org/t/p/original${poster.poster_path}`}
              alt={poster.original_title}
              className="w-full h-full rounded"
            />
            <p className="text-center">{poster.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PosterSlider;
