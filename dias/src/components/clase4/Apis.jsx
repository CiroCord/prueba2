import React, { useState, useEffect } from 'react';
const Api = () => {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
// Endpoint para obtener las publicaciones de JSONPlaceholder
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Hacer la solicitud a la API
fetch(apiUrl)
.then(response => response.json())
.then(data => setPosts(data))
.catch(error => setError(error.message))
.finally(() => setLoading(false));
}, []);

return (
<div>
<h1>Posts</h1>
{loading ? (
<p>Loading...</p>
) : (
<ul>
{error ? (
<p>Error: {error}</p>
) : (
posts.map(post => (
<li key={post.id}>
<h3>{post.title}</h3>
<p>{post.body}</p>
</li>
))
)}
</ul>
)}
</div>
);
};

export default Api;