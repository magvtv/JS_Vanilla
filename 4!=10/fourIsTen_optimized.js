class Expression {
    constructor() {
        this.operators = [
            '+',
            '-',
            '*',
            '/'
        ]
    }

    evaluate(expr) {
        try {
            const result = Function(`return ${expr}`)()
            return Math.abs(result - 10) < 0.0000001
        } catch (e) {
            return false
        }
    }

    format(expr) {
        return expr.replace(/\//g, '÷')
    }
}

class DigitRotator {
    constructor(digits) {
        this.digits = [...digits]
    }

    rotate() {
        this.digits.push(this.digits.shift())
        return [...this.digits]
    }   


    getCurrentFirst() {
        return this.digits[0]
    }

    getCurrentRemaining() {
        return this.digits.slice(1)
    }
}

class DivideAndConquerSolver extends Expression {
    constructor(number) {
        super();
        this.digits = String(number).split('').map(Number);
        this.solutions = new Set();
        
        // an optimized target map - each entry contains [target, operation]
        // where operation is: 'add', 'minus', 'multiply', 'divide'
        this.targetMap = {
            1: [
                [9, 'add'],
                [11, 'minus']
            ],
            2: [
                [8, 'add'],
                [12, 'minus'],
                [5, 'multiply'],
                [20, 'divide']
            ],
            3: [
                [7, 'add'],
                [13, 'minus'],
                [30, 'divide']
            ],
            4: [
                [6, 'add'],
                [14, 'minus'],
                [40, 'divide']
            ],
            5: [
                [5, 'add'],
                [15, 'minus'], 
                [2, 'multiply'],
                [50, 'divide']
            ],
            6: [
                [4, 'add'],
                [16, 'minus'],
                [60, 'divide']
            ],
            7: [
                [3, 'add'],
                [17, 'minus'],
                [70, 'divide']
            ],
            8: [
                [2, 'add'],
                [18, 'minus'],
                [80, 'divide']
            ],
            9: [
                [1, 'add'],
                [19, 'minus'], 
                [90, 'divide']
            ]
        };
    }

    findThreeDigitCombinations(digits, target) {
        const solutions = new Set();
        
        const matchesTarget = (result) => Math.abs(result - target) < 0.0000001;

        for (let i = 0; i < this.operators.length; i++) {
            for (let j = 0; j < this.operators.length; j++) {
                // Try without parentheses
                const expr = `${digits[0]}${this.operators[i]}${digits[1]}${this.operators[j]}${digits[2]}`;
                try {
                    if (matchesTarget(eval(expr))) {
                        solutions.add(this.format(expr));
                    }
                } catch (e) {
                    continue;
                }
            }
        }
        
        return Array.from(solutions);
    }

    formatSolution(firstDigit, threedigitSolution, operation) {
        // Create solution with exactly one pair of parentheses
        switch(operation) {
            case 'add':
                return `${firstDigit} + ${threedigitSolution}`;
            case 'minus':
                return `${threedigitSolution} - ${firstDigit}`;
            case 'multiply':
                return `${firstDigit} × ${threedigitSolution}`;
            case 'divide':
                return `${threedigitSolution} ÷ ${firstDigit}`;
            default:
                return null;
        }
    }

    solve() {
        if (!this.validate()) {
            return "Input must be a 4-digit number";
        }

        const rotator = new DigitRotator(this.digits);

        for (let i = 0; i < 4; i++) {
            const firstDigit = rotator.getCurrentFirst();
            const remainingDigits = rotator.getCurrentRemaining();
            const targetOps = this.targetMap[firstDigit] || [];

            for (const [target, operation] of targetOps) {
                const combinations = this.findThreeDigitCombinations(remainingDigits, target);
                combinations.forEach(combo => {
                    this.solutions.add(this.formatSolution(firstDigit, combo, operation));
                });
            }

            rotator.rotate();
        }

        return Array.from(this.solutions)
            .filter(Boolean) // Remove any null solutions
            .map(solution => solution.replace(/\//g, '÷').replace(/\*/g, '×'));
    }

    validate() {
        return this.digits.length === 4;
    }
}

let numInput = 7331
const solver = new DivideAndConquerSolver(numInput)
console.log(`Solutions for ${numInput}:`)
console.log(solver.solve());