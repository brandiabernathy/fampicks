
<template>
	<div class="season-container">
		<div v-for="(week, i, index) in weeks" :key="i">
			<p class="season-week">Week <span>{{ index + 4 }}</span> of <span class="season-week-total">16</span></p>
			<div class="season-weekly-container">
				<div class="game-container" v-for="game in week" :key="game.id">
					<div class="team-container">
						<div class="team">
							<img :src="require('../assets/' + game.away.team + '.png')">
							<span class="name" :class="{'win-team' : game.home.score < game.away.score}">
								{{ game.away.team }}</span>
							<span class="score" v-if="game.away.score != 0" :class="{'win-score' : game.home.score < game.away.score}">{{ game.away.score }}</span>
						</div>
						<div class="team">
							<img :src="require('../assets/' + game.home.team + '.png')">
							<span class="name" :class="{'win-team' : game.home.score > game.away.score}">
								{{ game.home.team }}</span>
							<span class="score" v-if="game.home.score != 0" :class="{'win-score' : game.home.score > game.away.score}">{{ game.home.score }}</span>
						</div>
					</div>
					<div class="date">
						<p>{{ game.date }}</p>
						<p v-if="game.status.type.detail == 'Final'" class="game-state">Final</p>
						<p v-else class="game-state"> {{ game.start_time }} </p>
					</div>
				</div>
			</div>
			<div class="fam-picks">
				<table>
					<tr class="table-header">
						<th colspan="10" class="table-header">
							Weekly Picks
						</th>
						<!-- <th>Week Pts</th>
						<th>Total Pts</th> -->
					</tr>
					<tr v-for="(picks, j) in week.picks" :key="j">
						<td v-for="(pick, n) in picks" :key="n">
							{{ pick }}
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import dayjs from 'dayjs';

var utc = require('dayjs/plugin/utc')
dayjs.extend(utc)
var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrBefore)

