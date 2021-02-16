// 핸드폰 메뉴 트랜지션
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

// go to top 버튼
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

// 메뉴 필터
(function () {
    const buttons = document.querySelectorAll('.menu-sort')
    const items = document.querySelectorAll('.item')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            // 변수 필터
            const filter = e.target.dataset.food
            items.forEach(function (item) {
                // all 클릭시 모든 아이템 표시
                if (filter === 'all') {
                    item.style.display = 'block'
                    // 각 버튼 클릭시 각 부분 아이템 표시
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
    // 아이템
    const items = document.querySelectorAll('.item')
    // 모달창
    const modal = document.querySelector('#modal')
    // 피자이미지
    const image = document.querySelector('.pizza-img')
    // 변경될 배경DIV
    const background = document.querySelector('.image')
    // 메뉴이름
    const menuName = document.querySelector('#menu-name')
    // 메뉴 소개
    const explain = document.querySelector('.menu-introduction')
    // 메뉴 재료
    const ingredient = document.querySelector('.ingredient')
    // 버튼 생성될 컨테이너
    const buttonContainer = document.querySelector('.buttons')

    let index = 0
    // 아이템 담을 엘라이
    itemArray = []

    items.forEach(function (item) {
        itemArray.push(item)
        // 각 아이템 이벤트 입력
        item.addEventListener('click', function (e) {
            modal.style.display = 'block'
            // 닫기 버튼 이벤트 입력
            document.querySelector('.close').addEventListener('click', function () {
                modal.style.display = 'none'
            })

            // 각 아이템 번호 부여하기
            const itemNumber = itemArray.indexOf(item)
            index = itemNumber
            // 표시될 이미지
            image.src = itemArray[index].children[0].src
            // 표시될 메뉴이름
            menuName.innerHTML = itemArray[index].children[1].innerHTML
            // 표시될 메뉴소개
            explain.textContent = itemArray[index].children[2].textContent
            // 표시될 메뉴 재료
            ingredient.textContent = itemArray[index].children[3].textContent

            // 만약 아이템이 사이드메뉴 또는 와인일 경우
            if (item.classList.contains('side') || item.classList.contains('wine')) {
                background.style.backgroundImage = `url(../img/sidefoodBackground.jpg)`

                const priceBtn = document.createElement('BUTTON')
                const price = itemArray[index].children[4].children[0].textContent

                priceBtn.classList.add('button-normal', 'btn-buy')
                priceBtn.innerHTML = `${price} 원`
                buttonContainer.innerHTML = ''
                buttonContainer.appendChild(priceBtn)

                if (item.classList.contains('wine')) {
                    background.style.backgroundImage = `url(../img/wineBackground.jpg)`
                }

                // 아이템이 피자일 경우
            } else if (item.classList.contains('pizza')) {
                background.style.backgroundImage = `url(../img/table.jpg)`

                const largeBtn = document.createElement('BUTTON')
                const largePrice = itemArray[index].children[4].children[0].children[0].textContent

                largeBtn.classList.add('large', 'btn-buy')
                largeBtn.innerHTML = `${largePrice} 원`
                buttonContainer.innerHTML = ''
                buttonContainer.appendChild(largeBtn)

                const regularBtn = document.createElement('BUTTON')
                const regularPrice = itemArray[index].children[4].children[1].children[0].textContent

                regularBtn.classList.add('regular', 'btn-buy')
                regularBtn.innerHTML = `${regularPrice} 원`
                buttonContainer.appendChild(regularBtn)
            }
            // 왼쪽 / 오른쪽 버튼 이벤트 입력
            const buttons = document.querySelectorAll('.btn')
            buttons.forEach(function (button) {
                button.addEventListener('click', function (e) {
                    // 왼쪽 버튼 클릭시
                    if (e.target.classList.contains('left')) {
                        index--
                        if (index < 0) {
                            index = itemArray.length - 1;
                        }
                        // 오른쪽 버튼 클릭시
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

                    // 사이드, 와인 전용 버튼 생성
                    if (itemArray[index].classList.contains('side') || itemArray[index].classList.contains('wine')) {
                        background.style.backgroundImage = `url(../img/sidefoodBackground.jpg)`

                        const priceBtn = document.createElement('BUTTON')
                        const price = itemArray[index].children[4].children[0].textContent

                        priceBtn.classList.add('button-normal', 'btn-buy')
                        priceBtn.innerHTML = `${price} 원`
                        buttonContainer.innerHTML = ''
                        buttonContainer.appendChild(priceBtn)

                        if (itemArray[index].classList.contains('wine')) {
                            background.style.backgroundImage = `url(../img/wineBackground.jpg)`
                        }
                        // 피자 전용 버튼 생성
                    } else if (itemArray[index].classList.contains('pizza')) {
                        background.style.backgroundImage = `url(../img/table.jpg)`

                        const largeBtn = document.createElement('BUTTON')
                        const largePrice = itemArray[index].children[4].children[0].children[0].textContent

                        largeBtn.classList.add('large', 'btn-buy')
                        largeBtn.innerHTML = `${largePrice} 원`
                        buttonContainer.innerHTML = ''
                        buttonContainer.appendChild(largeBtn)

                        const regularBtn = document.createElement('BUTTON')
                        const regularPrice = itemArray[index].children[4].children[1].children[0].textContent

                        regularBtn.classList.add('regular', 'btn-buy')
                        regularBtn.innerHTML = `${regularPrice} 원`
                        buttonContainer.appendChild(regularBtn)
                    }
                    addCart(index, itemArray)
                })
            })
            addCart(index, itemArray)
        })
    })
})();

// 카트에 아이템 담기
function addCart(number, itemInformation) {
    const buttons = document.querySelectorAll('.btn-buy')

    // 각 메뉴의 버튼 데이터를 카트로 옮기기
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            const money = e.target.textContent
            const finalMoney = money.slice(0, 6)
            const itemImage = itemInformation[number].children[0].src
            const itemName = itemInformation[number].children[1].innerHTML

            const itemContainer = document.querySelector('.item-container')
            const createItem = document.createElement('DIV')
            // 구매후 알림창 표시
            alert('선택하신 음식이 구매목록에 담겼습니다.')
            // 카트에 구매목록 생성
            createItem.classList.add('cart-item')
            createItem.innerHTML = `<img src="${itemImage}" alt="">
            <h5 class="item-name">${itemName}</h5>
            <div class="item-price">${finalMoney}<span> 원</span></div>
            <span class="material-icons trash">
                delete
            </span>`
            itemContainer.appendChild(createItem)

            total()
        })
    })
};

