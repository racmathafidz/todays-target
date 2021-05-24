import React from 'react'

import DoTarget from 'parts/DoTarget'
import DoneTarget from 'parts/DoneTarget'

export default function appPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 xl:gap-10 w-full h-screen px-4 py-3 sm:px-10 sm:py-8 xl:px-24 xl:py-10 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <DoTarget/>
            <DoneTarget/>
        </div>
    )
}
