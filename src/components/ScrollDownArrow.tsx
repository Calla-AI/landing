import React from 'react'

const ScrollDownArrow: React.FC<{ bottom: string }> = ({ bottom }) => {
    return (
        <div
            style={{
                width: '2em',
                height: '2em',
                backgroundColor: 'transparent',
                zIndex: 80,
                bottom,
                position: 'absolute',
                borderWidth: '0 0.25em 0.25em 0',
                borderStyle: 'solid',
                borderColor: 'antiquewhite',
                animation: 'scrolldown 1.2s ease-in-out infinite',
                animationDelay: '0.15s'
            }}
        ></div>
    )
}

const ScrollDownArrows: React.FC = () => {
    return (
        <>
            <ScrollDownArrow bottom="25px" />
            <ScrollDownArrow bottom="40px" />
        </>
    )
}

export default ScrollDownArrows
