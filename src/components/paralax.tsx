"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import useDimension from './useDimension';

const images: string[] = [
  "image.jpg",
  "image1.jpg",
  "news2.jpg",
  "image2.jpg",
  "news1.jpg",
  "image4.jpg",
  "image9.jpg",
  "fraud.png",
  "image6.jpg",
  "image11.jpg",
  "news.webp",
  "news1.jpg",
  "image9.jpg",
  "image10.jpg",

];

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
}

const Home: React.FC = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image src={`/images/parallax/${src}`} fill alt="image" />
        </div>
      ))}
    </motion.div>
  );
};

export default Home;
