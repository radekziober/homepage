{ 
    let changeImage = document.querySelector(".heading__changeImage");
    let aboutIllustration = document.querySelector(".heading__aboutIllu");

    changeImage.addEventListener("click", () => {
        aboutIllustration.classList.toggle("heading__aboutIllu2");
    });
1
}