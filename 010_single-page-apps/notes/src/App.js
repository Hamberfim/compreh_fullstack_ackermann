import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components';
import { useState } from 'react';

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateNote, setUpdateNote] = useState();

  return (
    <>
      <NavBar width="100%" marginBottom="15px" overrides={{ Button31632483: { onClick: () => setShowCreateModal(true) } }} />
      <div className="container">
        <NoteUICollection
          overrides={{ NoteUICollection: { templateColumns: 'repeat(auto-fill, minmax(325px, 1fr))' } }}
          overrideItems={({ item, idx }) => {
            return {
              overrides: {
                EditButton: {
                  as: 'button',
                  onClick: () => {
                    setShowUpdateModal(true);
                    setUpdateNote(item, idx);
                  },
                },
              },
            };
          }}
        />
      </div>
      <div className="modal" style={{ display: showCreateModal === false && 'none' }}>
        <CreateNote overrides={{ MyIcon: { as: 'button', onClick: () => setShowCreateModal(false) } }} />
      </div>
      <div className="modal" style={{ display: showUpdateModal === false && 'none' }}>
        <UpdateNote
          note={updateNote}
          overrides={{
            MyIcon: {
              as: 'button',
              onClick: () => setShowUpdateModal(false),
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
