// Get Category Unique Data
export const uniqueCategory = (products) => {
    var uniqueCategorys = [];
    products.map((product) => {
        if (product.tags.length > 0 && product.tags) {
            product.tags.map((categorys) => {
                if(categorys && categorys.length > 0)
                {
                    if (uniqueCategorys.indexOf(categorys) === -1) {
                        uniqueCategorys.push(categorys);
                    }
                }
            })
        }
    })
    return uniqueCategorys;
}

// Get Size Unique Data
export const uniqueSizes = (products) => {
    var uniqueSizes = [];
    products.map((product) => {
        if (product.size.length > 0 && product.size) {
            product.size.map((sizes) => {
                if(sizes && sizes.length > 0)
                {
                    if (uniqueSizes.indexOf(sizes) === -1) {
                        uniqueSizes.push(sizes);
                    }
                }
            })
        }
    })
    return uniqueSizes;
}


// All Filter Used And Get Final Response
export const getFilterProductsdata = (data, { category, size, color,value, sortOrder,ratings,search}) => {
    
    let sizes = size;  

    return data.products.filter(product => {
        
        let categoryMatchValue;
        if(product.tags)
            categoryMatchValue = product.tags.some(tag => category.includes(tag))
        else
            categoryMatchValue = true;  
   

        let sizeMatchValue;
        if(product.size)
             sizeMatchValue = product.size.some(size => sizes.includes(size))
        else
             sizeMatchValue = true;

        let colorMatchValue;
        if(color && product.colors) {
            colorMatchValue = product.colors.some(colors => color.includes(colors))
        }else{
            colorMatchValue = false;
        }

        let searchMatchValue;
        if(product.name) {
            if(search == search.toLowerCase())
            {
                searchMatchValue=product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
            }
            else
            {
                searchMatchValue=product.name.toUpperCase().indexOf(search.toUpperCase()) > -1
            }
        }
        else
        {
            searchMatchValue = false;
        }
       
        let ratingMatchValue;
        if(product.rating == ratings) {
            ratingMatchValue = true;
        }
        else if(ratings == "")
        {
            ratingMatchValue = true;
        }
        else{
            ratingMatchValue = false;
        } 
        
        const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
        const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;

       // let filtercheck=JSON.parse(localStorage.state).filters;
        
        if(category.length > 0 && color.length > 0 && size.length > 0 && ratings.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(category.length > 0 && color.length > 0 && size.length > 0   )
        {
            return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(category.length > 0 && size.length > 0 && ratings.length > 0  )
        {
            return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(category.length > 0 && color.length > 0 && ratings.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(color.length > 0 && size.length > 0 && ratings.length > 0 )
        {
            return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(category.length > 0 && color.length > 0 )
        {
            return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
        }
        if(category.length > 0 && size.length > 0)
        {
            return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(category.length > 0 && ratings.length > 0)
        {
            return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(color.length > 0 && size.length > 0)
        {
            return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(color.length > 0 && ratings.length > 0)
        {
            return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(size.length > 0 && ratings.length > 0)
        {
            return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(color.length > 0)
        {
            return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(category.length > 0)
        {
            return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(size.length > 0)
        {
            return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        if(ratings.length > 0)
        {
            return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
        }
        else
        {
        return startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
       }

    }).sort((sortpro1, sortpro2) => {
        if (sortOrder === 'Pricehigh') {
            return sortpro2.salePrice < sortpro1.salePrice ? -1 : 1;
        } else if (sortOrder === 'Pricelow') {
            return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
        } else if (sortOrder === 'NewProduct') {
            return sortpro2.id < sortpro1.id ? -1 : 1;
        } else{
            return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
        }
    });
}


// Get Color Unique Data
export const uniqueColors = (products) => {
    var uniqueColors = [];
    products.map((product) => {

        if(product.colors.length > 0 && product.colors) {
            product.colors.map((color) => {
                if(color && color.length > 0)
                {
                    if (uniqueColors.indexOf(color) === -1) {
                        uniqueColors.push(color);
                    }
                }

            })
        }
    })
    return uniqueColors;
}

// Get Min & Max Data in Json
export const uniqueMinMaxPrice = (products) => {
    let minimum = 0, maximum = 1000;
    products.map((product, index) => {
        let v = product.salePrice;
        if(v < minimum)
        {
            minimum=v;
        }
        else
        {
            minimum=minimum;
        }
        if(v > maximum)
        {
            maximum=v;
        }
        else
        {
            maximum=maximum;
        }
    })
    return {'min':minimum, 'max':maximum};
}


// All Filter Used And Get Final Response
export const getCompareFilterProductsdata = (data, { category, size, color,value, sortOrder,ratings,search}) => {
    
    let sizes = size;  

    let products1 = [];
    let products2 = [];
    let products3 = [];

    if (data && data.products1.length > 0) {
        products1 = data.products1.filter(product => {
        
            let categoryMatchValue;
            if(product.tags)
                categoryMatchValue = product.tags.some(tag => category.includes(tag))
            else
                categoryMatchValue = true;  
       
    
            let sizeMatchValue;
            if(product.size)
                 sizeMatchValue = product.size.some(size => sizes.includes(size))
            else
                 sizeMatchValue = true;
    
            let colorMatchValue;
            if(color && product.colors) {
                colorMatchValue = product.colors.some(colors => color.includes(colors))
            }else{
                colorMatchValue = false;
            }
    
            let searchMatchValue;
            if(product.name) {
                if(search == search.toLowerCase())
                {
                    searchMatchValue=product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
                }
                else
                {
                    searchMatchValue=product.name.toUpperCase().indexOf(search.toUpperCase()) > -1
                }
            }
            else
            {
                searchMatchValue = false;
            }
           
            let ratingMatchValue;
            if(product.rating == ratings) {
                ratingMatchValue = true;
            }
            else if(ratings == "")
            {
                ratingMatchValue = true;
            }
            else{
                ratingMatchValue = false;
            } 
            
            const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
            const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;
    
           // let filtercheck=JSON.parse(localStorage.state).filters;
            
            if(category.length > 0 && color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && size.length > 0   )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0 && ratings.length > 0  )
            {
                return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0)
            {
                return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && ratings.length > 0)
            {
                return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0)
            {
                return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && ratings.length > 0)
            {
                return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0 && ratings.length > 0)
            {
                return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0)
            {
                return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0)
            {
                return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0)
            {
                return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(ratings.length > 0)
            {
                return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            else
            {
            return startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
           }
    
        }).sort((sortpro1, sortpro2) => {
            if (sortOrder === 'Pricehigh') {
                return sortpro2.salePrice < sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'Pricelow') {
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'NewProduct') {
                return sortpro2.id < sortpro1.id ? -1 : 1;
            } else{
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } 
        });
    }

    
    if (data && data.products2.length > 0) {
        products2 = data.products2.filter(product => {
        
            let categoryMatchValue;
            if(product.tags)
                categoryMatchValue = product.tags.some(tag => category.includes(tag))
            else
                categoryMatchValue = true;  
       
    
            let sizeMatchValue;
            if(product.size)
                 sizeMatchValue = product.size.some(size => sizes.includes(size))
            else
                 sizeMatchValue = true;
    
            let colorMatchValue;
            if(color && product.colors) {
                colorMatchValue = product.colors.some(colors => color.includes(colors))
            }else{
                colorMatchValue = false;
            }
    
            let searchMatchValue;
            if(product.name) {
                if(search == search.toLowerCase())
                {
                    searchMatchValue=product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
                }
                else
                {
                    searchMatchValue=product.name.toUpperCase().indexOf(search.toUpperCase()) > -1
                }
            }
            else
            {
                searchMatchValue = false;
            }
           
            let ratingMatchValue;
            if(product.rating == ratings) {
                ratingMatchValue = true;
            }
            else if(ratings == "")
            {
                ratingMatchValue = true;
            }
            else{
                ratingMatchValue = false;
            } 
            
            const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
            const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;
    
           // let filtercheck=JSON.parse(localStorage.state).filters;
            
            if(category.length > 0 && color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && size.length > 0   )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0 && ratings.length > 0  )
            {
                return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0)
            {
                return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && ratings.length > 0)
            {
                return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0)
            {
                return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && ratings.length > 0)
            {
                return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0 && ratings.length > 0)
            {
                return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0)
            {
                return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0)
            {
                return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0)
            {
                return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(ratings.length > 0)
            {
                return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            else
            {
            return startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
           }
    
        }).sort((sortpro1, sortpro2) => {
            if (sortOrder === 'Pricehigh') {
                return sortpro2.salePrice < sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'Pricelow') {
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'NewProduct') {
                return sortpro2.id < sortpro1.id ? -1 : 1;
            } else{
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } 
        });
    }

    
    if (data && data.products3.length > 0) {
        products3 = data.products3.filter(product => {
        
            let categoryMatchValue;
            if(product.tags)
                categoryMatchValue = product.tags.some(tag => category.includes(tag))
            else
                categoryMatchValue = true;  
       
    
            let sizeMatchValue;
            if(product.size)
                 sizeMatchValue = product.size.some(size => sizes.includes(size))
            else
                 sizeMatchValue = true;
    
            let colorMatchValue;
            if(color && product.colors) {
                colorMatchValue = product.colors.some(colors => color.includes(colors))
            }else{
                colorMatchValue = false;
            }
    
            let searchMatchValue;
            if(product.name) {
                if(search == search.toLowerCase())
                {
                    searchMatchValue=product.name.toLowerCase().indexOf(search.toLowerCase()) > -1
                }
                else
                {
                    searchMatchValue=product.name.toUpperCase().indexOf(search.toUpperCase()) > -1
                }
            }
            else
            {
                searchMatchValue = false;
            }
           
            let ratingMatchValue;
            if(product.rating == ratings) {
                ratingMatchValue = true;
            }
            else if(ratings == "")
            {
                ratingMatchValue = true;
            }
            else{
                ratingMatchValue = false;
            } 
            
            const startPriceMatchValue = typeof value.min !== 'number' || value.min <= product.salePrice;
            const endPriceMatchValue = typeof value.max !== 'number' || product.salePrice <= value.max;
    
           // let filtercheck=JSON.parse(localStorage.state).filters;
            
            if(category.length > 0 && color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && size.length > 0   )
            {
                return  categoryMatchValue && colorMatchValue  && sizeMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0 && ratings.length > 0  )
            {
                return  categoryMatchValue && colorMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 && ratings.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue  &&  ratingMatchValue && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0 && ratings.length > 0 )
            {
                return  colorMatchValue  && sizeMatchValue  && ratingMatchValue && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && color.length > 0 )
            {
                return  categoryMatchValue && colorMatchValue   && startPriceMatchValue && endPriceMatchValue && searchMatchValue;
            }
            if(category.length > 0 && size.length > 0)
            {
                return  categoryMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0 && ratings.length > 0)
            {
                return  categoryMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && size.length > 0)
            {
                return  colorMatchValue && sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0 && ratings.length > 0)
            {
                return  colorMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0 && ratings.length > 0)
            {
                return  sizeMatchValue && ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(color.length > 0)
            {
                return  colorMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(category.length > 0)
            {
                return  categoryMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(size.length > 0)
            {
                return  sizeMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            if(ratings.length > 0)
            {
                return  ratingMatchValue   && startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
            }
            else
            {
            return startPriceMatchValue && endPriceMatchValue  && searchMatchValue;
           }
    
        }).sort((sortpro1, sortpro2) => {
            if (sortOrder === 'Pricehigh') {
                return sortpro2.salePrice < sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'Pricelow') {
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } else if (sortOrder === 'NewProduct') {
                return sortpro2.id < sortpro1.id ? -1 : 1;
            } else{
                return sortpro2.salePrice > sortpro1.salePrice ? -1 : 1;
            } 
        });
    }

    

  const compare_products = {
      products1, 
      products2, 
      products3
  }

  return compare_products;

    
}