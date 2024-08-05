"use client";
import axios from "axios";
import { useEffect, useState } from "react";
function Special() {
  const [specialData, setSpecialData] = useState<any[]>([]);

  function getSpecaiData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=special`
      )
      .then(({ data }) => setSpecialData(data))
      .catch((error) => error);
  }

  useEffect(() => {
    getSpecaiData(1);
  }, []);
  return (
    <>
      <div className="bg-[#11141A] pt-20 text-white">
        <div className="container mx-auto  mb-52">
          <h1 className="text-2xl font-bold">Special</h1>
          <div className="content">
            {specialData.map((specialItem) => {
              return (
                <div key={specialItem.id} className="card w-30">
                  <div className="img">
                    <img
                      src={`https://shikimori.one${specialItem.image.original}`}
                      alt=""
                    />
                  </div>
                  <div className="data">
                    <p>{specialItem.aired_on}</p>
                    <p>{specialItem.kind}</p>
                  </div>
                  <div className="title">
                    <h1 className="text-lg font-semibold">
                      {specialItem.name}
                    </h1>
                  </div>
                  <span>{specialItem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Special;
