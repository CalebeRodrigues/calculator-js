function Calculadora () {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.eventClick();
    };

    this.eventClick = () => {
        document.addEventListener('click', (event) => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumberDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.calc();
        });

        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.calc();
        })
    };
    
    this.addNumberDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = "";

    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.calc = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) throw new SyntaxError();

            this.display.value = conta;
        }
        catch (e) {
            alert('Conta inválida!');
            return;
        }
    }    


}

const calculadora = new Calculadora();
calculadora.start();
