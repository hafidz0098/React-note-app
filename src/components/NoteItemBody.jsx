/* eslint-disable react/prop-types */
import React from 'react';

function NoteItemBody({ title, createdAt, body }) {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="note-item__content">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{formattedDate}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

export default NoteItemBody;
