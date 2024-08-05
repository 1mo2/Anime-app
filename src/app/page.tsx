"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import myOb from "./interfaces/interface";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Home() {
  const [tvShowData, setTvShowData] = useState<myOb[]>([]);
  const [movieData, setMovieData] = useState<myOb[]>([]);
  const [specialData, setSpecialData] = useState<myOb[]>([]);

  function getTvShowData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=tv`
      )
      .then(({ data }) => setTvShowData(data))
      .catch((error) => error);
  }
  function getMovieData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=movie`
      )
      .then(({ data }) => setMovieData(data))
      .catch((error) => error);
  }
  function getSpecaiData(page?: number) {
    axios
      .get(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity&kind=special`
      )
      .then(({ data }) => setSpecialData(data))
      .catch((error) => error);
  }

  useEffect(() => {
    getTvShowData(2);
    getMovieData(1);
    getSpecaiData(4);
  }, []);

  return (
    <>
      <div className="bg-[#11141A] pt-20 text-white">
        <div className="container mx-auto  mb-52 ">
          <h1 className="text-2xl font-bold">Tv Shows</h1>
          <div className="content mt-10 ">
            {tvShowData.map((tvShowItem) => {
              return (
                <div key={tvShowItem.id} className="card w-30">
                  <Link href={`https://shikimori.one${tvShowItem.url}`}>
                    <div className="img relative">
                      <img
                        src={`https://shikimori.one${tvShowItem.image.original}`}
                        alt=""
                      />
                      <div className="bg-black absolute top-0 bottom-0 right-0 left-0 rounded-lg opacity-0 hover:opacity-55 transition-all duration-300">
                        <i className="flex justify-center items-center h-full text-5xl">
                          <FontAwesomeIcon icon={faCirclePlay} />
                        </i>
                      </div>
                    </div>
                  </Link>

                  <div className="data">
                    <p>{tvShowItem.aired_on}</p>
                    <p>{tvShowItem.kind}</p>
                  </div>
                  <div className="title">
                    <h1 className="text-lg font-semibold">
                      {tvShowItem.name.split(" ").slice(0, 5).join(" ")}
                    </h1>
                  </div>
                  <span>{tvShowItem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container mx-auto  mb-52">
          <h1 className="text-2xl font-bold">Movies</h1>
          <div className="content mt-10">
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
                    <h1 className="text-lg font-semibold">
                      {movieItem.name.split(" ").slice(0, 5).join(" ")}
                    </h1>
                  </div>
                  <span>{movieItem.score}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container mx-auto  mb-52">
          <h1 className="text-2xl font-bold">Special</h1>
          <div className="content mt-10">
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
                      {specialItem.name.split(" ").slice(0, 5).join(" ")}
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
