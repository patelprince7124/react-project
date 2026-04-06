import "../assets/css/home.css"
import banner from "../assets/images/bannerbg.png"

const Home = () => {
  return (
    <>
      <div
        className="hero"
        style={{
          background: `url(${banner}) no-repeat right center`
        }}
      >

        <div className="hero-content">
          <h1>Best Highlights <br /> Of The Latest</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="btn-watch">Watch Tutorial</button>

        </div>

      </div>
    </>
  )
}

export default Home