import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer yDRZvp4jZj07vvvmSKT_KWTk8DB1C0c_kB0WoiS0TWuDeAAiY6sKiweMKPmDdTwBz-GICn3W6ZOs06HM5_Pat4qdsRJbz1lTAzKdQnk4ii4KrDBfluksTlEwe6eKYXYx",
  },
});
