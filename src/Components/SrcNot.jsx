import { Link } from 'react-router';

const SrcNot = () => {
  return (
    <div className='mt-10 flex flex-col gap-8 items-center text-center'>
      <h2 className='text-6xl font-bold'>No Apps Found</h2>
      <Link className='px-4 py-3 rounded-lg bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold' to="/apps">Show All Apps</Link>
    </div>
  );
};

export default SrcNot;