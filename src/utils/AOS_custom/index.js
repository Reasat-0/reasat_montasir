

const aos_animation = (name, duration, once, delay, easing ) => {

    let aos_name = `data-aos = ${ name ? name : "fade-up"}`
    let aos_duration = `data-aos-duration = ${ duration ? duration : "3000"}`
    let aos_delay = `data-aos-delay = ${ delay ? delay : "50"}`
    let aos_once = `data-aos-once = ${ once ? once : "true"}`
    let aos_easing = `data-aos-easing = ${ easing ? easing : "ease-in-out"}`
    // 'data-aos-duration'= duration ? duration : "3000",
    // 'data-aos-once' = once ? once : true,
    // 'data-aos-delay' = delay ? delay : "50",
    // 'data-aos-easing' = easing ? easing : 'ease-in-out'

    let total_aos = aos_name + " " + aos_duration + " " + aos_delay + " " + aos_once + " " + aos_easing


    return total_aos
}


export default aos_animation;