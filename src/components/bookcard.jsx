// write the book component code here
// write the book component code here
import React from 'react'

const BookCard = ({image,name,genre,author}) => {
  return (
    <div className='bookcard'>
      <img src={image} alt={name} />
      <h2><strong>Name:</strong>{name}</h2>
      <p><strong>Genre:</strong>{genre}</p>
      <p><strong>Author:</strong>{author}</p>
      
    </div>
  )
}

export default BookCard
