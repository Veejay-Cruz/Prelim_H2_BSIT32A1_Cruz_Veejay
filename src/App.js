import React from "react";

import "./styles.css"; // Assuming your CSS file is in the src folder
import Navbar from "./navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5"> </div>

      <section class="home">
        <div class="home-img">
          <img src="" alt=""></img>
        </div>
        <div class="home-content">
          <h1>
            Hello, it's me! <span>Veejay</span>
          </h1>
          <h3 class="typing-text">
            I'm a <span>BSIT 3rd year</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
            officia, in sunt sequi officiis provident ullam quaerat, corporis
            quidem voluptas laboriosam possimus perspiciatis inventore, corrupti
            totam quam aliquam optio.
          </p>
        </div>
      </section>

      <section class="about" id="about">
        <h1>Education</h1>
        <ul>
          <li>
            <strong>IETI College of Science and Technology San Pedro</strong> -
            Grade 1 - 3
          </li>
          <li>
            <strong>Langgam Elementary School</strong> Grade 4 - 6
          </li>
          <li>
            <strong>San Pedro Relocation Center National Highschool</strong>{" "}
            Grade 6 - 10
          </li>
          <li></li>
        </ul>
      </section>
      <section class="contact" id="contact">
        <h1>Contact</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repellendus, accusantium porro, tenetur eaque nesciunt
          facilis nisi neque saepe sit facere, assumenda sequi aliquid
          consequuntur non reprehenderit ex placeat accusamus.
        </p>
      </section>
    </div>
  );
}
