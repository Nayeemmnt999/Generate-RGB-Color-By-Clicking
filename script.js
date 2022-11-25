document.getElementById('btn').addEventListener('onclick', function(){
    const body = document.getElementById('body');
    const bgColor = randomRGBcolor();
    body.style.backgroundColor = bgColor;   
})
const randomRGBcolor =()=> {
    const red=  Math.round(Math.random()*255);
    const green=  Math.round(Math.random()*255);
    const blue=  Math.round(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}
