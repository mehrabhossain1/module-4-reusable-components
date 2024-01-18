import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from './components/ReusableForm';
import Container from './components/ui/Container';
import { z } from 'zod';

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
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
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
          <Input
            type="email"
            register={register('email')}
            errors={errors}
            label="Email"
          />
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
