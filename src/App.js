import { OnlineShop } from "./pages/online_shop";
import { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import { Header } from "./pages/header";
import Phone from './assets/images/iphone.jpg'
import samsung from './assets/images/samsung.jpg'
import xiaomi from './assets/images/xiaomi.jpg'

function App() {
  const [list, setList] = useState(

  [
      {
        image: Phone,
        title: 'Samsung',
        price: '$100',
        limit: '5',
        id: Math.random()
      },
      {
        image: samsung,
        title: 'Iphone',
        price: '$100',
        limit: '7',
        id: Math.random()
      },
      {
        image: xiaomi,
        title: 'Xiaomi',
        price: '$100',
        limit: '10',
        id: Math.random()
      }]

  )

  

  const [isLoading, setIsLoading] = useState(true);                                                    
 useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1000);
}, []);

if (isLoading) {
  return (
    <div className="loading" >
      <RingLoader color="rgb(132, 122, 255)" size={200}/>
      <h2>Loading...</h2>
    </div>
   )
}

  return (
      <div>
          <Header/>
          <OnlineShop storeList={list}/>

      </div>
  );
}

export default App;


