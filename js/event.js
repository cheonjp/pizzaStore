// 핸드폰 메뉴 트렌지션
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
    })
})();

// 스크롤시 트렌지션 효과
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