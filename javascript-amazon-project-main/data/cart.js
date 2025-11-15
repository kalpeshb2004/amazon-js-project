export  const cart = [];

//we are creating function addToCart and inserting all the code within this function.
    export function addToCart(productId) {
      //data set is an atrributes .
      /* in above code same type of product was added seprately instead of adding its quantity.
   so we created a foreach loop for that
   */
      let matchingItem;

      cart.forEach((item) => {
        if (item.productId === productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }
    }