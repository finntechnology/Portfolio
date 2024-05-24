import ImageSlider from "./ImageSlider";

export default function Testimonial() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    // width: "600px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="image_container" id="testimonial">
      <h1 className="">Clients Feedback</h1>
      <div style={containerStyles} className="containerStyles">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}
