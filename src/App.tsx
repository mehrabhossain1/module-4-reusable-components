import { FieldValues, useForm } from 'react-hook-form';
import { Form, FormSection, FormSubmit } from './components/ReusableForm';
import Container from './components/ui/Container';

function App() {
  // const [modal, setModal] = useState(false);

  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("clicked");
  // };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full"
              type="text"
              id="name"
              {...register('name')}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
        </FormSection>
        <FormSubmit />
      </Form>
      {/* <NormalForm /> */}

      {/* <div className="relative h-screen w-full flex justify-center items-center">
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
      </div> */}
    </Container>
  );
}

export default App;
