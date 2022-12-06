import { postData } from "../services/requests";
const drop = () => {
    const fileInputs = document.querySelectorAll('[name ="upload"]');
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();

    }

    function hightlight(element) {
        element.closest('.file_upload').style.border = '5px solid yellow';
        element.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7';
    }

    function unHightlight(element) {
        element.closest('.file_upload').style.border = 'none';
        element.closest('.file_upload').style.backgroundColor = '#ededed';
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => hightlight(input), false);
        });
    });

    ['drop', 'dragleave'].forEach(eventName => {
        fileInputs.forEach((input,i) => {
            input.addEventListener(eventName, () => {
                unHightlight(input);
                if ( i == 0) {
                    input.closest('.file_upload').style.backgroundColor = '#F7E7E6';
                }
                if ( i == 1) {
                    input.closest('.file_upload').style.backgroundColor = 'white';
                }
            }, false);
            
        });
    });

    fileInputs.forEach((input,i) => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const fileName = input.files[0].name.split('.');
            fileName[0].length > 5 ? dots = '...' : dots = '.'; // jshint ignore:line
            const name = fileName[0].substring(0, 6) + dots + fileName[1];
            input.previousElementSibling.textContent = name;
            if ( i == 0) {
                const formData = new FormData();
                formData.append('image', input.files);
                postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    console.log('send');

                })
                .catch(() => {
                    console.log('error');
                })
                .finally(() => {
                    console.log('end');
                });
            }
        });
        
    });

};

export default drop;