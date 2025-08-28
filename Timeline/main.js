



let timeline;

function openSideBar(){
    timeline = gsap.timeline()
    timeline
     .to(".sidebar", {duration: 0 , display: 'flex'})
     .fromTo('.sidebarLogo' , {y: '15' , opacity: 0} , {duration: 1 , opacity: 1 , y: 0})
     .to('.sidebarMain' , {duration: 0.5 , scale: 1 , ease: 'power1'} , 0)
     .to('.menu_item' , {duration: 0.2 , opacity: 1 , stagger: 0.2} , '0.5')
     .fromTo('.sidebarMain-bottom' , {opacity: 0 , scale: 0.7} , {duration: 0.8 , opacity: 1 , scale: 1 , ease: 'power1'} , '<0.2')
     .fromTo('.sidebarMain-bottom-image' , {scale: 1.7} , {duration: 0.8 , scale: 1 , ease: 'power1'} , '<0')
}

const closeSideBar = () => {
    timeline.timeScale(2)
    timeline.reverse()

}
