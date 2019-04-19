import React, { Component } from 'react';
import '../styles/Chart.css';

class Chart extends Component {
	render() {
		const { currentKey, currentNotation } = this.props;
		return (
			<div className="chartWrapper">
				<table>
					<thead>
						<tr>
							<th scope="col">Mode</th>
							<th scope="col">I</th>
							<th scope="col">II</th>
							<th scope="col">III</th>
							<th scope="col">IV</th>
							<th scope="col">V</th>
							<th scope="col">VI</th>
							<th scope="col">VII</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Ionian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
						<tr>
							<th scope="row">Dorian</th>
							<td>C</td>
							<td>Dm</td>
							<td>Em</td>
							<td>F</td>
							<td>G</td>
							<td>Am</td>
							<td>Bdim</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Chart;
