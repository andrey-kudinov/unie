import Link from 'next/link';

import styles from '@/components/Header/Header.module.css';

const pages = [
  { label: 'Новости', href: '/posts' },
  { label: 'UNIE', href: '/' },
  { label: 'Меню', href: '/menu' }
];

export const Header = () => {
  return (
    <header className={styles.header}>
      {pages.map(({ label, href }, index) => (
        <Link href={href} key={index} className={styles.link}>
          {label}
        </Link>
      ))}
    </header>
  );
};
