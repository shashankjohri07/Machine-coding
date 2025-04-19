import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";


const posts = [
  {
    id: 1,
    image: "/images/sunset.jpg",
    isLiked: false,
  },
  {
    id: 2,
    image: "/images/chill.jpg",
    isLiked: false,
  },
];

function App() {
  const [allposts, setAllPosts] = useState(posts);

  const toggleLike = (id) => {
    setAllPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, isLiked: !post.isLiked };
        }
        return post;
      });
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="mt-6 flex flex-col gap-6 items-center">
        {allposts.map((post) => (
          <Post key={post.id} post={post} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
}

export default App;
