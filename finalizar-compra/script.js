// nome _______________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const nomeInput = document.getElementById("nome");

  // Limitar caracteres no nome e garantir que apenas letras sejam aceitas
  nomeInput.addEventListener("input", function () {
      if (nomeInput.value.length > 16) {
          nomeInput.value = nomeInput.value.slice(0, 16);
      }
      
      // Remove números, deixando apenas letras e espaços
      nomeInput.value = nomeInput.value.replace(/[^a-zA-Z\s]/g, "");
  });
});

// sobrenome _________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const sobrenomeInput = document.getElementById("sobrenome");

  // Limitar caracteres no sobrenome e garantir que apenas letras sejam aceitas
  sobrenomeInput.addEventListener("input", function () {
      if (sobrenomeInput.value.length > 23) {
          sobrenomeInput.value = sobrenomeInput.value.slice(0, 23);
      }
      
      // Remove números, deixando apenas letras e espaços
      sobrenomeInput.value = sobrenomeInput.value.replace(/[^a-zA-Z\s]/g, "");
  });
});

// telefone _______________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  const telefoneInput = document.getElementById("telefone");
  telefoneInput.setAttribute("inputmode", "numeric");  // Garante o teclado numérico
  const placeholderTelefone = "+55 (__) _____-____";

  function aplicarMascaraTelefone(valor) {
      let numeros = valor.replace(/\D/g, "").substring(0, 13);
      let resultado = "+55 ";
      if (numeros.length > 2) resultado += `(${numeros.substring(2, 4)}) `;
      if (numeros.length > 4) resultado += `${numeros.substring(4, 9)}-`;
      if (numeros.length > 9) resultado += numeros.substring(9, 13);
      return resultado;
  }

  telefoneInput.addEventListener("input", function () {
      let posicaoCursor = telefoneInput.selectionStart;
      let valorAntigo = telefoneInput.value;
      let valorNovo = aplicarMascaraTelefone(valorAntigo);
      telefoneInput.value = valorNovo;

      let diferenca = valorNovo.length - valorAntigo.length;
      telefoneInput.setSelectionRange(posicaoCursor + diferenca, posicaoCursor + diferenca);
  });

  telefoneInput.addEventListener("keydown", function (e) {
      let posicaoCursor = telefoneInput.selectionStart;
      let valorAtual = telefoneInput.value;
      let numerosAtuais = valorAtual.replace(/\D/g, "");

      if (posicaoCursor <= 4 && e.key === "Backspace") {
          e.preventDefault();
          return;
      }

      if (e.key >= "0" && e.key <= "9") {
          if (numerosAtuais.length >= 13) {
              e.preventDefault();
              return;
          }
      }

      if (e.key === "Backspace") {
          let novoCursor = posicaoCursor;
          if (valorAtual[posicaoCursor - 1] === "-") novoCursor--;
          if (valorAtual[posicaoCursor - 1] === ")") novoCursor--;
          let novaString = valorAtual.substring(0, novoCursor - 1) + valorAtual.substring(novoCursor);
          telefoneInput.value = aplicarMascaraTelefone(novaString);
          telefoneInput.setSelectionRange(novoCursor - 1, novoCursor - 1);
          e.preventDefault();
      }
  });

  telefoneInput.addEventListener("blur", function () {
      let numerosAtuais = telefoneInput.value.replace(/\D/g, "");
      if (numerosAtuais.length <= 2) {
          telefoneInput.value = placeholderTelefone;
      }
  });

  telefoneInput.addEventListener("focus", function () {
      if (telefoneInput.value === placeholderTelefone) {
          telefoneInput.value = "+55 ";
      }
  });

  // CEP E NÚMERO (Apenas Números) - teclado numérico
  const cepInput = document.getElementById("cep");
  cepInput.setAttribute("inputmode", "numeric");  // Garante o teclado numérico

  const numeroInput = document.getElementById("numero");
  numeroInput.setAttribute("inputmode", "numeric");  // Garante o teclado numérico

  cepInput.addEventListener("input", function () {
      cepInput.value = cepInput.value.replace(/[^0-9]/g, "");
  });

  numeroInput.addEventListener("input", function () {
      numeroInput.value = numeroInput.value.replace(/[^0-9]/g, "");
  });
});

