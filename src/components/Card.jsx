import React from "react";
import "../index.css";

const Card = ({ sites }) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {sites.map((site) => (
            <a
              key={site.id}
              href={site.href}
              className="group block transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="group overflow-hidden rounded-lg bg-slate-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={site.imageAlt}
                  src={site.imageSrc}
                  className="h-auto w-auto object-scale-down object-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl text-gray-800 font-semibold">
                {site.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
