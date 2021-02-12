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
    const faces = document.querySelectorAll('.face')
    const names = document.querySelectorAll('.name')
    const statements = document.querySelectorAll('.statement')
    let index = 0
    const reviews = []

    function customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        const fullImg = `../img/face${img}.jpg`
        const Customer = new customer(fullImg, name, text)
        reviews.push(Customer)
    }

    createCustomer(1, "박진태", "'이벤트도 다양하고 피자 맛이 정말 독특하고 전혀 질리지 않네요'")
    createCustomer(2, "강하늘", "'환상적인 맛, 분위기도 너무 좋아요'")
    createCustomer(3, "마이클", "'What a special pizza among what I have eaten before'")
    createCustomer(4, "강수지", "'우리동네에 이런 숨겨진 맛집이 있을줄은 전혀 몰랐네요'")
    createCustomer(5, "강형석", "'가격도 저렴하고 맛도 좋고, 분위기도 좋아서 자주 들립니다'")
    createCustomer(6, "안토넬라", "'I am from Italy but it's amazing pizza shop!")

    setInterval(function () {
        index += 3
        if (index > reviews.length - 1) {
            index = 0
        }
        faces.forEach(function (face) {
            if (face.classList.contains('face1')) {
                face.style.backgroundImage = `url('${reviews[index].img}')`
            } else if (face.classList.contains('face2')) {
                face.style.backgroundImage = `url('${reviews[index + 1].img}')`
            } else if (face.classList.contains('face3')) {
                face.style.backgroundImage = `url('${reviews[index + 2].img}')`
            }
            face.classList.add('active')
            setTimeout(function () {
                face.classList.remove('active')
            }, 2000)
        })
        names.forEach(function (name) {
            if (name.classList.contains('name1')) {
                name.textContent = reviews[index].name
            } else if (name.classList.contains('name2')) {
                name.textContent = reviews[index + 1].name
            } else if (name.classList.contains('name3')) {
                name.textContent = reviews[index + 2].name
            }
            name.classList.add('active')
            setTimeout(function () {
                name.classList.remove('active')
            }, 2000)
        })
        statements.forEach(function (statement) {
            if (statement.classList.contains('statement1')) {
                statement.textContent = reviews[index].text
            } else if (statement.classList.contains('statement2')) {
                statement.textContent = reviews[index + 1].text
            } else if (statement.classList.contains('statement3')) {
                statement.textContent = reviews[index + 2].text
            }
            statement.classList.add('active')
            setTimeout(function () {
                statement.classList.remove('active')
            }, 2000)
        })
    }, 5000)

})()