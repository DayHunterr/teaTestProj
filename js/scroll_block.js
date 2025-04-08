document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu__toggle');
    const closeBtn = document.querySelector('.menu__close');

    toggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });

    // Закрываем меню при клике на крестик
    closeBtn.addEventListener('click', function () {
        toggle.checked = false;
        document.body.classList.remove('menu-open');
    });
});
