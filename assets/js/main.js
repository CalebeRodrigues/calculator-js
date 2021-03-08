function startsCalculator () {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButton();
            this.pressEnter();
        },

        clearDisplay () {
            this.display.value = '';
        },

        deleteOne () {
            this.display.value = this.display.value.slice(0, -1); 
        },

        calc() {
            try {
                let resul = this.display.value;
                const array = resul.split(' ');

                const num1 = Number(array[0]); 
                const num2 = Number(array[2]);

                switch (array[1]) {
                    case '+':
                        resul = num1 + num2;
                        break;
                    case '-':
                        resul = num1 - num2;
                        break;
                    case '*':
                        resul = num1 * num2;
                        break;
                    case '/':
                        resul = num1 / num2;
                        break;
                    default:
                        throw new TypeError();
                }
                
                this.display.value = resul;
            }

            catch (e) {
                alert('Conta inválida!');
            }
        },

        btnParaDisplay (valor) {
            this.display.value += valor;
        },

        clickButton () {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calc();
                }
            });
        },

        pressEnter () {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode ===  13){
                    this.calc();
                }
            })
        }
    };
}

const calculator = startsCalculator();
calculator.start(); 