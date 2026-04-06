import demon from "../assets/images/demon.png"

function AboutSection() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6 text-center">
            <img src={demon} className="img-fluid about-img" alt="" />
          </div>

          <div className="col-lg-6 text-white">
            <h1 className="fw-bold mb-4">
              Find out about us <br /> in history
            </h1>

            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="button">
              <button className="btn-install">Install Now</button>
              <button className="btn-watch">Watch Tutorial</button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection