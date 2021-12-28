import { Link } from "remix";

const PostIndex = () => {
  return (
    <>
      <div>Post Index</div>
      <ul>
        {[1, 2, 3].map((id) => (
          <li>
            <Link to={`/posts/${id}`}>{id} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostIndex;
