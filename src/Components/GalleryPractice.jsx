import { useState } from "react";
import { sculptureList } from "../mocks/sculptureList";

export function GalleryPractice() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  const handlePrevClick = () => setIndex(index - 1);
  const handleNextClick = () => setIndex(index + 1);
  const handleMoreClick = () => setShowMore(!showMore);

  let sculpture = sculptureList[index];
  return (
    <>
      <h1>Esculturas</h1>
      <h2>{`${sculpture.name} by ${sculpture.artist}`}</h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Ocultar" : "Mostrar"} Detalles
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handlePrevClick} disabled={!hasPrev}>
        Anterior
      </button>
      <button onClick={handleNextClick} disabled={!hasNext}>
        Siguiente
      </button>
    </>
  );
}
