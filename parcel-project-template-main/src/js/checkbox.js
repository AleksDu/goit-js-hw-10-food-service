const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const ref = document.querySelector('body');
function onChangeCheckbox(evt) {
    if (evt.target.checked) {
        ref.classList.add(Theme.DARK);
        ref.classList.add(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
    } else if (!evt.target.checked) {
        ref.classList.add(Theme.LIGHT);
        ref.classList.add(Theme.DARK);

        localStorage.setItem('Theme', Theme.LIGHT);
    };

}

export {onChangeCheckbox};