import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";

export const App = () => {
	const [activeVideo, setActiveVideo] = useState(null);
	const [videos, search] = useVideos("doctor strange 2");

	useEffect(() => {
		setActiveVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			<SearchBar onFormSubmit={search} />
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
