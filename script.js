const navbarItems = document.querySelectorAll('.w3-bar-item');
        navbarItems.forEach(item => {
            item.addEventListener('click', () => {
                navbarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
            });
        });
