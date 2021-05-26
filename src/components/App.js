import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [videos, setVideos] = useVideos("Metal");
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => onFormSubmit("Metal"));

    useEffect(() => {
        setVideos(videos[0]);
    }, [videos]);

    const onFormSubmit = async (value) => {
        await youtube.get("/search", { params: { q: value } })
            .then(r => initData(r))
            .catch(e => console.error(e));
    }

    const onSelectedVideo = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className='ui container'>
            <SearchBar onSubmit={onFormSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList
                        videos={videos}
                        onVideoSelect={onSelectedVideo}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
