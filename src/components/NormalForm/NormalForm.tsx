import { useForm } from 'react-hook-form';
import cn from '../../utils/cn';

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('border border-red-500 w-full p-5 mx-auto', {
        'max-w-5xl': double,
        'max-w-md': !double,
      })}
    >
      <div
        className={cn(
          'border border-blue-500 grid grid-cols-1 justify-items-center gap-5',
          {
            'md:grid-cols-2': double,
          }
        )}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="w-full border border-gray-400 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            type="text"
            id="name"
            {...register('name')}
          />
        </div>
        <div className="w-full max-w-md">
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
        <div className="w-full max-w-md">
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
