export const Footer = () => {
  return `
    <section class="bg-gray-800 p-10">
        <section class="flex flex-col justify-center items-center gap-5">
          <a href="./index.html">
            <img
              class="w-[130px]"
              src="./Logo/alex-kgm-high-resolution-logo-white-transparent.png"
              alt=""
            />
          </a>
          <ul class="flex text-gray-300 text-[14px] gap-10">
            <li><a href="./aboutPage.html">About</a></li>
            <li>Contact</li>
            <li>Term Of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <div class="w-[20px] flex justify-center items-center gap-8">
            <img src="./Logo/twitter.png" alt="" />
            <img src="./Logo/facebook.png" alt="" />
            <img src="./Logo/instagram.png" alt="" />
            <img src="./Logo/telegram.png" alt="" />
            <img src="./Logo/youtube.png" alt="" />
          </div>
        </section>
      </section>`;
};
