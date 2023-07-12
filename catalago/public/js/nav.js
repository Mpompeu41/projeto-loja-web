// nav.js

// Função para redirecionar para a página inicial
function goToHome() {
  window.location.href = "/";
}

// Função para redirecionar para a página de contato
function goToContact() {
  window.location.href = "/contato";
}

// Função para redirecionar para a página de cadastro
function goToRegistration() {
  window.location.href = "/cadastro";
}

// Função para redirecionar para a página "Sobre nós"
function goToAbout() {
  window.location.href = "/sobre";
}

// Função para realizar a pesquisa
function search() {
  const query = document.getElementById("searchInput").value;
  // Lógica para processar a pesquisa
  window.location.href = "/?search=" + query;
}

// Função para redirecionar para a página de avaliação de compra
function goToAvaliation() {
  window.location.href = "/avaliacao";
}

// Event listener para o clique no botão Home
document.getElementById("homeLink").addEventListener("click", goToHome);

// Event listener para o clique no botão Contato
document.getElementById("contactLink").addEventListener("click", goToContact);

// Event listener para o clique no botão Cadastro
document
  .getElementById("registrationLink")
  .addEventListener("click", goToRegistration);

// Event listener para o clique no botão Sobre
document.getElementById("aboutLink").addEventListener("click", goToAbout);

// Event listener para o clique no botão Procurar
document.getElementById("searchButton").addEventListener("click", search);

// Event listener para o clique no botão Avaliação de Compra
document
  .getElementById("avaliationButton")
  .addEventListener("click", goToAvaliation);

// // nav.js

// // Função para redirecionar para a página inicial
// function goToHome() {
//   window.location.href = "/";
// }

// // Função para redirecionar para a página de contato
// function goToContact() {
//   window.location.href = "/catalago/views/contato.html";
// }

// // Função para redirecionar para a página de cadastro
// function goToRegistration() {
//   window.location.href = "/cadastro";
// }

// // Função para redirecionar para a página "Sobre nós"
// function goToAbout() {
//   window.location.href = "/sobre";
// }

// // Função para realizar a pesquisa
// function search() {
//   const query = document.getElementById("searchInput").value;
//   // Lógica para processar a pesquisa
//   console.log("Pesquisando por: ", query);
// }

// // Event listener para o clique no botão Home
// document.getElementById("homeLink").addEventListener("click", goToHome);

// // Event listener para o clique no botão Contato
// document.getElementById("contactLink").addEventListener("click", goToContact);

// // Event listener para o clique no botão Cadastro
// document
//   .getElementById("registrationLink")
//   .addEventListener("click", goToRegistration);

// // Event listener para o clique no botão Sobre
// document.getElementById("aboutLink").addEventListener("click", goToAbout);

// // Event listener para o clique no botão Pesquisar
// document.getElementById("searchButton").addEventListener("click", search);
