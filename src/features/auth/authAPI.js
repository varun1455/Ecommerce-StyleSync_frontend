
export function createUser(userData) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/auth/signup', {
      method:'POST',
      body : JSON.stringify(userData),
      headers : {'content-type' : 'application/json'},
      credentials:'include'
    })
    const data = await response.json()
    resolve({data});
  }
  );
}


export function checkUser(loginInfo) {
  return new Promise( async (resolve, reject) =>{

    try {

  

    const response = await fetch('http://localhost:8080/auth/login', {
      method:'POST',
      body : JSON.stringify(loginInfo),
      headers : {'content-type' : 'application/json'},
      credentials : 'include'


    })

    if(response.ok){
      const data = await response.json()
  
      resolve({data});
    }
    else{

      const err = await response.text()
      // console.log(err);
      reject({err})
      
      
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


export function checkLoginAuth(){



  return new Promise(async (resolve, reject)=>{


    try{
        const response = await fetch("http://localhost:8080/auth/check", {
          credentials:'include'
        })
        if(response.ok){
          const data = await response.json();
          resolve({data});
        }

        else{
          const error = await response.text();
          reject(error);
        }
    }
    catch(err){

      reject(err);


    }
  })
}




export function signOutUser(userId) {
  return new Promise( async (resolve) =>{

    resolve({data:'success'})
   
  }
  );
}

