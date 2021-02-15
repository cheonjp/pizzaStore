(function () {
    const phoneMenu = document.querySelector('.phone-menu')
    const menuBox = document.querySelector('#menu-box')
    const body = document.querySelector('body')
    phoneMenu.addEventListener('click', function () {
        if (menuBox.style.left) {
            menuBox.style.left = null
        } else {
            menuBox.style.left = '0px'
        }
    })
})();

(function () {
    const toTop = document.querySelector('.goback')

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) {
            toTop.style.display = 'block'
        } else {
            toTop.style.display = 'none'
        }
    })

    toTop.addEventListener('click', function (e) {
        document.querySelector('html').scrollTop = 0
        // document.documentElement.scrollTop = 0
    })
})();

(function () {
    const buttons = document.querySelectorAll('.menu-sort')
    const items = document.querySelectorAll('.item')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const filter = e.target.dataset.food
            items.forEach(function (item) {
                if (filter === 'all') {
                    item.style.display = 'block'
                } else if (item.classList.contains(filter)) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            })
        })
    })
})();

(function () {
    const items = document.querySelectorAll('.item')
    const modal = document.querySelector('#modal')
    const image = document.querySelector('.pizza-img')
    const background = document.querySelector('.image')
    const menuName = document.querySelector('#menu-name')
    const explain = document.querySelector('.menu-introduction')
    const ingredient = document.querySelector('.ingredient')
    const large = document.querySelector('.large')
    const buttonContainer = document.querySelector('.buttons')

    let index = 0
    itemArray = []

    items.forEach(function (item) {
        itemArray.push(item)
        item.addEventListener('click', function (e) {
            modal.style.display = 'block'
            document.querySelector('.close').addEventListener('click', function () {
                modal.style.display = 'none'
            })

            const itemNumber = itemArray.indexOf(item)
            index = itemNumber
            image.src = itemArray[index].children[0].src
            menuName.innerHTML = itemArray[index].children[1].innerHTML
            explain.textContent = itemArray[index].children[2].textContent
            ingredient.textContent = itemArray[index].children[3].textContent

            if (item.classList.contains('side') || item.classList.contains('wine')) {
                background.style.backgroundImage = `url(../img/sidefoodBackground.jpg)`

                const priceBtn = document.createElement('BUTTON')
                const price = itemArray[index].children[4].children[0].textContent

                priceBtn.classList.add('button-normal')
                priceBtn.innerHTML = `${price} 원`
                buttonContainer.innerHTML = ''
                buttonContainer.appendChild(priceBtn)

                if (item.classList.contains('wine')) {
                    background.style.backgroundImage = `url(../img/wineBackground.jpg)`
                }

            } else if (item.classList.contains('pizza')) {
                background.style.backgroundImage = `url(../img/table.jpg)`

                const largeBtn = document.createElement('BUTTON')
                const largePrice = itemArray[index].children[4].children[0].children[0].textContent

                largeBtn.classList.add('large')
                largeBtn.innerHTML = `${largePrice} 원`
                buttonContainer.innerHTML = ''
                buttonContainer.appendChild(largeBtn)

                const regularBtn = document.createElement('BUTTON')
                const regularPrice = itemArray[index].children[4].children[1].children[0].textContent

                regularBtn.classList.add('regular')
                regularBtn.innerHTML = `${regularPrice} 원`
                buttonContainer.appendChild(regularBtn)
            }
            const buttons = document.querySelectorAll('.btn')
            buttons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    if (e.target.classList.contains('left')) {
                        index--
                        if (index < 0) {
                            index = itemArray.length - 1;
                        }
                    } else if (e.target.classList.contains('right')) {
                        index++
                        if (index > itemArray.length - 1) {
                            index = 0
                        }
                    }
                    image.src = itemArray[index].children[0].src
                    menuName.innerHTML = itemArray[index].children[1].innerHTML
                    explain.textContent = itemArray[index].children[2].textContent
                    ingredient.textContent = itemArray[index].children[3].textContent

                    if (itemArray[index].classList.contains('side') || itemArray[index].classList.contains('wine')) {
                        background.style.backgroundImage = `url(../img/sidefoodBackground.jpg)`

                        const priceBtn = document.createElement('BUTTON')
                        const price = itemArray[index].children[4].children[0].textContent

                        priceBtn.classList.add('button-normal')
                        priceBtn.innerHTML = `${price} 원`
                        buttonContainer.innerHTML = ''
                        buttonContainer.appendChild(priceBtn)

                        if (itemArray[index].classList.contains('wine')) {
                            background.style.backgroundImage = `url(../img/wineBackground.jpg)`
                        }
                    } else if (itemArray[index].classList.contains('pizza')) {
                        background.style.backgroundImage = `url(../img/table.jpg)`

                        const largeBtn = document.createElement('BUTTON')
                        const largePrice = itemArray[index].children[4].children[0].children[0].textContent

                        largeBtn.classList.add('large')
                        largeBtn.innerHTML = `${largePrice} 원`
                        buttonContainer.innerHTML = ''
                        buttonContainer.appendChild(largeBtn)

                        const regularBtn = document.createElement('BUTTON')
                        const regularPrice = itemArray[index].children[4].children[1].children[0].textContent

                        regularBtn.classList.add('regular')
                        regularBtn.innerHTML = `${regularPrice} 원`
                        buttonContainer.appendChild(regularBtn)
                    }

                })
            })

        })

    })
})();

