import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  //console.log(video);
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      <div className="flex gap-4 mt-5">
        <img
          className=" v-pic rounded-lg w-full h-full"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0]?.url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
        />
      </div>
      <div className="flex mt-4">
        <img
          src={video.channelThumbnail[0]?.url}
          className=" c-pic w-14 h-14 rounded-full"
        />
        <div className="ms-4">
          <h4 className={`${isRow ? "line-clamp-1" : "line-clamp-2"}`}>
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="detail flex gap-2">
            <p>
              <span>{millify(video.viewCount)}</span> <span>Views</span>{" "}
            </p>
            <span>||</span>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
