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

        e.preventDefault()

        name.classList.remove('error')
        phone.classList.remove('error')
        email.classList.remove('error')
        date.classList.remove('error')
        time.classList.remove('error')

        modal.style.display = 'block'

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
            alertTitle.innerHTML = `<span class="material-icons" style="color:green">
            check_circle
            </span>예약이 완료 되었습니다.`
            name.value = ''
            phone.value = ''
            email.value = ''
            date.value = ''
            time.value = ''
            document.querySelector('#require').value = ''
        }
    })

    confirm.addEventListener('click', function () {
        modal.style.display = 'none'
        const text = document.querySelector('.alert-message')
        text.innerHTML = ''
    })


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