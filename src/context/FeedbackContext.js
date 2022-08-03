import React, { createContext, useState, useEffect } from 'react'
// import {v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    
 //State
    const [isLoading, setIsLoading] = useState(true)

    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    useEffect(() =>{
        fetchFeedback()
    },[])

//Fetch feedback
const fetchFeedback = async () =>{
    const res = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await res.json();
    setFeedback(data)
    setIsLoading(false)
}


//Edit Feedback
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

//Delete Feedback
    const deleteFeedback = async (id) =>{
        if(window.confirm('Are you sure you want to delete the feedback?')){

             await fetch(`/feedback/${id}`, {
                method: 'DELETE'
             })

           setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

//Add Feedback
    const addFeedback = async (newFeedback) =>{
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newFeedback)
        })
        // newFeedback.id = uuidv4(); Json server adds id automatically
        const data = await response.json()
        setFeedback([data, ...feedback])
        
    }

//Update Feedback
    const updateFeedback = async (id, updItem) =>{
        const response =  await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => ( 
            item.id === id ? {...item, ...data} : item
        )
        ))
    }


    return <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        setFeedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isLoading,

    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext