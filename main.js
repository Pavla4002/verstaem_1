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

// Баннер в первой секции

let bannerSlidesCount = document.getElementById('first-section').children[0].childElementCount
let slides = [];
let currentSlide = 1;
function setSlideBanner(){
    if (currentSlide===bannerSlidesCount){
        currentSlide-=bannerSlidesCount;
    }
    console.log(currentSlide)
    if (currentSlide===1){
        document.getElementById('slide-' + currentSlide).classList.remove('hidden-slide');
    }else{
        currentSlide+=1
        document.getElementById('slide-' + (currentSlide-1)).classList.add('hidden-slide');
        document.getElementById('slide-' + currentSlide).classList.remove('hidden-slide');
    }

}
setInterval(setSlideBanner, 3000, )