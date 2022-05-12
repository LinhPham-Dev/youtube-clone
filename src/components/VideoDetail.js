import React from "react";
import moment from "moment";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading Video...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe
					allowFullScreen="allowfullscreen"
					title="video player"
					src={videoSrc}
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">
					<span>Channel: {video.snippet.channelTitle} </span>
				</h4>
				<h4>{video.snippet.title}</h4>
				<h5 className="ui header">
					Release:
					{moment(video.snippet.publishTime).format("MMMM Do YYYY")}
				</h5>
				<p>Description: {video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
