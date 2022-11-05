import './App.css';
import burger from './assets/burger.png'
import fries from './assets/fries.png'
import hotDog from './assets/hot-dog.png'
import coffee from './assets/coffee.png'
import tea from './assets/tea.png'
import cola from './assets/cola.png'


function App() {
  interface Orders {
    name:string;
    price:number;
    image: string
  }
  const Orders:Orders[] = [
    {name:'Hamburger' , price:150, image:burger},
    {name:'Fries' , price:100, image:fries},
    {name:'Hot-dog' , price:110, image:hotDog},
    {name:'Cofe' , price:80, image:coffee},
    {name:'Tea' , price:20, image: tea},
    {name:'Cola' , price:60, image:cola},
  ]




  const allOrders = Orders.map((order) =>
    <div>
        <div className="descr-orders">
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
        <span>Добавьте заказ</span>
      </fieldset>
        <fieldset className='field-order'>
          <legend> Меню заказа</legend>
          {allOrders}
        </fieldset>
    </div>
  );
}

export default App;
