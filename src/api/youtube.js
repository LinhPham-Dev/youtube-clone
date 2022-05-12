import axios from "axios";

// My Key
const KEY = "AIzaSyATJaduwpIS19p_5Eyugqu2roSZAfITcVs";

// Default key
// const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 50,
		key: KEY,
	},
});
