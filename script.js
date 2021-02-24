const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')
const more = document.getElementById('more')


const apiURL = 'https://api.lyrics.ovh'

// Search by song/artist
// function searchSongs(term){
//     fetch(`${apiURL}/suggest/${term}`).then(res => res.json())
//     .then(data => console.log(data))
// }

async function searchSongs(term){
    const res = await fetch(`${apiURL}/suggest/${term}`)
    const data = await res.json()
    // console.log(data)

    showData(data)
}

// Show song and artist in the DOM
function showData(){}

// Event Listeners
form.addEventListener('submit', e =>{
    e.preventDefault();

    const searchTerm = search.value.trim()
    // console.log(searchTerm)
    if(!searchTerm){
        alert("Please enter Artist or Song Name")
    }else{
        searchSongs(searchTerm)
    }
    // if Search bar is empty alert to enter song name else search the song
})