export default class Accordeon {
    constructor(trigger, message) {
        this.trigger = document.querySelector(trigger);
        this.message = document.querySelector(message);
    }

    bindTriggers() {
        this.trigger.addEventListener('click', () => {
            if(this.message.classList.contains('open')) {
                this.message.style.cssText = `
                    transition: all 0.5 ease-out;
                    visibility: hidden;
                    display: block;
                    transform: translateY(-100%);
                    height: 0;
                    opacity: 0;
                `;
                this.message.classList.remove('open');
            } else {
                this.message.style.cssText = `
                    transition: transform 0.5s, opacity 0.5s;
                    visibility: visible;
                    display: block;
                    height: auto;
                    opacity: 1;
                    transform: translateY(0);
                `;
                this.message.classList.add('open');
            }
        });
    }

    init() {
        try {
            this.message.style.cssText = `
                transition: transform 0.5s, opacity 0.5s;
                visibility: hidden;
                display: block;
                height: 0;
                opacity: 0;
                transform: translateY(-100%);
            `;
            this.bindTriggers();
        } catch (error) {}
    }
}