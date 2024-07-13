'use client'
import {useState} from 'react'

const ButtonWithSound = ({svg, soundFile}) => {
    const [audio] = useState(new Audio(soundFile))

    const playSound = () => {
        audio.play()
    }

    return <img
        src={svg}
        onClick={playSound}
        alt=""
        className="w-32 h-32 bg-white border-2 active:bg-gray-700"
    />
}

export default function App() {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <div>
                <h1 className={'text-2xl my-4'}>せんせいロボット</h1>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
                <ButtonWithSound svg="/ArrowUp.svg" soundFile="/forward.wav"/>
                <div className="flex items-center space-x-4">
                    <ButtonWithSound svg="/ArrowLeft.svg" soundFile="/left.wav"/>
                    <ButtonWithSound svg="/ArrowRight.svg" soundFile="/right.wav"/>
                </div>
                <ButtonWithSound svg="/HandRaised.svg" soundFile="/get.wav"/>
            </div>
        </div>

    )
}