import React from "react";

const SlideItem = React.memo(function SlideItem({ slideItem, itemsPerSlide }) {
  return (
    <div
      className="w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${itemsPerSlide}, minmax(0, 1fr))`,
        gap: "1rem",
      }}
    >
      {slideItem.map((it, i) => (
        <article key={i} className="bg-white rounded-lg shadow-xl p-4">
          {it.image && (
            <img
              src={it.image} 
              alt={it.title || "card image"}
              className="w-full h-36 object-cover rounded"
            />
          )}
          <h3 className="mt-2 font-semibold">{it.title}</h3>
          <p className="text-sm text-gray-600">{it.description}</p>
        </article>
      ))}
    </div>
  );
});

export default SlideItem;