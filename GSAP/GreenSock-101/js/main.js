const runStart = () => {
    console.log('start')
}
const runUpdate = () => {
    console.log('update')
}
const runComplete = () => {
    console.log('complete')
}





const timeline = gsap.timeline(
    {
        duration: 1,
        paused: true,
        onStart: runStart,
        onUpdate: runUpdate,
        onComplete: runComplete
    })



timeline
    .from("body", { // selector text, Array, or object
        backgroundColor: "white", // camelCase
        ease: "none",
    })
    .fromTo(["h1", ".intro"],
        {
            opacity: 0,
            y: -20,
        },
        {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: 'power1.out',
            stagger: 0.2
        },
        // "-=1"
    )
    .from(
        ['img', 'h2'],
        {
            opacity: 0,
            ease: 'none',
        }
    )
    .fromTo(
        'ul li',
        {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            y: 0,
            ease: 'power1.out',
            stagger: 0.2,
        }
    )


const playBtn = document.querySelector("#btnPlay")
const btnPause = document.querySelector("#btnPause")
const btnResume = document.querySelector("#btnResume")
const btnReverse = document.querySelector("#btnReverse")
const btnSpeedUp = document.querySelector("#btnSpeedUp")
const btnSlowDown = document.querySelector("#btnSlowDown")
const btnSeek = document.querySelector("#btnSeek")
const btnProgress = document.querySelector("#btnProgress")
const btnRestart = document.querySelector("#btnRestart")


playBtn.addEventListener('click', () => {
    timeline.play()
})

btnPause.addEventListener('click', () => {
    timeline.pause()
})

btnResume.addEventListener('click', () => {
    timeline.resume()
})

btnReverse.addEventListener('click', () => {
    timeline.reverse()
})

btnSpeedUp.addEventListener('click', () => {
    timeline.timescale(3)
})

btnSlowDown.addEventListener('click', () => {
    timeline.timescale(.5)
})

btnSeek.addEventListener('click', () => {
    timeline.seek(3)
})

btnProgress.addEventListener('click', () => {
    timeline.progress(.5)
})

btnRestart.addEventListener('click', () => {
    timeline.restart()
})