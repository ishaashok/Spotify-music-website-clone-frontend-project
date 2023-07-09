console.log("Welcome to Spotify");
//initialize the variable
let songIndex=0;
let audioElement=new Audio(songs/'ghodey_pe_sawar.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Dynamite",filepath:"songs/ghodey_pe_sawar.mp3", coverpath:"covers/1.jpg"},
    {songName:"Dynamite",filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName:"Dynamite",filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName:"Dynamite",filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName:"Dynamite",filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName:"Dynamite",filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName:"Dynamite",filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songName:"Dynamite",filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songName:"Dynamite",filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songName:"Dynamite",filepath:"songs/10.mp3", coverpath:"covers/10.jpg"}


    
]

songItems.foreach((element,i)=>{
    
    element.getElementsByTagname("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innertext=songs[i].songName;
})

//audioelement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log('progress');
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{

Array.from(document.getElementsByClassName('songItemPlay')).foreach((element)=>{})
element.classlist.remove('fa-pause-circle');
element.classlist.add('fa-play-circle');
}

Array.from(document.getElementsByClassName('songItemPlay')).foreach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays
    console.log(e.target);
    e.target.classlist.remove('fa-play-circle');
    e.target.classlist.add('fa-puse-circle');


  })


})