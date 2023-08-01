/* eslint-disable react/prop-types */
import React from 'react';

function DeleteButton({ id, onDelete }) {
  // eslint-disable-next-line react/button-has-type
  return <button className="note-item__delete-button" onClick={() => onDelete(id)}>DELETE</button>;
}

export default DeleteButton;
