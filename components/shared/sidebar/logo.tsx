import Image from 'next/image';
import large from '@/public/logo.png';
import tiny from '@/public/logo.png';
import { useSidebar } from '../../ui/sidebar';

const SideLogo = () => {
  const { state } = useSidebar();

  return (
    <div className="">
      <Image
        src={state === 'collapsed' ? tiny.src : large.src}
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default SideLogo;
