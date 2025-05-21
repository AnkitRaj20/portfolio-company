import React from "react";

import { Button } from "../ui/button";

const Card = ({
  name,
  description,
  image,
  languagesUsed = [],
  github,
  url,
}) => {
  return (
    <div>
      <article className="relative h-[500px] flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
        {/* Image or fallback */}
        <div className="relative h-56 w-full">
          {image ? (
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
              No image available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="bg-white p-4 sm:p-6 dark:bg-gray-900 flex flex-col justify-between flex-grow">
          <header>
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold my-3 text-start text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                {name}
              </h3>
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="px-4 bg-gradient-to-b from-neutral-200 to-neutral-500 text-black"
                    variant="link"
                  >
                    GitHub
                  </Button>
                </a>
              )}
            </div>

            {description && (
              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400 text-start">
                {description.replace(/<br\s*\/?>/g, " ")}
              </p>
            )}
          </header>

          <div className="flex justify-between mt-4 gap-2">
            <div className="flex gap-4 flex-wrap">
              {languagesUsed.map((iconUrl, i) => (
                <Button
                  key={i}
                  className="p-2 bg-zinc-100 rounded-md hover:bg-blue-200"
                  variant="outline"
                  size="icon"
                >
                  <img src={iconUrl} alt="Tech icon" width={24} height={24} />
                </Button>
              ))}
            </div>

            {/* {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button
                  className="px-4 bg-teal-600 hover:bg-teal-900 hover:text-white"
                  variant="link"
                >
                  Live{" "}
                  <ChevronRightIcon className="h-4 w-4 ml-1 hover:animate-ping" />
                </Button>
              </a>
            )} */}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
