import { useEffect, useState } from 'react'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const BlogForm = () => {

    const [Title, setTitle] = useState("");
    const [Image, setImage] = useState("");
    const [Content, setContent] = useState("");
    const [Author, setAuthor] = useState("");
    const [blog, setBlog] = useState([]);

    //navigate
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!Title || !Image || !Content || !Author) {
            alert("Fill all fields");
            return;
        }

        await axios.post("http://localhost:3000/blogs", {
            title: Title,
            image: Image,
            content: Content,
            author: Author
        });

        alert("Blog Added Successfully!");
        // clear from
        setTitle("");
        setImage("");
        setContent("");
        setAuthor("");

        // getData(); // refresh list
        navigate("/list"); //  redirect to BlogList
    };

    const getData = async () => {
        const res = await axios.get("http://localhost:3000/blogs");
        setBlog(res.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="col-lg-6 mx-auto my-5 p-5 shadow">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">BLOG FORM</h2>

                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mt-4">
                    <input
                        type="url"
                        placeholder="Enter Image URL"
                        value={Image}
                        onChange={(e) => setImage(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mt-4">
                    <textarea
                        placeholder="Enter Content"
                        value={Content}
                        onChange={(e) => setContent(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter Author"
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="form-control"
                    />
                </div>

                <div className="mt-4">
                    <button className="btn btn-success w-100">
                        ADD BLOG
                    </button>
                </div>

            </form>
        </div>
    );
};