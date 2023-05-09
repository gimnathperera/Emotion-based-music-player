/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import Lottie from "react-lottie";
import animationData from "../../lotties/music.json";
import heroAnimation from "../../lotties/hero.json";

const secondaryAnimation = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const primaryAnimation = {
  loop: true,
  autoplay: true,
  animationData: heroAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <div class="flex flex-wrap -mx-4 justify-center">
      <div class="w-full lg:w-5/12 px-4 flex">
        <div class="hero-content flex-col	flex items-baseline">
          <h1
            class="
                  text-dark
                  font-bold
                  text-4xl
                  sm:text-[42px]
                  lg:text-[40px]
                  xl:text-[42px]
                  leading-snug
                  mb-3
                "
          >
            Fix your mood!
          </h1>
          <p class="text-base mb-8 text-body-color max-w-[480px]">
            This music recommendation system using facial expression can be a useful tool for helping people discover new music based on their emotional responses. This system uses facial recognition technology to analyze the user's facial expressions and determine their emotional state, whether they are wearing a face mask or not.
          </p>
          <ul class="flex flex-wrap">
            <li>
             
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                      py-4
                      px-6
                      sm:px-10
                      lg:px-8
                      xl:px-10
                      inline-flex
                      items-center
                      justify-center
                      text-center text-base
                      font-normal
                      text-body-color
                      hover:text-[#CF6A6A]
                    "
              >
                <span class="mr-2">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="11" fill="#C21C1C" />
                    <rect
                      x="6.90906"
                      y="13.3636"
                      width="8.18182"
                      height="1.63636"
                      fill="white"
                    />
                    <rect
                      x="10.1818"
                      y="6"
                      width="1.63636"
                      height="4.09091"
                      fill="white"
                    />
                    <path
                      d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Download App
              </a>
            </li>
          </ul>
          {/* <div class="-z-1 w-2/3">
            <Lottie options={primaryAnimation} width={400} />
          </div> */}
        </div>
      </div>

      <div class="w-full lg:w-6/12 px-4">
        <div class="lg:text-right lg:ml-auto">
          <div class="relative inline-block z-10  lg:pt-0">
            <Lottie
              options={secondaryAnimation}
              width={400}
              class="max-w-full lg:ml-auto"
            />

            <span class="absolute -left-8 -bottom-8 z-[-1]">
              <svg
                width="93"
                height="93"
                viewBox="0 0 93 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
