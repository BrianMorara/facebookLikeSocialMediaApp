//!Sidebar.

const menuItems=document.querySelectorAll(".menu-item");
const  messagesNotification=document.querySelector("#messages-notification");
const messages=document.querySelector(".messages");

const message=document.querySelectorAll(".message");
const messageSearch=document.querySelector("#message-search");
const fontSizes=document.querySelectorAll(".choose-size span");
var root=document.querySelector(':root');

//?theme
const theme=document.querySelector("#theme");
const themeModal=document.querySelector(".customize-theme");
const colorPallete=document.querySelectorAll('.choose-color span');

const bg1=document.querySelector(".bg-1");
const bg2=document.querySelector(".bg-2");
const bg3=document.querySelector(".bg-3");



//remove active class from all menu items

const changeAction=()=>{
    menuItems.forEach(item=>{
        item.classList.remove("active");
    })
}


menuItems.forEach(item=>{
    item.addEventListener("click",()=>{
        changeAction();
        item.classList.add("active");

        if(item.id !== 'notification'){
            document.querySelector(".notification-popup").style.display='none';
        }else{
            document.querySelector(".notification-popup").style.display='block';
            document.querySelector('.notification-count').style.display='none';
        }
    })
})


/* message search */
const searchMessage=()=>{
    //messasgeSearch is the searchbar
    const val=messageSearch.value.toLowerCase();
    message.forEach(chat=>{
        let name=chat.querySelector('h5').innerText.toLowerCase();
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }else{
            chat.style.display='none';
        }
    })
} 

messageSearch.addEventListener('keyup',searchMessage);


messagesNotification.addEventListener("click",()=>{
    messages.style.boxShadow ='0 0 1rem var(--color-primary';
document.querySelector(".notification-count").style.display='none';
setTimeout(()=>{messages.style.boxShadow ='none'},2000);
})

//!theme customization
//opens modal
const openThemeModal=()=>{
    themeModal.style.display="grid";
}
//close modal
const closeModal=(e)=>{
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display="none";
    }
}
themeModal.addEventListener("click",closeModal);

theme.addEventListener("click",openThemeModal);

const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}

//!font customization 
fontSizes.forEach(size=>{
    let fontSize;
  size.addEventListener("click",()=>{
    removeSizeSelector();
    size.classList.toggle('active');
    if(size.classList.contains("font-size-1")){
        fontSize="10px";
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','5.4rem');
    }else if(size.classList.contains("font-size-2")){
        fontSize="13px";
        root.style.setProperty('--sticky-top-left','5.4rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }else if(size.classList.contains("font-size-3")){
        fontSize='16px'
        root.style.setProperty('--sticky-top-left','-2rem');
        root.style.setProperty('--sticky-top-right','-17rem');
    }else if(size.classList.contains("font-size-4")){
        root.style.setProperty('--sticky-top-left','-5rem');
        root.style.setProperty('--sticky-top-right','-25rem');
        fontSize='19px'
    }else{
        fontSize="22px";
        root.style.setProperty('--sticky-top-left','-12rem');
        root.style.setProperty('--sticky-top-right','-35rem');
    }

    //change fontSize of the root html element
    document.querySelector('html').style.fontSize=fontSize;
  })
})


//!Change primary color
const removeActive=()=>{
    colorPallete.forEach(color=>{
        color.classList.remove('active');
    })
}

colorPallete.forEach(color=>{
    color.addEventListener('click',()=>{
        removeActive();
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if(color.classList.contains('color-4')){
            primaryHue=152;
        }else{
            primaryHue=202;
        }
        color.classList.add('active');
        root.style.setProperty('--primaryHue',primaryHue);
    })
});

//!change background

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
};

bg1.addEventListener('click',()=>{ 
    //add active class
    bg1.classList.add('active');
    //remove active class from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    //add active class
    bg2.classList.add('active');
    //remove active class from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
})

bg3.addEventListener('click',()=>{
    darkColorLightness='95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    //add active class
    bg3.classList.add('active');
    //remove active class from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})