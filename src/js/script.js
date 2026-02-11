// Переклади
const translations = {
  uk: {
    title: "З Днем Закоханих ❤️",
    subtitle: "Для найважливішої людини в моєму житті",
    loveBtn: "Натисни, якщо кохаєш 💕",
    runawayBtn: "Не кохаю",
    message1:
      "Кохання — це коли кожен день з тобою стає святом.<br />Дякую за твою усмішку, тепло і підтримку.<br />Я безмежно щасливий(а), що ти є в моєму житті.",
    message2:
      "Нехай цей День Закоханих стане ще одним красивим спогадом для нас 💕",
    footer: "З любов'ю 💌 | 14 лютого",
    slides: [
      "Ти - моє сонце у похмурий день ☀️",
      "Кожна мить з тобою - це магія ✨",
      "Ти робиш моє життя яскравішим 🌈",
      "З тобою я по-справжньому щасливий(а) 💕",
      "Дякую, що ти є в моєму житті! ❤️",
    ],
    funnyTexts: [
      "Гей, не лови мене! 🏃",
      "Ти серйозно? 😅",
      "Ну ти й наполеглива! 😄",
      "Стій, стій! 🤪",
      "Я швидший! ⚡",
      "Майже зловила! 😜",
      "Ще трохи спробуй! 💨",
      "Останній раз втікаю! 🙈",
      "Ладно-ладно... 😳",
      "Здаюся! 🏳️",
    ],
    finalBtn: "Точно не кохаєш!",
    sadText1: "Шкода...",
    sadText2: "Тепер ти так і не дізнаєшся,",
    sadText3: 'що було б, коли б ти натиснула на "Кохаю"',
    closeBtn: "Закрити",
  },
  de: {
    title: "Alles Gute zum Valentinstag ❤️",
    subtitle: "Für die wichtigste Person in meinem Leben",
    loveBtn: "Drück, wenn du liebst 💕",
    runawayBtn: "Ich liebe nicht",
    message1:
      "Liebe ist, wenn jeder Tag mit dir zum Fest wird.<br />Danke für dein Lächeln, deine Wärme und Unterstützung.<br />Ich bin unendlich glücklich, dass du in meinem Leben bist.",
    message2:
      "Möge dieser Valentinstag eine weitere schöne Erinnerung für uns werden 💕",
    footer: "Mit Liebe 💌 | 14. Februar",
    slides: [
      "Du bist meine Sonne an trüben Tagen ☀️",
      "Jeder Moment mit dir ist Magie ✨",
      "Du machst mein Leben bunter 🌈",
      "Mit dir bin ich wirklich glücklich 💕",
      "Danke, dass es dich in meinem Leben gibt! ❤️",
    ],
    funnyTexts: [
      "Hey, fang mich nicht! 🏃",
      "Ist das dein Ernst? 😅",
      "Du bist ja hartnäckig! 😄",
      "Halt, halt! 🤪",
      "Ich bin schneller! ⚡",
      "Fast erwischt! 😜",
      "Versuch's noch mal! 💨",
      "Das letzte Mal, dass ich weglaufe! 🙈",
      "Na gut... 😳",
      "Ich gebe auf! 🏳️",
    ],
    finalBtn: "Ich liebe wirklich nicht!",
    sadText1: "Schade...",
    sadText2: "Jetzt wirst du nie erfahren,",
    sadText3: 'was passiert wäre, wenn du auf "Ich liebe" gedrückt hättest',
    closeBtn: "Schließen",
  },
  en: {
    title: "Happy Valentine's Day ❤️",
    subtitle: "For the most important person in my life",
    loveBtn: "Press if you love 💕",
    runawayBtn: "I don't love",
    message1:
      "Love is when every day with you becomes a celebration.<br />Thank you for your smile, warmth and support.<br />I'm infinitely happy that you're in my life.",
    message2:
      "May this Valentine's Day become another beautiful memory for us 💕",
    footer: "With love 💌 | February 14th",
    slides: [
      "You are my sunshine on a cloudy day ☀️",
      "Every moment with you is magic ✨",
      "You make my life brighter 🌈",
      "With you I'm truly happy 💕",
      "Thank you for being in my life! ❤️",
    ],
    funnyTexts: [
      "Hey, don't catch me! 🏃",
      "Are you serious? 😅",
      "You're so persistent! 😄",
      "Stop, stop! 🤪",
      "I'm faster! ⚡",
      "Almost caught me! 😜",
      "Try a bit more! 💨",
      "Last time I'm running! 🙈",
      "Okay, okay... 😳",
      "I surrender! 🏳️",
    ],
    finalBtn: "I really don't love!",
    sadText1: "Too bad...",
    sadText2: "Now you'll never know,",
    sadText3: 'what would have happened if you pressed "I love"',
    closeBtn: "Close",
  },
};

let currentLang = "uk";
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
document.getElementById("totalSlides").textContent = totalSlides;
let autoSlideInterval = null;

