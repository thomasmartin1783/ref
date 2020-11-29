gsap.registerPlugin(ScrollTrigger)


function init() {

    // gsap.to('#intro img', {
    //     opacity: 0, scrollTrigger: {
    //         trigger: '#intro',
    //         start: 'top top',
    //         end: 'bottom center',
    //         scrub: true,
    //         markers: {
    //             indent: 100,
    //             fontWeight: "bold"
    //         }
    //     }
    // })

    // gsap.set('#project01', {
    //     scrollTrigger: {
    //         trigger: '#project01',
    //         start: 'top bottom-=20%',
    //         end: 'bottom center-=10%',
    //         toggleClass: 'active',
    //         markers: {
    //             indent: 100,
    //             fontWeight: "bold"
    //         }
    //     }
    // })

    // const parallaxTl = gsap.timeline({
    //     ease: 'none',
    //     scrollTrigger: {
    //         trigger: '.bcg-parallax',
    //         start: 'top bottom',
    //         scrub: 'true',
    //         markers: {
    //             indent: 100,
    //             fontWeight: "bold"
    //         }
    //     }
    // })

    // parallaxTl
    //     .from('.bcg-parallax', { duration: .5, autoAlpha: 0 }, 0.2)
    //     .from('.bcg', { duration: 1, y: '-50%' }, 0)



    // gsap.to(['#intro h1', '#intro p'], {

    //     autoAlpha: 0,
    //     ease: 'none',

    //     scrollTrigger: {
    //         trigger: '#intro .content',
    //         start: 'top top+=2%',
    //         //     start scroller-start
    //         end: 'bottom top+=25%',
    //         //     end  scroller-end
    //         pin: true,
    //         pinSpacing: false,
    //         scrub: true,
    //         markers: {
    //             indent: 100,
    //             fontWeight: 'bold'
    //         }
    //     }
    // })






    // const projects = document.querySelectorAll('.project')

    // projects.forEach((project) => {

    //     gsap.from(project, {
    //         opacity: 0,
    //         yPercent: 10,
    //         scrollTrigger: {
    //             trigger: project.querySelector('img'),
    //             start: 'top-=100 bottom-=300',
    //             end: 'top-=100 center',
    //             toggleActions: 'play none none reverse',
    //             // scrub: true,

    //             // onUpdate: ({ progress, direction, isAction, getVelocity }) => console.log(progress, direction, isAction, getVelocity()),

    //             // onToggle: () => { console.log('toggle') },
    //             // onEnter: () => { console.log('onEnter') },
    //             // onLeave: () => { console.log('onLeave') },
    //             // onEnterBack: () => { console.log('onEnterBack') },
    //             // onLeaveBack: () => { console.log('onLeaveBack') },
    //             markers: {
    //                 // indent: 100,
    //                 fontWeight: 'bold'
    //             }
    //         }
    //     })
    // })





}

window.addEventListener('load', function () {
    init();
});
