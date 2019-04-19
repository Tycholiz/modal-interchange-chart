import React, { Component } from 'react';
import '../styles/Chart.css';

class Chart extends Component {
	render() {
		const { currentKey, currentNotation } = this.props;
		return (
			<div className="chartWrapper">
				<table>
					{/* <thead>
						<tr>
							<th scope="col" class="cell cell-whole">Mode</th>
							<th scope="col" class="cell cell-whole">I</th>
							<th scope="col" class="cell cell-whole">III</th>
							<th scope="col" class="cell">II</th>
							<th scope="col" class="cell cell-whole">IV</th>
							<th scope="col" class="cell cell-whole">V</th>
							<th scope="col" class="cell cell-whole">VI</th>
							<th scope="col" class="cell">VII</th>
						</tr>
					</thead> */}
					<tbody>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
							<td class="chord cell cell-whole">C</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
						</tr>
						<tr>
							<th scope="row" class="mode-instance cell cell-whole">Ionian</th>
							<td class="chord cell cell-whole">C</td>
							<td class="chord cell cell-whole">Dm</td>
							<td class="chord cell cell-half">Em</td>
							<td class="chord cell cell-whole">F</td>
							<td class="chord cell cell-whole">G</td>
							<td class="chord cell cell-whole">Am</td>
							<td class="chord cell cell-half">Bdim</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Chart;
