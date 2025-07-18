


const openSideBar = () =>{
    afterSidebarOpen()
}

const closeSideBar = () => {
    gsap.to('.menu_item' , {duration: 0.3 , opacity: 0 , stagger: 0.3})
    gsap.to('.sidebarMain' , {duration: 0.5 , scale: 0 , ease: 'power1'})
    gsap.to('.sidebarLogo' , { duration: 0.5  ,y: '15' , opacity: 0})
    gsap.to(".sidebar", {duration: 0 , display: 'none' , delay: 0.5})

}


function afterSidebarOpen(){
    gsap.to(".sidebar", {duration: 0 , display: 'flex'})
    gsap.fromTo('.sidebarLogo' , {y: '15' , opacity: 0} , {duration: 1 , opacity: 1 , y: 0})
    gsap.to('.sidebarMain' , {duration: 0.5 , scale: 1 , ease: 'power1'})
    gsap.to('.menu_item' , {duration: 0.2 , opacity: 1 , delay: 0.5 , stagger: 0.2})

}
