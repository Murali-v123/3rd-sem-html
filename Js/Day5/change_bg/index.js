const color=document.getElementById('color').value;
console.log(color);
document.body.style.backgroundColor=color;

document.getElementById('color').addEventListener('input',(e)=>{
    document.body.style.backgroundColor=e.target.value;
})