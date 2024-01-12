'use client'

import { IconProps } from '@radix-ui/react-icons/dist/types'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const CallaIcon = (props: IconProps) => {
    const [fill, setFill] = useState('#ffffff')

    const { theme } = useTheme()

    useEffect(() => {
        if (theme === 'light') {
            setFill('#000000')
        } else {
            setFill('#ffffff')
        }
    }, [theme])

    return (
        <svg {...props} viewBox="0 0 512 512" version="1.1" id="svg1">
            <defs id="defs1" />
            <g id="layer1">
                <g id="g3" transform="matrix(0.6894305,0,0,0.6894305,79.505787,79.505792)">
                    <rect
                        style={{
                            fill,
                            fillOpacity: 1,
                            strokeWidth: 1.3635
                        }}
                        id="rect2"
                        width="215.72871"
                        height="217.28763"
                        x="3.5527137e-15"
                        y="294.71237"
                    />
                    <rect
                        style={{
                            fill,
                            fillOpacity: 1,
                            strokeWidth: 1.3635
                        }}
                        id="rect2-3"
                        width="215.72871"
                        height="217.28763"
                        x="215.72871"
                        y="294.71237"
                    />
                    <rect
                        style={{
                            fill,
                            fillOpacity: 1,
                            strokeWidth: 1.3635
                        }}
                        id="rect2-5"
                        width="215.72871"
                        height="217.28763"
                        x="-6.2764608e-15"
                        y="77.424751"
                    />
                    <rect
                        style={{
                            fill,
                            fillOpacity: 1,
                            strokeWidth: 1.3635
                        }}
                        id="rect2-0"
                        width="215.72871"
                        height="217.28763"
                        x="296.2713"
                        y="0"
                    />
                </g>
            </g>
        </svg>
    )
}

export default CallaIcon
