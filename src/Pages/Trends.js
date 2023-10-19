import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

function Trends() {
  const [trends, setTrends] = useState([]);
  useEffect(() => {
    async function getTrends() {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=200&regionCode=UG&key=AIzaSyCMKJqq4Hyfbh4rR5peZ8VGFiOf25ZynxY"
      );
      const data = await response.json();
      // Attaching data to word cloud libnrary
      const wordCloudData = data.items.map((video, index) => {
        return { text: video.snippet.title, value: 600 - 4 - index };
      });
      setTrends(wordCloudData);
    }
    getTrends();
  }, []);

  const options = {
    rotations: 0,
  };
  return (
    <>
      <h1> Trends </h1>
      <ReactWordcloud words={trends} options={options} />
    </>
  );
}

export default Trends;
