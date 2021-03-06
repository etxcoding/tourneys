import React from 'react';
import './styles/Table.css';

class MatchesList extends React.Component {
	RenderLeagueTable = () => {
		var position = 1;
		return (
			<React.Fragment>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<td>#</td>
							<td className="w30px"></td>
							<td className="d-none d-sm-table-cell text-left">Equipo</td>
							<td>PJ</td>
							<td>G</td>
							<td>E</td>
							<td>P</td>
							<td className="d-none d-sm-table-cell">GF</td>
							<td className="d-none d-sm-table-cell">GC</td>
							<td className="d-none d-sm-table-cell">DG</td>
							<td>Pnts</td>
						</tr>
					</thead>
					<tbody>
						{this.props.stats.map((stat) => (
							<tr key={position}>
								<td className="font-weight-bold">{position++}</td>
								<td>
									<img
										height="30"
										src={require(`../images/badges/${stat.badge}`)}
										alt="badge"
										title={`${stat.team}`}
									/>
								</td>
								<td className="d-none d-sm-table-cell text-left">
									{stat.team}
								</td>
								<td>{stat.games_played}</td>
								<td>{stat.wins}</td>
								<td>{stat.draws}</td>
								<td>{stat.losses}</td>
								<td className="d-none d-sm-table-cell">{stat.goals_favor}</td>
								<td className="d-none d-sm-table-cell">{stat.goals_against}</td>
								<td className="d-none d-sm-table-cell">
									{stat.goal_difference}
								</td>
								<td className="font-weight-bold">{stat.points}</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	};

	RenderGroupsTable = () => {
		var position = 1;
		return (
			<React.Fragment>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<td>#</td>
							<td className="w30px"></td>
							<td className="d-none d-sm-table-cell text-left">Equipo</td>
							<td>PJ</td>
							<td>G</td>
							<td>E</td>
							<td>P</td>
							<td className="d-none d-sm-table-cell">GF</td>
							<td className="d-none d-sm-table-cell">GC</td>
							<td className="d-none d-sm-table-cell">DG</td>
							<td>Pnts</td>
						</tr>
					</thead>
					<tbody>
						{this.props.stats.map((stat) => (
							<tr key={position}>
								<td className="font-weight-bold">{position++}</td>
								<td>
									<img
										height="30"
										src={require(`../images/badges/${stat.badge}`)}
										alt="badge"
										title={`${stat.team}`}
									/>
								</td>
								<td className="d-none d-sm-table-cell text-left">
									{stat.team}
								</td>
								<td>{stat.games_played}</td>
								<td>{stat.wins}</td>
								<td>{stat.draws}</td>
								<td>{stat.losses}</td>
								<td className="d-none d-sm-table-cell">{stat.goals_favor}</td>
								<td className="d-none d-sm-table-cell">{stat.goals_against}</td>
								<td className="d-none d-sm-table-cell">
									{stat.goal_difference}
								</td>
								<td className="font-weight-bold">{stat.points}</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	};

	render() {
		switch (this.props.tourney_type_id) {
			case 1:
				return '';
			case 2:
				// LIGA.
				return <this.RenderLeagueTable />;
			case 3:
				return '';
			case 4:
				return '';
			default:
				return '';
		}
	}
}

export default MatchesList;
