import React, { JSX } from "react";

export default function Testimonial({
  word,
  name,
  from,
  image,
}: {
  word: string;
  name: string;
  image: string;
  from: string;
}): JSX.Element {
  return (
    <div className="w-full h-full flex justify-start items-start">
      <div className="px-5 py-7 text-left w-full">
        <figure className="max-w-2xl">
          <svg className="h-7 mb-3 text-secondary/40" viewBox="0 0 24 27" fill="none" aria-hidden="true">
            <path
              fill="currentColor"
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            />
          </svg>
          <blockquote>
            <p className="text-[15px] font-medium text-on-surface-variant leading-relaxed">
              &ldquo;{word}&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-5 gap-3">
            <img
              className="w-9 h-9 rounded-full object-cover bg-surface-container"
              src={image}
              alt={`Portrait of ${name}`}
              loading="lazy"
            />
            <div className="flex flex-col">
              <div className="font-semibold text-on-surface text-sm">
                {name}
              </div>
              <div className="text-xs text-text-muted">
                {from}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
