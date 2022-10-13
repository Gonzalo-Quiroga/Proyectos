const images = document.querySelectorAll(".img");
const  containerImage = document.querySelector(".containerImg");
const imageContainer = document.querySelector(".img-show");

images.forEach(image =>{
    image.addEventListener("click", ()=>{
        
        addImage(image.getAttribute("src"), image.getAttribute("alt"));
    
    })
})

const addImage = (srcImage, altImage)=>{

    containerImage.classList.toggle("move");
    imageContainer.classList.toggle("show");
    imageContainer.src = srcImage;

}

containerImage.addEventListener("click", ()=>{

    containerImage.classList.toggle("move");
    imageContainer.classList.toggle("show");
    
})