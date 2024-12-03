import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const categories = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Culture' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Health' },
    { id: 5, name: 'Travel' },
    { id: 6, name: 'Science' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <ul className={styles.categoryList}>
        {categories.map((category) => (
          <li key={category.id} className={styles.categoryItem}>
            <Link href={`/category/${category.id}`} className={styles.link}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}