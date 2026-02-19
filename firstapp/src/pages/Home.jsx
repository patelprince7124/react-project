import React from "react";

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">

                    <h1 className="mb-4">Welcome to Our Hotel</h1>

                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                        alt="Hotel"
                        className="img-fluid rounded shadow"
                    />

                    <p className="mt-4 fs-5 text-secondary">
                        Welcome to our luxury hotel where comfort meets elegance.
                        We provide the best services with modern rooms, delicious food,
                        and a peaceful environment for your perfect stay.
                        Enjoy unforgettable moments with your family and friends at our hotel.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Home;
