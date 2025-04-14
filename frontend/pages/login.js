import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (res.ok) {
            if (data.user.role === 'Owner') {
                router.push('/dashboard'); 
            } else {
                router.push('/listings'); 
            }
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}