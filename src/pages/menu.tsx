import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const images = [
  { src: '/menu-1.jpg', w: 720, h: 1280 },
  { src: '/menu-2.jpg', w: 720, h: 1280 },
  { src: '/menu-3.jpg', w: 1280, h: 910 }
];

export default function Menu() {
  return (
    <>
      <Head>
        <title>Unie - Menu</title>
      </Head>
      <section className='menu container'>
        <Swiper
          modules={[A11y, EffectCube]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map(({ src, w, h }, index) => (
            <SwiperSlide key={index}>
              <Image className='' src={src} alt='menu' width={w} height={h} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
