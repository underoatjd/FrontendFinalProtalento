import "./stylescarusel.css";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.postimg.cc/VNbmsKG7/wallhaven-01jo90.jpg"
              className="d-block w-50 mx-auto"
              alt="..."/>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/ZT0qDccv/wallhaven-0q27k5.jpg"
              className="d-block w-50 mx-auto"
              alt="..."/>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/tbKg2FV7/wallhaven-v9mwzm.jpg"
              className="d-block w-50 mx-auto"
              alt="..."/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
