import Image from 'next/image';

import { ICardProps } from './types';

import style from './Card.module.scss';

function Card(props: ICardProps) {
  return (
    <div className={style.container}>
      CARD
      {props.image && (
        <div className={style.image}>
          <Image src={props.image} objectFit="contain" layout="fill" />
        </div>
      )}
    </div>
  );
}

export { Card };
