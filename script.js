const elForm = document.querySelector('.form')
const elInput = document.querySelector('.input')
const result =  document.querySelector('.result')
const body = document.querySelector('.body')

const elBtn =  document.querySelector('#button')


elForm.addEventListener('submit', function(evt){
    evt.preventDefault()
    const value = Number( elInput.value)
    
    switch (value) {
        case 1:
        result.textContent = 'dushanba'
    result.style.color = 'green'
            break
            case 2:
            result.textContent = 'seshanba'
        result.style.color = 'green'
                break
                case 3:
                result.textContent = 'chorshanba'
            result.style.color = 'green'
                    break
                    case 4:
                        result.textContent = 'payshanbi'
                result.style.color = 'green'
                        break
                        case 5:
                        result.textContent = 'juma'
                    result.style.color = 'green'
                            break
                            case 6:
                        result.textContent = 'shanbi'
                    result.style.color = 'green'
                         break
                                case 7:
                        result.textContent = 'yakshanbi'
                    result.style.color = 'green'
                                    break
                                                                                            
        default:
            result.textContent = "";
            break
    }
    if(value>7 ){
        result.textContent = '1 dan 7 gacha son kriting'
        result.style.color = 'red'
    }else{
        ''
    }
})
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }