// Переклади
const translations = {
  uk: {
    title: "З Днем Закоханих ❤️",
    subtitle: "Для найважливішої людини в моєму житті",
    loveBtn: "Натисни, якщо кохаєш 💕",
    loveBtnBlocked: "Повернись через 24 години 💔",
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
      "Твоя усмішка - найкраще, що я бачу кожен день 😊",
      "Поруч з тобою я вдома, де б ми не були 🏡",
      "З тобою навіть звичайні миті стають особливими ✨",
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
      "Точно не кохаєш?",
    ],
    finalBtn: "Точно не кохаєш?",
    sadText1: "Шкода...",
    sadText2: "Тепер ти так і не дізнаєшся,",
    sadText3: 'що було б, коли б ти натиснула на "Кохаю"',
    closeBtn: "Закрити",
    blockedTooltip: "Ти обрала не кохати... Повернись через ",
  },
  de: {
    title: "Alles Gute zum Valentinstag ❤️",
    subtitle: "Für die wichtigste Person in meinem Leben",
    loveBtn: "Drück, wenn du liebst 💕",
    loveBtnBlocked: "Komm in 24 Stunden zurück 💔",
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
      "Dein Lächeln ist das Schönste, was ich jeden Tag sehe 😊",
      "Bei dir bin ich zuhause, egal wo wir sind 🏡",
      "Mit dir werden selbst gewöhnliche Momente besonders ✨",
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
      "Du liebst mich wirklich nicht?",
    ],
    finalBtn: "Du liebst mich wirklich nicht?",
    sadText1: "Schade...",
    sadText2: "Jetzt wirst du nie erfahren,",
    sadText3: 'was passiert wäre, wenn du auf "Ich liebe" gedrückt hättest',
    closeBtn: "Schließen",
    blockedTooltip: "Du hast dich gegen die Liebe entschieden... Komm in ",
  },
  en: {
    title: "Happy Valentine's Day ❤️",
    subtitle: "For the most important person in my life",
    loveBtn: "Press if you love 💕",
    loveBtnBlocked: "Come back in 24 hours 💔",
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
      "Your smile is the best thing I see every day 😊",
      "With you I'm home, wherever we are 🏡",
      "With you, even ordinary moments feel special ✨",
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
      "You really don't love me?",
    ],
    finalBtn: "You really don't love me?",
    sadText1: "Too bad...",
    sadText2: "Now you'll never know,",
    sadText3: 'what would have happened if you pressed "I love"',
    closeBtn: "Close",
    blockedTooltip: "You chose not to love... Come back in ",
  },
};

// ================== ЗМІННІ ==================
let currentLang = "uk";
let currentSlideIndex = 0;
let autoSlideInterval = null;
let loveInterval = null;
let escapeCount = 0;
let countdownInterval = null;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
document.getElementById("totalSlides").textContent = totalSlides;

const runawayBtn = document.getElementById("runaway-btn");
const messageBlock = document.querySelector(".message");
const footerBlock = document.querySelector("footer");
const langSelector = document.querySelector(".language-selector");

const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

// ================== БЛОКУВАННЯ КНОПКИ ==================
const BLOCK_KEY = "loveBtnBlockedUntil";
const BLOCK_DURATION = 1 * 60 * 60 * 1000;

function blockLoveButton() {
  localStorage.setItem(BLOCK_KEY, Date.now() + BLOCK_DURATION);
  applyLoveButtonBlock();
}

function applyLoveButtonBlock() {
  const blockedUntil = +localStorage.getItem(BLOCK_KEY) || 0;
  const loveBtn = document.querySelector(".love-btn");

  if (Date.now() < blockedUntil) {
    loveBtn.disabled = true;
    loveBtn.style.opacity = "0.6";
    loveBtn.style.cursor = "not-allowed";
    loveBtn.onclick = null;
    startCountdown(blockedUntil);
  } else {
    localStorage.removeItem(BLOCK_KEY);
    unblockLoveButton();
  }
}

