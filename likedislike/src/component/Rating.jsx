import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
// import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';
// import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';

const Rating = props => {
  const [count, setCount] = useState(0)
  // const [count1, setCount1] = useState(0)
  const { name, song, youtubeId } = props.band;
  // const [isLiked, updateLike] = useState(false);

  // const changeCount = () => {
  //   setState(count => (count + 1))
  // }


  const handleLike = () => {
    // let currentLikedBands = props.likedBands;
    // if (!isLiked) {
    //   updateLike(true);
    //   setCount(count => (count+1))
    //   if (!currentLikedBands.includes(name))
    //     props.updateLikedBands([...currentLikedBands, name]);
    // } else {
    //   updateLike(false);
    //   setCount(count => (count-1))
    //   if (currentLikedBands.includes(name))
    //     props.updateLikedBands(currentLikedBands.filter(band => band !== name));
    // }
    setCount(count => count + 1)
  };
  const handleDislike = () => {
    // setCount(count => (count - 1))
    if (count > 0) {
      return setCount(count => count - 1)
    }
    // setCount1(count1 => (count1 + 1))
  }

  const reset = () => {
    setCount(0)
  }



  return (
    <div>
      <iframe title={name} width="420" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} />
      <div style={{ paddingBottom: 10, paddingTop: 10 }}>
        <button onClick={handleLike} >
          {/* <FontAwesomeIcon icon={faThumbsUp} style={{ paddingRight: 5 }} /> */}
          <ThumbUpIcon/>
        </button>
        <button onClick={handleDislike} >
          {/* <FontAwesomeIcon icon={faThumbsDown} style={{ paddingLeft: 5 }} /> */}
          <ThumbDownAltIcon/>

        </button>
        <button onClick={reset}>Reset</button>
        &nbsp;{count}
      </div>
      {/* <p>You {isLiked ? `liked ${count} times` : `disliked ${count} times`} </p> */}
      <h3> {song} by {name} </h3>
      <hr />
    </div>
  );
};


export default Rating;