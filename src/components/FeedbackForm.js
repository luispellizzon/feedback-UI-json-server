import React, {useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackForm = () => {
    const [ text, setText] = useState('')
    const [ rating, setRating] = useState(10)
    const [ btnDisabled, setBtnDisabled] = useState(true)
    const [ message, setMessage] = useState('')
    const {addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit } = useContext(FeedbackContext)
    
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])
    
    const handleTextChange = (event) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(event.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else{
                addFeedback(newFeedback)
            }
            
            setText('')
            setFeedbackEdit({
                item:  {},
                edit: false
            })
        }
        setBtnDisabled(true) // 👈  add this line to reset disabled
        setRating(10) //👈 add this line to set rating back to 10
        
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect  select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder='Write a review' 
                value={text}/>
                <Button type ='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm