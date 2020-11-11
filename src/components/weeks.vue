<template>
	<div class="container">
		<div class="week" v-for="(week, i) in weeks" :key="i">
			<div class="heading">Week {{ i }} of 16</div>
			<div class="game" v-for="games in week" :key="games.id">
				<div class="teams">
					<span :class="{'bold' : games.home_points > games.away_points}">{{ games.home_team }} {{ games.home_points }}</span><br>
					<span :class="{'bold' : games.home_points < games.away_points}">{{ games.away_team }} {{ games.away_points }}</span>
				</div>
				<div class="date">
					{{ dayjs(games.start_date).format('ddd, MM/D') }} <br>
					<span v-if="games.home_points">Final</span>
					<span v-else>{{ dayjs(games.start_date).format('h:mma') }}</span>
				</div>
			</div>

			<!-- <div class="fam">
				<table>
					<tr v-for="(picks, j) in week.picks" :key="j">
						<td v-for="(pick, n) in picks" :key="n">
							{{ pick }}
						</td>
						<td> week pts </td>
						<td> total pts </td>
					</tr>
				</table>
			</div> -->
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
	name: 'Week',
	data() {
		return {
			dayjs: dayjs,
			weeks: [],
			games: [],
			annie: [],
			carolyn: [],
			rudy: [],
			jenny: [],
			blake: [],
			abernathy: [],
		};
	},
	created() {
		axios
		.get('https://api.collegefootballdata.com/games?year=2020&seasonType=regular&conference=SEC')
		.then(res => {
			this.weeks = res.data.reduce((acc, item) => {
				if (!acc[item.week]) {
					acc[item.week] = [];
				}
				acc[item.week].push(item);
				this.games.push(item);
				return acc;
			}, {});
			// for(let i = 0; i < Object.keys(this.weeks).length; i++) {
			// 	this.weeks[i + 4].picks = [];
			// 	this.weeks[i + 4].picks.push(this.annie[i]);
			// 	this.weeks[i + 4].picks.push(this.carolyn[i]);
			// 	this.weeks[i + 4].picks.push(this.rudy[i]);
			// 	this.weeks[i + 4].picks.push(this.jenny[i]);
			// 	this.weeks[i + 4].picks.push(this.blake[i]);
			// 	this.weeks[i + 4].picks.push(this.abernathy[i]);
			// }
		});
		// this.annie[0] = ['Kentucky', 'Florida', 'Mississippi State*', 'Arkansas', 'Alabama', 'Tennessee', 'Texas A&M'];
		// this.carolyn[0] = ['Auburn', 'Florida', 'LSU', 'Arkansas*', 'Alabama', 'South Carolina', 'Texas A&M'];
		// this.rudy[0] = ['Kentucky', 'Florida', 'LSU', 'Arkansas*', 'Alabama', 'Tennessee', 'Texas A&M'];
		// this.jenny[0] = ['Auburn', 'Ole Miss', 'LSU', 'Arkansas*', 'Missouri', 'South Carolina', 'Texas A&M'];
		// this.blake[0] = ['Kentucky*', 'Florida', 'LSU', 'Georgia', 'Alabama', 'South Carolina', 'Texas A&M'];
		// this.abernathy[0] = ['Auburn', 'Ole Miss*', 'LSU', 'Georgia', 'Alabama', 'Tennessee', 'Texas A&M'];

		// this.annie[1] = ['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Arkansas', 'Georgia', 'LSU'];
		// this.carolyn[1] = ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Arkansas*', 'Auburn', 'LSU'];
		// this.rudy[1] = ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Arkansas*', 'Auburn', 'LSU'];
		// this.jenny[1] = ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Mississippi State', 'Georgia', 'Vanderbilt*'];
		// this.blake[1] = ['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Mississippi State', 'Auburn', 'LSU'];
		// this.abernathy[1] = ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Mississippi State', 'Auburn*', 'LSU'];

		// this.annie[2] = ['Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt'];
		// this.carolyn[2] = ['Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'South Carolina'];
		// this.rudy[2] = ['Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Mississippi State', 'LSU', 'Vanderbilt'];
		// this.jenny[2] = ['Ole Miss', 'Auburn', 'Texas A&M*', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt'];
		// this.blake[2] = ['Alabama', 'Auburn', '', 'Tennessee*', 'Kentucky', 'LSU', 'South Carolina'];
		// this.abernathy[2] = ['Alabama', 'Auburn', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt*'];

		// this.annie[3] = ['Georgia', 'Ole Miss', 'South Carolina*', 'Tennessee', 'Texas A&M'];
		// this.carolyn[3] = ['Alabama', 'Arkansas*', 'Auburn', 'Kentucky', 'Mississippi State'];
		// this.rudy[3] = ['Alabama', 'Arkansas', 'South Carolina*', 'Tennessee', 'Texas A&M'];
		// this.jenny[3] = ['Alabama', 'Arkansas*', 'South Carolina', 'Tennessee', 'Mississippi State'];
		// this.blake[3] = ['Georgia', 'Ole Miss', 'Auburn', 'Tennessee', 'Mississippi State*'];
		// this.abernathy[3] = ['Georgia', 'Arkansas*', 'Auburn', 'Tennessee', 'Texas A&M'];

		// this.annie[4] = ['Alabama', 'Ole Miss*', 'Kentucky', 'South Carolina'];
		// this.carolyn[4] = ['Alabama', 'Ole Miss', 'Kentucky', 'South Carolina*'];
		// this.rudy[4] = ['Alabama', 'Ole Miss*', 'Kentucky', 'South Carolina'];
		// this.jenny[4] = ['Tennessee', 'Ole Miss*', 'Missouri', 'LSU'];
		// this.blake[4] = ['', '', '', ''];
		// this.abernathy[4] = ['Alabama', 'Auburn', 'Missouri*', 'South Carolina'];

		// this.annie[5] = ['LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Georgia', 'Florida'];
		// this.carolyn[5] = ['Auburn', 'Vanderbilt', 'Alabama', 'Arkansas*', 'Kentucky', 'Florida'];
		// this.rudy[5] = ['LSU', 'Ole Miss', 'Alabama', 'Arkansas*', 'Georgia', 'Missouri'];
		// this.jenny[5] = ['Auburn*', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Kentucky', 'Florida'];
		// this.blake[5] = ['Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Georgia', 'Missouri*'];
		// this.abernathy[5] = ['Auburn*', 'Ole Miss', 'Alabama', 'Texas A&M', 'Georiga', 'Missouri'];

		// this.annie[6] = ['Florida*', 'Vanderbilt', 'Texas A&M', 'Arkansas'];
		// this.carolyn[6] = ['Georgia', 'Vanderbilt', 'Texas A&M', 'Arkansas*'];
		// this.rudy[6] = ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*'];
		// this.jenny[6] = ['Florida', 'Mississippi State', 'South Carolina', 'Arkansas*'];
		// this.blake[6] = ['', '', '', ''];
		// this.abernathy[6] = ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*'];
	},
	methods: {
	}
  }
</script>

<style>
/* .container {
	background-color: #f6f6f6;
}
.bold {
	font-weight: bold;
}
.week {
	margin-bottom: 20px;
	clear: both;
	display: flex;
	flex-wrap: wrap;
}
.heading {
	flex: 100%;
}
.game {
	background-color: #fff;
	border: 1px solid #d4d4d4;
	padding: 15px;
	display: flex;
	width: calc(33.33% - 4px);
	margin: 2px;
	align-items: center;
}
.teams {
	width: 70%;
}
.date {
	width: 30%;
	text-align: center;
}
.fam {
	flex: 100%;
}
table {
	width: 100%;
	border: 1px solid #d4d4d4;
	background-color: #fff;
}
td {
	padding: 7px;
}
td+td {
	border-left: 1px dotted #d4d4d4;
}
 tr+tr {
	border-top: 1px solid #d4d4d4;
 } */
</style>