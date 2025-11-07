import React, { useState } from "react";

function AffichageDynamique() {
  const messages = [
    "Premier clic",
    "Deuxième clic",
    "Troisième clic"
  ];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((index + 1) % messages.length);
  };

  return (
    <div>
      <p>{messages[index]}</p>
      <button onClick={handleClick}>Changer le texte</button>
    </div>
  );
}

export default AffichageDynamique;
