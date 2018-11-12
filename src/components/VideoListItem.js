import React from 'react';

const VideoListItem = ({video}) => {
    return (
        <li>
            <div className="media-left">
                <img src={video.snippet.thumbnails.default.url} alt="video thumbnail"/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    );
}
export default VideoListItem;