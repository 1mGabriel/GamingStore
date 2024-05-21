// Seleção:
const body = document.querySelector("#body")
//buttons
const menuButton = document.querySelector("#menuButton")
const cartButton = document.querySelector("#cartButton")
const searchButton = document.querySelector("#searchButton")
const playButton = document.querySelector("#playButton")
const xboxButton = document.querySelector("#xboxButton")
const pcButton = document.querySelector("#pcButton")
const switchePs5 = document.querySelector("#switchePs5")
const switcheMouse = document.querySelector("#switcheMouse")
const switcheXbox = document.querySelector("#switcheXbox")

const psMidiaBtn = document.querySelector("#psMidiaBtn")
const psConsoleBtn = document.querySelector("#psConsoleBtn")
const xboxConsoleBtn = document.querySelector("#xboxConsoleBtn")
const xboxMidiaBtn = document.querySelector("#xboxMidiaBtn")
const pcBtn = document.querySelector("#pcBtn")
// jogos
const gtaBtnCart = document.querySelector("#gtaBtnCart")
const spiderManBtnCart = document.querySelector("#spiderManBtnCart")
const ghostTsushimaBtnCart = document.querySelector("#ghostTsushimaBtnCart")
const fifa24BtnCart = document.querySelector("#fifa24BtnCart")
const assasinsCreedBtnCart = document.querySelector("#assasinsCreedBtnCart")
const godOfWarBtnCart = document.querySelector("#godOfWarBtnCart")
const ps5ConsoleBtnCart = document.querySelector("#ps5ConsoleBtnCart")
const ps5DualshockBtnCart = document.querySelector("#ps5DualshockBtnCart")
const fifaXboxBtnCart = document.querySelector("#fifaXboxBtnCart")
const eldenRingBtnCart = document.querySelector("#eldenRingBtnCart")
const xboxAssasinsCreedBtnCart = document.querySelector("#XboxAssasinsCreedBtnCart")
const hogwartsBtnCart = document.querySelector("#hogwartsBtnCart")
const gtaXboxBtnCart = document.querySelector("#gtaXboxBtnCart")
const farCryBtnCart = document.querySelector("#farCryBtnCart")
const ps5HeadsetBtnCart = document.querySelector("#ps5HeadsetBtnCart")
const xBoxHeadsetBtnCart = document.querySelector("#xBoxHeadsetBtnCart")
const xBoxDualshockBtnCart = document.querySelector("#xBoxDualshockBtnCart")
const xBoxConsoleBtnCart = document.querySelector("#xBoxConsoleBtnCart")

//sections
const menuSection = document.querySelector("#menuSection")
const cartSection = document.querySelector("#cartSection")
const playstationCategory = document.querySelector("#playstationCategory")
const xboxCategory = document.querySelector("#xboxCategory")
const pcCategory = document.querySelector("#pcCategory")
const nullCategory = document.querySelector("#nullCategory")
const ps5BannerSection = document.querySelector("#ps5BannerSection")
const mouseBannerSection = document.querySelector("#mouseBannerSection")
const xboxBannerSection = document.querySelector("#xboxBannerSection")
const cartContent = document.querySelector("#cartContent")
const ps5MidiaDigitalSection = document.querySelector("#ps5MidiaDigitalSection")
const ps5ConsoleSection = document.querySelector("#ps5ConsoleSection")
const xboxMidiaDigitalSection = document.querySelector("#xboxMidiaDigitalSection")
const xBoxConsoleSection = document.querySelector("#xBoxConsoleSection")
const pcNullSection = document.querySelector("#pcNullSection")


//inputs
const searchInput = document.querySelector("#searchInput")

// Valores do html
const gtaH1 = document.querySelector("#gtaH1").textContent
const gtaPrice = document.querySelector("#gtaPrice").textContent

const spiderManH1 = document.querySelector("#spiderManH1").textContent
const spiderManPrice = document.querySelector("#spiderManPrice").textContent

const ghostTsushimaH1 = document.querySelector("#ghostTsushimaH1").textContent
const ghostTsushimaPrice = document.querySelector("#ghostTsushimaPrice").textContent

const fifa24H1 = document.querySelector("#fifa24H1").textContent
const fifa24Price = document.querySelector("#fifa24Price").textContent

