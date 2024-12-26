const {createApp,ref}  = Vue;

var shopData = createApp({
    data() {
        return{
            Shop:[
                {imgSrc: "img1.jpg"},
                {imgSrc: "img2.jpg"},
                {imgSrc: "img3.jpg"},
                {imgSrc: "img5.jpg"},
                
            ]
        }
    }
}).mount("#shop");

var GalleryData = createApp({
    data() {
        return{
            Gallery:[
                {imgSrc: "img6.jpg", hoverImgSrc: 'img9.jpg', isHovered: false},
                {imgSrc: "img7.jpg", hoverImgSrc: 'img10.jpg', isHovered: false},
                {imgSrc: "img8.jpg", hoverImgSrc: 'img11.jpg', isHovered: false}
                
            ]
        }
    }
}).mount("#gallery");