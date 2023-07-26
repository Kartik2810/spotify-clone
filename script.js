console.log(" welcome to spotify");
let audioElement = new Audio("/songs/1.mp3");


let songIndex =0;
let opecity =document.getElementById("opecity")
let masterplay = document.getElementById("masterplay");
let bar =   document.getElementById("bar");
let mastersong =   document.getElementById("mastersongplay");
let songname = document.getElementsByClassName("songname");
let songitem =Array.from(document.getElementsByClassName("songItem"));


let song=[
    {songname:"Maario -Mortals ",filepath:"/songs/1.mp3",coverpath:"/images/1.jpg"},
    {songname:"Cielo huma-huma ",filepath:"/songs/2.mp3",coverpath:"/images/2.jpg"},
    {songname:"DEA KEV Invi",filepath:"/songs/3.mp3",coverpath:"/images/3.jpg"},
    {songname:"different Meven",filepath:"/songs/4.mp3",coverpath:"/images/5.jpg"},
    {songname:"hangover",filepath:"/songs/5.mp3",coverpath:"/images/6.jpg"},
    {songname:"headlight",filepath:"/songs/6.mp3",coverpath:"/images/7.jpg"},
    {songname:"Downtown",filepath:"/songs/7.mp3",coverpath:"/images/8.jpg"},
    {songname:"Slowly",filepath:"/songs/8.mp3",coverpath:"/images/9.jpg"},
]
songitem.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverpath
    element.getElementsByClassName("songname")[0].innerHTML = song[i].songname
})

masterplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterplay.classList.remove("fa-play-circle")
        masterplay.classList.add("fa-pause-circle")
        opecity.style.opacity =1
    }
    else{
        audioElement.pause()
        masterplay.classList.remove("fa-pause-circle")
        masterplay.classList.add("fa-play-circle")
        opecity.style.opacity =0
    }
});
 
audioElement.addEventListener("timeupdate",()=>{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    bar.value = progress
});

bar.addEventListener("change",()=>{
    audioElement.currentTime = bar.value * audioElement.duration / 100
})

const MakeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
        
    })
}

Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        MakeAllPlay();
        songIndex  = parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle")
    e.target.classList.add("fa-pause-circle")
    audioElement.src = `/songs/${songIndex  + 1}.mp3`
    mastersong.innerText = song[songIndex].songname
    audioElement.currentTime =0;
    audioElement.play()
    masterplay.classList.remove("fa-play-circle")
    masterplay.classList.add("fa-pause-circle")
    opecity.style.opacity =1
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex >= 7){
    songIndex=0
    }
    else{
        songIndex += 1
    }
    audioElement.src = `/songs/${songIndex  + 1}.mp3`
    mastersong.innerText = song[songIndex].songname
    audioElement.currentTime =0;
    audioElement.play()
    masterplay.classList.remove("fa-play-circle")
    masterplay.classList.add("fa-pause-circle")
    opecity.style.opacity =1
})
document.getElementById("preveius").addEventListener("click",()=>{
    if(songIndex <= 0){
        songIndex =0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `/songs/${songIndex  + 1}.mp3`
    mastersong.innerText = song[songIndex].songname
    audioElement.currentTime =0;
    audioElement.play()
    masterplay.classList.remove("fa-play-circle")
    masterplay.classList.add("fa-pause-circle")
    opecity.style.opacity =1
})
