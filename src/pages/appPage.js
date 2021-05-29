import React, { useState, useEffect } from 'react'

import DoTarget from 'parts/DoTarget'
import DoneTarget from 'parts/DoneTarget'

export default function appPage() {

    const [doTargetList, setDoTargetList] = useState([])
    console.log(doTargetList)

    // Set the body background color
    useEffect(() => {
        document.body.className="app-page"
    })

    return (
        <div className="app-page grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 xl:gap-10 w-full px-4 py-3 sm:px-10 sm:py-8 xl:px-24 xl:py-22">
            <DoTarget doTargetList={doTargetList} setDoTargetList={setDoTargetList}/>
            <DoneTarget/>
        </div>
    )
}
