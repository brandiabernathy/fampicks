
<template>
	<div class="season-container">
		<div v-for="(week, i, index) in weeks" :id="'week'+index" :key="index" :ref="'week'+index">
			<p class="season-week">Week of <span class="season-week-date">{{ i }}</span></p>
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
import $ from 'jquery';
import * as picks from '@/picks.js';
import * as newpicks from '@/newpicks.js';

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
			new_picks: '',
			weeks: [],
			games: [],
			annie: [],
			carolyn: [],
			rudy: [],
			jenny: [],
			blake: [],
			abernathy: [],
			position: '',
		};
	},
	created() {
		this.picks = picks.default;
		console.log("this.picks", this.picks)
		this.new_picks = newpicks.default;
		console.log("this.new_picks", this.new_picks);
		axios
			.get('http://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard?limit=1000&dates=20200901-20201231&groups=8')
			.then(res => {
				console.log('res', res);
				this.weeks = res.data.events
				.filter(game => game.status.type.detail != 'Postponed')
				.sort((a, b) => a.date < b.date)
				.map(game => ({
					id: game.id,
					start_time: dayjs(game.date).utc(true).format('h:mma'),
					date: dayjs(game.date).utc(true).format('MM/DD'),
					status: game.status,
					home: {
						team: game.competitions[0].competitors[0].team.location,
						score: game.competitions[0].competitors[0].score,
					},
					away: {
						team: game.competitions[0].competitors[1].team.location,
						score: game.competitions[0].competitors[1].score,
					}
				}))
				.reduce((acc, item) => {
					if (!acc[item.date]) {
						acc[item.date] = [];
					}
					acc[item.date].push(item);
					return acc;
				}, {});

				console.log('this.weeks', this.weeks);


				let now = dayjs().format('MM/DD');
				// console.log('now', now);

				// for(let f = 0; f < Object.keys(this.weeks).length; f++) {

				// }

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
						this.current_week = i;
					}

					this.weeks[w].picks = [];
					this.weeks[w].picks.push(this.annie[i]);
					this.weeks[w].picks.push(this.carolyn[i]);
					this.weeks[w].picks.push(this.rudy[i]);
					this.weeks[w].picks.push(this.jenny[i]);
					this.weeks[w].picks.push(this.blake[i]);
					this.weeks[w].picks.push(this.abernathy[i]);

					// this.weeks[w].new_picks = {};

				}
				// console.log('this.curre')
				this.current_week = 0;
			let current = '#week'+this.current_week;
			// let current2 = this.$refs['#week-'+this.current_week];
			// console.log('this.current2', this.current2);
			// let current = ('#week-3');
			// console.log('this.$refs', this.$refs);
			console.log('current week', this.current_week);
			// this.$nextTick(() => {
			// 	console.log('this.$refs.scrollTop', this.$refs[current][0].scrollHeight);
			// });
				$(document).ready(function () {
					console.log('$(current).offset().top', $(current).offset().top);
					console.log('$(current).height()', $(current).height())
					// console.log('$current position', $(current).position.top);
					// console.log('current', current);
					// $('html, body').animate({scrollTop: this.$refs[current][0].offsetTop - 200} ,800);
					$('html, body').delay(800).animate({
						scrollTop: $(current).offset().top
					}, 1000);
				});
			// }
			});
		this.annie[0] = ['Annie (John)', 'Florida', 'Kentucky', 'Mississippi State*', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee', 6, 6];
		this.carolyn[0] = ['Carolyn', 'Florida', 'Auburn', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'South Carolina', 4, 4];
		this.rudy[0] = ['Rudy', 'Florida', 'Kentucky', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'Tennessee', 4, 4];
		this.jenny[0] = ['Jenny', 'Ole Miss', 'Auburn', 'LSU', 'Arkansas*', 'Missouri', 'Texas A&M', 'South Carolina', 2, 2];
		this.blake[0] = ['Blake', 'Florida', 'Kentucky*', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'South Carolina', 4, 4];
		this.abernathy[0] = ['Brandi/Ocean', 'Ole Miss*', 'Auburn', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'Tennessee', 5, 5];

		this.annie[1] = ['Annie (John)', 'Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Georgia', 'Arkansas', 'LSU', 6, 12];
		this.carolyn[1] = ['Carolyn', 'Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Arkansas*', 'LSU', 7, 11];
		this.rudy[1] = ['Rudy', 'Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Arkansas*', 'LSU', 6, 10];
		this.jenny[1] = ['Jenny', 'Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Mississippi State', 'Vanderbilt*', 4, 6];
		this.blake[1] = ['Blake', 'Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Auburn', 'Mississippi State', 'LSU', 4, 8];
		this.abernathy[1] = ['Brandi/Ocean', 'Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn*', 'Mississippi State', 'LSU', 5, 10];

		this.annie[2] = ['Annie (John)', 'Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky', 3, 15];
		this.carolyn[2] = ['Carolyn', 'Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky', 4, 15];
		this.rudy[2] = ['Rudy', 'Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Mississippi State', 3, 13];
		this.jenny[2] = ['Jenny', 'Texas A&M*', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Ole Miss', 'Kentucky', 5, 11];
		this.blake[2] = ['Blake', '', 'South Carolina', 'LSU', 'Tennessee*', 'Auburn', 'Alabama', 'Kentucky', 4, 12];
		this.abernathy[2] = ['Brandi/Ocean', 'Florida', 'Vanderbilt*', 'LSU', 'Georgia', 'Auburn', 'Alabama', 'Kentucky', 4, 14];

		this.annie[3] = ['Annie (John)', 'South Carolina*', 'Tennessee', 'Ole Miss', 'Texas A&M', 'Georgia', 3, 18];
		this.carolyn[3] = ['Carolyn', 'Auburn', 'Kentucky', 'Arkansas*', 'Mississippi State', 'Alabama', 4, 19];
		this.rudy[3] = ['Rudy', 'South Carolina*', 'Tennessee', 'Arkansas', 'Texas A&M', 'Alabama', 5, 18];
		this.jenny[3] = ['Jenny', 'South Carolina', 'Tennessee', 'Arkansas*', 'Mississippi State', 'Alabama', 4, 15];
		this.blake[3] = ['Blake', 'Auburn', 'Tennessee', 'Ole Miss', 'Mississippi State*', 'Georgia', 0, 12];
		this.abernathy[3] = ['Brandi/Ocean', 'Auburn', 'Tennessee', 'Arkansas*', 'Texas A&M', 'Georgia', 3, 17];

		this.annie[4] = ['Annie (John)', 'Ole Miss*', 'Alabama', 'Kentucky', 'South Carolina', 1, 19];
		this.carolyn[4] = ['Carolyn', 'Ole Miss', 'Alabama', 'Kentucky', 'South Carolina*', 1, 20];
		this.rudy[4] = ['Rudy', 'Ole Miss*', 'Alabama', 'Kentucky', 'South Carolina', 1, 19];
		this.jenny[4] = ['Jenny', 'Ole Miss*', 'Tennessee', 'Missouri', 'LSU', 2, 17];
		this.blake[4] = ['Blake', '', '', '', '', 0 , 12];
		this.abernathy[4] = ['Brandi/Ocean', 'Auburn', 'Alabama', 'Missouri*', 'South Carolina', 4, 21];

		this.annie[5] = ['Annie (John)', 'Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Florida', 5, 24];
		this.carolyn[5] = ['Carolyn', 'Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Arkansas*', 'Florida', 3, 23];
		this.rudy[5] = ['Rudy', 'Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Arkansas*', 'Missouri', 3, 22];
		this.jenny[5] = ['Jenny', 'Kentucky', 'Auburn*', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Florida', 5, 22];
		this.blake[5] = ['Blake', 'Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri*', 4, 16];
		this.abernathy[5] = ['Brandi/Ocean', 'Georgia', 'Auburn*', 'Ole Miss', 'Alabama', 'Texas A&M', 'Missouri', 6, 27];

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

		this.annie[8] = ['Annie (John)', 'Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina*', 4, 34];
		this.carolyn[8] = ['Carolyn', 'Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 31];
		this.rudy[8] = ['Rudy', 'Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina*', 4, 32];
		this.jenny[8] = ['Jenny', 'Vanderbilt', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'South Carolina', 3, 32];
		this.blake[8] = ['Blake', 'Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 23];
		this.abernathy[8] = ['Brandi/Ocean', 'Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 39];
	},
	// updated() {
	// 	let current = 'week'+this.current_week;
	// 		this.position = this.$refs[current][0].scrollHeight
	// 			- this.$refs[current][0].scrollTop
	// 			- this.$refs[current][0].clientHeight;

	// 			console.log('this.position', this.position);
	// 		// let current = '#week-'+this.current_week;
	// 		// console.log('$(current).offset()', $(current).offset())
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
	  width: calc(100% - 20px);
	  background: #fff;
	  border: 1px solid rgba(219, 219, 219, .6);
	  box-shadow: 0 0 5px 3px rgba(116, 116, 116, 0.06);
	  margin: 0 10px 30px;
  }

  th {
	padding:12px;
	background-color: rgba(199, 199, 199, 0.6);
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