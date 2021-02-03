import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import { GrAdd } from 'react-icons/gr';
import { getNotes } from './api';
import Modal from './components/Modal';

function App() {
  const [note, setNote] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getNotes().then((res) => {
      setNote(res.data);
    });
  }, [setNote]);

  const openModal = () => {
    setModal(true);
  };

  const refreshNotes = () => {
    getNotes().then((res) => {
      setNote(res.data);
    });
  };

  return (
    <Wrapper>
      {note.map((note, index) => {
        let date = new Date(note.createdAt);
        let timestamp = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate()
        ).toLocaleDateString();
        return (
          <Card
            key={index}
            title={note.title}
            description={note.description}
            timestamp={timestamp}
            id={note._id}
            onDelete={refreshNotes}
          />
        );
      })}
      <Button clickAction={openModal}>
        <GrAdd size="32px" />
      </Button>
      <Modal
        show={modal}
        onClose={() => setModal(false)}
        onCreate={refreshNotes}
      />
    </Wrapper>
  );
}

export default App;
