import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <></>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="ui segment">
            <iframe width="560" height="315" src={videoSrc}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            <h4 className='ui header'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;
