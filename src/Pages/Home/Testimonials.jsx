import ImageSlider from "./ImageSlider";

export default function Testimonial() {
  const slides = [
    { url: "/image-1.jpg", title: "beach" },
    { url: "/image-2.jpg", title: "boat" },
    { url: "/image-3.jpg", title: "forest" },
    { url: "/image.jpg", title: "city" },
    { url: "/image.jpg", title: "italy" },
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
