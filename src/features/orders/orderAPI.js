
export function addOrder(orderItem) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/orders', {
      method:'POST',
      body : JSON.stringify(orderItem),
      headers : {'content-type' : 'application/json'},
      credentials:'include'
    })
    const data = await response.json()
    resolve({data});
  }
  );
}


export function updateOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/orders/'+order.id, {
      method: 'PATCH',
      body: JSON.stringify(order),
      headers: { 'content-type': 'application/json' },
      credentials:'include'
    });
    const data = await response.json();
    resolve({ data });
  });
}

