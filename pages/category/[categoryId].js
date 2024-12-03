import Link from 'next/link';
import styles from '../../styles/Category.module.css';


const CategoryPage = ({ category, posts }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{category.name}</h1>
            <ul className={styles.postList}>
                {posts.map(post => (
                    <Link href={`/category/${category.id}/post/${post.id}`} className={styles.link}>
                        <li key={post.id} className={styles.postItem}>
                            {post.title}
                        </li>
                    </Link>
                ))}
            </ul>
            <Link href="/" className={styles.backLink}>Back to Home</Link>
        </div>
    );
};
export async function getStaticPaths() {
    const res = await fetch('http://localhost:5000/categories');
    const categories = await res.json();
    const paths = categories.map(category => ({
        params: { categoryId: category.id.toString() }
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { categoryId } = params;

    const resCategory = await fetch(`http://localhost:5000/categories/${categoryId}`);
    const category = await resCategory.json();
    const resPosts = await fetch(`http://localhost:5000/posts?categoryId=${categoryId}`);
    const posts = await resPosts.json();

    return {
        props: {
            category,
            posts
        },
    };
}

export default CategoryPage;