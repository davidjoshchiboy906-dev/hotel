document.addEventListener("DOMContentLoaded", () => {
  
  const nav = document.getElementById("nav");
  const navItems = document.getElementById("navItems");
  const faBar = document.querySelector(".fa-bars");
  
  nav.addEventListener("click", () => {
      faBar.classList.toggle("fa-bars");
      faBar.classList.add("fa-times");
      navItems.classList.toggle("hidden");
  });
  
  const h1 = document.getElementById("animatedText");
  let hue = 0;

  function animate() {
    hue = (hue + 1) % 360;
    h1.style.color = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(animate);
  }

  animate();
  
});

