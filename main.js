let navLinksBox = document.getElementById('nav-list-links');

let links = [];
navLinksBox.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target && e.target.tagName === 'A'){
        links.push(e.target.parentNode.id);
        console.log(e.target.parentNode.id)
        if(links.length>1){
            document.getElementById(links[0]).classList.remove('active-link');

            e.target.parentNode.classList.add('active-link');
            
            links.shift()
        }else{
            e.target.parentNode.classList.add('active-link');
        }

    }
})

// Баннер в первой секции, автоматическое переключение
let bannerSlidesCount = document.getElementById('first-section').children[0].childElementCount
let slides = [];
let currentSlide = 1;
function setSlideBanner(){
    if (currentSlide===bannerSlidesCount){
        document.getElementById('slide-' + currentSlide).classList.add('hidden-slide');
        currentSlide=1
        document.getElementById('slide-' + currentSlide).classList.remove('hidden-slide');
    }else{
        document.getElementById('slide-' + currentSlide).classList.add('hidden-slide');
        document.getElementById('slide-' + (currentSlide+1)).classList.remove('hidden-slide');
        currentSlide+=1
    }
}
setInterval(setSlideBanner, 3000)