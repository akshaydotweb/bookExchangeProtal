import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const contentType = res.headers.get('content-type');
            if (contentType && contentType.indexOf('application/json') !== -1) {
                const data = await res.json();
                console.log(data);
                if (res.ok) {
                    alert(data.message);
                    router.push('/login');
                } else {
                    alert(data.message);
                }
            } else {
                const text = await res.text();
                console.error('Expected JSON, got:', text);
                alert('There was an error processing the server response.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Network error. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="mobile" placeholder="Mobile" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} type="email" required />
                <input name="password" placeholder="Password" onChange={handleChange} type="password" required />
                <select name="role" onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Owner">Owner</option>
                    <option value="Seeker">Seeker</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}