const assasinsCreedH1 = document.querySelector("#assasinsCreedH1").textContent
const assasinsCreedPrice = document.querySelector("#assasinsCreedPrice").textContent

const godOfWarH1 = document.querySelector("#godOfWarH1").textContent
const godOfWarPrice = document.querySelector("#godOfWarPrice").textContent

const ps5ConsoleH1 = document.querySelector("#ps5ConsoleH1").textContent
const ps5ConsolePrice = document.querySelector("#ps5ConsolePrice").textContent

const ps5DualshockH1 = document.querySelector("#ps5DualshockH1").textContent
const ps5DualshockPrice = document.querySelector("#ps5DualshockPrice").textContent

const ps5HeadsetH1 = document.querySelector("#ps5HeadsetH1").textContent
const ps5HeadsetPrice = document.querySelector("#ps5HeadsetPrice").textContent

const fifaXboxH1 = document.querySelector("#fifaXboxH1").textContent
const fifaXboxPrice = document.querySelector("#fifaXboxPrice").textContent

const eldenRingH1 = document.querySelector("#eldenRingH1").textContent
const eldenRingPrice = document.querySelector("#eldenRingPrice").textContent

const xboxAssasinsCreedH1 = document.querySelector("#XboxAssasinsCreedH1").textContent
const xboxAssasinsCreedPrice = document.querySelector("#XboxAssasinsCreedPrice").textContent

const hogwartsH1 = document.querySelector("#hogwartsH1").textContent
const hogwartsPrice = document.querySelector("#hogwartsPrice").textContent

const gtaXboxH1 = document.querySelector("#gtaXboxH1").textContent
const gtaXboxPrice = document.querySelector("#gtaXboxPrice").textContent

const xBoxConsoleH1 = document.querySelector("#xBoxConsoleH1").textContent
const xBoxConsolePrice = document.querySelector("#xBoxConsolePrice").textContent

const xBoxDualshockH1 = document.querySelector("#xBoxDualshockH1").textContent
const xBoxDualshockPrice = document.querySelector("#xBoxDualshockPrice").textContent

const xBoxHeadsetH1 = document.querySelector("#xBoxHeadsetH1").textContent
const xBoxHeadsetPrice = document.querySelector("#xBoxHeadsetPrice").textContent

const farCryH1 = document.querySelector("#farCryH1").textContent
const farCryPrice = document.querySelector("#farCryPrice").textContent
// Funções:

// Mostrar Menu:
const showMenuSection = () =>{
    if(menuSection.className == "menu-section hide"){
        menuSection.className = "menu-section"
    }else if(menuSection.className == "menu-section"){
        menuSection.className = "menu-section hide"
    }
}
// Mostrar Carrinho:
const showCartSection = () =>{
    if(cartSection.className == "cart-section hide"){
        cartSection.className = "cart-section"
    }else if(cartSection.className == "cart-section"){
        cartSection.className = "cart-section hide"
    }
}
// Apagar a busca ao clicar na LUPA:
const resetSearchInputValue = ()=>{
       searchInput.value = ""
}
// Mostrar opções de Produtos:
const showProductSection = (sectionToShow, nameClass)=>{
    nullCategory.className = "null-category hide"
    playstationCategory.className = "playstation-category hide"
    xboxCategory.className = "xbox-category hide"
    pcCategory.className = "pc-category hide"
    sectionToShow.className = `${nameClass}-category`
}
// Mostrar section de Produtos:
const showProductClass = (classToShow, nameClass)=>{
    ps5MidiaDigitalSection.className = "ps5-midia-digital hide"
    xboxMidiaDigitalSection.className = "xbox-midia-digital hide"
    ps5ConsoleSection.className = "ps5-console hide"
    xBoxConsoleSection.className = "xBox-console hide"
    pcNullSection.className = "pc-null-options hide"
    classToShow.className = `${nameClass}`
}

//Mostrar section do banner:
const switcheBannerSection = (sectionToShow, sectionName)=>{
    mouseBannerSection.className = "mouse-banner-section hide"
    xboxBannerSection.className = "xbox-banner-section hide"
    ps5BannerSection.className = "ps5-banner-section hide"
    sectionToShow.className = `${sectionName}-banner-section`
}

