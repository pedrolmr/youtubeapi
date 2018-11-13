import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <div className="video">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}
export default VideoDetail;