function searchLyrics(artist, song) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector(".musicflix_content--form");
form.addEventListener("submit", el => {
    el.preventDefault()
    forSubmit();
})

/*
function forSubmit() {
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    searchLyrics(artist.value, song.value)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                lyrics_el.innerHTML = data.lyrics;
            } else {
                lyrics_el.innerHTML = data.error || "Letra não encontrada!";
            }
        })
        .catch((err) => {
            lyrics_el.innerHTML = `Oops! ${err}`;
        });
}
*/


//example async await

async function forSubmit() {
    const lyrics_el = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    try {
        const lyricsResponse = await searchLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics) {
            lyrics_el.innerHTML = data.lyrics;
        } else {
            lyrics_el.innerHTML = data.error;
        }
    } catch (err) {
        console.log(err);
    }
}


