import React from 'react';
import { Provider } from 'react-redux'

//Components
import Header from './components/header'
import Form from './components/form'

import store from './store'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header title={`Todo List`} 
					description={`This task list with object of daily task record and as for the end or the user can delete and mark as finished. In this project and a list of simple tasks done with React Js.`} />
				<Form />		
			</div>
		</Provider>
	);
}

export default App;