// parte do endereco de entrega _______________________________________________________
document.addEventListener('DOMContentLoaded', function () {
    var cepInput = document.getElementById('cep');
    var enderecoInput = document.getElementById('endereco');
    var numeroInput = document.getElementById('numero');
    var complementoInput = document.getElementById('complemento');
    var bairroInput = document.getElementById('bairro');
    var cidadeInput = document.getElementById('cidade');
    var estadoInput = document.getElementById('estado');
  
    cepInput.addEventListener('input', function () {
      cepInput.value = cepInput.value.replace(/[^0-9]/g, '');
    });
  
    enderecoInput.addEventListener('input', function () {
      enderecoInput.value = enderecoInput.value.replace(/[^A-Za-z\s]/g, '');
    });
  
    numeroInput.addEventListener('input', function () {
      numeroInput.value = numeroInput.value.replace(/[^0-9]/g, '');
    });
  
    complementoInput.addEventListener('input', function () {
      complementoInput.value = complementoInput.value.replace(/[^A-Za-z0-9\s]/g, '');
    });
  
    bairroInput.addEventListener('input', function () {
      bairroInput.value = bairroInput.value.replace(/[^A-Za-z\s]/g, '');
    });
  
    cidadeInput.addEventListener('input', function () {
      cidadeInput.value = cidadeInput.value.replace(/[^A-Za-z\s]/g, '');
    });
  
    estadoInput.addEventListener('input', function () {
      estadoInput.value = estadoInput.value.replace(/[^A-Za-z\s]/g, '');
    });
});

//  opcao de frete _____________________________________________________
document.addEventListener('DOMContentLoaded', function () {
    var cepInput = document.getElementById('cep');
    var precoPex = document.getElementById('preco-pex');
    var precoSedex = document.getElementById('preco-sedex');
  
    cepInput.addEventListener('input', function () {
      var cep = cepInput.value;
      if (cep.length === 8) { // Verifique se o CEP tem 8 dígitos
        fetch(`URL_DO_SEU_BACKEND/calcular-frete?cep=${cep}`)
          .then(response => response.json())
          .then(data => {
            precoPex.textContent = `R$ ${data.pex} - 10 dias úteis`;
            precoSedex.textContent = `R$ ${data.sedex} - 4 dias úteis`;
          })
          .catch(error => console.error('Erro ao calcular o frete:', error));
      }
    });
  
    var opcaoFreteElements = document.querySelectorAll('.opcao-frete');
    var freteEscolhido = document.getElementById('frete-escolhido');
  
    opcaoFreteElements.forEach(function (element) {
      element.addEventListener('click', function () {
        opcaoFreteElements.forEach(function (el) {
          el.classList.remove('selected');
        });
        element.classList.add('selected');
        freteEscolhido.value = element.getAttribute('data-value');
      });
    });
});

// adciona um numero 
let quantidade = 1;

function atualizarContador() {
    document.querySelector('.contador').innerText = quantidade;
}

function aumentarQuantidade() {
    quantidade++;
    atualizarContador();
}

function diminuirQuantidade() {
    if (quantidade > 1) {
        quantidade--;
        atualizarContador();
    }
}

// puxar os dados do produto selecionado
document.addEventListener('DOMContentLoaded', function() {
  const tamanho = localStorage.getItem('tamanho');
  const cor = localStorage.getItem('cor');
  const preco = localStorage.getItem('preco');

  if (tamanho && cor && preco) {
      document.getElementById('selecao').innerText = `Tamanho: ${tamanho}, Cor: ${cor}`;
      document.getElementById('preco-produto').innerText = `R$ ${preco}`;
  }
});
