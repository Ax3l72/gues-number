// Variables
let count = 0
let maxcount = 6
let number = randomNumber(0, 100);



// Génération random du nombre a trouver
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour crée le jeux
function buildGame() {
    const body = document.body

    // Reset des valeurs pour jouer
    body.innerHTML = '';
    count = 0
    number = randomNumber(0, 100);
    console.log(number);

    // Création des éléments
    const app = document.createElement('div')
    const container = document.createElement('div')
    const row = document.createElement('div')
    const colmd1 = document.createElement('div')
    const colmd6 = document.createElement('div')
    const input = document.createElement('input')
    const result = document.createElement('p')

    // Ajouts des attributs
    app.setAttribute('id', "app")
    container.setAttribute('class', 'container')
    row.setAttribute('class', 'row')
    colmd6.setAttribute('class', "col-md-6 py-5")
    colmd1.setAttribute('class', "col-md-6 py-5")
    input.setAttribute('id', 'search')
    input.setAttribute('type', 'number')
    input.setAttribute('min', "1")
    input.setAttribute('max', "100")  
    input.style = "outline-width:0px"  
    result.setAttribute('id', 'result')

    // 
    body.appendChild(app)
    app.appendChild(container)
    container.appendChild(row)
    row.appendChild(colmd6)
    row.appendChild(colmd1)

    colmd6.appendChild(input)
    colmd1.appendChild(result)


    //
    getValue()
}

// Fonction pour obtenir la valeur de l'input
function getValue() {

    const input = document.getElementById('search')
    const results = document.getElementById('result')
    // Event de la touche entrée afin d'essayer a nouveau
    input.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {

            // Si la longeur de l'input est égal à 0
            if (input.value.length === 0){
                results.innerHTML = "Vous devez saisir un nombre !"
                input.style = "border: 3px red solid;outline-width:0px"
            }

            else {
                // Si input.value n'est pas un nombre
                if (isNaN(input.value)){
                    results.innerHTML = "Vous ne devez pas saisir de caractère autres que des chiffres  !"
                    input.style = "border: 3px red solid;outline-width:0px"
                }

                // Sinon fonction pour trouver le nombre
                else {

                    guesNumber()
                }
            }
        } else return;
    })

}

// Fonction pour trouver le nombre depuis la valeur de l'input
function guesNumber() {
    
    const input = document.getElementById('search')
    const results = document.getElementById('result')
    
    var inval = input.value //.replace('e', '').replace('-', "").replace('/', '').replace('+', "").replace('*', "").replace('.', "")
    // Si la nombre d'essaie est au max, on perd
    if (count === maxcount) {
        results.innerHTML = `Vous avez perdu ! <br>Le nombre à trouver était : <strong>${number}</strong>`

        // Appel de la fonction pour crée le button afin de rejouer
        setTimeout(function () {
            buildRestartGame()
        },5000)

    } else if (count === maxcount && inval == number) {
        results.innerHTML = `Félicitation le nombre à trouver était : <strong>${number}</strong>`

            // Appel de la fonction pour crée le button afin de rejouer
            setTimeout(function () {
                buildRestartGame()
            },5000)
    }
    
    else {
        // Si la valeur est trop grande
        if (inval > number) {
            results.innerText = 'Trop grand !'
        }
        // Si la valeur est trop petite
        else if (inval < number) {
            results.innerText = 'Trop petit !'
        }
        // Si la valeur est égal
        else if (inval == number) {

            results.innerHTML = `Félicitation le nombre à trouver était : <strong>${number}</strong>`

            // Appel de la fonction pour crée le button afin de rejouer
            setTimeout(function () {
                buildRestartGame()
            },5000)
        }

        // Ajoute +1 a chaque essaie
        count++
    }
}

// Fonction pour crée le button afin de rejouer
function buildRestartGame() {
    const app = document.getElementById('app')
    const btn = document.createElement('button')

    // Supression de l'input
    app.innerHTML = ''

    // Ajouts des attributs
    btn.setAttribute('id', 'btn')
    btn.setAttribute('onclick', 'restartGame()')
    btn.innerText = "Retry"

    //
    app.appendChild(btn)
}

// Fonction appeler dans le button pour rejouer
function restartGame() {
    console.log('restart');
    // Appel de la fonction afin de crée le jeux
    buildGame()
}

//---------------------------------------------------------//

buildGame()