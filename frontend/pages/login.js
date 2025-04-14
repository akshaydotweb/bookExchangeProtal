import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const text = await res.text(); // Read response as text first
            let data;
            try {
                // Check if the response starts like JSON data
                if (!text.trim().startsWith('{') && !text.trim().startsWith('[')) {
                    throw new Error('Response is not valid JSON.');
                }
                data = JSON.parse(text);
            } catch (error) {
                console.error('Failed to parse JSON. Please check the response data.', error);
                alert('There was an error processing the server response.');
                return;
            }
            if (res.ok) {
                if (data.user.role === 'Owner') {
                    router.push('/dashboard');
                } else {
                    router.push('/listings');
                }
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error('Fetch error:', err);
            alert('Network error. Please try again.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    required
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <p> Don't have an account ? </p>
                <button 
                    onClick={() => router.push('/register')}
                    style={{ marginTop: '10px'}}>
                    Register
                </button>
            </div>

        </div>
    );
}