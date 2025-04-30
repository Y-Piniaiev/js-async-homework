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

  loadBtn.addEventListener("click", async function () {
    try {
      loadBtn.disabled = true;

      dataContainer.textContent = "Завантаження...";

      const data = await getWorkspaceData();

      dataContainer.textContent = data;
    } catch (error) {
      dataContainer.textContent = "Помилка: " + error;
    } finally {
      loadBtn.disabled = false;
    }
  });
});
