const pageSettings = {
  home: {
    label: "Главная",
    note: "PulseSite помогает быстро увидеть, как страницы отображаются в разных браузерах и на разных устройствах — до того, как это заметят ваши пользователи.",
    message: "Вы на главной странице PulseSite.",
  },
  download: {
    label: "Приложение",
    note: "Приложение PulseSite уже готовится к выпуску. Ссылка на скачивание появится здесь немного позже.",
    message: "Скачать приложение пока нельзя — оно скоро появится.",
  },
};

const pageButtons = document.querySelectorAll("button[data-page]");
const navigationButtons = document.querySelectorAll(".navbar__link");
const currentSection = document.querySelector("#current-section");
const pageNote = document.querySelector("#page-note");
const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(
    () => toast.classList.remove("is-visible"),
    2800,
  );
}

function selectPage(page) {
  const settings = pageSettings[page];

  if (!settings) return;

  document.body.dataset.theme = page;
  currentSection.innerHTML = `<span></span> ${settings.label}`;
  pageNote.textContent = settings.note;

  navigationButtons.forEach((button) => {
    const isActive = button.dataset.page === page;
    button.classList.toggle("is-active", isActive);
    button.toggleAttribute("aria-current", isActive);
  });

  showToast(settings.message);
}

pageButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    selectPage(button.dataset.page);
  });
});
