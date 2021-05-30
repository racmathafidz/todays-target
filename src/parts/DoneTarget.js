import React from 'react'

import List from 'parts/DoTargetList'

export default function DoneTarget({ doneTargetList, setTargetList }) {

    const deleteTarget = index => {
        const newTarget = [...doneTargetList]
        newTarget.splice(index, 1)
        setTargetList(newTarget)
    }

    return (
        <div className="bg-white px-5 py-1 xl:px-10 xl:py-3 border shadow-lg rounded-2xl">
            <div className="flex items-center">
                <h1 className="text-4.5xl text-gray-700">
                    Done
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            </div>

            <div className="flex">
                <List doneTargetList={doneTargetList} deleteDoneTarget={deleteTarget} doneTarget />
            </div>      
        </div>
    )
}
