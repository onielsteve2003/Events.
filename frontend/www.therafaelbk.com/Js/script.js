const form = document.getElementById('contact-form')
const name = document.getElementById('name')
const request = document.getElementById('request')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phoneNum')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = {
        name: name.value,
        request: request.value,
        email: email.value,
        phoneNum: phoneNum.value,
    }

    axios.post('https://tnccc-events.herokuapp.com/api/events', userData)
    .then(res => {
        document.getElementById('error-body').innerHTML = `<div style="background-color: green; color: #fff">${res.data.msg}</div>`
        setTimeout(() => {
            document.getElementById('error-body').innerHTML = ''
        }, 4000);

        // Clear form
        name.value = ''
        request.value = ''
        email.value = ''
        phoneNum.value = ''
    })
    .catch(err => {
        document.getElementById('error-body').style.display = 'block'
        document.getElementById('error-body').innerHTML = `<div style="background-color: pink;"> ${err.response.data.error} </div>`
        setTimeout(() => {
            document.getElementById('error-body').innerHTML = ''
        }, 4000);
    })
})