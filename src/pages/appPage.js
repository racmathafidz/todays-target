import React, { useState, useEffect } from 'react'
import { DragDropContext } from "react-beautiful-dnd"

import DoTarget from 'parts/DoTarget'
import DoneTarget from 'parts/DoneTarget'

export default function appPage() {

    const [doTargetList, setDoTargetList] = useState([])
    const [doneTargetList, setDoneTargetList] = useState([])
    
    // For set the body background color
    useEffect(() => {
        document.body.className="app-page"
    })

    // Getting local storage data
    useEffect(() => {
        let target

        // Getting do target list
        target = JSON.parse(localStorage.getItem('doTarget'))
        if ( target !== "" ) setDoTargetList(target)

        // Getting done target list
        target = JSON.parse(localStorage.getItem('doneTarget'))
        if ( target !== "" ) setDoneTargetList(target)
    }, [])

    // Setting local storage data
    useEffect(() => {
        // Setting do target list
        localStorage.setItem('doTarget', JSON.stringify(doTargetList))

        // Setting done target list
        localStorage.setItem('doneTarget', JSON.stringify(doneTargetList))
    }, [doTargetList, doneTargetList])

    // Handling draggable
    const handleOnDragEnd = (result, index) => {

        const {destination, source} = result

        // Handling if target dragged to the outside of <Droppable> area
        if (!destination) return;

        // Handling do target list when dragged
        if (source.droppableId == "doTargetDroppable") {

            // Handling do target list if the target dragged to doneTargetList
            if (destination.droppableId == "doneTargetDroppable") {
                let newTarget = [...doneTargetList]
                newTarget.splice(destination.index, 0, doTargetList[source.index])
                newTarget.map( items => {
                    items.isCompleted = true
                })
                setDoneTargetList(newTarget)
            
                // Deleting dragged target from doTargetList state
                newTarget = [...doTargetList]
                newTarget.splice(source.index, 1)
                setDoTargetList(newTarget)
            } else {
                // Handling target list if target dragged in the same list
                const newTarget = [...doTargetList]
                const [reorderedItem] = newTarget.splice(source.index, 1)
                newTarget.splice(destination.index, 0, reorderedItem)

                setDoTargetList(newTarget)
            }
        }

        // Handling done target list when dragged
        if (source.droppableId == "doneTargetDroppable") {

            // Handling done target list if the target dragged to doTargetList
            if (destination.droppableId == "doTargetDroppable") {
                let newTarget = [...doTargetList]
                newTarget.splice(destination.index, 0, doneTargetList[source.index])
                newTarget.map( items => {
                    items.isCompleted = false
                })             
                setDoTargetList(newTarget)
            
                // Deleting dragged target from doTargetList state
                newTarget = [...doneTargetList]
                newTarget.splice(source.index, 1)
                setDoneTargetList(newTarget)
            } else {
                // Handling target list if target dragged in the same list
                const newTarget = [...doneTargetList]
                const [reorderedItem] = newTarget.splice(source.index, 1)
                newTarget.splice(destination.index, 0, reorderedItem)
    
                setDoneTargetList(newTarget)
            }
        }
    }

    return (
        <div className="app-page grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 xl:gap-10 w-full px-4 py-3 sm:px-10 sm:py-8 xl:px-24 xl:py-22">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <DoTarget doTargetList={doTargetList} setDoTargetList={setDoTargetList} doneTargetList={doneTargetList} setDoneTargetList={setDoneTargetList} />
                <DoneTarget doneTargetList={doneTargetList} setTargetList={setDoneTargetList} />
            </DragDropContext>
        </div>
    )
}
