const home = document.getElementById('home-a')
const about = document.getElementById('about-a')
const services = document.getElementById('services-a')
const contact = document.getElementById('contact-a')
home.addEventListener('click',()=>{
    home.setAttribute("class", "active");
    about.removeAttribute('class')
    services.removeAttribute('class')
    contact.removeAttribute('class')
})
about.addEventListener('click',()=>{
    about.setAttribute("class", "active");
    home.removeAttribute('class')
    services.removeAttribute('class')
    contact.removeAttribute('class')
})
services.addEventListener('click',()=>{
    services.setAttribute("class", "active");
    home.removeAttribute('class')
    about.removeAttribute('class')
    contact.removeAttribute('class')
})
contact.addEventListener('click',()=>{
    contact.setAttribute("class", "active");
    home.removeAttribute('class')
    about.removeAttribute('class')
    services.removeAttribute('class')
})

const homeHeight = document.getElementById('home').scrollHeight
const aboutHeight = document.getElementById('about-us').scrollHeight
const servicesHeight = document.getElementById('services').scrollHeight
const contactHeight = document.getElementById('contact-us').scrollHeight

window.addEventListener('scroll',()=>{
        if(homeHeight>window.scrollY){
            home.setAttribute("class", "active");
            about.removeAttribute('class')
            services.removeAttribute('class')
            contact.removeAttribute('class')
        }
        else if(homeHeight+aboutHeight>window.scrollY){
            about.setAttribute("class", "active");
            home.removeAttribute('class')
            services.removeAttribute('class')
            contact.removeAttribute('class')
        }
        else if(homeHeight+aboutHeight+servicesHeight>window.scrollY){
            services.setAttribute("class", "active");
            home.removeAttribute('class')
            about.removeAttribute('class')
            contact.removeAttribute('class')
        }
        else if(homeHeight+aboutHeight+servicesHeight+contactHeight>window.scrollY){
            contact.setAttribute("class", "active");
            home.removeAttribute('class')
            about.removeAttribute('class')
            services.removeAttribute('class')
        }
})