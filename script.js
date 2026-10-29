/* =========================================================
   CROSS BARBEARIA - JavaScript
   ========================================================= */

/*
  Troque APENAS o conteúdo entre aspas
  pela senha real do Wi-Fi.
*/
const wifiPassword = "Cross292604";

const copyWifiButton = document.getElementById("copyWifiButton");
const copyFeedback = document.getElementById("copyFeedback");

copyWifiButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(wifiPassword);
    showCopyFeedback();
  } catch (error) {
    copyTextFallback(wifiPassword);
    showCopyFeedback();
  }
});

function copyTextFallback(text) {
  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = text;
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  temporaryInput.style.pointerEvents = "none";
  document.body.appendChild(temporaryInput);
  temporaryInput.focus();
  temporaryInput.select();
  document.execCommand("copy");
  temporaryInput.remove();
}

function showCopyFeedback() {
  copyFeedback.classList.add("is-visible");
  clearTimeout(window.copyFeedbackTimeout);
  window.copyFeedbackTimeout = setTimeout(() => {
    copyFeedback.classList.remove("is-visible");
  }, 2200);
}
