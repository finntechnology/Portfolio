export default function HeroSection() {
  return (
    <section className="hero--items">
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Daniel Ebuka Finn</p>
            <h1 className="hero--section--title">
              <span>
                Soft<span id="software--style">ware</span>
              </span>
              <span>Developer</span>
            </h1>
            <p className="hero--section-description">
              Success is not final, failure is not fatal, <br />
              It is the courage to continue that counts.
              <br /> " Winston Churchill "
            </p>
          </div>
          <button className="btn btn-primary">
            <a href="">Download Resume</a>
          </button>
        </div>
        <div className="hero--section--img">
          <img src="./img/FINN.png" alt="Hero Section" />
        </div>
      </section>
    </section>
  );
}
