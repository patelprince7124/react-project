import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditBlog = () => {

    const { id } = useParams(); //  get id from URL
    const navigate = useNavigate();

    const [Title, setTitle] = useState("");
    const [Image, setImage] = useState("");
    const [Content, setContent] = useState("");
    const [Author, setAuthor] = useState("");

    // 🔹 get single blog data
    const getSingleData = async () => {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`);
        setTitle(res.data.title);
        setImage(res.data.image);
        setContent(res.data.content);
        setAuthor(res.data.author);
    };

    useEffect(() => {
        getSingleData();
    }, []);

    // 🔹 update function
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:3000/blogs/${id}`, {
            title: Title,
            image: Image,
            content: Content,
            author: Author
        });

        alert("Blog Updated Successfully!");
        navigate("/list"); // redirect after update
    };

    return (
        <div className="col-lg-6 mx-auto my-5 p-5 shadow">
            <form onSubmit={handleSubmit}>
                <h2 className="text-center">UPDATE BLOG</h2>

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
                        UPDATE BLOG
                    </button>
                </div>

            </form>
        </div>
    );
}

export default EditBlog;