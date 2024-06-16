import React from 'react'
import { Play, Pause } from 'lucide-react'

export default function PlayButton() {
    const [isPlaying, setIsPlaying] = React.useState(false)

    if (isPlaying === true) {
        return (<Pause onClick={() => setIsPlaying(false)} />)
    }
    return (
        <Play onClick={() => setIsPlaying(true)} />
    )
};