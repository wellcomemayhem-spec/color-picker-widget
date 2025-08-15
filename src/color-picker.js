class ColorPicker {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.createPicker();
        this.bindEvents();
    }

    createPicker() {
        this.element.innerHTML = `
            <input type='color' id='color-input'>
            <div id='color-display'></div>
            <button id='save-color'>Save Color</button>
            <div id='favorites'></div>
        `;

        this.colorInput = this.element.querySelector('#color-input');
        this.colorDisplay = this.element.querySelector('#color-display');
        this.favoritesContainer = this.element.querySelector('#favorites');
    }

    bindEvents() {
        this.colorInput.addEventListener('input', (event) => {
            this.updateColor(event.target.value);
        });

        this.element.querySelector('#save-color').addEventListener('click', () => {
            this.saveColor(this.colorInput.value);
        });
    }

    updateColor(color) {
        this.colorDisplay.style.backgroundColor = color;
        this.colorDisplay.textContent = color;
    }

    saveColor(color) {
        const favoriteColor = document.createElement('div');
        favoriteColor.style.backgroundColor = color;
        favoriteColor.classList.add('favorite-color');
        favoriteColor.textContent = color;
        this.favoritesContainer.appendChild(favoriteColor);
    }
}

// Exporting the class for common modules
if (typeof module !== 'undefined') { 
    module.exports = ColorPicker;
}