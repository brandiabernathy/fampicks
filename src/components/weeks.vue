
<template>
	<div class="season-container">
		<div v-for="(week, i) in weeks" :id="'week'+i" :key="i">
			<p class="season-week">Week of <span class="season-week-date">{{ week[0].date }}</span></p>
			<div class="season-weekly-container">
				<div class="game-container" v-for="game in week" :key="game.id">
					<!-- {{ game }} -->
					<div class="team-container">
						<div class="team">
							<img :src="require('../assets/' + game.away_team + '.png')">
							<span class="name" :class="{'win-team' : game.home_score < game.away_score}">
								{{ game.away_team }}</span>
							<span class="score" v-if="game.status.type.description != 'Scheduled'" :class="{'win-score' : game.home_score < game.away_score}">{{ game.away_score }}</span>
						</div>
						<div class="team">
							<img :src="require('../assets/' + game.home_team + '.png')">
							<span class="name" :class="{'win-team' : game.home_score > game.away_score}">
								{{ game.home_team }}</span>
							<span class="score" v-if="game.status.type.description != 'Scheduled'" :class="{'win-score' : game.home_score > game.away_score}">{{ game.home_score }}</span>
						</div>
					</div>
					<div class="date">
						<p v-if="game.status.type.detail == 'Final'" class="game-state">Final</p>
						<p v-else-if="game.status.type.shortDetail == 'TBD' && game.status.type.description == 'Scheduled'" class="game-state"> TBD </p>
						<p v-else-if="game.status.type.description == 'In Progress'" class="game-state"> Q{{ game.status.period }} <br> {{ game.status.displayClock }} </p>
						<p v-else class="game-state"> {{ game.start_time }} </p>
					</div>
				</div>
			</div>
			<div v-if="week.picks" class="fam-picks">
				<table>
					<tr class="table-header">
						<th :colspan="week.picks[2].picks.length - 1" class="table-header">
							Weekly Picks
						</th>
						<th>Points</th>
						<th>Total</th>
					</tr>
					<tr v-for="(picks, j) in week.picks" :key="j">
						<td>{{ j }}</td>
						<td v-for="(pick, n) in picks.picks" :key="n" :class="{'upset' : pick == picks.upset}">
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
import $ from 'jquery';
import * as picks from '@/picks.js';

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
			picks: '',
			weeks: [],
			games: [],
			week_total: [],
			total_points: {
				0: 0,
				1: 0,
				2: 0,
				3: 0,
				4: 0,
				5: 0,
			},
			// week_total: {
			// 	annie: '',
			// 	carolyn: '',
			// 	rudy: '',
			// 	jenny: '',
			// 	blake: '',
			// 	brandi: '',
			// },
			// total_points: {
			// 	annie: '',
			// 	carolyn: '',
			// 	rudy: '',
			// 	jenny: '',
			// 	blake: '',
			// 	brandi: '',
			// }
		};
	},
	created() {
		this.picks = picks.default;
		axios
			.get('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=1000&dates=20200901-20201220&groups=8')
			.then(response => {
				console.log('response', response);
				this.games = response.data.events
				.filter(game => game.status.type.detail != 'Postponed')
				.sort((a, b) => a.date < b.date ? -1 : 1)
				.map(game => ({
					id: game.id,
					date: dayjs(game.date).utc(true).format('MM/DD'),
					start_time: dayjs(game.date).utc(true).format('h:mma'),
					status: game.status,
					home_team: game.competitions[0].competitors[0].team.location,
					home_score: game.competitions[0].competitors[0].score,
					away_team: game.competitions[0].competitors[1].team.location,
					away_score: game.competitions[0].competitors[1].score
				}));

				 this.weeks = Object.values(
					this.games.reduce((acc, item) => {
						(acc[item.date] = acc[item.date] || []).push(item);
						return acc;
					}, {})
				);

				let now = dayjs().format('MM/DD');

				for(let i = 0; i < Object.keys(this.weeks).length; i++) {
					// -- when in season, figure out the current week --
					//
					// let date = this.weeks[i][0].date;
					// if(dayjs(now).isSameOrBefore(dayjs(date)) && !this.current_week) {
					// 	this.current_week = i;
					// }

					if(this.weeks[i]) {
						this.weeks[i].picks = {};
						this.weeks[i].picks = this.picks[i];
					}

					for(let g = 0; g < this.weeks[i].length; g++) {
						// find winning team
						if(this.weeks[i][g].away_score > this.weeks[i][g].home_score) {
							this.weeks[i][g].winner = this.weeks[i][g].away_team;
						}
						else {
							this.weeks[i][g].winner = this.weeks[i][g].home_team;
						}
						for (var p in this.picks[i]) {
							for (let n = 0; n < this.picks[i][p].picks.length; n++) {
								// did user's pick match the winner of that game?
								if(this.picks[i][p].picks[n] == this.weeks[i][g].winner) {
									console.log('this.weeks[i][g].winner', this.weeks[i][g].winner);
								}
							}
						}
					}
				}
				// -- when in season, scroll to week --
				//
				// if($(window).width() >= 1100){
				// 	let current = 'week'+this.current_week;
				// 	$(document).ready(function () {
				// 		let this_week = document.getElementById(current);
				// 		$('html, body').delay(500).animate({
				// 			scrollTop: $(this_week).offset().top - 100
				// 		}, 2000);
				// 	});
				// }

				// if($(window).width() <= 500){
				// 	let current = 'week'+this.current_week;
				// 	$(document).ready(function () {
				// 		let this_week = document.getElementById(current);
				// 		$('html, body').delay(500).animate({
				// 			scrollTop: $(this_week).offset().top
				// 		}, 2000)
				// 	});
				// }
			});
	},
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

	#app {
		height: 1px;
	}
	
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

  .season-week-date {
	font-size: 15px;
	font-weight: 700;
	letter-spacing: .5px;
	margin-left: 2px;
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
    float: left;
    width: 80%;
  }

  .team {
	border-right: 1px solid rgb(224, 224, 224);
    padding: 8px 10px;
    font-weight: 600;
  }

  .team img {
	display: inline-block;
	vertical-align: middle;
    margin-right: 15px;
	width: 25px;
	height: 25px;
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

  .fam-picks {
	overflow-x: auto;
  }

  table {
	  width: calc(100% - 20px);
	  background: #fff;
	  border: 1px solid rgba(219, 219, 219, .6);
	  box-shadow: 0 0 5px 3px rgba(116, 116, 116, 0.06);
	  margin: 0 10px 30px;
	  overflow: auto;
  }

  th {
	padding:12px;
	background-color: rgba(199, 199, 199, 0.6);
  }


  td {
	padding: 10px 7px;
	text-align: center;
	white-space: nowrap;
  }

  td:first-child {
	  font-weight: 500;
	  text-align: left;
	  border-right: 1px solid rgba(190, 190, 190, 0.6);
	  padding-left: 20px;
  }
  th:not(:first-child) {
	  text-align: center;
  }

  .upset {
	  font-weight: 500;
	  color:rgb(166,12,49);
  }

  td+td {
	  border-left: 1px dotted rgba(219, 219, 219, .6);
  }

  tr+tr {
	border-top: 1px solid rgba(219, 219, 219, .6);
  }

  @media all and (max-width: 1100px) {

	.team {
		padding: 8px 10px;
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

		.fam-picks {
			width: calc(100% - 20px);
			margin-left: 10px;
		}

		table {
			margin-left: 0;
		}
	}

	@media all and (max-width: 500px) {
		.season-container {
			top: 0;
		}

		.season-week {
			margin-bottom: 20px;
		}

		.game-container {
			padding: 15px 0 15px 15px;
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

		.fam-picks {
			width: calc(100% - 30px);
			margin-left: 15px;
		}
	}
</style>