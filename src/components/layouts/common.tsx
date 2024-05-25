import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom';
function CommonLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  function handleLogout() {
    Cookies.remove('Authorization');
    navigate('/login');
  }
  return (
    <section className='flex h-screen'>
      <div role='navigation flex-1'>
        <Sidebar />
      </div>
      <div className='bg-[#F9FAFC] w-full'>
        <div className='py-4 px-8 bg-white justify-between flex border-b border-b-neutral-200'>
          <div></div>
          <button className='text-sm font-bold' onClick={handleLogout}>
            Logout
          </button>
        </div>
        <main className='p-6'>{children}</main>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className='p-6 w-[207px]'>
      <h2 className='text-base font-bold'>Dashboard</h2>
      <section className='mt-8'>
        <Link className='flex items-center gap-2' to='/'>
          <box-icon name='home' size='sm' color='#2563EB'></box-icon>
          <span className='text-sm font-bold text-[#2563EB]'>Home</span>
        </Link>
      </section>
      <section className='mt-8'>
        <h3 className='text-xs text-neutral-600 mb-4'>Account</h3>
        <Link className='flex items-center gap-2  mb-4' to='/account/create'>
          <box-icon name='user-plus' size='sm'></box-icon>
          <span className='text-blueGray-400 text-sm'>Register Account</span>
        </Link>
        <Link className='flex items-center gap-2  mb-4' to='/account'>
          <box-icon name='user' size='sm'></box-icon>
          <span className='text-blueGray-400 text-sm'>Manage Account</span>
        </Link>
      </section>
    </aside>
  );
}

export default CommonLayout;