// 아이템 합계 계산
function total() {
    const moneyArray = []
    const itemPrices = document.querySelectorAll('.item-price')
    itemPrices.forEach(function (price) {
        const onlyMoney = parseFloat(price.textContent) * 1000
        // 각 아이템 돈 배열에 넣기
        moneyArray.push(onlyMoney)
    })
    // 배열내 돈 합계로 변환
    const totalMoney = moneyArray.reduce(function (total, onlyMoney) {
        total += onlyMoney
        return total
    }, 0)

    const totalItem = document.querySelector('.item-number')
    const sum = document.querySelector('.item-totalMoney')
    const number = document.querySelector('.number')

    // 아이템 개수
    totalItem.textContent = ` ${moneyArray.length} 개`
    // 총 금액
    sum.textContent = totalMoney
    // 카트 아이콘 개수 표시
    number.textContent = moneyArray.length

    if (moneyArray.length > 0) {
        const purchase = document.querySelector('#purchase')
        purchase.style.right = '20px'
    }
};

// 카트 애니메이션
(function () {
    const purchase = document.querySelector('#purchase')
    const cartList = document.querySelector('#cart-list')
    purchase.addEventListener('click', function () {
        purchase.style.right = '-100%'
        setTimeout(function () {
            cartList.style.top = '0'
        }, 400)
    })

    const close = document.querySelector('.cart-list-close')

    close.addEventListener('click', function () {
        cartList.style.top = '-100%'
        setTimeout(function () {
            purchase.style.right = '20px'
        }, 400)
    })
})();

// 스크롤 다운시 애니메이션 효과
(function () {
    const scrollTargets = document.querySelectorAll('.scrollTarget')
    scrollTargets.forEach(function (scrollTarget) {
        scrollTarget.classList.add('scroll')

        window.addEventListener('scroll', scrollAction)
    })
    function scrollAction() {
        const targets = document.querySelectorAll('.scrollTarget')
        targets.forEach(function (scrollTarget) {
            const targetHeight = scrollTarget.getBoundingClientRect().top
            const screenHeight = window.innerHeight - 200

            if (targetHeight < screenHeight) {
                scrollTarget.classList.add('scroll-active')
            }
        })
    }
})();


