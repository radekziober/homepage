// image change button
{ 
    let changeImage = document.querySelector(".heading__changeImage");
    let aboutIllustration = document.querySelector(".heading__aboutIllu");

    changeImage.addEventListener("click", () => {
        aboutIllustration.classList.toggle("heading__aboutIllu2");
    });

}

// file upload input
{
    const fileUpload = document.querySelector(".js-inputFile");
    const textFile = document.querySelector(".js-textValue");

    fileUpload.addEventListener("input", () => {
        textFile.innerHTML = `${fileUpload.value.split('\\').pop().split('/').pop()}`;
    })

}