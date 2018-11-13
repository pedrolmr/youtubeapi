import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
    return(
        <div>
        {props.videos.map(video => {
            return (
                <VideoListItem 
                    video={video}
                    key={video.etag}
                    onVideoClick={props.selectVideo}
                />
            );
        })}
        </div>
    );
}
export default VideoList;