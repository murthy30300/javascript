console.log('We will write JavaScript');
let currentSong = new Audio();
let songs;
let currFolder;
function secondsToMinutesSeconds(seconds){
    if(isNaN(seconds)||seconds<0){
        return "00:00";
    }
    const min = Math.floor(seconds/60);
    const rs = Math.floor(seconds%60);

    const fm = String(min).padStart(2,'0');
    const fs = String(rs).padStart(2,'0');

    return `${fm}:${fs}`;
}
async function getSongs(folder) {
    currFolder=folder;
   
        let a = await fetch(`http://127.0.0.1:3000/SpotifyClone/${folder}/`); //1
        let response= await a.text();
      
        let div = document.createElement("div");
        div.innerHTML = response;
        let as = div.getElementsByTagName("a");

        let songs = [];
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split(`/${folder}/`)[1]);
            }
        }
        
    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
     songUL.innerHTML = '';
    for (const song of songs) {
        songUL.innerHTML += `<li>
                            <img src="music.svg" class="invert" alt="music" srcset="">
                            <div class="info">
                                <div>${song.replaceAll("%20", " ")}</div>
                                <div>Anirudh</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img src="play.svg" class="invert" alt="">
                            </div></li>`;
    }
   // songUL.innerHTML = songListHTML;

    // Attach event listeners to each song
    Array.from(document.querySelectorAll(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        });
    });
    
    return songs
}

const playmusic =(track, pause=false) => {
   currentSong.src=`/${currFolder}/`+track
   if(!pause){
   currentSong.play();
   play.src="pause.svg"
   }
   document.querySelector(".songinfo").innerHTML=decodeURI(track)
   document.querySelector(".songtime").innerHTML="00:00/00:00"
};

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".cardcontainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
            let folder = e.href.split("/").slice(-2)[0]
            // Get the metadata of the folder
            let a = await fetch(`/songs/${folder}/info.json`)
            let response = await a.json(); 
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`
        }
    }

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)  
            playmusic(songs[0])

        })
    })
}


async function main() {
   
     await getSongs("songs/ncs");
    playmusic(songs[0],true)
    
    await displayAlbums()
    //attach an event listener to play next and previous
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src="pause.svg"
        }
        else{
            currentSong.pause();
            play.src="play.svg"
        }
    })
    //listen for timeupdate event
    currentSong.addEventListener("timeupdate",()=>{
        console.log(currentSong.currentTime,currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration)*100+"%";
    

    })
    //ADD an eventListener to seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent= (e.offsetX/e.target.getBoundingClientRect().width)*100;
       // console.log(e.offsetX,e.offsetY);
      // console.log(e.offsetX/e.target.getBoundingClientRectangle().width);
       document.querySelector(".circle").style.left = percent+"%";
       currentSong.currentTime = ((currentSong.duration)*percent)/100

    })
    //add event listener for hamburger

    document.querySelector(".hamberger").addEventListener("click",()=>{
        document.querySelector(".left").style.left="0";
    })
      //add event listener for close

      document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-120%";
    })

    //add event listener to previous and next
    previous.addEventListener("click",()=>{
        console.log('previous clicked');
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        
        if((index-1)>=0){
            playmusic(songs[index-1])

        }
    })
    next.addEventListener("click",()=>{
        console.log('next clicked');
        currentSong.pause();
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        console.log(index);
        
        if((index+1)<songs.length-1){
            playmusic(songs[index+1])

        }
        
    })
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
        currentSong.volume = parseInt(e.target.value)/100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })
    //load playlist whenever card is clicked
   Array.from( document.getElementsByClassName(".card")).forEach(e=>{
        e.addEventListener("click",async item=>{
            songs= await getSongs(`songs/ncs`)
           
        })
    })
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    }) 

}

main();