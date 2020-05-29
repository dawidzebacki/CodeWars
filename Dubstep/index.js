function songDecoder(song) {
  return song.split("WUB").filter(element => element !== "").join(' ');
}