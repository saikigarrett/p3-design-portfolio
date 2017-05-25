// Scripts

//Store Banner Images
var img0 = 'https://unsplash.it/600/300'
var img1 = 'https://unsplash.it/600/300?image=3'
var img2 = 'https://unsplash.it/600/300?image=7'

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

// Swap out Banner Images
$('header img').attr('src', eval('img' + randNum))



// Lightgallery
$('figure').lightGallery({
    selector: 'a',
    mode: 'lg-lollipop'
});