import { useEffect, ReactNode } from 'react';


export const Title = (side: string, children: ReactNode, size: string, wieght:number ) => {

    const svgElement = () => {
        switch (side) {
            case 'left': return (
                <>
                <span className={`title-text ${size} ${wieght}`}>{children}</span>
                <div className="line-wrapper">
                    <svg>
                        <defs>
                                <linearGradient id="title-gradient-left" gradientTransform="rotate(0)">
                                    <stop offset="100%" stopColor="rgba(100,100,100,1)" />
                                    <stop offset="30%" stopColor="rgba(100,100,100, .4)"/>
                                    <stop offset="0%" stopColor="rgba(100,100,100, 0)" />
                                </linearGradient>
                        </defs>
                        <rect className="ruler-svg" y="7" height="2" width="100%" fill="url(#title-gradient-left)"/>
                    </svg>
                </div>
                </>)

            case 'center': return (
                <>
                    <div className="line-wrapper">
                    <svg>
                        <defs>
                            <linearGradient id="title-gradient-center-left" gradientTransform="rotate(0)">
                                    <stop offset="100%" stopColor="rgba(100,100,100,1)" />
                                    <stop offset="30%" stopColor="rgba(100,100,100, .4)"/>
                                    <stop offset="0%" stopColor="rgba(100,100,100, 0)" />
                            </linearGradient>
                            <linearGradient id="title-gradient-center-right" gradientTransform="rotate(0)">
                                    <stop offset="100%" stopColor="rgba(100,100,100,1)" />
                                    <stop offset="30%" stopColor="rgba(100,100,100, .4)"/>
                                    <stop offset="0%" stopColor="rgba(100,100,100, 0)" />
                            </linearGradient>
                        </defs>
                        <rect className="ruler-svg center-left" y="7" height="2" width="100%" fill="url(#title-gradient-center-left)"/>
                        <foreignObject className="title-text-svg">
                            <span className={`title-text ${size} ${wieght}`}>{children}</span>
                        </foreignObject>
                        <rect className="ruler-svg center-right" y="7" height="2" width="100%" fill="url(#title-gradient-center-right)"/>
                    </svg>
                    </div>
                </>
            )

            case 'right': return (
                <>
                    <div className="line-wrapper">
                        <svg>
                            <defs>
                                <linearGradient id="title-gradient-right" gradientTransform="rotate(0)">
                                    <stop offset="0%" stopColor="rgba(100,100,100,1)" />
                                    <stop offset="30%" stopColor="rgba(100,100,100, .4)"/>
                                    <stop offset="100%" stopColor="rgba(100,100,100, 0)" />
                                </linearGradient>
                            </defs>
                            <rect className="ruler-svg right" y="7" height="2" width="100%" fill="url(#title-gradient-right)"/>
                        </svg>
                    </div>
                    <span className={`title-text ${size} ${wieght}`}>{children}</span>
                </>
            )
        }


    }

    {/*useEffect(()=> {

    },[]);*/}

    return (
        <div className="title">
            {svgElement()}
        </div>)
}