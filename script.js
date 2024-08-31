// =======================================================================| header
// =======================| nav-icon
$("#nav-icon").click(function(){
    $("header").toggleClass("nav-open-header")
    $("#nav-more").toggleClass("nav-open-more")
    $("#nav-icon span:nth-child(1)").toggleClass("nav-open-icon-1")
    $("#nav-icon span:nth-child(2)").toggleClass("nav-open-icon-2")
    $("#nav-icon span:nth-child(3)").toggleClass("nav-open-icon-3")
    $("#black-bg").toggleClass("black-bg-on")
})
$("#black-bg").click(function(){
    $("header").removeClass("nav-open-header")
    $("#nav-more").removeClass("nav-open-more")
    $("#nav-icon span:nth-child(1)").removeClass("nav-open-icon-1")
    $("#nav-icon span:nth-child(2)").removeClass("nav-open-icon-2")
    $("#nav-icon span:nth-child(3)").removeClass("nav-open-icon-3")
    $("#black-bg").removeClass("black-bg-on")
})
// =======================================================================| title
/* ==============================| game-images */
document.querySelector("#title-game-slider > div:nth-child(1) div").style.background = "url(/images/games/dragons-dogma-2/main.png)"
document.querySelector("#title-game-slider > div:nth-child(2) div").style.background = "url(/images/games/fallout-76/main.png)"
document.querySelector("#title-game-slider > div:nth-child(3) div").style.background = "url(/images/games/Battlefield-2042/main.png)"
document.querySelector("#title-game-slider > div:nth-child(4) div").style.background = "url(/images/games/cyberpunk/main.png)"
document.querySelector("#title-game-slider > div:nth-child(5) div").style.background = "url(/images/games/forza-horizon-5/main.png)"
document.querySelector("#title-game-slider > div:nth-child(6) div").style.background = "url(/images/games/apex/main.png)"
/* =======================*/
const sliderOffsetFist = Number($("#title-game-slider-cover > span").css("width").slice(0,-2))
$("#title-game-slider > div > div").each(function() {
    $(this)[0].setAttribute("v-on:click", "titleSliderClick")
})
const titleGameSlider = Vue.createApp({
    data() {
        return {
            titleBackground: "/images/games/dragons-dogma-2/main.png",
            titleLogo: "/images/games/dragons-dogma-2/logo.png",
            titleSliderTransform: ""
        }
    },
    methods: {
        titleSliderClick(event) {
            const itemLocation = event.target.style.background.slice(5,-10)
            this.titleBackground = `${itemLocation}main.png`
            this.titleLogo = `${itemLocation}logo.png`
            $("#title-game-slider > div > div").each(function() {$(this)[0].classList.remove("selected")})
            event.target.classList.add("selected")
            const parent = $("#title-game-slider > div:has(> .selected)")[0]
            this.titleSliderTransform = `${sliderOffsetFist + 20 - parent.offsetLeft}px`
        }
    }

})
titleGameSlider.mount('main')
// =======================================================================| games
/* ==============================| game-slider */
document.querySelectorAll("#games > div").forEach(function(gameSliderCover) {
    const gameSlider = document.querySelector(`#${gameSliderCover.id} .part-main`)
    const max = $(`#${gameSliderCover.id} .part-main`).css("width").slice(0,-2) - $(`#${gameSliderCover.id}`).css("width").slice(0,-2)
    let isPressed = false
    let cursorX
    let sliderGingTo
    /* ========================| desktop-mode */
    gameSlider.addEventListener("mousedown", (x) => {
        isPressed = true
        cursorX = x.clientX - gameSlider.style.transform.slice(10,-8)
    })
    document.addEventListener("mouseup", () => {
        isPressed = false
    })
    gameSliderCover.addEventListener("mousemove", (x) => {
        if (isPressed) {
            x.preventDefault()
            sliderGingTo = x.clientX  - cursorX
            if (-sliderGingTo < 0) {sliderGingTo = 0}
            if (-sliderGingTo > max) {sliderGingTo = -max}
            gameSlider.style.transform = `translate(${sliderGingTo}px, 0)`
        }
     })
     /* ========================| mobile-mode */
     gameSlider.addEventListener("touchstart", (x) => {
        isPressed = true
        cursorX = x.touches[0].clientX - gameSlider.style.transform.slice(10,-8)
    })
    document.addEventListener("touchend", () => {
        isPressed = false
    })
    gameSliderCover.addEventListener("touchmove", (x) => {
        if (isPressed) {
            x.preventDefault()
            sliderGingTo = x.touches[0].clientX  - cursorX
            if (-sliderGingTo < 0) {sliderGingTo = 0}
            if (-sliderGingTo > max) {sliderGingTo = -max}
            gameSlider.style.transform = `translate(${sliderGingTo}px, 0)`
        }
     })
})