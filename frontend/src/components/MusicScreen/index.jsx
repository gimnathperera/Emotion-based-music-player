/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { data } from "../../data";

const Song = ({ title, link, duration, artist }) => (
  <div class="flex border-b border-gray-800 hover:bg-gray-800">
    <div class="p-3 w-8 flex-shrink-0">▶️</div>
    <div class="p-3 w-8 flex-shrink-0">❤️</div>
    <div class="p-3 w-full">{title}</div>
    <div class="p-3 w-full">{artist}</div>
    <div class="p-3 w-full hover:underline cursor-pointer">
      <a href={link} target="_blank" rel="noreferrer">
        Play Now
      </a>
    </div>
    <div class="p-3 w-12 flex-shrink-0 text-right">{duration}</div>
  </div>
);

const MusicScreen = ({ prediction, preview }) => {
  const songs = data?.filter(
    ({ mood }) =>
      mood?.toLocaleLowerCase() ===
      prediction?.className?.slice(1).toLowerCase().trim()
  );
  return (
    <div class="bg-black text-gray-300 min-h-screen p-10">
      <div class="flex">
        <img
          class="mr-6"
          src={preview}
          alt="img-person"
          width={200}
          height={200}
        />
        <div class="flex flex-col justify-center">
          <h4 class="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
            Mood: {prediction?.className?.slice(1).toLowerCase()}
          </h4>
          <h1 class="mt-0 mb-2 text-white text-4xl">
            Boost your mood with music, listen now!
          </h1>

          <p class="text-gray-600 mb-2 text-sm">
            {Number(prediction?.maskStatus?.split(" ")[0]) === 1
              ? "No face mask detected"
              : "Face mask detected"}
          </p>
          <p class="text-gray-600 text-sm">
            Confidence: {prediction?.confidenceScore}
          </p>
        </div>
      </div>

      <div class="mt-6 flex justify-between">
        <div class="flex">
          <button class="mr-2 bg-[#cf6a6a] text-green-100 block py-2 px-8 rounded-full">
            Listen Now
          </button>
        </div>
        <div class="text-gray-600 text-sm tracking-widest text-right">
          <h5 class="mb-1">Found Songs</h5>
          <p>{songs?.length}</p>
        </div>
      </div>

      <div class="mt-10">
        <div class="flex text-gray-600">
          <div class="p-2 w-8 flex-shrink-0"></div>
          <div class="p-2 w-8 flex-shrink-0"></div>
          <div class="p-2 w-full">Title</div>
          <div class="p-2 w-full">Artist</div>
          <div class="p-2 w-full">Action</div>
          <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        </div>
        {songs?.map((song) => (
          <Song {...song} />
        ))}
      </div>
    </div>
  );
};

export default MusicScreen;
