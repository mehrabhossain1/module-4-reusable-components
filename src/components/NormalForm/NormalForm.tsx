import { useForm } from 'react-hook-form';

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-red-500 max-w-5xl p-5 mx-auto"
    >
      <div className="border border-blue-500 grid grid-cols-2 gap-5">
        <div className="w-full">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Email
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">
            Password
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
      </div>
      {/* <select>
        <option>one</option>
        <option>two</option>
        <option>three</option>
        <option>four</option>
      </select> */}
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default NormalForm;
