const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
        //   btnAll = menu.querySelector('.all'),
        //   btnLovers = menu.querySelector('.lovers'),
        //   btnChef = menu.querySelector('.chef'),
        //   btnGirl = menu.querySelector('.girl'),
        //   btnGuy = menu.querySelector('.guy'),
        //   btnGrandMother = menu.querySelector('.grandmother'),
        //   btnGrandDad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
        //   markLovers = wrapper.querySelectorAll('.lovers'),
        //   markChef = wrapper.querySelectorAll('.chef'),
        //   markGirl = wrapper.querySelectorAll('.girl'),
        //   markGuy = wrapper.querySelectorAll('.guy'),
        //   markGrandMother = wrapper.querySelectorAll('.grandmother'),
        //   markGrandDad = wrapper.querySelectorAll('.granddad'),
          no = document.querySelector('.portfolio-no');

   
    
    const typeFiler = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');
        if (markType.length == 0) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn'); 
        } else if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn'); 
        }
    };

    const addTriggers = (selector) => {
        menu.querySelector(selector).addEventListener('click', () => {
            typeFiler(wrapper.querySelectorAll(selector));
        });
    };
    addTriggers('.all');
    addTriggers('.lovers');
    addTriggers('.chef');
    addTriggers('.girl');
    addTriggers('.guy');
    addTriggers('.grandmother');
    addTriggers('.granddad');
    // btnAll.addEventListener('click', () => {
    //     typeFiler(markAll);
    // });
    // btnLovers.addEventListener('click', () => {
    //     typeFiler(markLovers);
    // });
    // btnChef.addEventListener('click', () => {
    //     typeFiler(markChef);
    // });
    // btnGirl.addEventListener('click', () => {
    //     typeFiler(markGirl);
    // });
    // btnGuy.addEventListener('click', () => {
    //     typeFiler(markGuy);
    // });
    // btnGrandMother.addEventListener('click', () => {
    //     typeFiler(markGrandMother);
    // });
    // btnGrandDad.addEventListener('click', () => {
    //     typeFiler(markGrandDad);
    // });

    menu.addEventListener('click', (e) => {
        let target = e.target;
        if(target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;