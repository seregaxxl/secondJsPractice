const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    txtInputs.forEach(txtInput => {
        txtInput.addEventListener('input', function(e) {
            txtInput.value = txtInput.value.replace(/[^а-яё 0-9]/ig, '');
        });
    });
};

export default checkTextInputs;