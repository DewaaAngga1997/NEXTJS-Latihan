import Link from 'next/link';
import Styles from './Header.module.css';

export default function Header() {
  return (
    <header className={Styles.container}>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={Styles.item}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={Styles.item}>
          <Link href="/users">
            <a>User</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
