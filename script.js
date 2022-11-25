document.getElementById('btn').addEventListener('click', function(){
    const body = document.getElementById('body');
    const bgColor = randomRGBcolor();
    body.style.backgroundColor = bgColor; 
    
    const text = document.getElementById('heading-text')
    const bgColorText = randomRGBcolorText();
    text.style.color = bgColorText;
})
const randomRGBcolor =()=> {
    const red=  Math.round(Math.random()*255);
    const green=  Math.round(Math.random()*255);
    const blue=  Math.round(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}
const randomRGBcolorText =()=> {
    const red=  Math.round(Math.random()*255);
    const green=  Math.round(Math.random()*255);
    const blue=  Math.round(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}
