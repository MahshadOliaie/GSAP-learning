


const openSideBar = () =>{
    afterSidebarOpen()
}

const closeSideBar = () => {
    gsap.to('.menu_item' , {duration: 0.3 , opacity: 0 , stagger: 0.3})
    gsap.to('.sidebarMain' , {duration: 0.5 , scale: 0 , ease: 'power1' , delay: 0.1})
    gsap.to('.sidebarLogo' , { duration: 0.5  ,y: '15' , opacity: 0})
    gsap.to(".sidebar", {duration: 0 , display: 'none' , delay: 0.6})
    gsap.to('.sidebarMain-bottom' , {duration: 0.2 , opacity: 0 , scale: 0.8 , ease: 'power1'})
    gsap.to('.sidebarMain-bottom-image' , {duration: 0.8 , scale: 1 , ease: 'power1' , delay: 1})


}


function afterSidebarOpen(){
    gsap.to(".sidebar", {duration: 0 , display: 'flex'})
    gsap.fromTo('.sidebarLogo' , {y: '15' , opacity: 0} , {duration: 1 , opacity: 1 , y: 0})
    gsap.to('.sidebarMain' , {duration: 0.5 , scale: 1 , ease: 'power1'})
    gsap.to('.menu_item' , {duration: 0.2 , opacity: 1 , delay: 0.5 , stagger: 0.2})
    gsap.fromTo('.sidebarMain-bottom' , {opacity: 0 , scale: 0.7} , {duration: 0.8 , opacity: 1 , scale: 1 , ease: 'power1' , delay: 1})
    gsap.fromTo('.sidebarMain-bottom-image' , {scale: 1.7} , {duration: 0.8 , scale: 1 , ease: 'power1' , delay: 1})
}

