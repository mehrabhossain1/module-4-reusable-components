import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const handleModalClose = () => {
    setModal((prev) => !prev);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("clicked");
    if (true) {
      handleModalClose();
    }
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
            <Modal.CloseButton />
          </Modal.Header>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
