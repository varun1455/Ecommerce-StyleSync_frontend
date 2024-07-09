
export function createUser(userData) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/auth/signup', {
      method:'POST',
      body : JSON.stringify(userData),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    resolve({data});
  }
  );
}


export function checkUser(loginInfo) {
  return new Promise( async (resolve, reject) =>{

    try {

      // const email = loginInfo.email;
    // const password = loginInfo.password;

    const response = await fetch('http://localhost:8080/auth/login', {
      method:'POST',
      body : JSON.stringify(loginInfo),
      headers : {'content-type' : 'application/json'}


    })

    if(response.ok){
      const data = await response.json()
      console.log({data});
      resolve({data});
    }
    else{

      const err = await response.json()
      const msg = err.message;
      reject({err: {msg: msg}});
    }
    }
  
      
     catch (error) {

      reject({error});
      
    }

    
    // if(data.length){
    //   if(password === data[0].password){
    //     resolve({data: data[0]})
    //   }else{
    //     reject({message: "wrong credentials"})

    //   }
    // }
   
    
    // else{
    //   reject({message: 'user not found'})
    // }
   
  }
  );
}


export function signOutUser(userId) {
  return new Promise( async (resolve) =>{

    resolve({data:'success'})
   
  }
  );
}

