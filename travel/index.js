

// Burger header
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close')
    burgerItem.addEventListener('click', () =>{
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () =>{
        menu.classList.remove('header-nav-active');
    })

// pop-up log in


    const popupBackgound = document.querySelector('.log-in-pop-up-background');
    const popUpContent = document.querySelector('.log-in-pop-up');
    const openPopUp = document.querySelector('.button-login');
    const openPopUpMobile = document.querySelector('.account-mobile-link');
    // desktop  
    openPopUp.addEventListener('click', () =>{
        popupBackgound.classList.add('log-in-pop-up-background-active');
        popUpContent.classList.add('log-in-pop-up-active');
    })

    // mobile
    openPopUpMobile.addEventListener('click', () =>{
        popupBackgound.classList.add('log-in-pop-up-background-active');
        popUpContent.classList.add('log-in-pop-up-active');
    })

    popupBackgound.addEventListener('click', () =>{
        popupBackgound.classList.remove('log-in-pop-up-background-active');
        popUpContent.classList.remove('log-in-pop-up-active');
        popUpSingUp.classList.remove('sign-up-pop-up-active'); 
    }
        )

// aret email name
    const welcome = () => {
        let email = document.querySelector('.email');
        let password = document.querySelector('.password');
        if(email.value || password.value){
            alert(`Ваш email: ${email.value}, Ваш пароль: ${password.value}`);
        }
        else{
            alert('Заполните поля');
        }
    }
    document.querySelector('.sign-in-button').addEventListener('click', welcome)

// swap from log in to register


    const popUpSingUp = document.querySelector('.sign-up-pop-up');
    const registerLink = document.querySelector('.register');

    registerLink.addEventListener('click', () =>{
        popUpSingUp.classList.add('sign-up-pop-up-active');
        popUpContent.classList.remove('log-in-pop-up-active');

    })
//  slide task
    let offset = 0;
    const sliderLine = document.querySelector('.img-destinations');

    document.querySelector('.button-next').addEventListener('click', () => {
        offset += 850;
        if(offset > 850){
            offset = -850;
        }
        sliderLine.style.left = -offset + 'px';
    }
    )

    document.querySelector('.button-prev').addEventListener('click', () =>{
        offset -= 850;
        if(offset < -850){
            offset = 850;
        }
        sliderLine.style.left = -offset + 'px';
    }
    )

// mobile version
    const sliderLineMobile = document.querySelector('.img-destinations-390');

    document.querySelector('.arrow-390-right').addEventListener('click', () =>{
        offset += 380;
        if(offset > 380){
            offset = -380;
        }
        sliderLineMobile.style.left = -offset + 'px';
    })

    document.querySelector('.arrow-390-left').addEventListener('click', () =>{
        offset -= 380;
        if(offset < -380){
            offset = 380;
        }
        sliderLineMobile.style.left = -offset + 'px';
    })    
}())




