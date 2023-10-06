'use client';

import { auth } from '@/db/lib/client';
import { Button, Input } from '@nextui-org/react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiOutlineMail } from 'react-icons/hi';

const Inputs = z.object({
  firstName: z.string().min(2, { message: 'firstName too short' }),
  lastName: z.string(),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z.string().min(6, { message: 'minimum 6 characters required' }),
});

type ValidationSchema = z.infer<typeof Inputs>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(Inputs),
  });

  const loginOrCreate = async (data: ValidationSchema) => {
    const user = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    if (user) {
      console.log('User Created');
    }
  };

  return (
    <form
      onSubmit={handleSubmit((data) => loginOrCreate(data))}
      className='m-auto flex w-full flex-col gap-8'
    >
      <p className='pb-4 text-center text-3xl font-bold'>Signin to continue</p>
      <div className='flex gap-2'>
        {/* TODO: Implement FirstName LastName */}
        <Input
          size='sm'
          type='text'
          label='FirstName'
          {...register('firstName', { required: true })}
          errorMessage={errors.firstName && <span>first name too short</span>}
        />
        <Input
          size='sm'
          type='text'
          label='LastName'
          {...register('lastName', { required: true })}
        />
      </div>
      <Input
        size='sm'
        type='email'
        label='Email'
        {...register('email', { required: true })}
        errorMessage={errors.email && <span>enter valid Email</span>}
      />
      <Input
        size='sm'
        type='password'
        label='Password'
        {...register('password', { required: true })}
        errorMessage={
          errors.password && <span>minimum 6 characters required</span>
        }
      />
      <Button
        className='font-medium'
        type='submit'
        variant='bordered'
        startContent={<HiOutlineMail size={24} />}
      >
        Signup With Email
      </Button>
    </form>
  );
}
