import {hot} from "react-hot-loader/root";
import * as React from "react";
import {useEffect, useState} from "react";
import {Layout} from "./Layout";
import {Header} from "./Header";
import './main.global.css'
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {UserContextProvider} from "./context/userContext";
import {generateRandomString} from "./utils/getRandomString";
import {applyMiddleware, legacy_createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/store";
import thunk from "redux-thunk";
import {saveToken} from "./store/my/action";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {NotFoundPage} from "./UI/NotFoundPage";


const store = legacy_createStore(rootReducer, composeWithDevTools(
		applyMiddleware(thunk)
));


function AppComponent() {
	const [mounted, setMounted] = useState(false)
	useEffect(() => {
			setMounted(true)
	}, [])
	useEffect(() => {
			store.dispatch<any>(saveToken())
	}, [])
	//
	return (
		<Provider store={store} >
			<UserContextProvider>
				{mounted &&
					<BrowserRouter>
						<Route exact strict path='/'>
							<Redirect to='/posts'></Redirect>
						</Route>
						<Route path='/auth'>
							<Redirect to='/posts'></Redirect>
						</Route>
						<Switch>
						<Route path="/posts">
							<Layout>
								<Header/>
									<Content>
										<CardsList key={generateRandomString()}/>
									</Content>
							</Layout>
						</Route>
						<Route path="*">
							<NotFoundPage></NotFoundPage>
						</Route>
						</Switch>
					</BrowserRouter>
				}
			</UserContextProvider>
		</Provider>

		)
}

export const App = hot(() => <AppComponent/>)