import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
function ShopingCart() {
    
    const [products, setProducts]=useState(["Milk","Butter","Eggs","Cheese","Yoghurt","Ice-cream","Apples","Bananas","Oranges","Grapes","Melon","Berries","Lettuce","Tomatoes","Onions","Garlic","Potatoes","Carrots","Cucumber","Avocado","Brocolli","Spinach","RocketArugula","Coriander","Green beans","Honor Mobile","QMobile J7","QMobile X700 PRO","QMobile S6 Plus"])
    const [myproducts, setMyproducts]=useState([])
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [error, setError] = useState(null);
    const handlemyProdducts=(e) =>{
        setSelectedOption2(e.target.value)
    }
    const addSelectProduct=() =>{
        if(myproducts.includes(selectedOption2)){
            alert(selectedOption2+" is already in your cart")

        }else{
            setError(null)
            setMyproducts([...myproducts,selectedOption2]);
        }
        
    }
    const resetItems=() =>{
        setMyproducts([]);
    }
    const removeSelectProduct=(product) =>{
        console.log(product)
        const newList = myproducts.filter((item) => item !== product);
        setMyproducts(newList);
    }
    useEffect(() => {
        // Update the document title using the browser API
        
        
        
      },[]);
    return (
        <div>
            <div className="form-group">
                    <label style={{color:'black', fontSize: 22, fontWeight: 'bold', paddingRight: '5px'}}>Products Available: </label>
                    <select style={{backgroundColor:"#bbded6"}} name="products" value={selectedOption2} onChange={handlemyProdducts}>
                        {products.map(product=> <option style={{backgroundColor:"#bbded6"}} value={product}>{product}</option>)}
                    </select>
                    <button style={{marginLeft:'2%', backgroundColor:'green', color:'white'}} onClick={addSelectProduct}>Add Product To Cart</button>
                    
            </div>
            <h2 style={{ display:'inline-block'}}> <FontAwesomeIcon icon={faShoppingCart}  color="black" /> {myproducts.length} Items</h2><button style={{marginLeft:'2%', backgroundColor:"red", color:'white', display:'inline-block'}} onClick={resetItems}>Reset</button>
            {myproducts.length>0?<h3>Items In Cart:</h3>:<h3>No Items In Cart</h3>}
            {myproducts.map(product=>(<div style={{marginTop:"1%"}}><a style={{backgroundColor:"#0d3f67", color:"#f2f4f6"}}>{product}</a><a style={{marginLeft:"1%"}} onClick={()=>removeSelectProduct(product)}><FontAwesomeIcon icon={faTrashAlt}  color="red" /></a></div>))}
        </div>
    )
}

export default ShopingCart
