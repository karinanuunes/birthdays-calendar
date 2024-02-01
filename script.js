let agenda = [];

function conferirFormulario() {
  const inputNome = document.getElementById("inputNome").value;
  const inputData = document.getElementById("inputData").value;
  const msgErroNome = document.getElementById("msgErroNome");
  const msgErroData = document.getElementById("msgErroData");

  if (inputNome.length < 3 || inputNome.length > 120) {
    msgErroNome.style.display = "flex";
  }
  if (inputData.length < 10) {
    msgErroData.style.display = "flex";
  }

  guardarDados();
  enviarFormulario();
}

function onlyNumber(event) {
  const regex = /\D/g;

  if (regex.test(event.key) && event.key !== "Backspace") {
    event.preventDefault();
  }
}

function maskData(inputData) {
  const valueData = inputData.value;
  if (valueData.length === 2) {
    inputData.value += "/";
  } else if (valueData.length === 5) {
    inputData.value += "/";
  }
}

function enviarFormulario() {
  const inputNome = document.getElementById("inputNome").value;
  const inputData = document.getElementById("inputData").value;
  const contBody = document.getElementById("contBody");
  let id = 1;

  contBody.innerHTML += `
  <tr>
    <td id="nome">${inputNome}</td>
    <td>${inputData}</td>
    <td>
      <button class="btnEditar">Editar</button>
      <button class="btnDeletar">Deletar</button>
    </td>
  </tr>
  `;

  id++;
}

function guardarDados() {
  const nome = document.getElementById("inputNome").value;
  const data = document.getElementById("inputData").value;

  const btnSalvar = document.getElementById("btnSalvar");
  btnSalvar.addEventListener("click", () => {
    agenda.push({ nome, data });
  });
  localStorage.setItem("pessoas", JSON.stringify(agenda));
  agenda = JSON.parse(localStorage.getItem("pessoas"));
}

// function editarAniversario() {
//   const editarButton = document.getElementsByClassName("btnEditar");
//   editarButton.addEventListener("click", () => {
//     console.log(editarButton);
//   });
// }
// editarAniversario();
