import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  return (
    <Container>
      <div className="relative h-screen w-full flex justify-center items-center">
        <Button
          className="z-10"
          onClick={() => setModal((prev) => !prev)}
        >
          Open Modal
        </Button>
        <Modal
          isOpen={modal}
          onClose={handleModalClose}
        >
          <Modal.Header>
            <h1>This is modal title</h1>
            <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <p>This is a Modal content</p>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
