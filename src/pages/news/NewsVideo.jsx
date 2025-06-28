export const NewsVideo = ({ videoSrc }) => {
  if (!videoSrc) return null;

  const isYouTube =
    videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be");

  const getYoutubeEmbedUrl = (url) => {
    try {
      const regExp =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regExp);
      return match && match[1]
        ? `https://www.youtube.com/embed/${match[1]}`
        : "";
    } catch {
      return "";
    }
  };

  return (
    <div className="mb-12">
      {isYouTube ? (
        <iframe
          className="w-full aspect-video rounded shadow-lg mx-auto"
          src={getYoutubeEmbedUrl(videoSrc)}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          controls
          className="w-full max-h-[500px] rounded shadow-lg mx-auto"
          src={videoSrc}
        />
      )}
    </div>
  );
};
