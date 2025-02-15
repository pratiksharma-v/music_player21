let song = document.querySelector('#song')
let progress = document.querySelector('#progress')
let controls = document.querySelector('#play')


song.onloadedmetadata = function(){
     progress.max=song.duration;
     progress.value=song.currentTime;
}

function playPause(){
    if(controls.classList.contains("fa-pause")){
        song.pause();
        controls.classList.remove("fa-pause")
        controls.classList.add("fa-play")
    }else{
        song.play();
        controls.classList.add('fa-pause');
        controls.classList.remove('fa-play');
    }

} 


if(song.play()){
    setInterval(()=>{progress.value = song.currentTime},500)
}

progress.onchange = function(){
    song.play()
    song.currentTime = progress.value
    controls.classList.add('fa-pause');
    controls.classList.remove('fa-play');
}