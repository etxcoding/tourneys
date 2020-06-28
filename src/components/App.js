import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

import Matches from '../pages/Matches';
import Teams from '../pages/Teams';
import Tourney from '../pages/Tourney';
import NotFound from '../pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Teams} />
					<Route exact path="/tourney/:tourneyId" component={Tourney} />
					<Route exact path="/matches" component={Matches} />
					<Route exact path="/teams" component={Teams} />
					<Route exact path="/liga" component={Tourney} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
