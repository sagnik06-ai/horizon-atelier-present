
import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface VideoEmbedProps {
  src: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  src, 
  title = "Embedded video",
  autoplay = true,
  loop = true,
  muted = true
}) => {
  // Extract video ID from YouTube shorts URL
  const getYouTubeVideoId = (url: string) => {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^/?&]+)/);
    if (shortsMatch && shortsMatch[1]) {
      return shortsMatch[1];
    }
    
    // Fallback to regular YouTube URL parsing
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match && match[1] ? match[1] : '';
  };

  const videoId = getYouTubeVideoId(src);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${autoplay ? 'autoplay=1&' : ''}${loop ? 'loop=1&playlist=' + videoId : ''}${muted ? '&mute=1' : ''}`;

  return (
    <RevealOnScroll>
      <div className="video-embed my-10 aspect-video flex justify-center">
        <div className="relative w-full max-w-3xl aspect-[9/16] md:aspect-video">
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default VideoEmbed;
