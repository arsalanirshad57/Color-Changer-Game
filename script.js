const buttons = document.querySelectorAll('.button')
buttons.forEach((item) => {
    item.addEventListener("click", function (event) {
        if (event.target.classList.contains("button")) {
            const ComputedStyle = getComputedStyle(event.target)
            const bgValue = ComputedStyle.backgroundColor
            document.querySelector('.body').style.backgroundColor = `${bgValue}`
        }
    })
});