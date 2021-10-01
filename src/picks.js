const picks = {
	0: {
		0: {
			picks: ['Florida', 'Kentucky', 'Mississippi State', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee', 6, 6],
			upset: 'Mississippi State',
		},
		1: {
			picks: ['Florida', 'Auburn', 'LSU', 'Arkansas', 'Alabama', 'Texas A&M', 'South Carolina', 4, 4],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Kentucky', 'LSU', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee', 4, 4],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Ole Miss', 'Auburn', 'LSU', 'Arkansas', 'Missouri', 'Texas A&M', 'South Carolina', 2, 2],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Florida', 'Kentucky', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'South Carolina', 4, 4],
			upset: 'Kentucky',
		},
		5: {
			picks: ['Ole Miss', 'Auburn', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'Tennessee', 5, 5],
			upset: 'Ole Miss',
		}
	},
	1: {
		0: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Arkansas', 'LSU', 6, 12],
			upset: 'Kentucky',
		},
		1: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Arkansas', 'LSU', 7, 11],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Arkansas', 'LSU', 6, 10],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Mississippi State', 'Vanderbilt', 4, 6],
			upset: 'Vanderbilt',
		},
		4: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Mississippi State', 'LSU', 4, 8],
			upset: 'Kentucky',
		},
		5: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Mississippi State', 'LSU', 5, 10],
			upset: 'Auburn',
		}
	},
	2: {
		0: {
			picks: ['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Kentucky', 3, 15],
			upset: 'Arkansas',
		},
		1: {
			picks: ['Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Kentucky', 4, 15],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Mississippi State', 3, 13],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Texas A&M', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Ole Miss', 'Kentucky', 5, 11],
			upset: 'Texas A&M',
		},
		4: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Mississippi State', 'LSU', 4, 12],
			upset: 'Kentucky',
		},
		5: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Mississippi State', 'LSU', 4, 14],
			upset: 'Auburn',
		}
	},
	3: {
		0: {
			picks: ['South Carolina', 'Tennessee', 'Ole Miss', 'Texas A&M', 'Georgia', 3, 18],
			upset: 'South Carolina',
		},
		1: {
			picks: ['Auburn', 'Kentucky', 'Arkansas', 'Mississippi State', 'Alabama', 4, 19],
			upset: 'Arkansas',
		},
		2: {
			picks: ['South Carolina', 'Tennessee', 'Arkansas', 'Texas A&M', 'Alabama', 5, 18],
			upset: 'South Carolina',
		},
		3: {
			picks: ['South Carolina', 'Tennessee', 'Arkansas', 'Mississippi State', 'Alabama', 4, 15],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Auburn', 'Tennessee', 'Ole Miss', 'Mississippi State', 'Georgia', 0, 12],
			upset: 'Mississippi State',
		},
		5: {
			picks: ['Auburn', 'Tennessee', 'Arkansas', 'Texas A&M', 'Georgia', 3, 17],
			upset: 'Arkansas',
		}
	},
	4: {
		0: {
			picks: ['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina', 1, 19],
			upset: 'Ole Miss',
		},
		1: {
			picks: ['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina*', 1, 20],
			upset: 'South Carolina',
		},
		2: {
			picks: 	['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina', 1, 19],
			upset: 'Ole Miss',
		},
		3: {
			picks: 	['Ole Miss', 'Tennessee', 'Missouri', 'LSU', 2, 17],
			upset: 'Ole Miss',
		},
		4: {
			picks: ['', '', '', '', 0, 12],
		},
		5: {
			picks: ['Auburn', 'Alabama', 'Missouri', 'South Carolina', 4, 21],
			upset: 'Missouri',
		}
	},
	5: {
		0: {
			picks: ['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Florida', 5, 24],
		},
		1: {
			picks: 	['Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Arkansas', 'Florida', 3, 23],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri', 3, 22],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Florida', 5, 22],
			upset: 'Auburn',
		},
		4: {
			picks: ['Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri', 4, 16],
			upset: 'Missouri',
		},
		5: {
			picks: ['Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Texas A&M', 'Missouri', 6, 27],
			upset: 'Auburn',
		}
	},
	6: {
		0: {
			picks: ['Florida', 'Vanderbilt', 'Texas A&M', 'Arkansas', 4, 28],
			upset: 'Florida',
		},
		1: {
			picks: ['Georgia', 'Vanderbilt', 'Texas A&M', 'Arkansas', 3, 26],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas', 4, 26],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Florida', 'Mississippi State', 'South Carolina', 'Arkansas', 4, 26],
			upset: 'Arkansas',
		},
		4: {
			picks: ['', '', '', '', 0 , 16],
		},
		5: {
			picks: ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas', 4, 31],
			upset: 'Arkansas',
		}
	},
	7: {
		0: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss', 2, 30],
			upset: 'Arkansas',
		},
		1: {
			picks: ['Vanderbilt', 'Arkansas', 'South Carolina', 0, 26],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss', 2, 28],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Kentucky', 'Florida', 'Ole Miss', 3, 29],
		},
		4: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss', 2, 18],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Kentucky', 'Florida', 'Ole Miss', 3, 34],
		}
	},
	8: {
		0: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina', 4, 34],
			upset: 'South Carolina',
		},
		1: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 31],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina', 4, 32],
			upset: 'South Carolina',
		},
		3: {
			picks: ['Vanderbilt', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina', 3, 32],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 23],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri', 5, 39],
			upset: 'Arkansas',
		}
	},
	9: {
		0: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'Texas A&M', 'Georgia', '6', '40'],
		},
		1: {
			picks: ['Florida', 'Vanderbilt', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia', '4', '35'],
			upset: 'Mississippi State',
		},
		2: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia', '5', '37'],
			upset: 'Mississippi State',
		},
		3: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'Texas A&M', 'South Carolina', '5', '37'],
			upset: 'South Carolina',
		},
		4: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'LSU', 'Georgia', '5', '28'],
			upset: 'LSU',
		},
		5: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia', '5', '44'],
			upset: 'Mississippi State',
		}
	},
	10: {
		0: {
			picks: ['Texas A&M', 'Arkansas¹', 'Florida', 'Kentucky', 'Alabama', '5', '45'],
		},
		1: {
			picks: ['Texas A&M', 'Arkansas¹', 'Florida', 'South Carolina', 'Alabama', '4', '39'],
			upset: 'South Carolina',
		},
		2: {
			picks: ['Texas A&M', 'Arkansas¹', 'Florida', 'South Carolina', 'Alabama', '4', '41'],
			upset: 'South Carolina',
		},
		3: {
			picks: ['Auburn', 'Missouri', 'Tennessee', 'Kentucky', 'LSU', '2', '39'],
			upset: 'Auburn',
		},
		4: {
			picks: ['Texas A&M', 'Arkansas', 'Florida', 'Kentucky', 'Alabama', '5', '33'],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Auburn', 'Missouri', 'Florida', 'Kentucky', 'Alabama', '4', '48'],
			upset: 'Auburn',
		}
	},
	11: {
		0: {
			picks: ['Alabama', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State', '3', '48'],
			upset: 'Mississippi State',
		},
		1: {
			picks: ['Arkansas', 'Georgia', 'Tennessee', 'Florida', 'Auburn', '3', '42'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Arkansas', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State', '2', '43'],
			upset: 'Mississippi State',
		},
		3: {
			picks: ['Arkansas', 'Missouri', 'Vanderbilt', 'Florida', 'Mississippi State', '0', '39'],
			upset: 'Mississippi State',
		},
		4: {
			picks: ['Alabama', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State', '3', '36'],
		},
		5: {
			picks: ['Alabama', 'Missouri', 'Tennessee', 'Florida', 'Auburn', '3', '51'],
			upset: 'Missouri',
		}
	},
	12: {
		0: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama', '4', '52'],
			upset: 'LSU',
		},
		1: {
			picks: ['Texas A&M', 'Ole Miss', 'Missouri', 'Alabama', '2', '44'],
		},
		2: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama', '4', '47'],
			upset: 'LSU',
		},
		3: {
			picks: ['Tennessee', 'LSU', 'Mississippi State', 'Alabama', '4', '43'],
			upset: 'Mississippi State',
		},
		4: {
			picks: ['Texas A&M', 'Ole Miss', 'Missouri', 'Alabama', '2', '38'],
		},
		5: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama', '4', '55'],
			upset: 'LSU',
		}
	}
}

export default picks;