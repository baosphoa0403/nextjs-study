import React from 'react'

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();
  const paths = posts.map((item)=>{
    return {params: {id: item.id.toString()}}
  });
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context) {
  console.log(context.params);
  //Error: getStaticPaths is required for dynamic SSG pages and is missing for '/coders/[id]'.
// Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value sẽ bị lỗi này do nó nextjs chưa map dc 1 array path 
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
  const data = await res.json();
  console.log(data);
  return {
    props: {coder: data}, // will be passed to the page component as props
  }
}
export default function Detail({coder}) {
  console.log(coder + "1");
  return (
    <div>
      <p>Detail {coder.name}</p>
      <p>address {coder.address.street}</p>
      <p>Detail {coder.address.suite}</p>
      <p>Detail {coder.address.city}</p>
    </div>
  )
}
