/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
export const Footer = () => {
  return (
    <footer class="bg-[#3D4451] pt-20 lg:pt-[120px] pb-10 lg:pb-20 relative">
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full sm:w-2/3 lg:w-3/12 px-4">
            <div class="w-full mb-10">
              <a
                href="javascript:void(0)"
                class="inline-block max-w-[160px] mb-6"
              >
                <img
                  src={require("../../assets/images/logo.svg").default}
                  alt="logo"
                  class="max-w-full"
                />
              </a>
              <p class="text-base mb-7 text-white">
                Rakhitha Wimalaweera 
                <p>UOW -W1790150</p>
               <p></p> 
              </p>
              <p class="flex items-center text-sm  text-white font-medium">
                <span class="text-[#CF6A6A] mr-3">
                  <svg
                    width="19"
                    height="21"
                    viewBox="0 0 19 21"
                    class="fill-current"
                  >
                    <path d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z" />
                    <path d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z" />
                    <path d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z" />
                  </svg>
                </span>
                <span>+94 766 57 57 55</span>
              </p>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
            <div class="w-full mb-10">
              <h4 class="text-white text-lg font-semibold mb-9"></h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
            <div class="w-full mb-10">
              <h4 class=" text-white text-lg font-semibold mb-9"></h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                   
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-2/12 px-4">
            <div class="w-full mb-10">
              <h4 class=" text-white text-lg font-semibold mb-9">
                
              </h4>
              <ul>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                    
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                   
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="
                            inline-block
                            text-base  text-white
                            hover:text-[#CF6A6A]
                            leading-loose
                            mb-2
                            "
                  >
                   
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-3/12 px-4">
            <div class="w-full mb-10">
              <h4 class=" text-white text-lg font-semibold mb-9">
                Follow Us On
              </h4>
              <div class="flex items-center mb-6">
                <a
                  href="javascript:void(0)"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    class="fill-current"
                  >
                    <path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M14.2194 2.06654L15.2 0.939335C15.4839 0.634051 15.5613 0.399217 15.5871 0.2818C14.8129 0.704501 14.0903 0.845401 13.6258 0.845401H13.4452L13.3419 0.751468C12.7226 0.258317 11.9484 0 11.1226 0C9.31613 0 7.89677 1.36204 7.89677 2.93542C7.89677 3.02935 7.89677 3.17025 7.92258 3.26419L8 3.73386L7.45806 3.71037C4.15484 3.61644 1.44516 1.03327 1.00645 0.587084C0.283871 1.76125 0.696774 2.88845 1.13548 3.59296L2.0129 4.90802L0.619355 4.20352C0.645161 5.18982 1.05806 5.96477 1.85806 6.52838L2.55484 6.99804L1.85806 7.25636C2.29677 8.45401 3.27742 8.94716 4 9.13503L4.95484 9.36986L4.05161 9.93346C2.60645 10.8728 0.8 10.8024 0 10.7319C1.62581 11.7652 3.56129 12 4.90323 12C5.90968 12 6.65806 11.9061 6.83871 11.8356C14.0645 10.2857 14.4 4.41487 14.4 3.2407V3.07632L14.5548 2.98239C15.4323 2.23092 15.7935 1.8317 16 1.59687C15.9226 1.62035 15.8194 1.66732 15.7161 1.6908L14.2194 2.06654Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    class="fill-current"
                  >
                    <path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="
                         w-8
                         h-8
                         flex
                         items-center
                         justify-center
                         rounded-full
                         border border-[#E5E5E5]
                          text-white
                         hover:text-white hover:bg-[#CF6A6A] hover:border-[#CF6A6A]
                         mr-3
                         sm:mr-4
                         lg:mr-3
                         xl:mr-4
                         "
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="fill-current"
                  >
                    <path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
                  </svg>
                </a>
              </div>
              <p class="text-base  text-white">&copy; 2023 Mood Tunes</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="217"
            height="229"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1="281"
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.08" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span class="absolute top-10 right-10 z-[-1]">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
              fill="url(#paint0_linear_1179_4)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_4"
                x1="-1.63917e-06"
                y1="37.5"
                x2="75"
                y2="37.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#13C296" stop-opacity="0.31" />
                <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
