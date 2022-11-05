import './App.css';
import burger from './assets/burger.png'
import fries from './assets/fries.png'
import hotDog from './assets/hot-dog.png'
import coffee from './assets/coffee.png'
import tea from './assets/tea.png'
import cola from './assets/cola.png'
import {useState} from "react";


function App() {

  const [orders, setOrders]  = useState([
    {name:'Hamburger' , price:150, image:burger , count:0 ,  id:0},
    {name:'Fries' , price:100, image:fries ,count: 0, id:1},
    {name:'Hot-dog' , price:110, image:hotDog, count: 0, id:2},
    {name:'Cofe' , price:80, image:coffee,count: 0, id:3},
    {name:'Tea' , price:20, image: tea ,count: 0, id:4},
    {name:'Cola' , price:60, image:cola, count: 0, id:5},
  ])
const [addOrder , setAddOrder] = useState([
  {name:'Hamburger' , price:150 , count:0, id:0},
  {name:'Fries' , price:100 ,count:0 , id:1},
  {name:'Hot-dog' , price:110, count:0, id: 2},
  {name:'Coffee' , price:80, count:0, id: 3},
  {name:'Tea' , price:20, count:0, id: 4},
  {name:'Cola' , price:60, count:0 , id: 5}
])

  const addOrders = (id:number) => {
    setAddOrder(prevState => prevState.map(orderName => {
      return orderName.id === id?
        {...orderName , count: orderName.count+1, price: orderName.price+100}:orderName
    }))
    }
    const onDelete = (id:number) => {
      setAddOrder(prevState => prevState.map(orderName => {
        return orderName.id === id?
          {...orderName , count:0, price: 0}:orderName
      }))
    }
  const some = (id:number) =>{
    return(
      <div className='orders'>
        <b className="name-order">{addOrder[id].name} : </b>
        <span>{addOrder[id].count} шт</span>
        <span>{addOrder[id].price} KGS</span>
        <button onClick={()=> onDelete (id)}><b>X</b></button>
      </div>
    )
  }
  const allOrders = orders.map((order, index) =>
    <div>
        <div onClick={() =>addOrders(index)} className="descr-orders">
          <img alt='' src= {order.image}/>
          <div>
            <strong className="strong">{order.name.toUpperCase()}</strong>
            <span>{order.price} KGS</span>
          </div>
        </div>
    </div>
  )


  return (
    <div className="container">
      <fieldset className='field'>
        <legend>Детали заказа</legend>
        <span className='span-order'> Добавьте заказ</span>
        {some(0)}
        {some(1)}
        {some(2)}
        {some(3)}
        {some(4)}
        {some(5)}
      </fieldset>
        <fieldset className='field-order'>
          <legend> Меню заказа</legend>
          {allOrders}
        </fieldset>
    </div>
  );
}

export default App;
