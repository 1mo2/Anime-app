"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function TvSHows() {
  const [tvShowData, setTvShowData] = useState<any[]>([]);

  function getTvShowData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=tv`
      )
      .then(({ data }) => setTvShowData(data))
      .catch((error) => error);
  }

  useEffect(() => {
    getTvShowData(1);
  }, []);
  return (
    <>
      <div className="bg-[#11141A] pt-20 text-white">
        <div className="container mx-auto  mb-52">
          <h1 className="text-2xl font-bold">Tv Shows</h1>
          <div className="content">
            {tvShowData.map((tvShowItem) => {
              return (
                <div key={tvShowItem.id} className="card w-30">
                  <div className="img">
                    <img
                      src={`https://shikimori.one${tvShowItem.image.original}`}
                      alt=""
                    />
                  </div>
                  <div className="data">
                    <p>{tvShowItem.aired_on}</p>
                    <p>{tvShowItem.kind}</p>
                  </div>
                  <div className="title">
                    <h1 className="text-lg font-semibold">{tvShowItem.name}</h1>
                  </div>
                  <span>{tvShowItem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TvSHows;
