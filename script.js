var btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener("mouseenter", function () {
        btn.classList.add("active");
    })

    btn.addEventListener("mouseleave", function () {
        if (!btn.classList.contains("already-active"))
            {
               btn.classList.remove("active");
            }
    })
})