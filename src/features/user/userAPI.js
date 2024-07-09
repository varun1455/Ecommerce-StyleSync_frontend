
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/?user='+userId) 
    const data = await response.json()
    resolve({data})
  }
  );
}


export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/'+userId) 
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
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    console.log({data});
    resolve({data});
  }
  );
}