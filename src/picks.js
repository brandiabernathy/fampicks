const picks = {
	0: {
		0: {
			picks: ['Florida', 'Kentucky', 'Mississippi State', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee'],
			upset: 'Mississippi State',
		},
		1: {
			picks: ['Florida', 'Auburn', 'LSU', 'Arkansas', 'Alabama', 'Texas A&M', 'South Carolina'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Kentucky', 'LSU', 'Arkansas', 'Alabama', 'Texas A&M', 'Tennessee'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Ole Miss', 'Auburn', 'LSU', 'Arkansas', 'Missouri', 'Texas A&M', 'South Carolina'],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Florida', 'Kentucky', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'South Carolina'],
			upset: 'Kentucky',
		},
		5: {
			picks: ['Ole Miss', 'Auburn', 'LSU', 'Georgia', 'Alabama', 'Texas A&M', 'Tennessee'],
			upset: 'Ole Miss',
		}
	},
	1: {
		0: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Arkansas', 'LSU'],
			upset: 'Kentucky',
		},
		1: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Arkansas', 'LSU'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Arkansas', 'LSU'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Georgia', 'Mississippi State', 'Vanderbilt'],
			upset: 'Vanderbilt',
		},
		4: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Kentucky', 'Auburn', 'Mississippi State', 'LSU'],
			upset: 'Kentucky',
		},
		5: {
			picks: ['Florida', 'Tennessee', 'Alabama', 'Ole Miss', 'Auburn', 'Mississippi State', 'LSU'],
			upset: 'Auburn',
		}
	},
	2: {
		0: {
			picks: ['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Kentucky'],
			upset: 'Arkansas',
		},
		1: {
			picks: ['Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Kentucky'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'South Carolina', 'LSU', 'Georgia', 'Arkansas', 'Alabama', 'Mississippi State'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Texas A&M', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Ole Miss', 'Kentucky'],
			upset: 'Texas A&M',
		},
		4: {
			picks: ['', 'South Carolina', 'LSU', 'Tennessee', 'Auburn', 'Alabama', 'Kentucky'],
			upset: 'Tennessee',
		},
		5: {
			picks: ['Florida', 'Vanderbilt', 'LSU', 'Georgia', 'Auburn', 'Alabama', 'Kentucky'],
			upset: 'Vanderbilt',
		}
	},
	3: {
		0: {
			picks: ['South Carolina', 'Tennessee', 'Ole Miss', 'Texas A&M', 'Georgia'],
			upset: 'South Carolina',
		},
		1: {
			picks: ['Auburn', 'Kentucky', 'Arkansas', 'Mississippi State', 'Alabama'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['South Carolina', 'Tennessee', 'Arkansas', 'Texas A&M', 'Alabama'],
			upset: 'South Carolina',
		},
		3: {
			picks: ['South Carolina', 'Tennessee', 'Arkansas', 'Mississippi State', 'Alabama'],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Auburn', 'Tennessee', 'Ole Miss', 'Mississippi State', 'Georgia'],
			upset: 'Mississippi State',
		},
		5: {
			picks: ['Auburn', 'Tennessee', 'Arkansas', 'Texas A&M', 'Georgia'],
			upset: 'Arkansas',
		}
	},
	4: {
		0: {
			picks: ['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina'],
			upset: 'Ole Miss',
		},
		1: {
			picks: ['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina'],
			upset: 'South Carolina',
		},
		2: {
			picks: 	['Ole Miss', 'Alabama', 'Kentucky', 'South Carolina'],
			upset: 'Ole Miss',
		},
		3: {
			picks: 	['Ole Miss', 'Tennessee', 'Missouri', 'LSU'],
			upset: 'Ole Miss',
		},
		4: {
			picks: ['', '', '', ''],
		},
		5: {
			picks: ['Auburn', 'Alabama', 'Missouri', 'South Carolina'],
			upset: 'Missouri',
		}
	},
	5: {
		0: {
			picks: ['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Texas A&M', 'Florida'],
		},
		1: {
			picks: 	['Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Arkansas', 'Florida'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Georgia', 'LSU', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Kentucky', 'Auburn', 'Vanderbilt', 'Alabama', 'Texas A&M', 'Florida'],
			upset: 'Auburn',
		},
		4: {
			picks: ['Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Arkansas', 'Missouri'],
			upset: 'Missouri',
		},
		5: {
			picks: ['Georgia', 'Auburn', 'Ole Miss', 'Alabama', 'Texas A&M', 'Missouri'],
			upset: 'Auburn',
		}
	},
	6: {
		0: {
			picks: ['Florida', 'Vanderbilt', 'Texas A&M', 'Arkansas'],
			upset: 'Florida',
		},
		1: {
			picks: ['Georgia', 'Vanderbilt', 'Texas A&M', 'Arkansas'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Florida', 'Mississippi State', 'South Carolina', 'Arkansas'],
			upset: 'Arkansas',
		},
		4: {
			picks: ['', '', '', ''],
		},
		5: {
			picks: ['Georgia', 'Mississippi State', 'Texas A&M', 'Arkansas'],
			upset: 'Arkansas',
		}
	},
	7: {
		0: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss'],
			upset: 'Arkansas',
		},
		1: {
			picks: ['Vanderbilt', 'Arkansas', 'South Carolina'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss'],
			upset: 'Arkansas',
		},
		3: {
			picks: ['Kentucky', 'Florida', 'Ole Miss'],
		},
		4: {
			picks: ['Kentucky', 'Arkansas', 'Ole Miss'],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Kentucky', 'Florida', 'Ole Miss'],
		}
	},
	8: {
		0: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina'],
			upset: 'South Carolina',
		},
		1: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina'],
			upset: 'South Carolina',
		},
		3: {
			picks: ['Vanderbilt', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'South Carolina'],
			upset: 'Arkansas',
		},
		4: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Florida', 'Arkansas', 'Alabama', 'Auburn', 'Georgia', 'Missouri'],
			upset: 'Arkansas',
		}
	},
	9: {
		0: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'Texas A&M', 'Georgia'],
		},
		1: {
			picks: ['Florida', 'Vanderbilt', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia'],
			upset: 'Mississippi State',
		},
		2: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia'],
			upset: 'Mississippi State',
		},
		3: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'Texas A&M', 'South Carolina'],
			upset: 'South Carolina',
		},
		4: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Ole Miss', 'LSU', 'Georgia'],
			upset: 'LSU',
		},
		5: {
			picks: ['Florida', 'Missouri', 'Alabama', 'Mississippi State', 'Texas A&M', 'Georgia'],
			upset: 'Mississippi State',
		}
	},
	10: {
		0: {
			picks: ['Texas A&M', 'Arkansas', 'Florida', 'Kentucky', 'Alabama'],
			upset: 'Arkansas',
		},
		1: {
			picks: ['Texas A&M', 'Arkansas', 'Florida', 'South Carolina', 'Alabama'],
			upset: 'South Carolina',
		},
		2: {
			picks: ['Texas A&M', 'Arkansas', 'Florida', 'South Carolina', 'Alabama'],
			upset: 'South Carolina',
		},
		3: {
			picks: ['Auburn', 'Missouri', 'Tennessee', 'Kentucky', 'LSU'],
			upset: 'Auburn',
		},
		4: {
			picks: ['Texas A&M', 'Arkansas', 'Florida', 'Kentucky', 'Alabama'],
			upset: 'Arkansas',
		},
		5: {
			picks: ['Auburn', 'Missouri', 'Florida', 'Kentucky', 'Alabama'],
			upset: 'Auburn',
		}
	},
	11: {
		0: {
			picks: ['Alabama', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State'],
			upset: 'Mississippi State',
		},
		1: {
			picks: ['Arkansas', 'Georgia', 'Tennessee', 'Florida', 'Auburn'],
			upset: 'Arkansas',
		},
		2: {
			picks: ['Arkansas', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State'],
			upset: 'Mississippi State',
		},
		3: {
			picks: ['Arkansas', 'Missouri', 'Vanderbilt', 'Florida', 'Mississippi State'],
			upset: 'Mississippi State',
		},
		4: {
			picks: ['Alabama', 'Georgia', 'Tennessee', 'Florida', 'Mississippi State'],
		},
		5: {
			picks: ['Alabama', 'Missouri', 'Tennessee', 'Florida', 'Auburn'],
			upset: 'Missouri',
		}
	},
	12: {
		0: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama'],
			upset: 'LSU',
		},
		1: {
			picks: ['Texas A&M', 'Ole Miss', 'Missouri', 'Alabama'],
		},
		2: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama'],
			upset: 'LSU',
		},
		3: {
			picks: ['Tennessee', 'LSU', 'Mississippi State', 'Alabama'],
			upset: 'Mississippi State',
		},
		4: {
			picks: ['Texas A&M', 'Ole Miss', 'Missouri', 'Alabama'],
		},
		5: {
			picks: ['Texas A&M', 'LSU', 'Missouri', 'Alabama'],
			upset: 'LSU',
		}
	}
}

export default picks;