// import { getData } from "../services/requests";
const calc = (size, material, options, promoCode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoCodeBlock = document.querySelector(promoCode),
          resultBlock = document.querySelector(result);

    let sum = 0;
    //     price = {};

    
    // function fetchPrice(categoryId){
    //     getData('http://localhost:3000/prices').then(res => fetchPriceFromObj(res, categoryId))
    //     .catch(error => console.log(error));

    //     function fetchPriceFromObj(obj, categoryId) {
    //         let e = document.getElementById(categoryId);
    //         let categorySelectedValue = e.options[e.selectedIndex].text;
    //         price[categoryId] = obj[categoryId][categorySelectedValue];
    //         console.log(price[categoryId]);
    //         if (!price.options) {
    //             price.options = 0;
    //         }
    //         sum = Math.round((+price.size) * (+price.material) + (+price.options));
    //         if (!price.size || !price.material) {
    //             resultBlock.textContent = 'Пожалуйста выберите размер и материал холста';    
    //         } else  if (promoCodeBlock.value === 'IWANTPOPART') {
    //             resultBlock.textContent = Math.round(sum * 0.7);
    //         } else {
    //             resultBlock.textContent = sum;
    //         }
    //     }
    // }
    
    // sizeBlock.addEventListener('change', () => {
    //     fetchPrice('size');
    // });
    // materialBlock.addEventListener('change', () => {
    //     fetchPrice('material');
    // });
    // optionsBlock.addEventListener('change', () => {
    //     fetchPrice('options');
    // });
    // promoCodeBlock.addEventListener('input',  () => {
    //     fetchPrice('size');
    // });


    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста выберите размер и материал холста';    
        } else if (promoCodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoCodeBlock.addEventListener('input', calcFunc);
};

export default calc;