import React from 'react';

const VideoCard = ({ video }) => {
  const { thumbnail, title, channel, views, timestamp, avatar } = video;

  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <div className="w-full aspect-video overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3">
        {/* Avatar */}
        <img
          src={avatar}
          alt={channel}
          className="w-10 h-10 rounded-full mr-3"
        />

        {/* Title and Meta */}
        <div className="text-sm text-black">
          <h3 className="font-medium leading-tight line-clamp-2">{title}</h3>
          <p className="text-gray-400 mt-1">{channel}</p>
          <p className="text-gray-400 text-xs">{views} • {timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
