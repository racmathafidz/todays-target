import React, {useState} from 'react'
import Modal from 'react-modal'

import Button from 'elements/Button'
import Form from 'elements/Form'

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
  
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export default function DoTarget() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal() {
        setModalIsOpen(true)
    }
    function closeModal() {
        setModalIsOpen(false)
    }

    return (
        <div className="bg-white px-5 py-1 xl:px-10 xl:py-3 border shadow-lg rounded-2xl">
            <div className="flex items-center justify-between">
                <dv className="flex items-center">
                    <h1 className="text-4.5xl text-gray-700">
                        Do
                    </h1>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                </dv>
            
                <Button 
                    type="button"
                    className="focus:outline-none"
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
                    <div className="flex flex-col">
                        <Form
                            id="project-title"
                            name="project-title"
                            type="text"
                            
                            placeholder="Project Title"
                            className="sm:w-120"
                        />
                        <Form
                            id="project-description"
                            name="project-description"
                            type="textarea"
                            
                            placeholder="Project Description"
                            className="sm:w-120"
                        />
                    </div>
                    <div className="flex flex-row-reverse mt-2">
                        <Button
                            type="button"
                            className="w-32 h-11 text-white bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-xl transform transition duration-500 hover:shadow-lg"
                            onClick={closeModal}
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
                </Modal>
            </div>
        </div>
    )
}
