export default class Difference {
    constructor(officer, items) {
        try {
            this.officer = document.querySelector(officer);
            this.officerItems = this.officer.querySelectorAll(items);
            this.officerCounter = 0;
        } catch (error) {}
        
    }

    bindTriggers() {
        this.officer.querySelector('.plus').addEventListener('click', () => {
            if (this.officerCounter !== this.officerItems.length - 2) {
                this.officerItems[this.officerCounter].style.display = 'flex';
                this.officerItems[this.officerCounter].classList.add('fadeIn');
                this.officerCounter++;
            } else {
                this.officerItems[this.officerCounter].style.display = 'flex';
                this.officerItems[this.officerCounter].classList.add('fadeIn');
                this.officerItems[this.officerItems.length - 1].remove();

            }
        });
    }

    hideItems() {
        this.officerItems.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none';
                item.classList.add('animated');
            }
        });
    }
    

    init() {
        try {
            this.hideItems();
            this.bindTriggers();
        } catch (error) {}
    }
}