import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_IMG_URL } from "../../utils/constants/constants";
import {
  setMovieInfoTrailerPage,
  toggleMovieInfo,
} from "../../utils/slices/moviesSlice";
import useMovieInfoTrailer from "../../hooks/useMovieInfoTrailer";

const MovieInfo = () => {
  const { info } = useSelector((store) => store?.movies?.movieInfo);
  const movieInfoTrailer = useSelector(
    (store) => store.movies?.movieInfoTrailer
  );
  const movieInfoTrailerPage = useSelector(
    (store) => store.movies?.movieInfoTrailerPage
  );
  const dispatch = useDispatch();
  const handleMovieInfoPage = () => {
    dispatch(toggleMovieInfo());
    dispatch(setMovieInfoTrailerPage(false));
    const body = document.body;
    const scrollY = body.style.top;
    body.style.width = "";
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };
  const handleMovieInfoPageVideo = () => {
    dispatch(setMovieInfoTrailerPage(false));
  };
  useMovieInfoTrailer(info?.id);
  const handleMovieInfoVideo = () => {
    dispatch(setMovieInfoTrailerPage(true));
  };
  return (
    <div
      className={
        "relative bg-black mx-auto  min-h-[50%] w-[95%] sm:w-[80%] md:w-1/2 rounded-lg aspect-video border border-gray-400 overflow-y-scroll overflow-x-hidden no-scrollbar-custom"
      }
    >
      <i
        onClick={handleMovieInfoPage}
        className="fixed text-3xl cursor-pointer top-10 right-1 sm:right-5 md:right-10 opacity-90 sm:text-4xl fa-solid fa-circle-xmark"
      ></i>
      {!movieInfoTrailerPage ? (
        <div className="p-2 sm:p-4">
          <h1 className="my-2 mb-1 text-lg font-bold sm:text-xl md:text-2xl sm:mb-3">
            ➡️{info?.title}
          </h1>
          <div className="flex flex-col justify-start gap-2 text-xs sm:flex-row sm:gap-4 sm:text-sm md:text-base">
            <div className="flex flex-row items-end w-full h-48 gap-2 sm:flex-col sm:justify-start sm:items-center sm:min-w-36 sm:max-w-36 sm:h-64">
              <img
                className="w-32 h-48 rounded-lg sm:w-36 sm:h-56"
                src={CDN_IMG_URL + info?.poster_path}
              ></img>
              <button
                className="px-4 py-2 text-sm font-semibold text-black bg-white border border-black rounded-md cursor-pointer md:px-6 sm:text-base md:text-lg "
                onClick={handleMovieInfoVideo}
              >
                Play
              </button>
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <p className="opacity-60">
                <b>Language :</b> {info?.original_language}
              </p>
              <p className="opacity-60">
                <b>Popularity :</b> {info?.popularity} ❤️
              </p>
              <p className="opacity-60">
                <b>Release Date :</b> {info?.release_date}
              </p>
              <p className="opacity-60">
                <b>Total Vote :</b> {info?.vote_count} ⚡
              </p>
              <p className="text-justify opacity-60">
                <b>Overview :</b> {info?.overview}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute top-0 flex items-center w-full h-full overflow-hidden bg-black rounded-lg">
            <iframe
              className="w-full overflow-hidden aspect-video"
              src={
                "https://www.youtube.com/embed/" +
                movieInfoTrailer?.key +
                "?autoplay=1&controls=0&showinfo=0"
              }
              allow="autoplay"
            ></iframe>
          </div>
          <div className="absolute top-0 flex items-center justify-center invisible w-full h-full overflow-hidden bg-black sm:visible sm:opacity-0 sm:hover:opacity-60">
            <i
              onClick={handleMovieInfoPageVideo}
              className="text-3xl cursor-pointer opacity-90 sm:text-4xl"
            ></i>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieInfo;
