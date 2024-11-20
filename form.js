const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    return;
  }

  form.style.display = "none";
  successMessage.style.display = "block";
});

document.getElementById("interesse").addEventListener("change", function () {
  const tipoEstabelecimento = document.getElementById("tipoEstabelecimento");
  if (this.value === "ponto_recarga") {
    tipoEstabelecimento.style.display = "block";
    document.getElementById("estabelecimento").required = true;
  } else {
    tipoEstabelecimento.style.display = "none";
    document.getElementById("estabelecimento").required = false;
  }
});

function resetForm() {
  form.reset();
  form.classList.remove("was-validated");
  form.style.display = "block";
  successMessage.style.display = "none";
  document.getElementById("tipoEstabelecimento").style.display = "none";
}
