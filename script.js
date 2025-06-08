console.log("Welcome To Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementById("songItem"));

let songs = [
  {
    songName: "Aa ki Raat",
    filepath: "songs/aaj.mp3",
    coverPath: "covers/ newcover.jpeg",
  },
  {
    songName: "Drop",
    filepath: "songs/aaj1.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "Snap",
    filepath: "songs/aaj2.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "Corporate",
    filepath: "songs/aaj3.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "Heat",
    filepath: "songs/aaj4.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "drump",
    filepath: "songs/aaj5.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "beat",
    filepath: "songs/aaj6.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "High On",
    filepath: "songs/aaj7.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "Jump",
    filepath: "songs/aaj8.mp3",
    coverPath: "covers/newcover.jpeg",
  },
  {
    songName: "High On Leaf",
    filepath: "songs/aaj9.mp3",
    coverPath: "covers/newcover.jpeg",
  },
];

songItems.forEach((element) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
});

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Upadte Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e);
    });
  }
);
