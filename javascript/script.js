function openGame() {
    openInNewTab("../html/game.html")
}

function openGuide() {
    openInNewTab("../html/how-to-play.html")
}

function openInNewTab(url) {
    var win = window.open(url, "_self")
    win.focus()
}