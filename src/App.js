import './App.css'
import Batch from './components/Batch'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import store from './store'



const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Batch />
        <Cart />
      </div>
    </Provider>

  )
}

export default App