import { v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ( {children} ) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item has id1',
            rating: 6
        },

        {
            id: 2,
            text: 'This item has id2',
            rating: 8
        },

        {
            id: 3,
            text: 'This item has id3',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    
    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem}: item)))
    } 


    return <FeedbackContext.Provider value= {{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        
    }} >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext