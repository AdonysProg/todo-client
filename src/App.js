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
  }, []);

  const openModal = () => {
    setModal(true);
    console.log(modal);
  };

  return (
    <Wrapper>
      {note.map((note, index) => (
        <Card
          key={index}
          title={note.title}
          description={note.description}
          finished={note.finished}
          timestamp={note.createdAt}
          id={note._id}
        />
      ))}
      <Button clickAction={openModal}>
        <GrAdd size="32px" />
      </Button>
      <Modal show={modal} />
    </Wrapper>
  );
}

export default App;
