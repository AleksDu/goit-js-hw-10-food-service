Шаблонізація
Використовуючи шаблонізатор Handlebars створи шаблон одного елемента меню. Після чого, використовуючи шаблон, створи розмітку всього меню за даними з menu.json і додай в DOM в ul.js-menu.

Для іконок використовуємо Material Icons, лінк на веб-фонт вже є в вихідному HTML.

Нижче вказана розмітка елемента меню яка повинна виходити за шаблоном (дані будуть різні для кожного об'єкта).

<li class="menu__item">
  <div class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картопля, запечена в мундирі"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картопля, запечена в мундирі</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитів
      </p>

      <p class="card__descr">
        Ароматна, ситна, шипляча домашня картопля, фарширована сметанно-беконною
        начинкою, - це дуже простий і дуже ефектний спосіб нагодувати велику
        кількість людей, практично не витративши на підготовку ні сил, ні часу.
        Звичайну картоплю при бажанні тут можна замінити на солодкий батат, а в
        начинку додати, наприклад, кукурудзу або солодкий червоний перець.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картопля</li>
        <li class="tag-list__item">Часник</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердий сир</li>
        <li class="tag-list__item">Зелена цибуля</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>

  </div>
</li>
