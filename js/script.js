// image change button
{ 
    const changeImage = document.querySelector(".heading__changeImage");
    const aboutIllustration = document.querySelector(".heading__aboutIllu");

    changeImage.addEventListener("click", () => {
        aboutIllustration.classList.toggle("heading__aboutIllu2");
    });

}

// file upload input
{
    const fileUpload = document.querySelector(".js-inputFile");
    const textFile = document.querySelector(".js-textValue");
    const inputFileValid = document.querySelector(".js-inputFileNew");
    
    fileUpload.addEventListener("input", () => {
        textFile.innerHTML = `${fileUpload.value.split('\\').pop().split('/').pop()}`;
        inputFileValid.classList.toggle("js-inputFileValid");
    });

}
