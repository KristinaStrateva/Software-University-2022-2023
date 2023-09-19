function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error();
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, batteryInstance) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;

            if (batteryInstance instanceof Battery) {
                this._battery = batteryInstance;

            } else {
                throw new TypeError();
            }
        }

        get battery() {
            return this._battery;
        }

        set battery(instance) {
            if (instance instanceof Battery) {
                this._battery = instance;

            } else {
                throw new TypeError();
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboardInstance, monitorInstance) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            if (keyboardInstance instanceof Keyboard) {
                this._keyboard = keyboardInstance;

            } else {
                throw new TypeError();
            }

            if (monitorInstance instanceof Monitor) {
                this._monitor = monitorInstance;

            } else {
                throw new TypeError();
            }
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(instance) {
            if (instance instanceof Keyboard) {
                this._keyboard = instance;

            } else {
                throw new TypeError();
            }
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(instance) {
            if (instance instanceof Monitor) {
                this._monitor = instance;

            } else {
                throw new TypeError();
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);