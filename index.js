let ran = [0,0];
let path;
let str
for(let i=0; i<2; i++){
    rann = Math.floor(Math.random()*6+1);
    ran[i] = rann;
    path = 'images/dice'+rann.toString()+'.png';
    str = '.player'+(i+1).toString();
    document.querySelector(str).setAttribute('src',path);
}
if (ran[0]>ran[1]){
    document.getElementById('playerOne').textContent = "🚩"+document.getElementById('playerOne').textContent+" Won!";
    document.getElementById('refresh').textContent = "🚩player 1 Won!";
}
else if(ran[0]<ran[1]){
    document.getElementById('playerTwo').textContent = "🚩"+document.getElementById('playerTwo').textContent+" Won!";
    document.getElementById('refresh').textContent = "🚩player 2 Won!";
}
else{
    document.getElementById('refresh').textContent = "❤ Refresh Again!";
}