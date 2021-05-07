async function start() {
    const response = await fetch('https://animechan.vercel.app/api/random')
    const data = await response.json()

    var anime = data.anime
    var character = data.character
    var quote = data.quote

    $(".anime").append(anime)
    $(".char").append(character).prepend(" ~ ")
    $(".quote").append(quote).prepend(' " ').append(' " ')
}

start()