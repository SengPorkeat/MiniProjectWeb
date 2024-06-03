export const NavBar = () => {
  return `
    <nav
      class="bg-gray-800 lg:h-[55px] flex justify-center items-center h-[146px] w-full fixed top-0 z-50"
    >
      <section
        class="m-auto lg:w-[1200px] flex justify-between items-center lg:flex-row flex-col"
      >
        <div>
          <a href="./index.html">
            <img
              class="w-[130px]"
              src="./Logo/alex-kgm-high-resolution-logo-white-transparent.png"
              alt=""
            />
          </a>
        </div>
        <div class="flex justify-center">
          <ul
            class="flex justify-center items-center text-white font-bold h-[45px] gap-40 lg:mr-[20px] xl:mr-0 sm:mr-0 xl:ml-[200px] md:ml-0"
          >
            <li class="border-b-2 border-transparent hover:border-white">
              <a href="./acessories.html">Accessories</a>
            </li>
            <li class="border-b-2 border-transparent hover:border-white">
              <a href="./brand.html">Brands</a>
            </li>
            <li class="border-b-2 border-transparent hover:border-white">
              <a href="./aboutPage.html">About</a>
            </li>
          </ul>
        </div>
        <div class="flex justify-center items-center">
          <div
            class="bg-violet-700 h-[55px] lg:w-[240px]  pr-[100px] justify-center w-[900px] flex items-center relative left-0 xl:left-[169px] group hover:lg:w-[400px] duration-[250ms]"
          >
            <i
              class="fa-solid fa-magnifying-glass text-white ml-[30px] group-hover:hidden"
            ></i>
            <div class="items-center hidden group-hover:flex">
              <i
                class="fa-solid fa-magnifying-glass text-black font-bold ml-[30px] relative left-[30px]"
              ></i>
              <input
                type="text"
                placeholder="Search..."
                class="rounded-full py-1 pl-[35px] w-[200px]"
              />
            </div>
            <a href="./allProducts.html">
              <i class="fa-solid fa-bag-shopping text-white ml-[30px]"></i>
            </a>
            <a href="./login.html">
              <i class="fa-solid fa-user text-white ml-[30px]"></i>
            </a>
          </div>
        </div>
      </section>
    </nav>`;
};
