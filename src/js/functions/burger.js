import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector("[data-menu]");
  const menuItems = document.querySelectorAll("[data-menu-item]");
  const overlay = document.querySelector("[data-menu-overlay]");

  const disScroll = () => {
    let t = window.scrollY;
    this.lockPadding(),
      document.body.classList.add("dis-scroll"),
      (document.body.dataset.position = t),
      (document.body.style.top = -t + "px");
  };
  const enScroll = () => {
    let t = parseInt(document.body.dataset.position, 10);
    (document.body.style.top = "auto"),
      document.body.classList.remove("dis-scroll"),
      window.scrollTo({ top: t, left: 0 }),
      document.body.removeAttribute("data-position");
  };

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("header__nav--active");

    if (menu.classList.contains("header__nav--active")) {
      burger.setAttribute("aria-expanded", "true");
      burger.setAttribute("aria-label", "Закрыть меню");
      disableScroll();
    } else {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
      enableScroll();
    }
  });

  overlay.addEventListener("click", () => {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    enableScroll();
  });

  menuItems.forEach((el) => {
    el.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      burger.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("header__nav--active");
      enableScroll();
    });
  });

  if (burger.classList.contains("burger--active")) {
    disScroll();
  } else {
    enScroll();
  }
})();
