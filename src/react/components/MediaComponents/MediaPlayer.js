import React from "react"
import ReactPlayer from "react-player"
export const MediaPlayer = (props) => {
    const data = props.data
    const mediaUrl = data.mediaUrl
    
    return(
        <ReactPlayer url = {mediaUrl} />
    )
}