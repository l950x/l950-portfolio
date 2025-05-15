document.querySelectorAll(".project").forEach((project) => {
  const infoBtn = project.querySelector(".info-btn");
  const panel = project.querySelector(".info-panel");
  const closeBtn = project.querySelector(".close-btn");

  function closePanel() {
    panel.classList.remove("info-panel-active");
    panel.classList.add("opacity");

    panel.addEventListener(
      "animationend",
      () => {
        panel.classList.remove("opacity");
        panel.style.display = "none";
      },
      { once: true }
    );

    infoBtn.textContent = "INFO";
    infoBtn.classList.remove("active");
  }

  function openPanel() {
    panel.style.display = "block";
    panel.classList.add("info-panel-active");
    infoBtn.textContent = "CLOSE";
    infoBtn.classList.add("active");
  }

  infoBtn.addEventListener("click", () => {
    const isActive = panel.classList.contains("info-panel-active");

    document
      .querySelectorAll(".project .info-panel-active")
      .forEach((openPanelEl) => {
        if (openPanelEl !== panel) {
          openPanelEl.classList.remove("info-panel-active");
          openPanelEl.classList.add("opacity");
          openPanelEl.addEventListener(
            "animationend",
            () => {
              openPanelEl.classList.remove("opacity");
              openPanelEl.style.display = "none";
            },
            { once: true }
          );

          const otherBtn = openPanelEl
            .closest(".project")
            .querySelector(".info-btn");
          otherBtn.textContent = "INFO";
          otherBtn.classList.remove("active");
        }
      });

    if (isActive) {
      closePanel();
    } else {
      openPanel();
    }
  });

  closeBtn.addEventListener("click", closePanel);
});
