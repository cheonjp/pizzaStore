//  핸드폰 메뉴 트렌지션
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
        // document.documentElement.scrollTop = 0
    })
})();

// form 입력시 피드백
(function () {
    const form = document.querySelector('form')
    const name = document.querySelector('#name')
    const phone = document.querySelector('#phone')
    const email = document.querySelector('#email')
    const date = document.querySelector('#date')
    const time = document.querySelector('#time')
    const modal = document.querySelector('.modal')
    const confirm = document.querySelector('.confirm')

    form.addEventListener('submit', function (e) {
        const alertTitle = document.querySelector('.title')

        // form 제출 취소하기
        e.preventDefault()

        // 입력란 누락시 빨간색 강조표시 제거하기
        name.classList.remove('error')
        phone.classList.remove('error')
        email.classList.remove('error')
        date.classList.remove('error')
        time.classList.remove('error')

        // 모달창 열기
        modal.style.display = 'block'

        // 필수 입력사항 누락시 경고메세지
        if (name.value === '' || phone.value === '' || email.value === '' || date.value === '' || time.value === '') {
            alertTitle.innerHTML = `<span class="material-icons" style="color:red; margin-right:5px">
            info
            </span>예약정보를 다시 확인 바랍니다.`
            booking('name', '성함을')
            booking('phone', '전화번호를')
            booking('email', '이메일 주소를 ')
            booking('date', '예약일을')
            booking('time', '시간을')
        } else {
            // 누락 없을시 다른 메세지
            alertTitle.innerHTML = `<span class="material-icons" style="color:green">
            check_circle
            </span>예약이 완료 되었습니다.`
            // form 초기화
            name.value = ''
            phone.value = ''
            email.value = ''
            date.value = ''
            time.value = ''
            document.querySelector('#require').value = ''
        }
    })

    // 피드백 메세지 창 닫기
    confirm.addEventListener('click', function () {
        modal.style.display = 'none'
        const text = document.querySelector('.alert-message')
        text.innerHTML = ''
    })

    // 메세지 내용 함수
    function booking(element, message) {

        if (document.getElementById(element).value === '') {
            const title = document.querySelector('.title')
            const text = document.querySelector('.alert-message')

            text.innerHTML += `<br>${message} 입력해주세요.`
            document.getElementById(element).classList.add('error')
            document.querySelector('html').scrollTop = '450'

        }
    }
})();

// 스크롤 시 트렌지션
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