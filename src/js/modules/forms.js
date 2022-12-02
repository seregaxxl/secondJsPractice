// import checkNumInputs from './checkNumInputs';
import { postData } from "./requests";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]'),
          message = {
            loading: 'Загрузка...',
            success: 'Спасибо, скоро с Вами свяжутся',
            failure: 'Что-то пошло не так',
            spinner: 'assets/img/spinner.gif',
            ok: 'assets/img/ok.png',
            fail: 'assets/img/fail.png'
          },
          path = {
            designer: "assets/server.php",
            question: 'assets/question.php'
          };



    // checkNumInputs('input[name = "user_phone"]');
    


    const clearInputs = () => {
        inputs.forEach(e => {
            e.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const fileName = item.files[0].name.split('.');
            fileName[0].length > 5 ? dots = '...' : dots = '.'; // jshint ignore:line
            const name = fileName[0].substring(0, 6) + dots + fileName[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);

            let api;

            if ( item.closest('.popup-design') || item.classList.contains('calcForm')) {
                api = path.designer;
            } else {
                api = path.question;
            }
            console.log(api);
            postData(api, formData)

            .then(res => {
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            })
            .catch(() => {
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.failure;
            })
            .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                }, 5000);
            });
        });
    });
};

export default forms;