function unblockLoveButton() {
  const loveBtn = document.querySelector(".love-btn");
  loveBtn.disabled = false;
  loveBtn.style.opacity = "1";
  loveBtn.style.cursor = "pointer";
  loveBtn.onclick = startLove;
  document.getElementById("love-btn-text").innerHTML =
    translations[currentLang].loveBtn;
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function startCountdown(blockedUntil) {
  clearInterval(countdownInterval);

  function update() {
    const remaining = blockedUntil - Date.now();
    if (remaining <= 0) {
      unblockLoveButton();
      return;
    }
    const h = String(Math.floor(remaining / 3600000)).padStart(2, "0");
    const m = String(Math.floor((remaining % 3600000) / 60000)).padStart(
      2,
      "0",
    );
    const s = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
    document.getElementById("love-btn-text").innerHTML = `⏳ ${h}:${m}:${s}`;
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

// ================== ЗМІНА МОВИ ==================
function changeLanguage(lang, event) {
  // Додали event
  currentLang = lang;

  // Тепер event.target працюватиме правильно
  if (event) {
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    event.target.classList.add("active");
  }

  const t = translations[lang];
  document.getElementById("main-title").innerHTML = t.title;
  document.getElementById("subtitle").innerHTML = t.subtitle;
  document.getElementById("message-text-1").innerHTML = t.message1;
  document.getElementById("message-text-2").innerHTML = t.message2;
  document.getElementById("footer-text").innerHTML = t.footer;
  document.getElementById("sad-text-1").innerHTML = t.sadText1;
  document.getElementById("sad-text-2").innerHTML = t.sadText2;
  document.getElementById("sad-text-3").innerHTML = t.sadText3;
  document.getElementById("close-btn-text").innerHTML = t.closeBtn;

  document.querySelectorAll(".slide-text").forEach((el, i) => {
    el.innerHTML = t.slides[i];
  });

  const blockedUntil = +localStorage.getItem(BLOCK_KEY) || 0;
  if (Date.now() >= blockedUntil) {
    document.getElementById("love-btn-text").innerHTML = t.loveBtn;
  }

  if (escapeCount === 0) {
    document.getElementById("runaway-btn-text").innerHTML = t.runawayBtn;
  } else if (escapeCount >= t.funnyTexts.length) {
    runawayBtn.textContent = t.finalBtn;
  }
}

// ================== СЕРЦЯ ==================
function createHeart(inModal = false) {
  const heart = document.createElement("div");
  heart.className = inModal ? "modal-heart" : "falling-heart";
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

// ================== СКРОЛ ==================
function lockScroll() {
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function unlockScroll() {
  document.body.style.position = "";
  document.body.style.width = "";
}

// ================== МОДАЛКА З ФОТО ==================
function startLove() {
  const blockedUntil = +localStorage.getItem(BLOCK_KEY) || 0;
  if (Date.now() < blockedUntil) return;

  const modal = document.getElementById("photoModal");
  const music = document.getElementById("music");

  modal.style.display = "block";
  lockScroll();

  currentSlideIndex = 0;
  showSlide(0);
  startAutoSlide();

  // Запускаємо музику
  music.muted = true;
  music
    .play()
    .then(() => {
      music.muted = false;
    })
    .catch(() => {});

  // Запускаємо серця
  if (!loveInterval) {
    loveInterval = setInterval(() => createHeart(true), 300);
  }
}

function closeModal() {
  const modal = document.getElementById("photoModal");
  const music = document.getElementById("music");

  // Ховаємо модалку
  modal.style.display = "none";

  // Розблоковуємо скрол
  unlockScroll();

  // Зупиняємо слайди
  stopAutoSlide();

  // Зупиняємо музику
  music.pause();
  music.currentTime = 0;

  // Зупиняємо серця
  if (loveInterval) {
    clearInterval(loveInterval);
    loveInterval = null;
  }
}

function closeSadModal() {
  document.getElementById("sadModal").style.display = "none";
  unlockScroll();
}

// ================== СЛАЙДИ ==================
function showSlide(index) {
  slides.forEach((s) => s.classList.remove("active"));
  currentSlideIndex = (index + slides.length) % slides.length;
  slides[currentSlideIndex].classList.add("active");
  document.getElementById("currentSlide").textContent = currentSlideIndex + 1;
}

function changeSlide(dir) {
  showSlide(currentSlideIndex + dir);
  if (autoSlideInterval) startAutoSlide();
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => changeSlide(1), 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
}

// ================== СВАЙП ==================
let touchStartX = 0;

const modalEl = document.getElementById("photoModal");

modalEl.addEventListener(
  "touchstart",
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
  },
  { passive: true },
);

modalEl.addEventListener(
  "touchend",
  (e) => {
    const delta = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 60) changeSlide(delta < 0 ? 1 : -1);
  },
  { passive: true },
);

modalEl.addEventListener("touchmove", (e) => e.preventDefault(), {
  passive: false,
});

// ================== КЛАВІАТУРА ==================
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("photoModal");
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "Escape") closeModal();
  }
});

