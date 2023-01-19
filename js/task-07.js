const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
const fontSizeHandler = (val) => {
    const inputFontSizeValue = val.target.value;
    spanEl.setAttribute('style', `font-size: ${inputFontSizeValue}px`);
};

inputEl.addEventListener('input', fontSizeHandler);

