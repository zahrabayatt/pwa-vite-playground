import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch posts. Please try again later.");
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default PostList;
