'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Signin from './(pages)/Signin';
import Signup from './(pages)/Signup';

export default function Auth() {
  const [page, setPage] = useState<'SIGNIN' | 'SIGNUP'>();

  return (
    <div className='absolute bottom-0 left-0 right-0 top-0 m-auto flex h-96 w-96 flex-col'>
      {!page && (
        <div className='flex flex-col gap-6'>
          <p className='pb-4 text-center text-3xl font-bold'>
            <span className='text-orange-200'>Signin</span> or <br />
            <span className='text-orange-200'>Create New Account</span>
          </p>
          <Button
            variant='flat'
            className='font-medium !text-white'
            onClick={() => setPage('SIGNIN')}
          >
            Signin as Existing User
          </Button>
          <Button
            variant='flat'
            className='font-medium !text-white'
            onClick={() => setPage('SIGNUP')}
          >
            Signup as New User
          </Button>
          <Button
            color='success'
            variant='flat'
            className='font-medium !text-white'
            startContent={<FcGoogle size={24} />}
          >
            Login With Google
          </Button>
        </div>
      )}
      {page === 'SIGNIN' && <Signin />}
      {page === 'SIGNUP' && <Signup />}
      {page && (
        <a
          className='cursor-pointer text-right text-xs font-medium text-red-200'
          onClick={() => setPage(undefined)}
        >
          Go back
        </a>
      )}
    </div>
  );
}
