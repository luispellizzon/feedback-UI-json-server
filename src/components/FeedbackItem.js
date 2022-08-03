import React, { useContext } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  
  return (
    <Card reverse={false}>
        <div className="num-display">{item.rating}</div>
        <button  onClick={()=>deleteFeedback(item.id)} className="close">
          <FaTimes color='purple'/>
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem