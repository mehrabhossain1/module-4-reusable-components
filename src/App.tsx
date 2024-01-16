import { useState } from 'react'
import Button from './components/ui/Button'
import Container from './components/ui/Container'
import Modal from './components/ui/Modal'

function App() {
  const [modal, setModal] = useState(false)

  const handleModalClose = () => {
    setModal((prev) => !prev)
  }

  // */ comment
  return (
    <Container>
      <div className='relative h-screen w-full flex justify-center items-center'>
        <Button className='z-10' onClick={() => setModal((prev) => !prev)}>
          Open Modal
          {/* comment */}
        </Button>
        <Modal isOpen={modal} onClose={handleModalClose}>
          <h1>This is a Modal</h1>
        </Modal>
      </div>
    </Container>
  )
}

export default App
