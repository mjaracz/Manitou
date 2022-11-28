import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/about';
import { Apaches } from './pages/apaches';
import { Cheyenne } from './pages/cheyenne';
import { Comanche } from './pages/comanche';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Copyrights } from './pages/copyrights';

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Home/> }/>
				<Route path='/cheyenne' element={ <Cheyenne/> }/>
				<Route path='/comanche' element={ <Comanche/> }/>
				<Route path='/apaches' element={ <Apaches/> }/>
				<Route path='/about' element={ <About/> } />
				<Route path='/concat' element={ <Contact/> } />
				<Route path='/copyrights' element={ <Copyrights/> } />
			</Routes>
		</BrowserRouter>
	)
}