// Criar section do produto no carrinho:
const createCartElement = (imgSrc, gameName, gamePrice)=>{
    // pegar o Total:

    const totalSpan = document.querySelector("#totalSpan")
    const atualValue = totalSpan.textContent
    const actualDecimalValue = parseFloat(atualValue)
    
   


    const div = document.createElement("div")
    div.className = "cart-product"
    div.id = `${imgSrc}cartProductId`
    
    const img = document.createElement("img")
    img.src = `/img/${imgSrc}.jpg`
    
    const firstH2 = document.createElement("h2")
    firstH2.innerText = gameName
    firstH2.id = `${imgSrc}firstH1Id`

    const secondH2 = document.createElement("h2")
    secondH2.innerText = gamePrice
    secondH2.id = `${imgSrc}secondH1Id`

    const i = document.createElement("i")
    i.className = "fa-solid fa-x fa-fw"
    i.id = `${imgSrc}cartRemoveButtonId`

    div.append(img, firstH2, secondH2, i)
    cartContent.appendChild(div)

    // Colocar o valor no total
    const priceText = secondH2.textContent
    const priceTextFormated = priceText.replace(/[^0-9.]/g, '')
    const decimalValue = parseFloat(priceTextFormated)
    const newValue = actualDecimalValue + decimalValue
    const newValueFixed = newValue.toFixed(2)
    totalSpan.innerHTML = newValueFixed

        
    // remover o poroduct ao clicar no X
    i.addEventListener("click", ()=>{
    cartContent.removeChild(div)

    const totalSpan = document.querySelector("#totalSpan")
    const atualValue = totalSpan.textContent
    const actualDecimalValue = parseFloat(atualValue)

    const priceText = secondH2.textContent
    const priceTextFormated = priceText.replace(/[^0-9.]/g, '')
    const decimalValue = parseFloat(priceTextFormated)
    const newValue = actualDecimalValue - decimalValue
    const newValueFixed = newValue.toFixed(2)
    totalSpan.innerHTML = newValueFixed
    
    })

    //criar notificação:



    const notificationSection = document.createElement("section")
    notificationSection.className = "notification"
    notificationSection.id = "notification"
    notificationSection.setAttribute("data-aos", "zoom-in")

    const notificationContainer = document.createElement("div")
    notificationContainer.className = "notification-container"
   

    const notificationImg = document.createElement("div")
    notificationImg.className = "notification-img"
    const image = document.createElement("img")
    image.src = `/img/${imgSrc}.jpg`

    const notificatonH1 = document.createElement("h1")
    notificatonH1.id = "notificationH1"
    notificatonH1.innerText = "Adicionado ao Carrinho \n"

    const spanName = document.createElement("span")
    spanName.id = "nameProduct"
    spanName.innerText =gameName

    notificatonH1.appendChild(spanName)


    notificationImg.appendChild(image)

    notificationContainer.append(notificationImg, notificatonH1)
    notificationSection.appendChild(notificationContainer)
    body.appendChild(notificationSection)
    // remover notificação
    function removeNotification(){
        body.removeChild(notificationSection)
    }
    setTimeout(removeNotification,3000)

}



// Eventos:

// Mostrar Menu:
menuButton.addEventListener("click", ()=>{
   showMenuSection()
})

// Mostrar Carrinho:
cartButton.addEventListener("click", ()=>{
    showCartSection()
 })

 // Apagar a busca ao clicar na LUPA:
 searchButton.addEventListener("click", ()=>{
    resetSearchInputValue()
 })

 //Mostrar a aba de categorias de porodutos:
 playButton.addEventListener("mouseenter", ()=>{
    showProductSection(playstationCategory, "playstation")
 })
 xboxButton.addEventListener("mouseenter", ()=>{
    showProductSection(xboxCategory, "xbox")
 })
 pcButton.addEventListener("mouseenter", ()=>{
    showProductSection(pcCategory, "pc")
 })


 //Remover a aba de categoria do produto:
 playstationCategory.addEventListener("mouseleave", ()=>{
    playstationCategory.className = "playstation-category hide"
    nullCategory.className = "null-category"
 })
 xboxCategory.addEventListener("mouseleave", ()=>{
    xboxCategory.className = "xbox-category hide"
    nullCategory.className = "null-category"
 })
 pcCategory.addEventListener("mouseleave", ()=>{
    pcCategory.className = "pc-category hide"
    nullCategory.className = "null-category"
 })


