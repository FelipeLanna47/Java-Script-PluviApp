let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.add("hidden");
  });
  slides[index].classList.remove("hidden");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Slideshow automático
setInterval(nextSlide, 3000);
showSlide(slideIndex);


// Validação do formulário
const form = document.getElementById("alertForm");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const bairro = form.bairro.value.trim();

  if (!nome || !email || !bairro) {
    formMessage.textContent = "Preencha todos os campos.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Cadastro realizado com sucesso!";
  formMessage.style.color = "green";
  form.reset();
});

// Quiz interativo
const quizData = [
  {
    pergunta: "1. Qual é o nível crítico de transbordamento de um rio urbano?",
    opcoes: ["2 metros", "1 metro", "3 metros"],
    correta: "2 metros"
  },
  {
    pergunta: "2. A PluviApp emite alertas de:",
    opcoes: ["Furacões", "Enchentes", "Nevascas"],
    correta: "Enchentes"
  }
];

const quizContainer = document.getElementById("quiz-container");

quizData.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  const p = document.createElement("p");
  p.textContent = q.pergunta;

  div.appendChild(p);
  q.opcoes.forEach(opcao => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="radio" name="q${index}" value="${opcao}"> ${opcao}`;
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
  });

  quizContainer.appendChild(div);
});

document.getElementById("submit-quiz").addEventListener("click", () => {
  let acertos = 0;
  quizData.forEach((q, i) => {
    const resposta = document.querySelector(`input[name="q${i}"]:checked`);
    if (resposta && resposta.value === q.correta) acertos++;
  });

  document.getElementById("quiz-result").textContent =
    `Você acertou ${acertos} de ${quizData.length} perguntas.`;
});

// Troca de temas
document.querySelectorAll('.theme-icons i').forEach(icon => {
  icon.addEventListener('click', () => {
    document.body.className = icon.getAttribute('data-theme');
  });
});