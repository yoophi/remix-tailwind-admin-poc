import React from "react";
import { useLoaderData } from "remix";

export function loader({ params }) {
  console.log({ params });
  return { params };
}

const PostIndex = () => {
  const data = useLoaderData();
  return (
    <>
      <div>Post Detail</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default PostIndex;
