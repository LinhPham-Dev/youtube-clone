import React, { useEffect, useState } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

export const App = () => {
	const [videos, setVideos] = useState([]);
	const [activeVideo, setActiveVideo] = useState(null);

	useEffect(() => {
		onTermSubmit("doctor strange");
	}, []);

	const onTermSubmit = async (search) => {
		const response = await youtube.get("/search", {
			params: {
				q: search,
			},
		});

		console.log(response);

		setVideos(response.data.item);
		setActiveVideo(response.data.items[0]);
	};

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={activeVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							onVideoSelect={setActiveVideo}
							videos={videos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
