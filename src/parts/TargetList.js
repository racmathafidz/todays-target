import React from 'react'

import Button from 'elements/Button'

export default function TargetList(props) {
    
    const { doTargetList, doneTargetList, deleteDoTarget, deleteDoneTarget, updateTarget, openModal, doTarget, doneTarget } = props

    // Do Target List
    if ( doTarget ) {
        if ( doTargetList.length >= 1 ) {
            return (
                <div className="w-full">
                    {
                        doTargetList.map((list, index) => {
                            return (
                                <div className="my-4 p-4 rounded-xl shadow-md ring-1 ring-gray-200" key={`target-${ index+1 }`}>
                                    <h1 className="text-xl text-gray-700">{list.title}</h1>
                                    <h2 className="text-gray-500 font-light">{list.description}</h2>
                                    <div className="flex flex-row-reverse mr-1">
                                        <Button
                                            type="button"
                                            className="focus:outline-none"
                                            onClick={() => deleteDoTarget(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6 transform transition duration-300 hover:fill-current hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </Button>
                                        <Button
                                            type="button"
                                            className="focus:outline-none"
                                            onClick={() => updateTarget(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6 transform transition duration-300 hover:fill-current hover:text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>)
        }
        
        return (
                <Button
                    type="button"
                    className="flex flex-col w-full my-4 p-4 text-center items-center rounded-xl shadow-md ring-1 ring-gray-200 focus:outline-none"
                    onClick={openModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <h1 className="text-center text-xl text-gray-400">New Target</h1>
                </Button>
            
        )
    }

    // Done Target List
    if ( doneTarget ) {
        if ( doneTargetList.length >= 1 ) {
            return (
                <div className="w-full">
                    {
                        doneTargetList.map((list, index) => {
                            return (
                                <div className="my-4 p-4 rounded-xl shadow-md ring-1 ring-gray-200" key={`target-${ index+1 }`}>
                                    <h1 className="text-xl text-gray-700">{list.title}</h1>
                                    <h2 className="text-gray-500 font-light">{list.description}</h2>
                                    <div className="flex flex-row-reverse mr-1">
                                        <Button
                                            type="button"
                                            className="focus:outline-none"
                                            onClick={() => deleteDoneTarget(index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700 h-6 w-6 transform transition duration-300 hover:fill-current hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>)
        } 

        return null

    }
}
