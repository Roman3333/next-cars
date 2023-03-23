import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import styles from './header.module.scss';

type ILink = { href: string; name: string };

const Header: FC = () => {
  const links: ILink[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/cars', name: 'Cars' },
  ];

  const { pathname } = useRouter();

  return (
    <header>
      <div className="container">
        <div className={styles.header__inner}>
          <div>logo</div>
          <nav className={styles.header__nav}>
            <ul className={styles.header__ul}>
              {links.map((link) => {
                return (
                  <li
                    className={classNames(styles.header__li, {
                      [styles.header__active]: pathname === link.href,
                    })}
                    key={link.name}>
                    <Link className={styles.header__link} href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
