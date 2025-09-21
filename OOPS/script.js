
class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name
        this.company = company
        this.price = price
        this.color = color
    }

    erase() {
        document.body.querySelectorAll('h1').forEach((e) => {
            console.log(this);
            if (e.style.color === this.color) {
                e.remove()
            }
        })
    }

    write(text) {
        let h1 = document.createElement('h1')
        h1.textContent = text
        h1.style.color = this.color

        document.body.appendChild(h1)
    }
}

let p1 = new CreatePencil('natraj', 'nat', 10, 'black')
let p2 = new CreatePencil('doms', 'doms', 20, 'blue')