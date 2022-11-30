const modals = () => {
    let btnPressed = false;
    function bindModal (triggerClass, modalClass, closeClass, destroy = false) {
        const trigger = document.querySelectorAll(triggerClass),
              modal = document.querySelector(modalClass),
              close = document.querySelectorAll(closeClass),
              windows = document.querySelectorAll('[data-modal'),
              scroll = calcScroll();

        
        trigger.forEach(i => {
            i.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                windows.forEach(e => {
                    e.style.display = 'none';
                    e.classList.add('animated', 'fadeIn');
                });

                modal.style.display = 'block';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;

                if (destroy) {
                    i.remove();
                }
                
            });
        });
        close.forEach(i => {
            i.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
                windows.forEach(e => {
                    e.style.display = 'none';
                });
                document.querySelector('.fixed-gift').style.right = '';
            });
        });
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = `0px`;
                windows.forEach(e => {
                    e.style.display = 'none';
                });
                document.querySelector('.fixed-gift').style.right = '';
            }
        });
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
            scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');

    function modalShowUpOnTime(selector, time) {
        setTimeout(function () {
            let display;
            document.querySelectorAll('data-modal').forEach(e => {
                if (getComputedStyle(e).display !== 'none') {
                    display = 'block';
                }
            });
            if (!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.classList.add('modal-open');
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;

                let right = getComputedStyle(document.querySelector('.fixed-gift')).right;
                right = Number(right.slice(0, -2)) + Number(scroll);
                document.querySelector('.fixed-gift').style.right = `${right}px`;
            }
        }, time);
    }
    modalShowUpOnTime('.popup-consultation', 60000);
};

export default modals;