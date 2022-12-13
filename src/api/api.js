import { setIsAuth, setIsProductsLoaded, setUserData } from '../redux/userDataReducer';
import { setProducts, setSelectedProduct, setSortedProducts } from './../redux/productsReducer'

export const ApiSetProducts = (dispatch) => {
  fetch("https://6391f387ac688bbe4c57c52a.mockapi.io/api/Products").then((resp) => {
    resp.json().then((res) => {
      dispatch(setProducts(res));
      dispatch(setIsProductsLoaded())
    });
  });
}

export const ApiSetSortedProducts = (dispatch, sortParams) => {
  fetch(`https://6391f387ac688bbe4c57c52a.mockapi.io/api/Products?name=${sortParams.name}&sortBy=${sortParams.param}&order=${sortParams.desc}`).then((resp) => {
    resp.json().then((res) => {
      dispatch(setSortedProducts(res));
      dispatch(setIsProductsLoaded())
    });
  });
}

export const ApiSetSelectedProduct = (dispatch, id) => {
  dispatch(setSelectedProduct({}))
  fetch(`https://6391f387ac688bbe4c57c52a.mockapi.io/api/Products?id=${id}`).then((resp) => {
    resp.json().then((res) => {
      dispatch(setSelectedProduct(res[0]))
    })
  })
}

let userData = [
  {
    "likes": [
      0,
      1
    ],
    "cart": [
      [
        2,
        2
      ],
      [
        1,
        3
      ]
    ],
    "id": "1"
  }
]

export const ApiSetUserData = (dispatch) => {
  fetch("https://6391f387ac688bbe4c57c52a.mockapi.io/api/userData?id=1").then((data) =>
    data.json().then((res) => {
      dispatch(setUserData(res)); dispatch(setIsAuth())
    }))
}

export const ApiPutUserData = (likes, cart) => {
  fetch("https://6391f387ac688bbe4c57c52a.mockapi.io/api/userData/1", {
    method: 'PUT',
    body: JSON.stringify
      ({
        "likes": likes,
        "cart": cart,
        "id": "1"
      }),
    headers: {
      'Content-Type': 'application/json'
    }

  })

}



