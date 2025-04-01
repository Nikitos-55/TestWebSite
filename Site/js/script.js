const body = document.querySelector("body");
const modalWindowBg = document.querySelector(".modal-window");
const modalWindow = document.querySelector(".modal-window__container");
const showDialogBtnBg = document.querySelector("#showDialogBg");
const showDialogBtn = document.querySelector("#showDialog");
const closeDialogBtn = document.querySelector("#closeDialog");
const sendBtn = document.querySelector(".modal-window__send-btn");
const message = document.querySelector(".message");
const closeMessageBtn = document.querySelector("#closeMessage");

function showModal() {
    modalWindow.showModal();
    body.style.overflowY = "hidden";
    modalWindowBg.style.display = "block";
    modalWindowBg.style.backgroundColor = "var(--color-black)";
    modalWindowBg.style.opacity = .5;
    modalWindowBg.style.zIndex = 1;
}

function closeModal() {
    modalWindow.close();
    message.close();
    body.style.overflowY = "scroll";
    modalWindowBg.style.display = "none";
}

function showMessage() {
    modalWindow.close();
    message.showModal();
}

function validateForm() {
    let isValid = true;
    const requiredFields = document.querySelectorAll('input[required]');

    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            isValid = false;
            field.classList.add('invalid');
        } else {
            field.classList.remove('invalid');
        }
    });

    if (!isValid) {
        alert('Пожалуйста, заполните все обязательные поля!');
        return;
    }

    showMessage();
}

sendBtn.addEventListener("click", validateForm);
showDialogBtn.addEventListener("click", showModal);
closeDialogBtn.addEventListener("click", closeModal);
closeMessageBtn.addEventListener("click", closeModal);
showDialogBtnBg.addEventListener("click", function() {
    showModal();
    modalWindowBg.style.backgroundColor = "var(--color-white)";
    modalWindowBg.style.opacity = 1;
})