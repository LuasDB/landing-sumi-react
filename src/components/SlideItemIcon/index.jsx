import React from "react";
import * as LucideIcons from "lucide-react"

const SlideItemIcon = React.memo(function SlideItem({ slideItem, itemsPerSlide }) {
  return (
    <div
      className="w-full grid items-stretch"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${itemsPerSlide}, minmax(0, 1fr))`,
        gap: "1rem",
      }}
    >
      {slideItem.map((it, i) => 
        {
          const IconComponent = LucideIcons[it.icon] || LucideIcons.Activity;
          return (
          <article key={i} 
           className="bg-white rounded-lg shadow-xl p-8 text-center flex flex-col justify-center items-center h-full min-h-[260px] sm:min-h-[220px] md:min-h-[200px]"
          >
            {IconComponent ? <IconComponent className="w-12 h-12 text-green-800" />:null}
            <h3 className="mt-2 font-semibold border-b-2 border-green-800 text-2xl w-full">{it.title}</h3>
            <p className="text-gray-700 py-4 text-justify font-medium">{it.description}</p>
          </article>
        )}
      
      )}
    </div>
  );
});

export default SlideItemIcon;