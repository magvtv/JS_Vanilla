/*
    representing juja as JJA
    representing eastleigh as ESL
    representing madaraka as MDK
    representing ruaraka as RRK
*/

const demandJJA = 600,
	demandMDK = 400,
	stockESL = 700,
	stockRRK = 800,
	costESLtoMDK = 5,
	costESLtoJJA = 10,
	costRRKtoMDK = 15,
	costRRKtoJJA = 4;
let xESLtoMDK,
	xESLtoJJA,
	xRRKtoJJA,
	xRRKtoMDK = 0;

const objectiveFunction =
	costESLtoJJA * xESLtoJJA + costESLtoMDK * xESLtoMDK + costRRKtoJJA * xRRKtoJJA + costRRKtoMDK * xRRKtoMDK;

const constraint1 = xESLtoMDK + xRRKtoMDK >= demandMDK,
	constraint2 = xESLtoJJA + xRRKtoJJA >= demandJJA,
	constraint3 = xESLtoJJA + xESLtoMDK <= stockESL,
	constraint4 = xRRKtoJJA + xRRKtoMDK <= stockRRK;

const solveProblem = () => {
	if (constraint1 && constraint2 && constraint3 && constraint4) {
		console.log(`Minimum cost: ${objectiveFunction}`);
		console.log(
			`Optimal Cost Solution: 
            \nTransport ${xESLtoJJA} hoodies from Eastleigh to Juja
            \nTransport ${xESLtoMDK} hoodies from Eastleigh to Madaraka
            \nTransport ${xRRKtoJJA} hoodies from Ruaraka to Juja
            \nTransport ${xRRKtoMDK} hoodies from Ruaraka to Madaraka`
		);
	} else {
		console.log('No feasible solution to this one!');
	}
};

solveProblem();
