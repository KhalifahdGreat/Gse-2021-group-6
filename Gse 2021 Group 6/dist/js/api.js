let button = document.getElementById('btn').addEventListener('click', create)

function getName(field){
  let val = document.querySelector('#company_name').value
  return val
}

function getEmail(field){
  let val = document.querySelector('#company_email').value
  return val
}

function getMessage(field){
  let val = document.querySelector('#company_message').value
  return val
}

function create(){
  axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/create/',
      data: {
        company_name: getName(),
        company_email: getEmail(),
        company_message: getMessage()
      }
    });
}
