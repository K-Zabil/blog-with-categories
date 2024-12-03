import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../../../styles/Post.module.css';

export default function PostPage() {
    const router = useRouter();
    const { categoryId, postId } = router.query;

    const postContent = {
        // Category 1: Technology
        1: 'Artificial Intelligence is revolutionizing industries from healthcare to finance. Learn how AI is becoming a part of everyday life and what it means for the future.',
        2: 'Discover the top 5 programming languages to learn in 2024, including Python, JavaScript, and more, and how they can boost your career in tech.',
        3: 'Quantum computing is no longer a distant dream. Explore how it will transform data processing, encryption, and problem-solving in the next decade.',
        4: 'Cybersecurity is critical in today’s digital age. Learn about the latest trends and how to protect yourself from cyber threats.',
        5: 'With 5G technology rolling out globally, find out how it’s enhancing connectivity, enabling smart cities, and impacting everyday communication.',

        // Category 2: Culture
        6: 'Ancient cultures like the Egyptians, Mayans, and Greeks have left a lasting impact on modern society. Explore their achievements and cultural practices.',
        7: 'Art plays a vital role in modern society by addressing social issues and providing a medium for self-expression. Discover its importance today.',
        8: 'Language is more than just communication—it shapes cultural identity. Learn how languages influence the way we think and interact.',
        9: 'Experience the most vibrant traditional festivals around the world, from Carnival in Brazil to Diwali in India.',
        10: 'Music has evolved from ancient melodies to modern genres. Explore how music reflects cultural changes and connects people globally.',

        // Category 3: Sports
        11: 'Relive the greatest moments in sports history, from record-breaking performances to unforgettable championship wins.',
        12: 'No gym? No problem! Discover simple exercises that you can do at home to stay fit and healthy.',
        13: 'Athletic performance is driven by science. Learn about the biomechanics, nutrition, and psychology that help athletes excel.',
        14: 'Sports influence society by fostering teamwork, discipline, and community spirit. Explore their broader impact on culture.',
        15: 'From Muhammad Ali to Serena Williams, meet the top 10 most inspiring athletes who have left an indelible mark on their sports and beyond.',

        // Category 4: Health
        16: 'Mental health is essential in today’s fast-paced world. Discover tips and strategies to maintain your mental well-being.',
        17: 'Superfoods like blueberries, kale, and quinoa can boost your health. Learn how to incorporate them into your diet for maximum benefit.',
        18: 'Stay fit with these 10 simple exercises that you can do anytime, anywhere, without any equipment.',
        19: 'Mindfulness and meditation can improve focus, reduce stress, and enhance overall well-being. Learn how to start your practice today.',
        20: 'Sleep is essential for good health. Discover how it impacts your physical and mental well-being and tips for improving your sleep quality.',

        // Category 5: Travel
        21: 'Planning your next trip? Check out these top 5 must-visit destinations for 2024, from exotic beaches to bustling cities.',
        22: 'Traveling on a budget doesn’t mean missing out on experiences. Learn how to make the most of your trip without overspending.',
        23: 'Looking for hidden gems? Explore underrated travel destinations that offer unique experiences away from the crowds.',
        24: 'Solo travel is a rewarding experience. Discover tips for staying safe, making friends, and enjoying the journey.',
        25: 'Sustainable travel is the future. Learn how to minimize your environmental impact while exploring the world.',

        // Category 6: Science
        26: 'Space exploration is advancing rapidly, with new missions to Mars and beyond. Discover what’s next for humanity in the cosmos.',
        27: 'Renewable energy sources like solar and wind are transforming the global energy landscape. Learn how they’re shaping a sustainable future.',
        28: 'Marine biology uncovers the mysteries of the ocean. Explore the fascinating world of marine life and its importance to our ecosystem.',
        29: 'Genetics is unlocking new possibilities in medicine, from personalized treatments to gene editing. Learn how it’s changing healthcare.',
        30: 'Climate change is one of the biggest challenges of our time. Understand its impact on the planet and what we can do to mitigate its effects.'
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Post {postId}</h1>
            <p className={styles.content}>{postContent[postId]}</p>
            <Link href={`/category/${categoryId}`} className={styles.backLink}>
                Back to Posts
            </Link>
        </div>
    );
}