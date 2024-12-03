import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Category.module.css';

export default function CategoryPage() {
    const router = useRouter();
    const { categoryId } = router.query;

    const posts = [
        // Category 1: Technology
        { id: 1, title: 'The Rise of AI in Everyday Life', categoryId: '1' },
        { id: 2, title: 'Top 5 Programming Languages in 2024', categoryId: '1' },
        { id: 3, title: 'How Quantum Computing Will Change the Future', categoryId: '1' },
        { id: 4, title: 'Cybersecurity Trends: Staying Safe in the Digital Age', categoryId: '1' },
        { id: 5, title: 'The Impact of 5G Technology on Connectivity', categoryId: '1' },

        // Category 2: Culture
        { id: 6, title: 'Exploring Ancient Cultures of the World', categoryId: '2' },
        { id: 7, title: 'The Role of Art in Modern Society', categoryId: '2' },
        { id: 8, title: 'How Language Shapes Cultural Identity', categoryId: '2' },
        { id: 9, title: 'Traditional Festivals You Should Experience', categoryId: '2' },
        { id: 10, title: 'The Evolution of Music Through the Ages', categoryId: '2' },

        // Category 3: Sports
        { id: 11, title: '10 Greatest Moments in Sports History', categoryId: '3' },
        { id: 12, title: 'How to Stay Fit Without a Gym', categoryId: '3' },
        { id: 13, title: 'The Science Behind Athletic Performance', categoryId: '3' },
        { id: 14, title: 'The Influence of Sports on Society and Culture', categoryId: '3' },
        { id: 15, title: 'Top 10 Most Inspiring Athletes of All Time', categoryId: '3' },

        // Category 4: Health
        { id: 16, title: 'The Importance of Mental Health in Daily Life', categoryId: '4' },
        { id: 17, title: 'Superfoods to Boost Your Health in 2024', categoryId: '4' },
        { id: 18, title: '10 Simple Exercises for a Healthy Lifestyle', categoryId: '4' },
        { id: 19, title: 'The Benefits of Mindfulness and Meditation', categoryId: '4' },
        { id: 20, title: 'How Sleep Affects Your Overall Health', categoryId: '4' },

        // Category 5: Travel
        { id: 21, title: 'Top 5 Destinations to Visit in 2024', categoryId: '5' },
        { id: 22, title: 'How to Travel on a Budget Without Sacrificing Fun', categoryId: '5' },
        { id: 23, title: 'Hidden Gems: Underrated Travel Destinations', categoryId: '5' },
        { id: 24, title: 'The Ultimate Guide to Solo Travel', categoryId: '5' },
        { id: 25, title: 'Sustainable Travel: How to Explore Responsibly', categoryId: '5' },

        // Category 6: Science
        { id: 26, title: 'The Latest Advancements in Space Exploration', categoryId: '6' },
        { id: 27, title: 'How Renewable Energy Is Transforming the World', categoryId: '6' },
        { id: 28, title: 'The Fascinating World of Marine Biology', categoryId: '6' },
        { id: 29, title: 'The Role of Genetics in Modern Medicine', categoryId: '6' },
        { id: 30, title: 'The Impact of Climate Change on the Planet', categoryId: '6' }
    ];

    const filteredPosts = posts.filter((post) => post.categoryId === categoryId);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Category: {categoryId}</h1>
            {filteredPosts.length > 0 ? (
                <ul className={styles.postList}>
                    {filteredPosts.map((post) => (
                        <li key={post.id} className={styles.postItem}>
                            <Link href={`/category/${categoryId}/post/${post.id}`} className={styles.link}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No posts found for this category.</p>
            )}
            <Link href="/" className={styles.backLink}>Back to Home</Link>
        </div>
    );
}