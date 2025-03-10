"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  fetchPosts,
  createPost,
  clearNewPost,
  Post,
  NewPost,
} from "@/store/slices/apiDemoSlice";

export default function ApiDemo() {
  const dispatch = useAppDispatch();
  const { posts, newPost, loading, error } = useAppSelector(
    (state) => state.apiDemo
  );

  const [formData, setFormData] = useState<NewPost>({
    title: "",
    body: "",
    userId: 1, // Default user ID
  });

  useEffect(() => {
    // Fetch posts when component mounts
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPost(formData));
    // Reset form
    setFormData({
      title: "",
      body: "",
      userId: 1,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">API Demo with Redux & Axios</h1>

      {/* Create Post Form */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="body"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            {loading ? "Submitting..." : "Create Post"}
          </button>
        </form>

        {/* Show success message when post is created */}
        {newPost && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
            <p className="font-medium">Post created successfully!</p>
            <p>Title: {newPost.title}</p>
            <button
              onClick={() => dispatch(clearNewPost())}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Show error if any */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
            <p>Error: {error}</p>
          </div>
        )}
      </div>

      {/* Posts List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Posts from API</h2>

        {loading && posts.length === 0 ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div key={post.id} className="border-b pb-4">
                <h3 className="text-lg font-medium">{post.title}</h3>
                <p className="text-gray-600 mt-1">{post.body}</p>
                <p className="text-sm text-gray-500 mt-2">Post ID: {post.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No posts found.</p>
        )}

        {/* Refresh button */}
        <button
          onClick={() => dispatch(fetchPosts())}
          disabled={loading}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:bg-gray-100"
        >
          {loading ? "Refreshing..." : "Refresh Posts"}
        </button>
      </div>
    </div>
  );
}
