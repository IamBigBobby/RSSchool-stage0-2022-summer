

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
    openPopUp.addEventListener('click', () =>{
        popupBackgound.classList.add('log-in-pop-up-background-active');
        popUpContent.classList.add('log-in-pop-up-active');
    });



    popupBackgound.addEventListener('click', () =>{
        popupBackgound.classList.remove('log-in-pop-up-background-active');
        popUpContent.classList.remove('log-in-pop-up-active');    
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




}())




