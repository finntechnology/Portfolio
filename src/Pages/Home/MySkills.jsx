import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <h2 className="skills--section--heading">
        Skills <span id="skills--and">&</span> Experiences
      </h2>

      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src="/img/html.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/css.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/js.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/react.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/redux.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/next.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/sass.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/boostrap.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/tailwind.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/node.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/typescript.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/mongoDB.png" alt="" />
          </div>
          <div className="skills--section--img">
            <img src="/img/cloud.png" alt="" />
          </div>
        </div>
        <div className="skills--section--card--content">
          <div className="close--work">
            <p>2023 - 2024</p>
            <h4>Software Developer</h4>
            <p>Starkweb Technologies / Abuja Nigeria.</p>
          </div>

          <div className="open--work">
            <p>2023 - Present</p>
            <h4>Software Developer</h4>
            <p>Intership At Gomycode / Abuja Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
