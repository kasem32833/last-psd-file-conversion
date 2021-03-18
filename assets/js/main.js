

    const menuToggle = document.querySelector('.menu-area')
    const hiddenMenu = document.querySelector('.hidden-menu')

    menuToggle.addEventListener('click', () => {
      hiddenMenu.classList.toggle('active');
    })
        