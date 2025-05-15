
function toggleFeatureMenu(event) {
    const feature = event.currentTarget.closest(".feature");
    const menu = feature.querySelector(".feature-menu");
    const contactBtn = feature.querySelector(".btn1");
    const featuresBtn = feature.querySelector(".btn2");
    const featureImg = feature.querySelector(".feature-img");
  
    if (menu.classList.contains("feature-menu-active")) {
      menu.classList.remove("feature-menu-active");
      menu.classList.add("opacity");
  
      menu.addEventListener(
        "animationend",
        () => {
          menu.classList.remove("opacity");
          menu.style.display = "none";
        },
        { once: true }
      );
  
      contactBtn.style.display = "inline-block";
      featuresBtn.textContent = "Features";
      featureImg.classList.remove("blur");
    } else {
      document.querySelectorAll(".feature").forEach((otherFeature) => {
        if (otherFeature !== feature) {
          const otherMenu = otherFeature.querySelector(".feature-menu");
          if (otherMenu.style.display === "block") {
            otherMenu.classList.remove("feature-menu-active");
            otherMenu.classList.add("opacity");
  
            otherMenu.addEventListener(
              "animationend",
              () => {
                otherMenu.classList.remove("opacity");
                otherMenu.style.display = "none";
              },
              { once: true }
            );
  
            otherFeature.querySelector(".btn1").style.display = "inline-block";
            otherFeature.querySelector(".btn2").textContent = "Features";
            otherFeature.querySelector(".feature-img").classList.remove("blur");
          }
        }
      });
  
      menu.style.display = "block";
      menu.classList.remove("opacity");
      menu.classList.add("feature-menu-active");
      contactBtn.style.display = "none";
      featuresBtn.textContent = "Close";
      featureImg.classList.add("blur");
    }
  }
  
  function closeFeatureMenu(event) {
    const feature = event.currentTarget.closest(".feature");
    const menu = feature.querySelector(".feature-menu");
    const contactBtn = feature.querySelector(".btn1");
    const featuresBtn = feature.querySelector(".btn2");
  
    menu.classList.remove("feature-menu-active");
    menu.classList.add("opacity");
  
    menu.addEventListener(
      "animationend",
      () => {
        menu.classList.remove("opacity");
        menu.style.display = "none";
      },
      { once: true }
    );
  
    contactBtn.style.display = "inline-block";
    featuresBtn.textContent = "Features";
    feature.querySelector(".feature-img").classList.remove("blur");
  }
  
  document.querySelectorAll(".btn2").forEach((button) => {
    button.addEventListener("click", toggleFeatureMenu);
  });
  
  document.querySelectorAll(".feature-menu .close-btn").forEach((button) => {
    button.addEventListener("click", closeFeatureMenu);
  });