import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const mainMovies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!mainMovies)
		return (
			<div className="flex flex-col items-center justify-center h-screen p-4 text-lg font-bold text-white bg-black sm:text-xl md:text-2xl lg:text-4xl">
				<div class="loading-wave">
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
					<div class="loading-bar"></div>
				</div>
				<h2 className="text-center">
					Use VPN otherwise movies won't show up...😊
				</h2>
			</div>
		);
	const { title, overview, id } = mainMovies[1];
	return (
		<div className="bg-black">
			<VideoTitle
				title={title}
				description={overview}
				mainMovies={mainMovies[1]}
			/>
			<VideoBackground videoId={id} />
		</div>
	);
};

export default MainContainer;
