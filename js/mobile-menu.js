(() => {
  const MenuBtnRef = document.querySelector("[data-menu-button]");
  const mabileMenuRef = document.querySelector("[data-menu]")


    MenuBtnRef.addEventListener('click', ( ) => {
        const expanded =
            MenuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        MenuBtnRef.classList.toggle("is-open");
        MenuBtnRef.setAttribute("aria-expanded", !expanded);
      
      document.body.classList.toggle("menu-open")
      mabileMenuRef.classList.toggle("is-open");
      
  });
})();