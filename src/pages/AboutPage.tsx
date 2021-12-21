import React, { FC, useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useFetchAllPostsQuery,
  useUpdatePostMutation,
} from "../services/PostService";
import { IPost } from "../types";

const AboutPage: FC = () => {
  const createTitleRef = useRef<HTMLInputElement>(null);
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const { data, isLoading, isFetching, error } = useFetchAllPostsQuery(10);

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      createPost({
        title: createTitleRef.current?.value,
        author: "Mirjahon",
      } as IPost);
    }
  };

  return (
    <Layout>
      <h1>AboutPage</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          ref={createTitleRef}
          onKeyPress={keyPressHandler}
          type="text"
          id="title"
        />
      </div>
      <div style={{ overflow: "auto" }}>
        {isLoading && <h1>Loading....</h1>}
        {isFetching && <h1>Fetching....</h1>}
        {error && <h1>Something went wrong...</h1>}
        {data?.map((post) => (
          <div className="todo-item" key={post.id}>
            <span>{JSON.stringify(post, null, 2)}</span>
            <button
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                const title = prompt("Enter title...");
                updatePost({ ...post, title: title || "" } as IPost);
              }}
            >
              Update
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
