import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div
        className="home__section"
        style={{ backgroundColor: "rgba(39, 192, 245, 0.73)" }}
      >
        <div className="home__img">
          <Image src="https://png2.cleanpng.com/sh/054f214c99b0351bde6be0448ec08f3f/L0KzQYq3V8AyN6p2R91yc4Pzfri0kgVme6Vuh9D3YXn1dX76lgJ3baoyhdd9aHBnf732hCkua51uiJ9qcoSwgLF5lPFjdJYyTdY6YXO3RIq5UBY6bmozS6MAM0e6QoW4VcYzOGQ6Sqk8MUS6RHB3jvc=/kisspng-questionnaire-survey-methodology-clip-art-portable-5d1ac44923f9f9.3153772415620352731474.png" />
        </div>

        <div className="home__text">
          <div className="home__text--big">
            Find out what your Bike type ist and buy exactly what you need
          </div>
          <Link to="/test" className="btn btn-primary">
            Find out
          </Link>
        </div>
      </div>
      <div
        className="home__section"
        style={{ backgroundColor: "rgba(245, 221, 39, 0.63)" }}
      >
        <div className="home__img">
          <Image src="https://pngimg.com/uploads/bicycle/bicycle_PNG5374.png" />
        </div>

        <div className="home__text">
          <div className="home__text--big">Check all bikes what we have</div>
          <Link to="/bikes" className="btn btn-primary">
            Check the list
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
