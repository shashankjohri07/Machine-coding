import React, { useState } from "react";

function CreatePost({ addPost }) {
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) return;
    const newPost = { image }; 
    addPost(newPost);
    setImage(""); 
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 p-4"
    >
      <input
        type="text"
        placeholder="Image URL"
        className="border rounded px-3 py-2 w-72"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
      >
        Post
      </button>
    </form>
  );
}

export default CreatePost;
