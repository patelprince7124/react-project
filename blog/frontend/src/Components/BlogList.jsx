import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaEdit, FaTrash } from 'react-icons/fa';

export const BlogList = () => {
    const [blog, setBlog] = useState([]);
    const [liked, setLiked] = useState({});

    const [search, setSearch] = useState("");
    const [authorFilter, setAuthorFilter] = useState("");

    const getData = async () => {
        try {
            const res = await axios.get("http://localhost:3000/blogs");
            setBlog(res.data);
        } catch (error) {
            toast.error("Failed to load blogs");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteBlog = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            await axios.delete(`http://localhost:3000/blogs/${id}`);
            toast.success("Blog deleted successfully");
            getData();
        } catch (error) {
            toast.error("Failed to delete blog");
        }
    };

    const toggleLike = (id) => {
        setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    //  FILTER LOGIC
    const filteredBlogs = blog.filter((item) => {
        return (
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            item.author.toLowerCase().includes(authorFilter.toLowerCase())
        );
    });

    return (
        <div className="container mt-5">

            <h2 className="fw-bold mb-4 text-center">📝 Blog List</h2>

            {/* 🔍 Search + Filter UI */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Filter by author..."
                        value={authorFilter}
                        onChange={(e) => setAuthorFilter(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                {filteredBlogs.length === 0 && (
                    <p className="text-center">No matching blogs found 😢</p>
                )}

                {filteredBlogs.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card h-100 shadow-sm border-0 blog-card">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="card-img-top"
                                height="220"
                                style={{ objectFit: "cover" }}
                            />

                            <div className="card-body">
                                <h5 className="card-title fw-bold">{item.title}</h5>
                                <p className="card-text text-muted">
                                    {item.content.slice(0, 80)}...
                                </p>
                                <small className="text-muted">
                                    author: {item.author}
                                </small>
                            </div>

                            <div className="card-footer bg-transparent border-0 d-flex justify-content-between align-items-center">
                                <button
                                    className={`btn btn-sm ${liked[item.id] ? 'text-danger' : 'btn-outline-secondary'}`}
                                    onClick={() => toggleLike(item.id)}
                                >
                                    <FaHeart className="me-1" />
                                    {liked[item.id] ? 'Liked' : 'Like'}
                                </button>

                                <div>
                                    <NavLink
                                        to={`/edit/${item.id}`}
                                        className="btn btn-sm btn-outline-primary me-2"
                                    >
                                        <FaEdit className="me-1" /> Edit
                                    </NavLink>

                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() => deleteBlog(item.id)}
                                    >
                                        <FaTrash className="me-1" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};