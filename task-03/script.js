document.addEventListener("DOMContentLoaded", function () {
  const resultsContainer = document.getElementById("results");
  const startBtn = document.getElementById("start-btn");

  function getWorkspaceResource1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ресурс 1 готовий");
      }, 1000);
    });
  }

  function getWorkspaceResource2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ресурс 2 готовий");
      }, 3000);
    });
  }

  function getWorkspaceResource3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ресурс 3 готовий");
      }, 2000);
    });
  }

  startBtn.addEventListener("click", function () {
    resultsContainer.innerHTML = "Завантаження...";

    startBtn.disabled = true;

    Promise.all([
      getWorkspaceResource1(),
      getWorkspaceResource2(),
      getWorkspaceResource3(),
    ])
      .then((results) => {
        resultsContainer.innerHTML = "";

        results.forEach((result, index) => {
          const resourceElement = document.createElement("div");
          resourceElement.className = "resource";
          resourceElement.textContent = result;
          resultsContainer.appendChild(resourceElement);
        });
      })
      .catch((error) => {
        resultsContainer.textContent = "Помилка: " + error;
      })
      .finally(() => {
        startBtn.disabled = false;
      });
  });
});
