import Link from 'next/link';

import styles from '@/components/Footer/Footer.module.css';

const pages = [
  { label: 'Новости', href: '/posts' },
  { label: 'UNIE', href: '/' },
  { label: 'Меню', href: '/menu' }
];

export const Footer = () => (
  <footer className={styles.footer}>
      {/* {pages.map(({ label, href }, index) => (
        <Link href={href} key={index} className={styles.link}>
          {label}
        </Link>
      ))} */}
  </footer>
);
