import Form from './components/Form'
import List from './components/List'
import { ListProvider } from "./Contexts/ListContext";


function App() {

  return (
    <ListProvider>
      <Form />
      <List />
    </ListProvider>
  )
}

export default App
