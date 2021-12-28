import { Link, Outlet } from "remix";

const PostLayout = () => {
  return (
    <div>
      <h1 className="p-4 bg-gray-200 text-2xl">
        <Link to="/posts">Post</Link>
      </h1>
      <div className="p-4 border border-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default PostLayout;
