function conferirFormulario() {
  const btnSalvar = document.getElementById("btnSalvar");
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

  contBody.innerHTML += `
  <tr>
    <td>${inputNome}</td>
    <td>${inputData}</td>
    <td>
      <a href="/editar" class="btnEditar">Editar</a>
      <a href="/deletar" class="btnDeletar">Deletar</a>
    </td>
  </tr>
  `;
}
