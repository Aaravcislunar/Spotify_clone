console.log("Welcome to Spotify!");
//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemsPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let songListPlay = Array.from(document.getElementsByClassName('songlistplay'));
let songs = [
    {songName: "Rubicon Drill - Laddi Chahal | Parmish Verma", filePath: "song/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Daku - Chani Nattan | Inderpal Moga", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Mexico Koka - Karan Aujla", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Desires - AP Dhillon | Gurinder Gill", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "No Love - Shubh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ma Belle - AP Dhillon", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Maiyya Mainu - Sachet-Parampara", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Nazm Nazm - Arko", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Apna Bana Le - Arijit Singh | Sachin-Jigar", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "O Bedardeya - Arijit Singh", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Kesariya - Arijit Singh", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Pasoori - Ali Sethi | Shae Gill", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"}
]

songItems.forEach((element, i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



// audioElement.play();

//Handdle Play/Pause

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else
      {  audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
})



myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
    
})
const makeAllPlays = ()=>{
songItemsPlay.forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
}

songItemsPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();    
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        document.getElementById("seekcover").src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>11){
        songIndex = -1;
    }
    else{
        songIndex += 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        document.getElementById("seekcover").src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 11;
    }
    else{
        songIndex -= 1;
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        document.getElementById("seekcover").src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
// function getAudioFileLength(location) {
//     return new Promise((resolve, reject) => {
//       const audio = new Audio();
//       audio.addEventListener('loadedmetadata', () => {
//         const duration = audio.duration;
//         resolve(duration);
//       });
//       audio.addEventListener('error', (error) => {
//         reject(error);
//       });
//       audio.src = location;
//     });
//   }
  
//   // Usage example
//   const audioLocation = 'songs/7.mp3'; // Replace with your audio file location
//   getAudioFileLength(audioLocation)
//     .then((duration) => {
//       console.log('Audio duration:', duration);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
