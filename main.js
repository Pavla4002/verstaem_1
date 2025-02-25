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
        document.getElementById('btn-slide-' + currentSlide).classList.remove('active-banner-btn');
        currentSlide=1
        document.getElementById('slide-' + currentSlide).classList.remove('hidden-slide');
        document.getElementById('btn-slide-' + currentSlide).classList.add('active-banner-btn');

    }else{
        document.getElementById('slide-' + currentSlide).classList.add('hidden-slide');
        document.getElementById('btn-slide-' + currentSlide).classList.remove('active-banner-btn');
        console.log()
        document.getElementById('slide-' + (currentSlide+1)).classList.remove('hidden-slide');
        document.getElementById('btn-slide-' + (currentSlide+1)).classList.add('active-banner-btn');

        currentSlide+=1
    }
}
setInterval(setSlideBanner, 3000)

// Отвлекаемся и разминаем мозг

// let num = 9;
//
// if (num%2===0) console.log('Число кратно 2');
// else console.log('Число нечетное');

// 5
// let str1 = 'gogog'
// let str2 = 'blood'
//
// if (str1[0]===str2[0]) console.log('Буквы совпадают');
// else console.log('Буквы не совпадают');

//6
// let word = 'словь';
// if (word[word.length-1]==='ь') console.log(word[word.length-2]);
// else console.log(word[word.length-1])

//Уровень 1.2
// 1
// let num = 123674;
// console.log(Number(String(num)[0]));
//

// 2
// let num = 123674;
// console.log(Number(String(num)[String(num).length-1]));

// 3
// let num = 12367;
// let numStr = num.toString();
//
// console.log(Number(numStr.charAt()) +Number(numStr.charAt(numStr.length-1)))

// 4
// let num = 12356685;
// console.log(num.toString().length)

// 5
// let num1 = 7456;
// let num2 = 854353;
//
// if (num1.toString()[0] === num2.toString()[0]) console.log('Совпадают');
// else console.log('Не совпадают');

// Уровень 1.3
// 1
// let str = 'Привет, мир. Это я - Павла!';
// if (str.length>1) console.log(str.charAt(str.length-2));

// 2
// let num1 = 5;
// let num2 = 5;
//
// if (num1%num2===0) console.log('Делится');
// else console.log('No');

// Уровень 1.4
//  1
// for(let i=1; i<=100; i++){
//     console.log(i)
// }

//  2
// for(let i=-100; i<=0; i++){
//     console.log(i)
// }

//  3
// for(let i= 100; i>=1; i--){
//     console.log(i)
// }

//  4