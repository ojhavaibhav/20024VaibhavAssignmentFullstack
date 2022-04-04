import React from "react";
import bands from "./bands.json";
import Rating from "./component/Rating";

export default function App() {
  // const [likedBands, updateLikedBands] = useState([]);

  return (
    <div className="App">
      <h1>Rate these bands</h1>

      {bands.map(band => (
        <Rating key={band.youtubeId} band={band}  />
      ))
      }
      <h2>Liked bands</h2>
      {/* <ul>
        {likedBands.map(name => (<li> {name} </li>))}
      </ul> */}
    </div>
  );
}