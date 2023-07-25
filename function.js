let movies = [
    {
        name: "falcon and the winter soldier",
        des: "Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, libero.",
        image: "images/slider 1.png"
    },
    {
        name: "wanda vision",
        des: "WandaVision is a new Marvel Studios series that follows Wanda Maximoff and Vision — two super-powered beings living their ideal suburban life, which is disrupted when a series of mysterious events begin to unfold.",
        image: "images/slider 3.png"
    },
    {
        name: "Raya",
        des: "Kelly Marie Tran as Raya, the fierce and virtuous warrior princess of Heart who has been training to become a Guardian of the Dragon Gem..",
        image: "images/slider 4.png"
    },
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, libero.  ",
        image: "images/slider 5.png"
    }
];
const carousel = document.querySelector('.carousel'); //creating caraousel element
let sliders = [];

let slideIndex = 0;//using to track the slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    //create our DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].des))
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++

    //setting element classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

//video cards

const videoCards = document.querySelectorAll(".video-container");

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    })
    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    })
})