// Функция для очистки полей формы
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Отправка формы
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы после отправки формы

   
    clearForm(); // Очищаем поля формы после отправки
    $('#contactModal').modal('hide'); // Закрываем модальное окно
});
document.addEventListener('DOMContentLoaded', function() {
    // Активация модальных окон Bootstrap
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        var modalInstance = new bootstrap.Modal(modal);
    });

    // Активация dropdown-меню Bootstrap
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
        var dropdownInstance = new bootstrap.Dropdown(dropdown);
    });

    // Анимация при наведении на кнопки модальных окон
    var modalButtons = document.querySelectorAll('[data-toggle="modal"]');
    modalButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.classList.add('btn-anim');
        });
        button.addEventListener('mouseleave', function() {
            this.classList.remove('btn-anim');
        });
    });
});
const accordions = document.querySelectorAll('.accordion-toggle');
        accordions.forEach((item) => {
            item.addEventListener('click', function () {
                const target = this.getAttribute('data-target');
                const element = document.getElementById(target);

                if (element.classList.contains('show')) {
                    element.classList.remove('show');
                } else {
                    accordions.forEach((accordion) => {
                        const dataTarget = accordion.getAttribute('data-target');
                        const collapseElement = document.getElementById(dataTarget);
                        collapseElement.classList.remove('show');
                    });
                    element.classList.add('show');
                }
            });
        });
        var buttons = document.querySelectorAll('.btn-anim');
        buttons.forEach(function(button) {
            button.addEventListener('mouseenter', function() {
                this.classList.add('btn-anim');
            });
            button.addEventListener('mouseleave', function() {
                this.classList.remove('btn-anim');
            });
        });
        