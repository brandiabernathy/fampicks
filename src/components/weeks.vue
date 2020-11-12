/* eslint-disable */

<template>
	<div class="season-container">
		<div v-for="(week, i) in weeks" :key="i">
			<p class="season-week">Week {{ i }} of 16</p>
			<div class="season-weekly-container">
				<div class="game-container" v-for="game in week" :key="game.id">
					<div class="team-container">
						<div class="team">
							<img :src="require('../assets/' + game.away_team + '.png')">
							<span class="name" :class="{'win-team' : game.home_points < game.away_points}">{{ game.away_team }}</span>
							<span class="score" :class="{'win-score' : game.home_points < game.away_points}">{{ game.away_points }}</span>
						</div>
						<div class="team">
							<img :src="require('../assets/' + game.home_team + '.png')">
							<span class="name" :class="{'win-team' : game.home_points > game.away_points}">{{ game.home_team }}</span>
							<span class="score" :class="{'win-score' : game.home_points > game.away_points}">{{ game.home_points }}</span>
						</div>
					</div>
					<div class="date">
						<p class="game-state">Final</p>
						<p>{{ dayjs(game.start_date).format('MM/D') }}</p>
					</div>
				</div>
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

			console.log('this.weeks', this.weeks);
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
	/* RESET */


	html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6, button, div, img {
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
      box-shadow: 0 .3px 5px .9px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      position: relative;
      z-index: -1;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      overflow: auto;
  }

  .season-week {
	background-color: rgba(166,12,49,1);
	color: white;
	font-weight: 500;
	padding: 15px 0;
	padding-left: 20px;
	clear: left;
	border-bottom: 1.5px solid rgb(219, 219, 219);
	margin-bottom: 20px;
  }

  .season-weekly-container {
	border-bottom: 1.5px solid rgb(219, 219, 219);
	padding: 0 5px;
  }

  .season-weekly-container:after {
    content: "";
    display: table;
    clear: both;
  }

  .game-container {
      font-family: 'Montserrat', sans-serif;
      color: gray;
      padding: 10px;
      margin: 0 10px;
      width: calc(33.33% - 20px);
      float: left;
      position: relative;
      background-color: white;
      margin-bottom: 20px;
  }

  .team {
    padding: 8px 10px;
    border-right: 1px solid rgb(224, 224, 224);
    font-weight: 600;
  }

  .team img {
    float: left;
    position: relative;
    bottom: 2px;
    margin-right: 15px;
    height: 20px;
  }

  .win-team {
    color: rgb(166,12,49);
  }

  .team-rank {
    margin-right: 5px;
  }

  .name {
  
  }

  .score {
    float: right;
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

  .team-container {
    float: left;
    width: 80%;
  }

  .date {
    text-align: center;
    width: 22.5%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .game-state {
    color: black;
    padding-bottom: 4px;
  }
</style>