//Mostrar sections do banner:
switchePs5.addEventListener("click", ()=>{
    switcheBannerSection(ps5BannerSection, "ps5")
})
switcheMouse.addEventListener("click", ()=>{
    switcheBannerSection(mouseBannerSection, "mouse")
})
switcheXbox.addEventListener("click", ()=>{
    switcheBannerSection(xboxBannerSection, "xbox")
})

// criar o produto no carrinho:
gtaBtnCart.addEventListener("click", ()=>{
    createCartElement("gta",gtaH1,gtaPrice)
})

spiderManBtnCart.addEventListener("click", ()=>{
    createCartElement("spiderMan",spiderManH1,spiderManPrice)
})

ghostTsushimaBtnCart.addEventListener("click", ()=>{
    createCartElement("ghostTsushima",ghostTsushimaH1,ghostTsushimaPrice)
})

fifa24BtnCart.addEventListener("click", ()=>{
    createCartElement("fifa24",fifa24H1,fifa24Price)
})

assasinsCreedBtnCart.addEventListener("click", ()=>{
    createCartElement("assasinsCreed",assasinsCreedH1,assasinsCreedPrice)
})

godOfWarBtnCart.addEventListener("click", ()=>{
    createCartElement("godOfWar",godOfWarH1,godOfWarPrice)
})

ps5ConsoleBtnCart.addEventListener("click", ()=>{
    createCartElement("ps5Console",ps5ConsoleH1,ps5ConsolePrice)
})

ps5DualshockBtnCart.addEventListener("click", ()=>{
    createCartElement("ps5Dualshock",ps5DualshockH1,ps5DualshockPrice)
})

ps5HeadsetBtnCart.addEventListener("click", ()=>{
    createCartElement("ps5Headset",ps5HeadsetH1,ps5HeadsetPrice)
})

fifaXboxBtnCart.addEventListener("click", ()=>{
    createCartElement("fifaXbox",fifaXboxH1,fifaXboxPrice)
})

eldenRingBtnCart.addEventListener("click", ()=>{
    createCartElement("eldenRing",eldenRingH1,eldenRingPrice)
})

xboxAssasinsCreedBtnCart.addEventListener("click", ()=>{
    createCartElement("XboxAssasinsCreed",xboxAssasinsCreedH1,xboxAssasinsCreedPrice)
})

hogwartsBtnCart.addEventListener("click", ()=>{
    createCartElement("hogwarts",hogwartsH1,hogwartsPrice)
})

gtaXboxBtnCart.addEventListener("click", ()=>{
    createCartElement("gtaXbox",gtaXboxH1,gtaXboxPrice)
})

farCryBtnCart.addEventListener("click", ()=>{
    createCartElement("farCry",farCryH1,farCryPrice)
})

xBoxConsoleBtnCart.addEventListener("click", ()=>{
    createCartElement("xBoxConsole",xBoxConsoleH1,xBoxConsolePrice)
})

xBoxDualshockBtnCart.addEventListener("click", ()=>{
    createCartElement("xBoxDualshock",xBoxDualshockH1,xBoxDualshockPrice)
})

xBoxHeadsetBtnCart.addEventListener("click", ()=>{
    createCartElement("xBoxHeadset",xBoxHeadsetH1,xBoxHeadsetPrice)
})

// alternas as sessões de produto:
psMidiaBtn.addEventListener("click", ()=>{
    showProductClass(ps5MidiaDigitalSection, "ps5-midia-digital")
})

psConsoleBtn.addEventListener("click", ()=>{
    showProductClass(ps5ConsoleSection, "ps5-console")
})
xboxConsoleBtn.addEventListener("click", ()=>{
    showProductClass(xBoxConsoleSection, "xBox-console")
})
xboxMidiaBtn.addEventListener("click", ()=>{
    showProductClass(xboxMidiaDigitalSection, "xbox-midia-digital")
})
pcBtn.addEventListener("click", ()=>{
    showProductClass(pcNullSection, "pc-null-options")
})
// jogos