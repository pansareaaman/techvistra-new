import { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BlogDesc = () => {
  const { id } = useParams();
  const location = useLocation();
  const blog = location.state?.post;
  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-2xl">
        Blog not found 😢
      </div>
    );
  }

  return (
    <div className="bg-[#0d0c1d] font-poppins min-h-screen py-12 pt-28 px-4 md:px-8 lg:px-16 text-white">
      {/* Blog Image */}
      <div className="max-w-5xl mx-auto">
        <img
          src={`data:image/png;base64,${blog.picture}`}
          alt={blog.heading}
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg shadow-md border border-gray-700"
        />
      </div>

      {/* Blog Heading */}
      <div className="max-w-5xl mx-auto text-center mt-6 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E0B0FF] ">
          {blog.heading}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto bg-[#1e1e50] p-6 sm:p-8 mt-6 rounded-lg shadow-lg border border-gray-700">
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg break-words whitespace-pre-line">
          {blog.description}
        </p>
      </div>

      {/* Back Button */}
      <div className="text-center mt-10">
        <div className="text-[#E0B0FF] hover:underline text-lg " onClick={()=>navigate(-1)} >
          ← Back to Blogs
        </div>
      </div>
    </div>
  );
};

export default BlogDesc;
