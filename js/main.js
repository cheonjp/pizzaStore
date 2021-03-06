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

// 리뷰 트랜지션
(function () {
    const faces = document.querySelectorAll('.face')
    const names = document.querySelectorAll('.name')
    const statements = document.querySelectorAll('.statement')
    let index = 0
    const reviews = []

    // 함수로 고객 정보 만들기
    function customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    // 이미지 변환후 함수를 배열에 넣기
    function createCustomer(img, name, text) {
        const fullImg = `../img/face${img}.jpg`
        const Customer = new customer(fullImg, name, text)
        reviews.push(Customer)
    }

    // 각 고객 사진, 이름, 리뷰내용
    createCustomer(1, "박진태", "'이벤트도 다양하고 피자 맛이 정말 독특하고 전혀 질리지 않네요'")
    createCustomer(2, "강하늘", "'환상적인 맛, 분위기도 너무 좋아요'")
    createCustomer(3, "마이클", "'What a special pizza among what I have eaten before'")
    createCustomer(4, "강수지", "'우리동네에 이런 숨겨진 맛집이 있을줄은 전혀 몰랐네요'")
    createCustomer(5, "강형석", "'가격도 저렴하고 맛도 좋고, 분위기도 좋아서 자주 들립니다'")
    createCustomer(6, "안토넬라", "'I am from Italy but it's amazing pizza shop!")

    // 5초마다 고객 로테이션 돌리기
    setInterval(function () {
        index += 3
        if (index > reviews.length - 1) {
            index = 0
        }
        // 사진 변경
        faces.forEach(function (face) {
            if (face.classList.contains('face1')) {
                face.style.backgroundImage = `url('${reviews[index].img}')`
            } else if (face.classList.contains('face2')) {
                face.style.backgroundImage = `url('${reviews[index + 1].img}')`
            } else if (face.classList.contains('face3')) {
                face.style.backgroundImage = `url('${reviews[index + 2].img}')`
            }
            // opacity 클래스 제거 하기
            face.classList.add('active')
            setTimeout(function () {
                face.classList.remove('active')
            }, 2000)
        })
        // 이름 변경
        names.forEach(function (name) {
            if (name.classList.contains('name1')) {
                name.textContent = reviews[index].name
            } else if (name.classList.contains('name2')) {
                name.textContent = reviews[index + 1].name
            } else if (name.classList.contains('name3')) {
                name.textContent = reviews[index + 2].name
            }
            // opacity 클래스 제거 하기
            name.classList.add('active')
            setTimeout(function () {
                name.classList.remove('active')
            }, 2000)
        })
        // 리뷰 변경
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

})();

// 슬라이드 쇼
(function () {
    const itemName = document.querySelector('.item-name')
    const itemText = document.querySelector('.item-text')
    const itemPrice = document.querySelector('#price')
    const dots = document.querySelectorAll('.slide-circle')
    const itemImg = document.querySelector('.item-img')
    const play = document.querySelector('.play')
    const pause = document.querySelector('.pause')
    let index = 0

    // 피자 정보 배열 생성
    const items = [
        {
            name: 'Cheese Bomb', text: '모짜렐라 치즈가 두배 더 들어간 애니타임의 스페셜 피자로 가격과 맛 두가지를 모두 잡은 피자',
            price: '28,000원', img: '../img/intro-1.jpg'
        },
        {
            name: 'Double Spicy Lucola', text: '이태리 핫소스와 토마토소스, 루꼴라 함께 어우러져 매운맛을 사랑하는 사람을 위한 피자',
            price: '27,000원', img: '../img/intro-2.jpg'
        },
        {
            name: 'Pazla', text: '햄이 더욱 듬뿍 그리고 스페셜 갈릭 소스와 바베큐 소스가 만나 더욱 스페셜 한 맛의 피자',
            price: '27,000원', img: '../img/intro-3.jpg'
        }
    ]

    // 피자 정보 로테이션
    const infinite = setInterval(function () {
        index++
        if (index > dots.length - 1) {
            index = 0
        }
        itemImg.classList.add('active')
        setTimeout(function () {
            itemImg.classList.remove('active')
        }, 2000)
        let i
        for (i = 0; i < dots.length; i++) {
            dots[i].className = 'slide-circle'
            dots[index].className = 'circle-active'
            itemName.textContent = items[index].name
            itemText.textContent = items[index].text
            itemPrice.textContent = items[index].price
            itemImg.src = items[index].img
        }
    }, 5000)

    // dot 클릭시 피자정보 변경
    clickChange()
    function clickChange() {
        let i
        for (i = 0; i < dots.length; i++) {
            dots[i].addEventListener('click', function (e) {
                e.target.className = 'circle-active'
                if (e.target === dots[0]) {
                    index = 0
                    dots[1].className = 'slide-circle'
                    dots[2].className = 'slide-circle'
                } else if (e.target === dots[1]) {
                    index = 1
                    dots[0].className = 'slide-circle'
                    dots[2].className = 'slide-circle'
                } else if (e.target === dots[2]) {
                    index = 2
                    dots[0].className = 'slide-circle'
                    dots[1].className = 'slide-circle'
                }

                itemName.textContent = items[index].name
                itemText.textContent = items[index].text
                itemPrice.textContent = items[index].price
                itemImg.src = items[index].img
            })
        }
    }

    // 플레이 버튼
    play.addEventListener('click', function (e) {
        e.target.style.display = 'none'
        pause.style.display = 'block'
    })
    // 정지 버튼
    pause.addEventListener('click', function (e) {
        clearInterval(infinite)
        clickChange()
        e.target.style.display = 'none'
        play.style.display = 'block'
    })

})();

// to top 버튼
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

// 스크롤시 에니메이션 효과
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

