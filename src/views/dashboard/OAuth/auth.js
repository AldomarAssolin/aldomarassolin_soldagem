export function authenticate(username, password){

  if(typeof sessionStorage !== 'undefined'){
    if(username === 'assolinaldomar@gmail.com' && password === 'Manex319'){
      return true;
    }else{
      return false
    }
  }else{
    console.error('sessionStorage is not available');
    return false;
  }
  
  
}