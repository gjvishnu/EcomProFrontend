import axios from 'axios'
import { productFail, productRequest, productSuccess } from '../slices/productSlice'

export const getSingleProd = id => async(dispatch)=>{
try
{
    dispatch(  productRequest())
    const url = `/api/product/${id}`
    const {data} = await axios.get(url)
    dispatch(productSuccess(data))
}
catch(e){
  dispatch(productFail(e.response.data.message))
}
}