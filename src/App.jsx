import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";

// Static posts array
const posts = [
  {
    id: 1,
    caption: "Sunset vibes 🌅",
    image: "/images/sunset.jpg",
  },
  {
    id: 2,
    caption: "Weekend chill 😎",
    image: "/images/chill.jpg",
  },
];

function App() {
  const [likedPosts, setLikedPosts] = useState([]); // Track liked posts

  const toggleLike = (id) => {
    setLikedPosts((prevLikedPosts) => {
      if (prevLikedPosts.includes(id)) {
        return prevLikedPosts.filter((postId) => postId !== id); // Un-like
      }
      return [...prevLikedPosts, id]; // Like
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-6 flex flex-col gap-6 items-center">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            liked={likedPosts.includes(post.id)}
            toggleLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
