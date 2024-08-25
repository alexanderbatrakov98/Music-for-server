let MusicOn = null;
let MusicVolume = 50;
let MessageColour = toColour(255, 255, 255, 255);
function PlayAudioStreamForPlayer(url, loop, volume) 
{
	MusicVolume = volume;
	MusicOn = audio.createSoundFromURL(url, loop);
	MusicOn.volume = volume / 100;
	MusicOn.play();
}
function StopAudioStreamForPlayer() 
{
	if(MusicOn != null) 
        {
	        MusicOn.stop();
	}
	MusicOn = null;
}
addCommandHandler("play", function (command, parameters, client) {
    var number = parseInt(parameters);
    if (isNaN(number) || number < 1 || number > 6) 
    { 
            message("usage: /play [number]", MessageColour);  
            message("Gold - 1", MessageColour);
            message("Dubstep - 2", MessageColour);
            message("Hardstyle - 3", MessageColour);
            message("Deep - 4", MessageColour);
            message("BigHits - 5", MessageColour);
            message("Off radio - 6", MessageColour);
    }
    if(number == 1)
    {
            StopAudioStreamForPlayer();
            PlayAudioStreamForPlayer("https://radiorecord.hostingradio.ru/gold96.aacp", true, 90);
    }
    if(number == 2)
    {
            StopAudioStreamForPlayer();
            PlayAudioStreamForPlayer("https://radiorecord.hostingradio.ru/dub96.aacp", true, 90);
    }
    if(number == 3)
    {
            StopAudioStreamForPlayer();
            PlayAudioStreamForPlayer("https://radiorecord.hostingradio.ru/teo96.aacp", true, 90);
    }
    if(number == 4)
    {
            StopAudioStreamForPlayer();
            PlayAudioStreamForPlayer("https://radiorecord.hostingradio.ru/deep96.aacp", true, 90);
    }
    if(number == 5)
    {
            StopAudioStreamForPlayer();
            PlayAudioStreamForPlayer("https://radiorecord.hostingradio.ru/bighits96.aacp", true, 90);
    }
    if(number == 6)
    {
            StopAudioStreamForPlayer();
    }
});