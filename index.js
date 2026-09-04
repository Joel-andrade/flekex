
function Menu(e) {
    let lista = document.querySelector("ul")

    if (e.name === "menu") {
        e.name = "close"
        lista.classList.add("top-[80px]", "opacity-100")
    } else {
        e.name = "menu"
        lista.classList.remove("top-[80px]", "opacity-100")
    }
}






// ======================================
// interative
// ======================================


const produtosHero = [

    {
        imagem: "img/rcortez.png",
        nome: "Cortez Alcatraz"
    },

    {
        imagem: "img/calsacrt3.png",
        nome: "Cortez Jeans Shortcut"
    },

    {
        imagem: "img/hoodieCasaco2.png",
        nome: "Bigstep Hood (Grey / Navy)"
    },

    {
        imagem: "img/casacoAzul1.png",
        nome: "Mertra Blue Monogram Rain"
    },

    {
        imagem: "img/cortezcinza4.png",
        nome: "Nike x Corteiz NRG jacket"
    },

    {
        imagem: "img/rosa1.png",
        nome: "Pharrell x Adidas Jellyfish"
    }

];


let indiceProduto = 0;

const heroImage = document.getElementById("heroImage");
const heroProduct = document.getElementById("heroProduct");


// ======================================
// TROCAR PRODUTO
// ======================================

function trocarProduto() {

    // efeito de desaparecimento
    heroImage.classList.add("opacity-0");
    heroProduct.classList.add("opacity-0");


    setTimeout(() => {

        // próximo produto
        indiceProduto++;

        if (indiceProduto >= produtosHero.length) {
            indiceProduto = 0;
        }


        // mudar imagem
        heroImage.src = produtosHero[indiceProduto].imagem;

        // mudar nome
        heroProduct.textContent = produtosHero[indiceProduto].nome;


        // aparecer novamente
        heroImage.classList.remove("opacity-0");
        heroProduct.classList.remove("opacity-0");

    }, 300);
}


// ======================================
// TROCA A CADA 1 SEGUNDO
// ======================================

setInterval(trocarProduto, 2000);


