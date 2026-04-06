import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>

            {/* 🔹 HERO SECTION */}
            <div
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643')",
                    height: "90vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center"
                }}
            >
                <div
                    style={{
                        background: "rgba(0,0,0,0.6)", // 🔥 thodu dark for better readability
                        padding: "40px",
                        borderRadius: "10px"
                    }}
                >
                    <h1 className="fw-bold display-4">Welcome to My Blog</h1>

                    <p className="lead mt-3">
                        Share your thoughts, ideas and stories with the world
                    </p>

                    {/* ✅ FIXED BUTTON */}
                    <button
                        type="button"   // 🔥 important (prevent unwanted form submit)
                        className="btn btn-primary mt-4 me-3"
                        onClick={() => navigate("/form")}
                    >
                        Add Blog
                    </button>

                    {/* ✅ VIEW BUTTON */}
                    <button
                        type="button"
                        className="btn btn-outline-light mt-4"
                        onClick={() => navigate("/list")}
                    >
                        View Blogs
                    </button>
                </div>
            </div>

            {/* 🔹 FEATURE SECTION */}
            <div className="container my-5">
                <h2 className="text-center mb-4">Why Use Our Blog?</h2>

                <div className="row text-center">
                    <div className="col-md-4">
                        <h4>✍️ Easy Writing</h4>
                        <p>Create blogs quickly with simple UI</p>
                    </div>

                    <div className="col-md-4">
                        <h4>🌍 Share Ideas</h4>
                        <p>Reach people and express your thoughts</p>
                    </div>

                    <div className="col-md-4">
                        <h4>⚡ Fast & Simple</h4>
                        <p>Lightweight and user-friendly experience</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;