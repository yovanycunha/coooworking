import Image from 'next/image';

import Header from '~components/Header/Header';

import { Card } from './Home/components/Card';

import style from './Home/Home.module.scss';

import imageSrc from './Home/images/cowork01.jpg';

function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <div>
          {/* <Image
          src={imageSrc}
          // width={250}
          // height={150}
          layout='fill'
        /> */}
          <Card image={imageSrc} />
          <Card />
        </div>
      </main>
    </>
  );
}

export default Home;