// ================== КЛІК ПО ФОНУ ==================
window.addEventListener("click", (e) => {
  const modal = document.getElementById("photoModal");
  const sadModal = document.getElementById("sadModal");
  if (e.target === modal) closeModal();
  if (e.target === sadModal) closeSadModal();
});

// ================== RUNAWAY КНОПКА ==================
function moveRunawayButton() {
  const btnW = runawayBtn.offsetWidth;
  const btnH = runawayBtn.offsetHeight;
  const pad = 16;
  const scrollY = window.scrollY;
  const msgR = messageBlock.getBoundingClientRect();
  const ftrR = footerBlock.getBoundingClientRect();
  const langR = langSelector.getBoundingClientRect();

  let x,
    y,
    tries = 0;

  do {
    x = Math.random() * (window.innerWidth - btnW - pad * 2) + pad;
    y = Math.random() * (window.innerHeight - btnH - pad * 2) + pad + scrollY;
    tries++;

    const hitMsg = !(
      x + btnW < msgR.left ||
      x > msgR.right ||
      y + btnH < msgR.top + scrollY ||
      y > msgR.bottom + scrollY
    );
    const hitFtr = !(
      x + btnW < ftrR.left ||
      x > ftrR.right ||
      y + btnH < ftrR.top + scrollY ||
      y > ftrR.bottom + scrollY
    );
    const hitLang = !(
      x + btnW < langR.left ||
      x > langR.right ||
      y + btnH < langR.top + scrollY ||
      y > langR.bottom + scrollY
    );

    if (!hitMsg && !hitFtr && !hitLang) break;
  } while (tries < 100);

  runawayBtn.style.position = "absolute";
  runawayBtn.style.left = `${x}px`;
  runawayBtn.style.top = `${y}px`;

  if (navigator.vibrate) navigator.vibrate(20);
}

function handleRunaway(e) {
  if (e) e.preventDefault();

  const texts = translations[currentLang].funnyTexts;

  if (escapeCount < texts.length) {
    // Ще втікає
    runawayBtn.innerHTML = `<span id="runaway-btn-text">${texts[escapeCount]}</span>`;
    setTimeout(moveRunawayButton, isTouch ? 300 : 150);
    escapeCount++;
  } else {
    // Всі тексти пройдені - показуємо фінальний текст
    runawayBtn.textContent = translations[currentLang].finalBtn;
    runawayBtn.style.cursor = "pointer";
    runawayBtn.style.background = "#888";
  }
}

function openSadModal() {
  document.getElementById("sadModal").style.display = "block";
  lockScroll();
  blockLoveButton();
}

if (isTouch) {
  // Мобільний - один обробник touchstart
  runawayBtn.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();

      if (escapeCount >= translations[currentLang].funnyTexts.length) {
        openSadModal();
      } else {
        handleRunaway(e);
      }
    },
    { passive: false },
  );
} else {
  // Десктоп - mouseenter для втечі, click для модалки
  runawayBtn.addEventListener("mouseenter", (e) => {
    if (escapeCount < translations[currentLang].funnyTexts.length) {
      handleRunaway(e);
    }
  });

  runawayBtn.addEventListener("click", () => {
    if (escapeCount >= translations[currentLang].funnyTexts.length) {
      openSadModal();
    }
  });
}

// ================== ОРІЄНТАЦІЯ ==================
window.addEventListener("orientationchange", () => {
  runawayBtn.style.left = "50%";
  runawayBtn.style.top = "80%";
  runawayBtn.style.transform = "translateX(-50%)";
});

// ================== INIT ==================
window.addEventListener("load", () => {
  applyLoveButtonBlock();
  document.querySelectorAll(".slide-text").forEach((el, i) => {
    el.innerHTML = translations[currentLang].slides[i];
  });
});
