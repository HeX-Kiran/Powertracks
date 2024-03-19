import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
 

  return (
    <Provider store={store}>
     
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={""} />
                </Routes>
            </BrowserRouter>
        </div>
        
    </Provider>
  )
}

export default App
