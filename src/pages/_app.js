import '@/styles/globals.css';

/* transitions required */
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';

/* transitions components */
import Stairs from '@/components/Layout/Stairs';
import Wave from '@/components/Layout/Wave';


export default function App({ Component, pageProps, router }) {
  return (
    <div className='main'>
      <div className="header">
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
      </div>

      <AnimatePresence mode='wait'>
        {/* <Wave /> */}
        <Stairs />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );

}
