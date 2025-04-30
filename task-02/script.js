document.addEventListener("DOMContentLoaded", function () {
  const dataContainer = document.getElementById("data-container");
  const loadBtn = document.getElementById("load-btn");

  function getWorkspaceData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Дані отримано!");
      }, 3000);
    });
  }

  loadBtn.addEventListener("click", function () {
    loadBtn.disabled = true;

    dataContainer.textContent = "Завантаження...";

    getWorkspaceData()
      .then((data) => {
        dataContainer.textContent = data;

        loadBtn.disabled = false;
      })
      .catch((error) => {
        dataContainer.textContent = "Помилка: " + error;
        loadBtn.disabled = false;
      });
  });
});
