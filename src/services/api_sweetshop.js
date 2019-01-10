import { sweetsList, cupcakesRecipe, tiramisuRecipe } from './mockedData';

export const getSweetsRequest = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // error case:
    // reject({ message: 'The list could not be loaded.' });

    // success case:
    resolve({ data: { sweets: sweetsList } });
  }, 1000);
});

export const getSweetRecipeRequest = sweetId => new Promise((resolve, reject) => {
  setTimeout(() => {
    switch (sweetId) {
      case 2:
        resolve({ data: { recipe: cupcakesRecipe } });
        break;
      case 3:
        resolve({ data: { recipe: tiramisuRecipe } });
        break;
      default:
        reject({ message: 'The recipe could not be loaded.'});
        break;
    }
  }, 5000);
});


export const placeOrderRequest = order => new Promise((resolve, reject) => {
  setTimeout(() => {
    switch (order.sweetId) {
      case 2:
      case 3:
        resolve({});
        break;
      default:
        reject({ message: `The order for ${order.title} could not be placed.`});
        break;
    }
  }, 3000);
});

