const form = document.querySelector("form")

const eye = document.querySelector("#eye")

const eye2 = document.querySelector("#eye2")

const btn = document.querySelector(".fa-bars")

const menu = document.querySelector(".menu")

const xmark = document.querySelector(".fa-xmark")

xmark.addEventListener("click", () => {
    menu.style.transform = "translateX(200px)"
})

btn.addEventListener("click", () => {
    menu.style.transform = "translateX(0)"
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const userName = form.username.value

    const userEmail = form.useremail.value

    const createPass = form.createpass.value

    const confirmPass = form.confirmpass.value

    const emailRegExp = /^[a-z0-9]{10,40}@gmail.com$/

    const passRegExp = /^[a-z0-9]{6,15}$/


    if (passRegExp.test(createPass.match(confirmPass))) {
        window.location.assign("https://t.me/THE_ALIEN_MODE")
    } else {
        alert("Parol xato. Menimcha tasdiqlash kodi xato. Yoki keraksiz belgi kiritildi. Parolinggiz 6 tadan ko'p 15 tadan kam bo'lishi kerak va #$@%^&*( shunga o'xshash belgilar kiritilmasin !!!!!")
    }

})

eye2.addEventListener("click", () => {
    if (eye2.className == "fa-solid fa-eye-slash") {
        document.querySelector("#createpass").type = "text"
        eye2.classList.toggle("fa-eye-slash")
        eye2.classList.toggle("fa-eye")
    } else if (eye2.className == "fa-solid fa-eye") {
        document.querySelector("#createpass").type = 'password'
        eye2.classList.toggle("fa-eye-slash")
        eye2.classList.toggle("fa-eye")
    }
})
eye.addEventListener("click", () => {
    if (eye.className == "fa-solid fa-eye-slash") {
        document.querySelector("#confirmpass").type = "text"
        eye.classList.toggle("fa-eye-slash")
        eye.classList.toggle("fa-eye")
    } else if (eye.className == "fa-solid fa-eye") {
        document.querySelector("#confirmpass").type = 'password'
        eye.classList.toggle("fa-eye-slash")
        eye.classList.toggle("fa-eye")
    }
})



