const inputvalue = document.querySelector(".inputbox");
const button = document.querySelector(".btn-success");

const qrcode = "//api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
button.addEventListener("click", () => {
  const inputvalue = document.querySelector(".inputbox");
  if (inputvalue.value === "") {
    inputvalue.value = "error! input field is empty";
    document.querySelector(".inputbox").classList.add("inputanimation");
    setTimeout(() => {
      document.querySelector(".inputbox").classList.remove("inputanimation");
      inputvalue.value = "";
    }, 1000);

    return;
  }
  let src = qrcode + inputvalue.value;
  document.querySelector(".imgcontainer").classList.add("display");
  document.querySelector("img").src = src;
  setTimeout(() => {
    inputvalue.value = "";
  }, 500);
});
