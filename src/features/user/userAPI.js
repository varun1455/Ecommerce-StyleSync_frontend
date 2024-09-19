
export function fetchLoggedInUserOrders() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/own/', {
      credentials:'include'
    }) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/own', {
      credentials:'include',
    }) 
    const data = await response.json()
    // console.log({data})
    resolve({data})
  }
  );
}

export function updateUSer(updateData){

  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/users/'+updateData.id, {
      method:'PATCH',
      body : JSON.stringify(updateData),
      headers : {'content-type' : 'application/json'},
      credentials:'include'
    })
    const data = await response.json()
    console.log({data});
    resolve({data});
  }
  );
}