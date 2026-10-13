/* =========================================================
   TEMPLATE ADVOCACIA — AUTORAL — JavaScript
   ========================================================= */

/* ---- CONFIGURAÇÃO POR CLIENTE ---- */
const CONFIG = {
  whatsapp: "5511900000000",   // DDI + DDD + número (só dígitos)
  mensagem: "Olá! Gostaria de agendar um atendimento."
};

/* Links de WhatsApp em todo [data-wpp] */
document.querySelectorAll("[data-wpp]").forEach(el => {
  el.href = `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(CONFIG.mensagem)}`;
  el.target = "_blank"; el.rel = "noopener";
});

/* Menu mobile */
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => { burger.classList.toggle("open"); menu.classList.toggle("open"); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { burger.classList.remove("open"); menu.classList.remove("open"); }));

/* Header sólido ao rolar */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", scrollY > 40);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* Animação de entrada ao rolar */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Cards de áreas: "Ver mais" expande/recolhe a lista (altura animada) */
document.querySelectorAll(".area").forEach(card => {
  const btn = card.querySelector(".area__btn"), list = card.querySelector(".area__list");
  btn.addEventListener("click", () => {
    const open = card.classList.toggle("open");
    list.style.maxHeight = open ? list.scrollHeight + "px" : 0;
    btn.setAttribute("aria-expanded", open);
    btn.firstChild.textContent = open ? "Ver menos" : "Ver mais";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
