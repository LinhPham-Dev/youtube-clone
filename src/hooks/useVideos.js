import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearch) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearch);
	}, [defaultSearch]);

	const search = async (search) => {
		const response = await youtube.get("/search", {
			params: {
				q: search,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, search];
};

export default useVideos;
