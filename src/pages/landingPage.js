import React, { useEffect } from 'react'

import Button from 'elements/Button'
import BrandIcon from 'parts/BrandIcon'

export default function landingPage() {

    // Set the body background color
    useEffect(() => {
        document.body.className="landing-page"
    })

    return (
        <div className="w-full h-screen bg-cover">
            <div className="flex flex-col w-full h-screen items-center">
                <div className="container px-4 lg:px-5 xl:px-3 flex justify-between py-5 items-center">
                    <BrandIcon/>
                    <Button
                        type="link"
                        href="https://github.com/racmathafidz/todays-target"
                        target="_blank"
                        isExternal
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-10 sm:w-12 h-10 sm:h-12" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </Button>
                </div>

                <div className="flex flex-col content-center mt-10 sm:mt-20 lg:mt-28 xl:mt-10">
                    <h1 className="text-8xl sm:text-9xl text-center items-center text-gray-900 font-title font-semibold leading-none">
                        Today's Target
                    </h1>
                    <p className="text-gray-500 font-desc text-center sm:text-xl mx-6 sm:mx-20 lg:mx-32 xl:mx-44 mt-7 sm:mt-10 xl:mt-6">
                        A practical to-do list sets you off in the right direction each day and helps you focus on the tasks that are most important to you. With the right strategies, a to-do list can help you achieve your goals.
                    </p>

                    <Button
                        type="link"
                        href="/app"
                        className="flex w-40 h-14 p-6-5 text-xl text-white text-center items-center bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-full mx-auto mt-24 transform transition duration-500 hover:shadow-2xl"
                    >
                            Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
