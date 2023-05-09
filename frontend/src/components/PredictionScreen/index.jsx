import React from "react";

const PredictionScreen = ({
  onClose,
  supervisedResult,
  unsupervisedResult,
  isFetching,
}) => {
  return (
    <div className="container">
      <div className="text-center pb-4">
        <h1
          className="text-dark
                  font-bold
                  text-2xl
                  sm:text-[32px]
                  lg:text-[30px]
                  xl:text-[32px]
                  leading-snug
                  mb-3
                  capitalize
                  "
        >
          Here is your prediction
        </h1>
      </div>
      <div class="flex flex-col w-full lg:flex-row p-2">
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.pinimg.com/736x/c1/ce/e0/c1cee0a5014f4250ecab321c32dabfb4.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body items-center justify-center text-center">
            <h2 class="card-title">Supervised Learning</h2>
            <p>
              {isFetching
                ? "The Person has Heart Disease"
                : (supervisedResult && supervisedResult?.msg) || "-"}
            </p>
            <button
              class="btn gap-2 btn-sm capitalize bg-[#CF6A6A] border-red-700"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Recheck
            </button>
          </div>
        </div>
        <div class="divider lg:divider-horizontal" />
        <div class="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://i.pinimg.com/736x/c1/ce/e0/c1cee0a5014f4250ecab321c32dabfb4.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body items-center justify-center text-center">
            <h2 class="card-title">Unsupervised Learning</h2>

            <p>
              {isFetching
                ? "The Person has Heart Disease"
                : (unsupervisedResult && unsupervisedResult?.msg) || "-"}
            </p>
            <button
              class="btn gap-2 btn-sm capitalize bg-[#CF6A6A] border-red-700"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Recheck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PredictionScreen;
