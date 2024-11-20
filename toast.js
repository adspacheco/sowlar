document
  .querySelector(".input-group button")
  .addEventListener("click", function () {
    const toast = new bootstrap.Toast(document.getElementById("buscarToast"));
    toast.show();
  });
