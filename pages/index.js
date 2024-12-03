import Link from 'next/link';
import styles from '../styles/Home.module.css';

const HomePage = ({ categories }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Categories</h1>
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <Link href={`/category/${category.id}`} className={styles.link}>
            <li key={category.id} className={styles.categoryItem}>
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:5000/categories');
  const categories = await res.json();

  return {
    props: {
      categories
    },
  };
}

export default HomePage;