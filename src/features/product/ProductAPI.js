
export function fetchAllProducts() {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/products')
    const data = await response.json()
    // console.log(data);
    resolve({data});
  }
  );
}


export function fetchProductbyId(id) {
  return new Promise( async (resolve) =>{

    const response = await fetch("http://localhost:8080/products/"+id);
    const data = await response.json()
    // console.log(data)
    resolve({data});
  }
  );
}




export function addProduct(product) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/products', {
      method:'POST',
      body : JSON.stringify(product),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
    resolve({data});
  }
  );
}


export function updateProduct(update) {
  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/products/'+update.id, {
      method:'PATCH',
      body : JSON.stringify(update),
      headers : {'content-type' : 'application/json'}
    })
    const data = await response.json()
  
    resolve({data});
  }
  );
}



export function fetchProductsByFilters(filter,sort, pagination) {

  //filter : {"category":"men-wears"}
  let queryString = ''
  for(let key in filter){
    
    const categoryValues = filter[key]
    if(categoryValues.length>0){
      
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for (let key in sort){
    
    // queryString += `${key} = ${sort[key]}&`
     queryString += `${key}=${sort[key]}&`
    
    
  }
  // console.log(sort);
  // console.log(pagination)
  for(let key in pagination){
    queryString += `${key}=${pagination[key]}&`
  }

  return new Promise( async (resolve) =>{

    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    // console.log(products);
    const products = data.response;
    const totalItems = data.totalproducts;
    
    resolve({data: {products:products, totalItems:totalItems}});
    // console.log(data);
    // resolve({data:{products:products}})

    
  }
  );
}

export function fetchCategories(){

  return new Promise (async(resolve)=>{

    const response = await fetch('http://localhost:8080/categories')
    const data = await response.json();
    resolve({data})
  })
}
