import React, { useState, useEffect } from 'react'

import DoTarget from 'parts/DoTarget'
import DoneTarget from 'parts/DoneTarget'

export default function appPage() {

    const [doTargetList, setDoTargetList] = useState([])
    const [doneTargetList, setDoneTargetList] = useState([])
    
    // Set the body background color
    useEffect(() => {
        document.body.className="app-page"
    })

    // Getting local storage data
    useEffect(() => {
        let target

        target = JSON.parse(localStorage.getItem('doTarget'))
        if ( target !== "" ) setDoTargetList(target)

        target = JSON.parse(localStorage.getItem('doneTarget'))
        if ( target !== "" ) setDoneTargetList(target)
    }, [])

    // Setting local storage data
    useEffect(() => {
        localStorage.setItem('doTarget', JSON.stringify(doTargetList))
        localStorage.setItem('doneTarget', JSON.stringify(doneTargetList))
    }, [doTargetList, doneTargetList])

    return (
        <div className="app-page grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 xl:gap-10 w-full px-4 py-3 sm:px-10 sm:py-8 xl:px-24 xl:py-22">
            <DoTarget doTargetList={doTargetList} setDoTargetList={setDoTargetList} doneTargetList={doneTargetList} setDoneTargetList={setDoneTargetList} />
            <DoneTarget doneTargetList={doneTargetList} setTargetList={setDoneTargetList} />
        </div>
    )
}
