// opens and closes the tabs in the about me page

function opentab (tabname)

{
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
   
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// Image carousel

let imgCurrentIdx = 0;

let imgPrevIdx = 0;

const images = document.getElementsByClassName('images')

const next = document.querySelector('.next')
next.addEventListener('click', () => {
    imgPrevIdx = imgCurrentIdx
    imgCurrentIdx++
    images[imgPrevIdx].style.display = 'none'
    if (imgCurrentIdx >= images.length)
    {
        imgCurrentIdx = 0;
    }
    images[imgCurrentIdx].style.display = 'block';
})

const previous = document.querySelector('.prev')
previous.addEventListener('click', () => {
    imgPrevIdx = imgCurrentIdx;
    imgCurrentIdx--;
    images[imgPrevIdx].style.display = 'none'
    if (imgCurrentIdx < 0)
    {
        imgCurrentIdx = images.length - 1;
    }
    images[imgCurrentIdx].style.display = 'block';
})


