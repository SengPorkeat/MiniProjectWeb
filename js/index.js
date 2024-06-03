import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
let renderNavBar = document.querySelector("#renderNavBar");
let renderFooter = document.querySelector("#renderFooter");
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar.innerHTML = NavBar();
  renderFooter.innerHTML = Footer();
});
