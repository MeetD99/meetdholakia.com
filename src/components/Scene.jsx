import Spline from '@splinetool/react-spline';
import { isMobile } from 'react-device-detect';

export default function Scene() {
  return (
    <div className='md:w-[80vw] sm:w-[100vw] w-[100vw] h-[82vh] absolute lg:top-[30%] lg:left-[-18%] md:top-[40%] md:left-[-10%] sm:top-[35%] sm:left-[-10%] top-[35%] left-[0%]'>
      <Spline scene="https://prod.spline.design/pufCj7qqaQ11UhIg/scene.splinecode" /> 
    </div>
  );
}
