import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import "./Jumbotron.css";
const Jumbotron = () => {
  return (
    <header>
      <figure>
        <img
          src="https://www.moves.club/wp-content/uploads/5A4216E8-6CF9-419F-B7CA-F2013582DEDF.jpeg"
          alt="colazione"
        />
      </figure>
      <section>
        <h6>FEATURED POSTS</h6>
        <h1>
          <span>I am A Blogger & I Love Foods</span>
        </h1>
        <hr />
        <p>
          A small named Duden flows by their place and supplies it with the
          necessary regelialia
        </p>
        <button className="btn-top">
          Read More
          <FaArrowRight />
        </button>
        <div>
          <button className="btn-bb">
            <FaArrowLeft />
            Forward
          </button>
          <button className="btn-bb">
            Next
            <FaArrowRight />
          </button>
        </div>
      </section>
    </header>
  );
};

export default Jumbotron;
