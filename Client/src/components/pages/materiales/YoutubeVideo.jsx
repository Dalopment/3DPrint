
export const YoutubeVideo = ({ url}) => {
    return (
        <div className="youtube-video-container">
            <iframe 
                src={url}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
};