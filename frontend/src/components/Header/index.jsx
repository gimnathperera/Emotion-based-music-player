const Header = () => {
  return (
    <header
      x-data="
        {
          navbarOpen: false,
        }
      "
      class="sticky z-50 w-full left-0 top-0 bg-[#3D4451] p-2"
    >
      <div class="container">
        <div class="flex -mx-4 items-center justify-between relative">
          <div class="px-4 w-60 max-w-full">
            <a href="javascript:void(0)" class="w-full block py-2">
              <img
                src={require("../../assets/images/logo.svg").default}
                alt="logo"
                class="w-full"
              />
            </a>
          </div>
          <div class="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                class="
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                "
              >
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-body-color"></span>
              </button>
              <nav
                x-transition
                id="navbarCollapse"
                class="
                  absolute
                  py-5
                  px-6
                  shadow
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-4
                  lg:block lg:static lg:shadow-none
                  transition-all
                  top-full
                "
              ></nav>
            </div>
            <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
              <a
                href="javascript:void(0)"
                class="
                  text-base
                  font-medium
                  text-white
                   hover:text-[#CF6A6A]
                  py-3
                  px-7
                "
              >
                
              </a>
              <a
                href="javascript:void(0)"
                class="
                  text-base
                  font-medium
                  text-white
                  bg-[#CF6A6A]
                  rounded-lg
                  py-3
                  px-7
                  hover:bg-opacity-90
                "
              >
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
