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
    <div className="w-full h-full flex justify-center items-center">
      <div className="px-4 py-8 text-center lg:py-12 lg:px-6">
        <figure className="max-w-2xl mx-auto">
          <svg className="h-8 mx-auto mb-3 text-secondary/40" viewBox="0 0 24 27" fill="none">
            <path
              fill="currentColor"
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            />
          </svg>
          <blockquote>
            <p className="text-lg font-medium text-on-surface-variant leading-relaxed">
              &ldquo;{word}&rdquo;
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-5 space-x-3">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src={image}
              alt={name}
            />
            <div className="flex items-center divide-x divide-outline-variant">
              <div className="pr-3 font-semibold text-primary-container text-sm">
                {name}
              </div>
              <div className="pl-3 text-xs font-light text-text-muted">
                {from}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
