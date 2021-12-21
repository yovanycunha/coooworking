import Image from 'next/image'

import style from './Home/Home.module.scss';

import imageSrc from './Home/images/cowork01.jpg'

function Home() {
  return (
    <main className={style.main}>
      <div>
        <Image
          src={imageSrc}
          width={150}
          height={150}
        />
      </div>
    </main>
  )
}

export default Home;