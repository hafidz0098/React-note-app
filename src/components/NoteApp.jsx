import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const { notes } = this.state;
    const filteredNotes = notes.filter((note) => note.id !== id);
    this.setState({ notes: filteredNotes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date().toISOString(),
        },
      ],
    }));
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="note-app__body">
        <h1 className="note-app__header">Aplikasi Note</h1>
        <h2>Tambah Note</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Daftar Notes</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NoteApp;
