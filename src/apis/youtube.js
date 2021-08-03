import axios from "axios";
const KEY = "AIzaSyBvbvrd0qXcRzRJcc5Aj4djZUP2ib-A4CE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
