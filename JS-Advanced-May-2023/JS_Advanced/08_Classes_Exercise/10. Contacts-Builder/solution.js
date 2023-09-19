class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.titleDivElement) {
            this.titleDivElement.className = this._online ? 'title online' : 'title';
        }
    }

    render(id) {
        this.articleElement = document.createElement('article');
        this.titleDivElement = document.createElement('div');
        this.iButtonElement = document.createElement('button');
        this.infoDivElement = document.createElement('div');
        this.phoneSpanElement = document.createElement('span');
        this.emailSpanElement = document.createElement('span');

        this.titleDivElement.className = this._online ? 'title online' : 'title';
        this.titleDivElement.textContent = `${this.firstName} ${this.lastName}`;
        this.iButtonElement.innerHTML = '&#8505';
        this.titleDivElement.appendChild(this.iButtonElement);
        this.articleElement.appendChild(this.titleDivElement);

        this.infoDivElement.className = 'info';
        this.infoDivElement.style.display = 'none';
        this.phoneSpanElement.innerHTML = `&phone; ${this.phone}`;
        this.emailSpanElement.innerHTML = `&#9993; ${this.email}`;
        this.infoDivElement.appendChild(this.phoneSpanElement);
        this.infoDivElement.appendChild(this.emailSpanElement);
        this.articleElement.appendChild(this.infoDivElement);

        document.getElementById(id).appendChild(this.articleElement);

        this.iButtonElement.addEventListener('click', () => {
            this.infoDivElement.style.display === 'none' ?
                this.infoDivElement.style.display = 'block' :
                this.infoDivElement.style.display = 'none';
        })
    }
}