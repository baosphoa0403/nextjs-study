import React from "react";
import Head from "next/head";
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default function AllCoders({ posts }) {
  return (
    <div>
      <Head>
        <title>AllCoders</title>
        <meta name="keywords" content="AllCoders" />
      </Head>
      AllCoders
      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{color: "black"}}>
            <a href={`/coders/${post.id}`}>
              {post.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
