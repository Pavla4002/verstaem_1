let navLinksBox = document.getElementById('nav-list-links');

let links = [];
navLinksBox.addEventListener("click", (e)=>{
    if(e.target && e.target.tagName === 'LI'){
        links.push(e.target.id);

        if(links.length>1){
            document.getElementById(links[0]).classList.remove('active-link');

            e.target.classList.add('active-link');
            
            links.shift()
        }else{
            e.target.classList.add('active-link');
        }

    }
})

// Баннер в первой секции

let bannerSlidesBlocks = document.getElementById('first-section').children[0]
let slides = [];
function setSlideBanner(){
   for (let i = 0; i<bannerSlidesBlocks.childElementCount; i++) {
       document.getElementById(bannerSlidesBlocks.children[0].id).classList.remove('hidden-slide');
       slides.push(bannerSlidesBlocks.children[0].id)
   }
    setTimeout(()=>{

    });
}

setSlideBanner();