// Функція зміни мови
function changeLanguage(lang) {
  currentLang = lang;

  // Оновлюємо активну кнопку
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  // Оновлюємо весь текст
  const t = translations[lang];
  document.getElementById("main-title").innerHTML = t.title;
  document.getElementById("subtitle").innerHTML = t.subtitle;
  document.getElementById("love-btn-text").innerHTML = t.loveBtn;
  document.getElementById("message-text-1").innerHTML = t.message1;
  document.getElementById("message-text-2").innerHTML = t.message2;
  document.getElementById("footer-text").innerHTML = t.footer;
  document.getElementById("sad-text-1").innerHTML = t.sadText1;
  document.getElementById("sad-text-2").innerHTML = t.sadText2;
  document.getElementById("sad-text-3").innerHTML = t.sadText3;
  document.getElementById("close-btn-text").innerHTML = t.closeBtn;

  // Оновлюємо тексти слайдів
  document.querySelectorAll(".slide-text").forEach((elem, index) => {
    elem.innerHTML = t.slides[index];
  });

  // Оновлюємо текст кнопки "Не кохаю" тільки якщо вона ще не змінилася
  const runawayBtn = document.getElementById("runaway-btn");
  if (escapeCount === 0) {
    document.getElementById("runaway-btn-text").innerHTML = t.runawayBtn;
  } else if (escapeCount >= translations[currentLang].funnyTexts.length) {
    runawayBtn.textContent = t.finalBtn;
  }
}

function createHeart(inModal = false) {
  const heart = document.createElement("div");
  heart.className = inModal ? "modal-heart" : "falling-heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

let loveInterval;

function startLove() {
  const music = document.getElementById("music");
  const modal = document.getElementById("photoModal");

  // Відкриваємо модальне вікно
  modal.style.display = "block";
  currentSlideIndex = 0;
  showSlide(currentSlideIndex);

  // Запускаємо автоматичне перемикання слайдів кожні 3 секунди
  startAutoSlide();

  // Автоматично запускаємо музику
  music.play().catch((error) => {
    console.log("Автовідтворення заблоковано браузером:", error);
  });

  // Запускаємо серця (тепер вони падають ЗА модальним вікном)
  if (!loveInterval) {
    loveInterval = setInterval(() => createHeart(true), 300);
  }

  // Блокуємо прокрутку body на мобільних
  document.body.style.overflow = "hidden";
}

function startAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }

  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
}

function stopAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
}

function closeModal() {
  const modal = document.getElementById("photoModal");
  const music = document.getElementById("music");

  modal.style.display = "none";

  stopAutoSlide();

  music.pause();
  if (loveInterval) {
    clearInterval(loveInterval);
    loveInterval = null;
  }

  // Розблоковуємо прокрутку body
  document.body.style.overflow = "";
}

function closeSadModal() {
  const sadModal = document.getElementById("sadModal");
  sadModal.style.display = "none";

  // Розблоковуємо прокрутку body
  document.body.style.overflow = "";
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides[currentSlideIndex].classList.add("active");
  document.getElementById("currentSlide").textContent = currentSlideIndex + 1;
}

function changeSlide(direction) {
  showSlide(currentSlideIndex + direction);

  if (autoSlideInterval) {
    startAutoSlide();
  }
}

document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("photoModal");
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "Escape") closeModal();
  }
});

window.onclick = function (event) {
  const modal = document.getElementById("photoModal");
  const sadModal = document.getElementById("sadModal");
  if (event.target == modal) {
    closeModal();
  }
  if (event.target == sadModal) {
    closeSadModal();
  }
};

const runawayBtn = document.getElementById("runaway-btn");
const messageBlock = document.querySelector(".message");
const footerBlock = document.querySelector("footer");
let escapeCount = 0;

runawayBtn.addEventListener("mouseenter", () => {
  const funnyTexts = translations[currentLang].funnyTexts;

  if (escapeCount < funnyTexts.length) {
    runawayBtn.innerHTML = `<span id="runaway-btn-text">${funnyTexts[escapeCount]}</span>`;

    setTimeout(() => {
      const btnWidth = runawayBtn.offsetWidth;
      const btnHeight = runawayBtn.offsetHeight;
      const padding = 20;

      const messageRect = messageBlock.getBoundingClientRect();
      const footerRect = footerBlock.getBoundingClientRect();

      let newX, newY;
      let attempts = 0;
      const maxAttempts = 50;

      do {
        newX =
          Math.random() * (window.innerWidth - btnWidth - padding * 2) +
          padding;
        newY =
          Math.random() * (window.innerHeight - btnHeight - padding * 2) +
          padding;

        attempts++;

        const intersectsMessage = !(
          newX + btnWidth < messageRect.left ||
          newX > messageRect.right ||
          newY + btnHeight < messageRect.top ||
          newY > messageRect.bottom
        );

        const intersectsFooter = !(
          newX + btnWidth < footerRect.left ||
          newX > footerRect.right ||
          newY + btnHeight < footerRect.top ||
          newY > footerRect.bottom
        );

        if (!intersectsMessage && !intersectsFooter) {
          break;
        }
      } while (attempts < maxAttempts);

      runawayBtn.style.position = "absolute";
      runawayBtn.style.left = `${newX}px`;
      runawayBtn.style.top = `${newY}px`;
    }, 150);

    escapeCount++;
  } else {
    runawayBtn.textContent = translations[currentLang].finalBtn;
    runawayBtn.style.cursor = "pointer";
  }
});

runawayBtn.addEventListener("click", () => {
  if (escapeCount >= translations[currentLang].funnyTexts.length) {
    const sadModal = document.getElementById("sadModal");
    sadModal.style.display = "block";

    // Блокуємо прокрутку body на мобільних
    document.body.style.overflow = "hidden";
  }
});

// Підтримка свайпів для мобільних пристроїв
let touchStartX = 0;
let touchEndX = 0;

document.getElementById("photoModal").addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.getElementById("photoModal").addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    // Свайп вліво - наступний слайд
    changeSlide(1);
  }
  if (touchEndX > touchStartX + 50) {
    // Свайп вправо - попередній слайд
    changeSlide(-1);
  }
}
