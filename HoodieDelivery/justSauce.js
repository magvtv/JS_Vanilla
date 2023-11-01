import { solve, lessEq } from './node_modules/yalps';

const lpModel = {
	// direction: "maximise" as const,
	objective: 'profit',
	constraints: {
		stands: { max: 300 },
		staff: { max: 110 },
		theatre: lessEq(400),
	},
	variables: {
		snacks: {
			stands: 30,
			staff: 10,
			profit: 1200,
			theatre: 25,
		},
		dresser: {
			stands: 12,
			staff: 10,
			profit: 1600,
			theatre: 50,
		},
		integers: ['stands', 'staff'],
	},
};

let solution = solve(lpModel);
