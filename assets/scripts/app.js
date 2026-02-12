// ===== CONFIG =====
const CORRECT_PIN = "0904"; // ⬅️ смени с вашия код
const PIN_LENGTH = 4;

// ===== STATE =====
let pin = "";

// ===== ELEMENTS =====
const dots = Array.from(document.querySelectorAll(".dot"));
const keypad = document.querySelector(".keypad");
const clearBtn = document.getElementById("clearBtn");
const backBtn = document.getElementById("backBtn");
const form = document.getElementById("lockForm");

// ===== FUNCTIONS =====
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < pin.length);
  });
}

function resetPin() {
  pin = "";
  updateDots();
}

function submitPin() {
  if (pin.length !== PIN_LENGTH) return;

  if (pin === CORRECT_PIN) {
    window.location.href = "menu.html";
  } else {
    window.location.href = "wrong.html";
  }
}

// ===== EVENTS =====

// натискане на цифри
keypad.addEventListener("click", (e) => {
  const btn = e.target.closest(".key");
  if (!btn) return;

  const digit = btn.dataset.digit;
  if (digit === undefined) return;

  if (pin.length >= PIN_LENGTH) return;

  pin += digit;
  updateDots();
});

// clear (C)
clearBtn.addEventListener("click", () => {
  resetPin();
});

// backspace (⌫)
backBtn.addEventListener("click", () => {
  if (pin.length === 0) return;
  pin = pin.slice(0, -1);
  updateDots();
});

// Enter бутон
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitPin();
});

// ===== INIT =====
updateDots();
