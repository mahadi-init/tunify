'use client';

import { auth } from '@/db/lib/client';
import { Button, Input } from '@nextui-org/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { HiOutlineMail } from 'react-icons/hi';
import { Dispatch, SetStateAction } from 'react';

const Inputs = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z.string().min(6, { message: 'minimum 6 characters required' }),
});

type ValidationSchema = z.infer<typeof Inputs>;

export default function Signin({
  setPage,
}: {
  setPage: Dispatch<SetStateAction<'SIGNIN' | 'SIGNUP' | undefined>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(Inputs),
  });

  const loginUser = async (data: ValidationSchema) => {
    const user = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    if (user) {
      console.log('Logged In Successfully');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => loginUser(data))}
        className='m-auto flex w-full flex-col gap-8'
      >
        <p className='pb-4 text-center text-3xl font-bold'>
          Signin to continue
        </p>
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
          Signin With Email
        </Button>
      </form>
      <a
        className='relative bottom-8 cursor-pointer text-right text-xs font-medium text-red-200'
        onClick={() => setPage(undefined)}
      >
        Go back
      </a>
    </>
  );
}
