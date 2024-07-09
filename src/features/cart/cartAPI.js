
export function addToCart(item) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/cart', {
      method:'POST',
      body : JSON.stringify(item),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    // console.log(data);
    resolve({data});
  }
  );
}

export function fetchItemsbyUserId(userId){

  return new Promise(async (resolve)=>{

    const response = await fetch('http://localhost:8080/cart?user='+userId) 
    const data = await response.json()
    console.log(data);
    // const items = data

    resolve({data});
  })
}



export function UpdateCart(update) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/cart/'+update.id, {
      method:'PATCH',
      body : JSON.stringify(update),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    resolve({data});
  }
  );
}


export function deleteItemsfromCart(itemId) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/cart/'+itemId, {
      method:'DELETE',
      // body : JSON.stringify(itemId),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    // console.log(data);
    resolve({data: {id:itemId}});
  }
  );
}



export function resetCart(userId) {
  return new Promise( async (resolve) =>{

  const response = await fetchItemsbyUserId(userId);
  const items = await response.data;
  for(let item of items){
    await deleteItemsfromCart(item.id);
  }

  resolve({status:"success"})
  }
)
}