import React from "react";
import { FaHeart, FaRegComment } from "react-icons/fa";

function Post({ post, toggleLike }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 mb-6 w-full max-w-md">
      <img
        src={post.image}
        alt="post"
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

  

      <div className="flex items-center gap-6">
        <button
          onClick={() => toggleLike(post.id)}
          className="flex items-center gap-2"
        >
          <FaHeart color={post.isLiked ? "red" : "gray"} />
          <span className="text-sm">{post.isLiked ? "Liked" : "Like"}</span>
        </button>

        <button className="flex items-center gap-2">
          <FaRegComment />
          <span className="text-sm">Comment</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
