import Container from './components/ui/Container'

function App() {
  return (
    <Container>
      <div className='h-screen w-full flex justify-center items-center'>
        <h1>This is text</h1>
        <h2>This is text</h2>
        <button className='btn btn-primary'>This is a button</button>
        <button className='btn btn-danger'>This is a button</button>
      </div>
    </Container>
  )
}

export default App
