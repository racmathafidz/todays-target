import React, {useState} from 'react'
import Modal from 'react-modal'

import Button from 'elements/Button'
import Form from 'elements/Form'
import List from 'parts/TargetList'

// Modal styles
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      padding               : '1.5rem 2.5rem',
      borderRadius          : '1rem',
      transform             : 'translate(-50%, -50%)'
    }
};
  
Modal.setAppElement('#root')

export default function DoTarget({ doTargetList, setDoTargetList, doneTargetList, setDoneTargetList }) {

    let value
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [addNewTarget, setAddNewTarget] = useState({isCompleted : false})

    // Handling modal's inputting target form change
    const handleFormChange = event => {
        setAddNewTarget({
            ...addNewTarget,
            [event.target.name]: event.target.value
        })
        setHasError(false)
    }

    // Add Target
    const addTarget = event => {

        event.preventDefault()

        if (addNewTarget !== undefined && addNewTarget.hasOwnProperty('title') && addNewTarget.title.trim() !== "") {
    
            //Add the target
            const newTarget = [...doTargetList, addNewTarget]
            setDoTargetList(newTarget)

            //Close modal
            setHasError(false)
            closeModal()
        } else {
            setHasError(true)
        }
    }

    // Delete Target
    const deleteTarget = index => {
        const newTarget = [...doTargetList]
        newTarget.splice(index, 1)
        setDoTargetList(newTarget)
    }

    // Update Target
    const updateTarget = index => {
        let newTarget
        
        // Moving updated target to doneTargetList state
        newTarget = [...doneTargetList, doTargetList[index]]
        newTarget.map( items => {
            items.isCompleted = true
        })
        setDoneTargetList(newTarget)

        // Deleting updated target from doTargetList state
        newTarget = [...doTargetList]
        newTarget.splice(index, 1)
        setDoTargetList(newTarget)
    }

    // Open modal
    const openModal = () => {
        setModalIsOpen(true)
    }

    // Close modal
    const closeModal = () => {
        setAddNewTarget({isCompleted : false})
        setHasError(false)
        setModalIsOpen(false)
    }

    return (
        <div className="flex flex-col bg-white px-5 py-1 xl:px-10 xl:py-3 border shadow-lg rounded-2xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-4.5xl text-gray-700">
                        Do
                    </h1>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            
                <Button 
                    type="button"
                    className="order-last focus:outline-none"
                    onClick={openModal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Add Target Modal"
                >
                    <h1 className="text-2.5xl text-gray-700 mb-2.5">Add Your Target</h1>
                    <form onSubmit={addTarget}>
                        <div className="flex flex-col">
                            <Form
                                id="project-title"
                                name="title"
                                type="text"
                                value={value}
                                placeholder="Project Title"
                                className="sm:w-120"
                                onChange={handleFormChange}
                                hasError={hasError}
                            />
                            <Form
                                id="project-description"
                                name="description"
                                type="textarea"
                                value={value}
                                placeholder="Project Description (Optional)"
                                className="sm:w-120"
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className="flex flex-row-reverse mt-2">
                            <Button
                                type="submit"
                                className="cursor-pointer w-32 h-11 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl transform transition duration-500 focus:outline-none hover:shadow-lg"                            
                            >
                                Submit
                            </Button>

                            <Button 
                                type="button"
                                className="w-24 h-11 text-gray-400 mr-1 focus:outline-none"
                                onClick={closeModal}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Modal>
            </div>

            <div className="flex">
                <List doTargetList={doTargetList} deleteDoTarget={deleteTarget} updateTarget={updateTarget} openModal={openModal} doTarget />
            </div>            
        </div>
    )
}
