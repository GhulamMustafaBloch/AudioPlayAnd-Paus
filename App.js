var mySong = new Audio();
mySong.src = "./Hole Hole Door Tur Gayi - Danish Khichi.mp4";

var mySong1 = new Audio();
mySong1.src =
  "./Humko Sirf Tumse Pyar Hai - Barsaat - Bobby Deol, Twinkle Khanna - Kumar Sanu, Alka Yagnik-90's Hits.mkv";

var mySong2 = new Audio();
mySong2.src =
  "./Pardesi Pardesi - Udit Narayan - Alka Yagnik - Aamir Khan - Raja Hindustani.mp4";

var mySong3 = new Audio();
mySong3.src =
  "./Bahot Jatate Ho Chah Humse Hd Video Song - Aadmi Khilona Hai - Alka Yagnik, Mohammed Aziz - Govinda.mp4";

const playSong = () => {
  mySong.play();
  mySong1.play();
  mySong2.play();
  mySong3.play();
};

const pauseSong = () => {
  mySong.pause();
  mySong1.pause();
  mySong2.pause();
  mySong3.pause();
};
