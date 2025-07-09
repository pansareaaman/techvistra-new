import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import BlurText from "../Components/Animation/BlurText";
import { Button, FileInput, Modal, Textarea, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { addBlog, getAllBlogs, updateBlog, deleteBlog } from "../Service/BlogService";
import { errorNotification, successNotification } from "../Service/NotificationService";
import { IconPencil } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import TextEditor from "../Service/TextEditor";

const BlogPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [showEditIcons, setShowEditIcons] = useState(false); // To toggle pencil icons
  const [data, setData] = useState({
    id: null,
    picture: "",
    heading: "",
    description: "",
  });

  // Get user from Redux store
  const user = useSelector((state) => state.user);



  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleEdit = (post) => {
    setData(post);
    setEditMode(true);
    open();
  };

  const handleSubmit = async () => {
    try {
      if (editMode) {
        await updateBlog(data);
        successNotification("Blog Updated Successfully", "Success");
        setData({ id: null, picture: "", heading: "", description: "" });
      } else {
        await addBlog(data);
        successNotification("Blog Added Successfully", "Success");
        setData({ id: null, picture: "", heading: "", description: "" });
      }
      fetchBlogs();
      close();
    } catch (error) {
      errorNotification(editMode ? "Update Failed" : "Add Blog Failed", "Error");
    }
    setEditMode(false);
  };

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      successNotification("Blog Deleted Successfully", "Success");
      setBlogs(blogs.filter((blog) => blog.id !== id)); // Remove deleted blog from state
      close();
    } catch (error) {
      errorNotification("Delete Failed", "Error");
    }
  };

  const handleFileChange = (file) => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result.split(",")[1]; // Correctly extracting Base64
      setData((prevData) => ({ ...prevData, picture: base64String }));
    };

    reader.onerror = (error) => {
      console.error("File reading error:", error);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-[#0d0c1d] font-poppins">
      {/* Hero Section */}
      <div className="py-20 text-white relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#1f1233] via-[#2E1C47] to-[#3b2f4d]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('Image/AboutBg.png')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
        </div>
        <div className="w-[85%] mx-auto text-center relative z-10">
          <h2 className="text-5xl font-serif xs-mx:text-4xl">Blog</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            <BlurText text="The latest web industry press, technology innovations, events, and some helpful pointers from us!" />
          </p>
          <div className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 text-[7rem] font-extrabold text-[#5b4974] opacity-15 tracking-wide leading-none
           lg-mx:text-[7rem]  bs-mx:text-[6rem] md-mx:text-[5rem] sm-mx:text-[4rem] xm-mx:font- xs-mx:text-[3rem]  xsm-mx:text-[2rem]">
          TECHVISTRA
        </div>
        </div>
      </div>

      {/* Show Add/Edit buttons only if user exists */}
      {user && user.id && (
        <div className="flex gap-4 m-6">
          <Button onClick={()=>{open(); setEditMode(false)  ;  }} variant="light" className="!w-28 !border-green-200">
            Add Blog
          </Button>
          <Button onClick={() => setShowEditIcons(!showEditIcons)} variant="outline" className="!w-28">
            Edit Blog
          </Button>
        </div>
      )}



      {/* Blog Cards Section */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 px-6 py-6">
        {blogs.length > 0 ? (
          blogs.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-r from-[#1e1e50] to-[#43436d] rounded-lg shadow-lg p-4 text-white border border-gray-700"
            >
              <img
                src={post.picture.startsWith("data:image/") ? post.picture : `data:image/png;base64,${post.picture}`}
                alt={post.heading}
                className="w-full h-40 object-cover rounded-md border border-gray-600"
              />

              <h2 className="text-xl font-semibold mt-4 text-[#E0B0FF] line-clamp-1 break-words overflow-hidden ">
                {post.heading}
              </h2>
              <p className="text-gray-300 text-sm mt-2 line-clamp-3 break-words overflow-hidden  ">
                {post.description}
              </p>

              <div className="pt-5" >
              <Link to={`/blog/${post.id}`} state={{ post }} >
                Read more →
              </Link>
              </div>



              {/* Show edit icon only if edit mode is active */}
              {showEditIcons && user && (
                <div className="flex justify-end mt-4">
                  <IconPencil
                    className="cursor-pointer text-green-400"
                    onClick={() => handleEdit(post)}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-white text-center mt-4">No blogs available</p>
        )}
      </div>

      {/* Modal for Adding/Editing Blog */}
      <Modal
      className="!bg-[#231A29]"
        opened={opened}
        onClose={() => {
          close();
          setData({ id: null, picture: "", heading: "", description: "" }); // Reset data
          setEditMode(false); // Ensure edit mode is reset
        }}
        // styles={{
        //   content: { backgroundColor: "#231A29" }, // Background color for modal content
        //   body: { backgroundColor: "#231A29" }, // Background color for modal body
        // }}
        
        radius="lg"
        // title={editMode ? "Edit Blog" : "Add Blog"}
        centered
      >
        <div className="w-full max-w-md px-8 py-6 shadow-lg rounded-lg bg-[#523b61] text-white">
          <div className="font-semibold text-2xl text-center">
            {editMode ? "Edit Blog" : "Add Blog"}
          </div>

          <FileInput
          label="Picture"
            onChange={handleFileChange}
            accept="image/png,image/jpeg"
            placeholder="Upload an image"
            className="mt-4  "
            styles={{ input: { backgroundColor: "transparent", color: "white", border: "1px solid rgba(255, 255, 255, 0.5)", padding: "12px", borderRadius: "8px" } }}
            
          />

          <TextInput
            name="heading"
            value={data.heading}
            onChange={handleChange}
            withAsterisk
            label="Heading"
            placeholder="Enter Heading"
            className="mt-4"
            styles={{ input: { backgroundColor: "transparent", color: "white", border: "1px solid rgba(255, 255, 255, 0.5)", padding: "12px", borderRadius: "8px" } }}

          />
          <Textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            withAsterisk
            label="Description"
            placeholder="Enter Description"
            className="mt-4"
            styles={{ input: { backgroundColor: "transparent", color: "white", border: "1px solid rgba(255, 255, 255, 0.5)", padding: "12px", borderRadius: "8px" } }}

          />

          {/* <TextEditor value={data.description} onChange={(newValue) => setData({ ...data, description: newValue })} /> */}

          <div className="flex justify-around mt-6">
            <Button onClick={handleSubmit} variant="outline">
              {editMode ? "Update Blog" : "Add Blog"}
            </Button>

            {editMode && (
              <Button color="red" onClick={() => handleDelete(data.id)} variant="outline">
                Delete
              </Button>
            )}
          </div>
          
        </div>
      </Modal>
    </div>
  );
};

export default BlogPage;
