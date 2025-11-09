
import React from 'react';

interface VideoPlayerProps {
  type: 'local' | 'youtube';
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ type, src, className }) => {
  if (type === 'youtube') {
    return (
      <iframe
        className={`w-full h-full object-cover ${className}`}
        src={`https://www.youtube.com/embed/${src}?autoplay=1&mute=1&loop=1&playlist=${src}&controls=0&showinfo=0&autohide=1&modestbranding=1&playsinline=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    );
  }

  return (
    <video
      className={`w-full h-full object-cover ${className}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default VideoPlayer;
