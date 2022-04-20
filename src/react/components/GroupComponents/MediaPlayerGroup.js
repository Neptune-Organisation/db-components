import ReactPlayer from "react-player"
import React from "react"
export const MediaPlayerGroup = (props) => {

    const data = props.data
    const mediaPlayerTitle = data.mediaPlayerTitle
    const mediaPlayerClass = data.mediaPlayerClass
    const mediaUrls = data.mediaUrl

    return(
        <div className="">
            <h2 className={mediaPlayerClass}>{mediaPlayerTitle}</h2>
            {mediaUrls && mediaUrls.map ((media)=> (
                <ReactPlayer url = {media} />
            ))}
        </div>
    )
}