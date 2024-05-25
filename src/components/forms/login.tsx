import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Input from '../common/input';
import Button from '../common/button';

function FormLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleClick() {
    try {
      console.log(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Email atau password salah');
      return;
    }
  }
  return (
    <div className='max-w-[640px] text-left shadow-lg p-6 rounded bg-white w-full'>
      <h2 className='text-lg font-bold mb-6'>Login</h2>
      <section className='flex flex-col gap-6'>
        <div>
          <span className='block mb-2 text-left'>
            Email<span className='text-red-600'>*</span>
          </span>
          <Input
            placeholder='Masukan email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <span className='block mb-2 text-left'>
            Password<span className='text-red-600'>*</span>
          </span>
          <Input
            placeholder='Masukan password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Button onClick={handleClick} className='!w-full'>
            Login
          </Button>
        </div>
      </section>
    </div>
  );
}

export default FormLogin;
