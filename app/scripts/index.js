import "../styles/main.scss";

((
  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
  baseUrl = isMobile
    ? "whatsapp://send/?phone="
    : "https://api.whatsapp.com/send?phone=",
  form = document.forms[0],
  inputCode = document.getElementById("input-code"),
  codeList = document.getElementById("input-code-list"),
  inputPhone = document.getElementById("input-phone")
) => {
  function formatPhone(phone) {
    return phone.replace(/\s|\+|-|\(|\)/g, "");
  }

  codeList.addEventListener("change", (event) => {
    inputCode.value = `+${event.target.value}`;
    inputPhone.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const url =
      baseUrl +
      inputCode.value.replace("+", "") +
      formatPhone(inputPhone.value);

    window.open(url, "_blank");
    inputPhone.value = "";
  });
})();
