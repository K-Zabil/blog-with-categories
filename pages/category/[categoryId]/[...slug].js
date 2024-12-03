import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function CatchAll() {
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

    return (
        <div>
            <h1>Page not found</h1>
            <Link href="/">Return to Home</Link>
        </div>
    );
}