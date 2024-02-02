let agenda = [];

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

function conferirFormulario() {
  const inputNome = document.getElementById("inputNome").value;
  const inputData = document.getElementById("inputData").value;
  const campoNome = document.getElementById("campoNome");
  const campoData = document.getElementById("campoData");

  if (inputNome.length < 3 || inputNome.length > 120) {
    const msgErroNome = document.createElement("span");
    msgErroNome.classList.add("msgErro");
    msgErroNome.innerHTML = `O nome precrisa ter pelo menos três letras e no máximo cento e vinte,
    não é possível informar números.`;
    campoNome.appendChild(msgErroNome);
  }
  if (inputData.length < 10) {
    const msgErroData = document.createElement("span");
    msgErroData.classList.add("msgErro");
    msgErroData.innerHTML = `A data precisa estar no formato de DD/MM/AAAA`;
    campoData.appendChild(msgErroData);
  } else {
    guardarDados();
    enviarFormulario();
  }
}

let id = 1;

function enviarFormulario() {
  const inputNome = document.getElementById("inputNome").value;
  const inputData = document.getElementById("inputData").value;
  const contBody = document.getElementById("contBody");
  let novoId = `row_${id}`;

  contBody.innerHTML += `
    <tr id="${novoId}">
      <td id="nome">${inputNome}</td>
      <td>${inputData}</td>
      <td>
        <button class="btnEditar">Editar</button>
        <button class="btnDeletar">Deletar</button>
      </td>
    </tr>
  `;

  id++;

  document.getElementById("inputNome").value = "";
  document.getElementById("inputData").value = "";

  apagarAniversario();
}

function guardarDados() {
  const nome = document.getElementById("inputNome").value;
  const data = document.getElementById("inputData").value;

  agenda.push({ nome, data });

  localStorage.setItem("aniversarios", JSON.stringify(agenda));
  agenda = JSON.parse(localStorage.getItem("aniversarios"));
}

function apagarAniversario() {
  const editarButton = document.querySelectorAll(".btnDeletar");

  editarButton.forEach((button) => {
    button.addEventListener("click", () => {
      const row = event.target.closest("tr");
      row.remove();
    });
  });
}
apagarAniversario();
