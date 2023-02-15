

// var el = document.querySelector('#form')
// if (el) {
//     el.addEventListener('submit', (e) => {
//         e.preventDefault()
//         console.log('form submitted');
//     })

// }

// parent = document.querySelector('.user-data')
// container = document.createElement('div')

// fn = document.createElement('p')
// fn_data = document.querySelector('[placeholder="First Name"]')
// fn.innerhtml = fn_data.value
// container.append(fn)

// parent.append(container)
// console.log('form submitted');




// form = document.querySelector('#form')

// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     parent = document.querySelector('.user-data')

//     container =  document.createElement('div')

//     fN = document.createElement('p')
//     fN_data = document.querySelector('[placeholder*="First"]')
//     fN.innerText = fN_data.value
//     container.append(fN)

//     lN = document.createElement('p')
//     lN_data = document.querySelector('[placeholder*="Last"]')
//     lN.innerText = lN_data.value
//     container.append(lN)

//     if(fN_data.value != '' && lN_data.value != ''){
//         parent.append(container)
//     }

//     fN_data.value = ''
//     lN_data.value = ''
//     console.log('form submitted');
// })



form.addEventListener('submit', (e) => {
    e.preventDefault()

    parent = document.querySelector('.user-data table')

    row_table = document.createElement('tbody')

    arrData = ["First", "Last","Address", "E-mail", "Password","Mobile", "Pincode"]

    for (let i of arrData) {
        fN = document.createElement('td')
        fN_data = document.querySelector(`[placeholder*=${i}]`)
        fN.innerText = fN_data.value
        row_table.append(fN)
        fN_data.value = ''
    }
    parent.append(row_table)


    Gender = document.createElement('td')
    Gender_data = document.querySelector('input[name="gender"]:checked')
    Gender.innerText = Gender_data.value
    row_table.append(Gender)
})

    // email = document.createElement('td')
    // email_data = document.querySelector('[placeholder*="E-mail"]')
    // email.innerText = email_data.value
    // row_table.append(email)

    // password = document.createElement('td')
    // password_data = document.querySelector('[placeholder*="Password"]')
    // password.innerText = password_data.value
    // row_table.append(password)

    // number = document.createElement('td')
    // number_data = document.querySelector('[placeholder*="Mobile"]')
    // number.innerText = number_data.value
    // row_table.append(number)




// alert('to get alert message')
// prompt('to get input')
// out1 = confirm('Are want to confirm')