import React, { useState, useEffect } from "react";

function CompteurAvecEffet() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Compteur : ${count}`;
  }, [count]);

  return (
    <div>
      <p>Nombre de clics : {count}</p>
      <button onClick={() => setCount(count + 1)}>Clique-moi</button>
    </div>
  );
}

export default CompteurAvecEffet;
