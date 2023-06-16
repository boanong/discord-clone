'use client'
import React from "react";
import "./MainSection.css";
import { BsEmojiLaughingFill } from "react-icons/bs";

type Props = {
  userData: any
}

function MainSection({userData}: Props) {
  return (
    <div id="mainContainer">
      <section className="section1Container">
        <article>
          <BsEmojiLaughingFill className="icon" />
          <h1>KevinA</h1>
          <p>
            This is the beginning of your direct message history with kevinA
          </p>
        </article>
      </section>
      <hr />
      <section>
        <article>
          <img src="" alt="" />
          <div>
            <div>
              <h1>NVG</h1>
              <p>06/12/2023 12:18 PM</p>
            </div>
            <p className="SMS">Hello</p>
          </div>
        </article>
        <input type="text" placeholder="Message @keevinA" />
      </section>
    </div>
  );
}

export default MainSection;