export default {
	name: 'Week',
	data() {
		return {
			dayjs: dayjs,
			current_week: '',
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
			.get('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=1000&dates=20200901-20201231&groups=8')
			.then(res => {
				console.log('res', res.data.events);
				this.weeks = res.data.events
				.filter(game => game.status.type.detail != 'Postponed')
				.sort((a, b) => a.date < b.date ? -1 : 1)
				.map(game => ({
					id: game.id,
					start_time: dayjs(game.date).utc(true).format('h:mma'),
					date: dayjs(game.date).utc(true).format('MM/DD'),
					status: game.status,
					home: {
						team: game.competitions[0].competitors[0].team.location,
						score: game.competitions[0].competitors[0].score,
						rank: game.competitions[0].competitors[0].curatedRank.current,
					},
					away: {
						team: game.competitions[0].competitors[1].team.location,
						score: game.competitions[0].competitors[1].score,
						rank: game.competitions[0].competitors[1].curatedRank.current,
					}
				}))
				.reduce((acc, item) => {
					if (!acc[item.date]) {
						acc[item.date] = [];
					}
					acc[item.date].push(item);
					return acc;
				}, {});

				// this.get_current_week();

				let now = dayjs().format('MM/DD');
				console.log('now', now);

				for(let i = 0; i < Object.keys(this.weeks).length; i++) {
					let w;
					switch (i) {
						case 0:
							w = '09/26';
							break;
						case 1:
							w = '10/03'
							break;
						case 2:
							w = '10/10'
							break;
						case 3:
							w = '10/17'
							break;
						case 4:
							w = '10/24'
							break;
						case 5:
							w = '10/31'
							break;
						case 6:
							w = '11/07'
							break;
						case 7:
							w = '11/14'
							break;
						case 8:
							w = '11/21'
							break;
						case 9:
							w = '11/28'
							break;
						case 10:
							w = '12/04'
							break;
						case 11:
							w = '12/11'
							break;
					}
					if(dayjs(now).isSameOrBefore(dayjs(w)) && !this.current_week) {
						this.current_week = w;
					}
					this.weeks[w].picks = [];
					this.weeks[w].picks.push(this.annie[i]);
					this.weeks[w].picks.push(this.carolyn[i]);
					this.weeks[w].picks.push(this.rudy[i]);
					this.weeks[w].picks.push(this.jenny[i]);
					this.weeks[w].picks.push(this.blake[i]);
					this.weeks[w].picks.push(this.abernathy[i]);
				}
			});
		this.annie[0] = ['Annie (John)', 'Kentucky', 'Florida', 'Mississippi State*', 'Arkansas', 'Alabama', 'Tennessee', 'Texas A&M', 6, 6];
		this.carolyn[0] = ['Carolyn', 'Auburn', 'Florida', 'LSU', 'Arkansas*', 'Alabama', 'South Carolina', 'Texas A&M', 4, 4];
		this.rudy[0] = ['Rudy', 'Kentucky', 'Florida', 'LSU', 'Arkansas*', 'Alabama', 'Tennessee', 'Texas A&M', 4, 4];
		this.jenny[0] = ['Jenny', 'Auburn', 'Ole Miss', 'LSU', 'Arkansas*', 'Missouri', 'South Carolina', 'Texas A&M', 2, 2];
		this.blake[0] = ['Blake', 'Kentucky*', 'Florida', 'LSU', 'Georgia', 'Alabama', 'South Carolina', 'Texas A&M', 4, 4];
		this.abernathy[0] = ['Brandi/Ocean', 'Auburn', 'Ole Miss*', 'LSU', 'Georgia', 'Alabama', 'Tennessee', 'Texas A&M', 5, 5];

		this.annie[1] = ['Annie (John)', 'Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Arkansas', 'Georgia', 'LSU', 6, 12];
		this.carolyn[1] = ['Carolyn', 'Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Arkansas*', 'Auburn', 'LSU', 7, 11];
		this.rudy[1] = ['Rudy', 'Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Arkansas*', 'Auburn', 'LSU', 6, 10];
		this.jenny[1] = ['Jenny', 'Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Mississippi State', 'Georgia', 'Vanderbilt*', 4, 6];
		this.blake[1] = ['Blake', 'Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Mississippi State', 'Auburn', 'LSU', 4, 8];
		this.abernathy[1] = ['Brandi/Ocean', 'Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Mississippi State', 'Auburn*', 'LSU', 5, 10];

		this.annie[2] = ['Annie (John)', 'Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt', 3, 15];
		this.carolyn[2] = ['Carolyn', 'Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'South Carolina', 4, 15];
		this.rudy[2] = ['Rudy', 'Alabama', 'Arkansas*', 'Florida', 'Georgia', 'Mississippi State', 'LSU', 'Vanderbilt', 3, 13];
		this.jenny[2] = ['Jenny', 'Ole Miss', 'Auburn', 'Texas A&M*', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt', 5, 11];
		this.blake[2] = ['Blake', 'Alabama', 'Auburn', '', 'Tennessee*', 'Kentucky', 'LSU', 'South Carolina', 4, 12];
		this.abernathy[2] = ['Brandi/Ocean', 'Alabama', 'Auburn', 'Florida', 'Georgia', 'Kentucky', 'LSU', 'Vanderbilt*', 4, 14];

		this.annie[3] = ['Annie (John)', 'Georgia', 'Ole Miss', 'South Carolina*', 'Tennessee', 'Texas A&M', 3, 18];
		this.carolyn[3] = ['Carolyn', 'Alabama', 'Arkansas*', 'Auburn', 'Kentucky', 'Mississippi State', 4, 19];
		this.rudy[3] = ['Rudy', 'Alabama', 'Arkansas', 'South Carolina*', 'Tennessee', 'Texas A&M', 5, 18];
		this.jenny[3] = ['Jenny', 'Alabama', 'Arkansas*', 'South Carolina', 'Tennessee', 'Mississippi State', 4, 15];
		this.blake[3] = ['Blake', 'Georgia', 'Ole Miss', 'Auburn', 'Tennessee', 'Mississippi State*', 0, 12];
		this.abernathy[3] = ['Brandi/Ocean', 'Georgia', 'Arkansas*', 'Auburn', 'Tennessee', 'Texas A&M', 3, 17];

		this.annie[4] = ['Annie (John)', 'Alabama', 'Ole Miss*', 'Kentucky', 'South Carolina', 1, 19];
		this.carolyn[4] = ['Carolyn', 'Alabama', 'Ole Miss', 'Kentucky', 'South Carolina*', 1, 20];
		this.rudy[4] = ['Rudy', 'Alabama', 'Ole Miss*', 'Kentucky', 'South Carolina', 1, 19];
		this.jenny[4] = ['Jenny', 'Tennessee', 'Ole Miss*', 'Missouri', 'LSU', 2, 17];
		this.blake[4] = ['Blake', '', '', '', '', 0 , 12];
		this.abernathy[4] = ['Brandi/Ocean', 'Alabama', 'Auburn', 'Missouri*', 'South Carolina', 4, 21];

		this.annie[5] = ['Annie (John)', 'LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Georgia', 'Florida', 5, 24];
		this.carolyn[5] = ['Carolyn', 'Auburn', 'Vanderbilt', 'Alabama', 'Arkansas*', 'Kentucky', 'Florida', 3, 23];
		this.rudy[5] = ['Rudy', 'LSU', 'Ole Miss', 'Alabama', 'Arkansas*', 'Georgia', 'Missouri', 3, 22];
		this.jenny[5] = ['Jenny', 'Auburn*', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Kentucky', 'Florida', 5, 22];
		this.blake[5] = ['Blake', 'Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Georgia', 'Missouri*', 4, 16];
		this.abernathy[5] = ['Brandi/Ocean', 'Auburn*', 'Ole Miss', 'Alabama', 'Texas A&M', 'Georiga', 'Missouri', 6, 27];

		this.annie[6] = ['Annie (John)', 'Florida*', 'Vanderbilt', 'Texas A&M', 'Arkansas', 4, 28];
		this.carolyn[6] = ['Carolyn', 'Georgia', 'Vanderbilt', 'Texas A&M', 'Arkansas*', 3, 26];
		this.rudy[6] = ['Rudy', 'Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*', 4, 26];
		this.jenny[6] = ['Jenny', 'Florida', 'Mississippi State', 'South Carolina', 'Arkansas*', 4, 26];
		this.blake[6] = ['Blake', '', '', '', '', 0, 16];
		this.abernathy[6] = ['Brandi/Ocean', 'Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*', 4, 31];

		this.annie[7] = ['Annie (John)', 'Kentucky', 'Arkansas*', 'Ole Miss', 2, 30];
		this.carolyn[7] = ['Carolyn', 'Vanderbilt', 'Arkansas*', 'South Carolina', 0, 26];
		this.rudy[7] = ['Rudy', 'Kentucky', 'Arkansas*', 'Ole Miss', 2, 28];
		this.jenny[7] = ['Jenny', 'Kentucky', 'Florida', 'Ole Miss', 3, 29];
		this.blake[7] = ['Blake', 'Kentucky', 'Arkansas*', 'Ole Miss', 2, 18];
		this.abernathy[7] = ['Brandi/Ocean', 'Kentucky', 'Florida', 'Ole Miss', 3, 34];
	},
	// methods: {
	// 	get_current_week() {
	// 		var now = dayjs().format('MM/DD');
	// 		console.log('now', now);
	// 		console.log('hello', )
	// 		for(let i = 0; i < Object.keys(this.weeks).length; i++) {
	// 			console.log('this weeks', this.weeks[i]);
	// 		}
	// 	}
	// }
}
</script>

<style>
	/* RESET */


	html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, h1, h2, h3, h4, h5, h6, button, div, img {
		margin: 0;
		padding: 0;
		display: block;
		text-decoration: none;
	}

	a {
		text-decoration: none;
	}

	.clear-fix {
		content: "";
		display: table;
		clear: both;
	}
  
  
	/* END RESET */
	
	body {
		background-color: rgb(241, 243, 245);
		font-family: sans-serif;
	}

	.season-container {
      background-color: rgb(241, 244, 245);
      font-size: 14px;
	  font-family: 'Montserrat', sans-serif;
      box-shadow: 0 .3px 5px .9px rgba(0, 0, 0, 0.1);
      max-width: 1050px;
      position: relative;
      z-index: -1;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      overflow: auto;
  }

  .season-week {
	background-image: linear-gradient(to right, rgb(166,12,49), rgb(161, 12, 47), rgb(133, 13, 41), rgb(104, 9, 31));
	color: white;
	font-weight: 500;
	padding: 15px 0 15px 20px;
	margin-bottom: 10px;
  }

  .season-week span {
	font-weight: 700;
  }

  .season-week-total {
	margin-left: 1px;
  }

  .season-weekly-container {
	padding: 0 5px;
  }

  .season-weekly-container:after {
    content: "";
    display: table;
    clear: both;
  }

  .game-container {
	border: 1px solid rgba(219, 219, 219, .6);
	color: gray;
	padding: 10px 0 10px 10px;
	margin: 0 5px 10px;
	width: calc(33.33% - 10px);
	float: left;
	position: relative;
	background-color: white;
	display: flex;
	align-items: center;;
  }

  .team-container {
	border-right: 1px solid rgb(224, 224, 224);
    float: left;
    width: 80%;
  }

  .team {
    padding: 8px 10px;
    font-weight: 600;
  }

  .team img {
	display: inline-block;
	vertical-align: middle;
    margin-right: 15px;
    width: 25px;
  }

  .team .name {
	display: inline-block;
	vertical-align: middle;
  }

  .win-team {
    color: rgb(166,12,49);
  }

  .rank {
    margin-right: 1px;
	color: gray;
	font-weight: 500;
  }

  .score {
    float: right;
	margin-top: 2px;
    padding-right: 10px;
    font-weight: bold;
  }

  .win-score {
    color: black;
  }

  .win-score::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent; 
    border-right:5px solid rgb(166,12,49);
    margin-left: 7px;
    margin-top: 5px;
  }

  .date {
    text-align: center;
    width: 22.5%;
  }

  .game-state {
    color: black;
  }

  table {
	  display: table;
	  width: calc(100% - 20px);
	  background: #fff;
	  border: 1px solid rgba(219, 219, 219, .6);
	  margin: 0 10px 30px;
  }

  th {
	padding:12px;
	background-color: rgb(226, 226, 226);
  }


  td {
	padding: 10px 7px;
	text-align: center;
  }

  td:first-child {
	  font-weight: 500;
	  text-align: left;
	  border-right: 1px solid rgba(190, 190, 190, 0.6);
	  padding-left: 20px;
  }

  td:last-child, td:nth-last-child(2) {
	width: 4%;
	font-weight: 500;
  }

  td:nth-last-child(2) {
	border-left: 1px solid rgba(190, 190, 190, 0.6);
	border-right: 1px solid rgba(190, 190, 190, 0.6);
  }

  td+td {
	  border-left: 1px dotted rgba(219, 219, 219, .6);
  }

  tr+tr {
	border-top: 1px solid rgba(219, 219, 219, .6);
  }

  @media all and (max-width: 1100px) {
	.season-container {
		top: 80px;
	}

	.team {
		padding: 8px 10px;
		border-right: 1px solid rgb(224, 224, 224);
		font-weight: 600;
	}

	.team img {
		display: inline;
		margin-right: 12px;
		height: 25px;
	}
  }

	@media all and (max-width: 970px) {
		.season-week {
			margin-bottom: 20px;
		}

		.game-container {
			padding: 10px;
			margin: 0 10px 20px;
			width: calc(50% - 20px);
		}

		table {
			width: calc(100% - 30px);
			margin: 0 15px 30px;
		}
	}

	@media all and (max-width: 700px) {
		.season-week {
			margin-bottom: 10px;
		}

		.game-container {
			padding: 10px;
			margin: 0 5px 10px;
			width: calc(50% - 10px);
		}

		.team {
			padding: 6px 8px;
			font-size: 12px;
		}

		.team img {
			display: inline;
			margin-right: 12px;
			height: 20px;
		}
	}

	@media all and (max-width: 580px) {
		.season-week {
			margin-bottom: 20px;
		}

		.game-container {
			padding: 15px;
			margin: 0 10px 20px;
			width: calc(100% - 20px);
		}

		.team {
			padding: 8px 10px;
			font-size: 14px;
		}

		.team img {
			height: 25px;
		}
	}
</style>