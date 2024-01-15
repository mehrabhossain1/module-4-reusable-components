const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <h1>This is modal</h1>
        </div>
      )}
    </>
  )
}

export default Modal
