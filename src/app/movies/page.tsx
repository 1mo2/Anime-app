"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function Movies() {
  const [movieData, setMovieData] = useState<any[]>([]);

  function getMovieData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=movie`
      )
      .then(({ data }) => setMovieData(data))

      .catch((error) => error);
  }
  console.log(movieData);
  useEffect(() => {
    getMovieData(1);
  }, []);

  return (
    <>
      <div className="bg-[#11141A] pt-20 text-white">
        <div className="container mx-auto  mb-52">
          <h1 className="text-2xl font-bold">Movies</h1>
          <div className="content">
            {movieData.map((movieItem) => {
              return (
                <div key={movieItem.id} className="card w-30">
                  <div className="img">
                    <img
                      src={`https://shikimori.one${movieItem.image.original}`}
                      alt=""
                    />
                  </div>
                  <div className="data">
                    <p>{movieItem.aired_on}</p>
                    <p>{movieItem.kind}</p>
                  </div>
                  <div className="title">
                    <h1 className="text-lg font-semibold">{movieItem.name}</h1>
                  </div>
                  <span>{movieItem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
