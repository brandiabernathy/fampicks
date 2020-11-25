const new_picks = {
	'09/26': {
		annie: [
			['Florida', 'Kentucky', 'Mississippi State*', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee'],
		],
		carolyn: [
			['Florida', 'Auburn', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'South Carolina'],
		],
		rudy: [
			['Florida', 'Kentucky', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'Tennessee'],
		],
		jenny: [
			['Ole Miss', 'Auburn', 'LSU', 'Arkansas*', 'Missouri', 'Texas A&M', 'South Carolina'],
		],
		blake: [
			['Florida', 'Kentucky*', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'South Carolina'],
		],
		abernathy: [
			['Ole Miss*', 'Auburn', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'Tennessee'],
		]
	},
	'10/03' : {
		annie: [
			['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Georgia', 'Arkansas', 'LSU'],
		],
		carolyn: [
			['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Arkansas*', 'LSU'],
		],
		rudy: [
			['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Arkansas*', 'LSU'],
		],
		jenny: [
			['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Mississippi State', 'Vanderbilt*'],
		],
		blake: [
			['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Auburn', 'Mississippi State', 'LSU'],
		],
		abernathy: [
			['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn*', 'Mississippi State', 'LSU'],
		]
	},
	'10/10': {
		annie: [
			['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky'],
		],
		carolyn: [
			['Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky'],
		],
		rudy: [
			['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Mississippi State'],
		],
		jenny: [
			['Texas A&M*', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Ole Miss', 'Kentucky'],
		],
		blake: [
			['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Auburn', 'Mississippi State', 'LSU'],
		],
		abernathy: [
			['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn*', 'Mississippi State', 'LSU'],
		]
	},
	// annie: [
	// 	['Florida', 'Kentucky', 'Mississippi State*', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Georgia', 'Arkansas', 'LSU'],
	// 	['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky'],
	// 	['South Carolina*', 'Tennessee', 'Ole Miss', 'Texas A&M', 'Georgia'],
	// 	['Ole Miss*', 'Alabama', 'Kentucky', 'South Carolina'],
	// 	['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Florida'],
	// 	['Florida*', 'Vanderbilt', 'Texas A&M', 'Arkansas'],
	// 	['Kentucky', 'Arkansas*', 'Ole Miss'],
	// 	['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina*'],
	// ],
	// carolyn: [
	// 	['Florida', 'Auburn', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'South Carolina'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Arkansas*', 'LSU'],
	// 	['Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Kentucky'],
	// 	['Auburn', 'Kentucky', 'Arkansas*', 'Mississippi State', 'Alabama'],
	// 	['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina*'],
	// 	['Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Arkansas*', 'Florida'],
	// 	['Georgia', 'Vanderbilt', 'Texas A&M', 'Arkansas*'],
	// 	['Vanderbilt', 'Arkansas*', 'South Carolina'],
	// 	['Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
	// ],
	// rudy: [
	// 	['Florida', 'Kentucky', 'LSU', 'Arkansas*', 'Alabama', 'Texas A&M', 'Tennessee'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Arkansas*', 'LSU'],
	// 	['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas*', 'Alabama', 'Mississippi State'],
	// 	['South Carolina*', 'Tennessee', 'Arkansas', 'Texas A&M', 'Alabama'],
	// 	['Ole Miss*', 'Alabama', 'Kentucky', 'South Carolina'],
	// 	['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Arkansas*', 'Missouri'],
	// 	['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*'],
	// 	['Kentucky', 'Arkansas*', 'Ole Miss'],
	// 	['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina*'],
	// ],
	// jenny: [
	// 	['Ole Miss', 'Auburn', 'LSU', 'Arkansas*', 'Missouri', 'Texas A&M', 'South Carolina'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Mississippi State', 'Vanderbilt*'],
	// 	['Texas A&M*', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Ole Miss', 'Kentucky'],
	// 	['South Carolina', 'Tennessee', 'Arkansas*', 'Mississippi State', 'Alabama'],
	// 	['Ole Miss*', 'Tennessee', 'Missouri', 'LSU'],
	// 	['Kentucky', 'Auburn*', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Florida'],
	// 	['Florida', 'Mississippi State', 'South Carolina', 'Arkansas*'],
	// 	['Kentucky', 'Florida', 'Ole Miss'],
	// 	['Vanderbilt', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'South Carolina'],
	// ],
	// blake: [
	// 	['Florida', 'Kentucky*', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'South Carolina'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Kentucky*', 'Auburn', 'Mississippi State', 'LSU'],
	// 	['', 'South Carolina', 'LSU', 'Tennessee*', 'Auburn', 'Alabama', 'Kentucky'],
	// 	['Auburn', 'Tennessee', 'Ole Miss', 'Mississippi State*', 'Georgia'],
	// 	['', '', '', ''],
	// 	['Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri*'],
	// 	['', '', '', ''],
	// 	['Kentucky', 'Arkansas*', 'Ole Miss'],
	// 	['Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
	// ],
	// abernathy: [
	// 	['Ole Miss*', 'Auburn', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'Tennessee'],
	// 	['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn*', 'Mississippi State', 'LSU'],
	// 	['Florida', 'Vanderbilt*', 'LSU', 'Georgia', 'Auburn', 'Alabama', 'Kentucky'],
	// 	['Auburn', 'Tennessee', 'Arkansas*', 'Texas A&M', 'Georgia'],
	// 	['Auburn', 'Alabama', 'Missouri*', 'South Carolina'],
	// 	['Georgia', 'Auburn*', 'Ole Miss', 'Alabama', 'Texas A&M', 'Missouri'],
	// 	['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas*'],
	// 	['Kentucky', 'Florida', 'Ole Miss'],
	// 	['Florida', 'Arkansas*', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
	// ]
}

export default new_picks