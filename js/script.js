// image change button
{ 
    const changeImage = document.querySelector(".js-changeImageButton");
    const aboutIllustration = document.querySelector(".js-aboutIllustration");

    changeImage.addEventListener("click", () => {
        aboutIllustration.classList.toggle("js-aboutIllustrationNew");
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
