import React from "react";
import "./LeftImageAndDescription.css";

export const LeftImageAndDescription = () => {
  return (
    <div className="left-image-and-description">
      <div className="left-image-and-description__image">
        <img
          className="image"
          src={require("../../assets/LeftImage.jpg")}
          alt="aurora borealis"
        />
      </div>
      <div className="left-image-and-description__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nulla.
        Culpa repellendus totam odit expedita ex nemo et reiciendis
        consequuntur. Voluptatem quo non numquam est, aperiam facere, molestiae
        minima fugiat, amet tenetur autem dignissimos eveniet hic. Labore sunt
        consectetur laudantium nam expedita quaerat animi aliquam aspernatur
        doloremque ea repellat, fugiat ipsam fuga vero dolores deleniti
        repellendus itaque doloribus, sapiente rerum aut neque tenetur illo.
      </div>
    </div>
  );
};
