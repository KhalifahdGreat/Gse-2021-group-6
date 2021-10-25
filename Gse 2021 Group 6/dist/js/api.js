
let company_name = document.querySelector('#company_name')
let company_email = document.querySelector('#company_email')
let company_message = document.querySelector('#company_message')


function create(){
    axios({
      method: 'post',
      url: 'https://gse-six-backend.herokuapp.com/api/v1/create/',
      data: {
        company_name:  company_name.value,
        company_email: company_email.value, //'company@gmail.com',
        company_message: company_message.value
      }
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });


}


function get_contact(){
  axios({
    method: 'get',
    url: 'https://gse-six-backend.herokuapp.com/api/v1/contact/',
  })
  .then(response => { 
    alert('check your console')
    var resp = response['data']
    for (var i=0; i < resp.length; i++) {

      console.log(resp[i])
    }
  })
  .catch(error => {
      console.log(error.response)
  });


}

function edge_case() {
  if (company_name.value.length < 1 || company_email.value.length < 1 || company_message.value.length < 1){
    alert('some fields are missing')  
  } else if (company_email.value.length > 1 && !company_email.value.includes('@')){
    alert('invalid email format')
  } else {
    document.getElementById('btn').addEventListener('click', create)
    alert('message sent, open your console and view your message there by clicking on the button message button')
  }
}


let button = document.getElementById('btn').addEventListener('click', edge_case)

// https://gse-six-backend.herokuapp.com/api/v1/contact/





let butt = document.getElementById('btn1').addEventListener('click', get_contact)
