import React from "react";
import "./RightImageAndDescription.css";

export const RightImageAndDescription = () => {
  return (
    <div className="right-image-and-description">
      <div className="right-image-and-description__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla.
        Culpa repellendus totam odit expedita ex nemo et reiciendis
        consequuntur. Voluptatem quo non numquam est, aperiam facere, molestiae
        minima fugiat, amet tenetur autem dignissimos eveniet hic. Labore sunt
        consectetur laudantium nam expedita quaerat animi aliquam aspernatur
        doloremque ea repellat, fugiat ipsam fuga vero dolores deleniti
        repellendus itaque doloribus, sapiente rerum aut neque tenetur illo.
      </div>
      <div className="right-image-and-description__image">
        <img
          className="image"
          src={require("../../assets/RightImage.jpg")}
          alt="golden retreiver"
        />
      </div>
    </div>
  );
};
