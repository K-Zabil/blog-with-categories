import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../../styles/Post.module.css';

const PostPage = ({ post }) => {
    const router = useRouter();
    const { categoryId } = router.query;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content}>{post.content}</p>
            <Link href={`/category/${categoryId}`} className={styles.backLink}>
                Back to Posts
            </Link>
        </div>
    );
};

export async function getServerSideProps({ params }) {
    const { categoryId, postId } = params;

    const res = await fetch(`http://localhost:5000/posts/${postId}`);
    const post = await res.json();

    return {
        props: {
            post
        },
    };
}

export default PostPage;