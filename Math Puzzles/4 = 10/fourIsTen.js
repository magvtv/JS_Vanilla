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


class DivideAndConquerSolver extends Expression {
    constructor(number) {
        super();
        this.digits = String(number).split('').map(Number)
        this.solutions = new Set()

        this.targetMap = {
            1: [9, 11, 10],
            2: [5, 8, 12, 20],
            3: [7, 13, 30],
            4: [6, 14, 40],
            5: [2, 5, 15, 50],
            6: [4, 16, 60],
            7: [3, 17, 70],
            8: [2, 18, 80],
            9: [1, 19, 90]
        }
    }

    findThreeDigitsCombinations(digits, target) {
        const solutions = new Set()
        const matchesTarget = (result) => Math.abs(result - target) < 0.0000001
        
        for (let i = 0; i < this.operators.length; i++) {
            for (let j = 0; j < this.operators.length; j++) {
                const expr1 = `${digits[0]}${this.operators[i]}${digits[1]}${this.operators[j]}${digits[2]}`
                if (matchesTarget(eval(expr1))) {
                    solutions.add(this.format(expr1))
                }

                // attempt all possible parentheses operations
                const patterns = [
                    `(${digits[0]}${this.operators[i]}${digits[1]})${this.operators[j]}${digits[2]}`,
                    `${digits[0]}${this.operators[i]}(${digits[1]}${this.operators[j]}${digits[2]})`
                ]

                for (const pattern of patterns) {
                    try {
                        if (matchesTarget(eval(pattern))) {
                            solutions.add(this.format(pattern))
                        }
                    } catch (e) {
                        continue
                    }
                }
            }
        }

        return Array.from(solutions)
    }

    combineWithFirstDigit(firstDigit, threeDigitSolution, operation) {
        switch (operation) {
            case 'add':
                return `${firstDigit} + (${threeDigitSolution})`
            case 'minus':
                return `${firstDigit} - (${threeDigitSolution})`
            case 'multiply':
                return `${firstDigit} × (${threeDigitSolution})`
            case 'divide':
                return `(${threeDigitSolution}) ÷ ${firstDigit}`
            default:
                return null
        }
    }

    solve() {
        if (!this.validate()) {
            return "Input must be a 4-digit number"
        }

        const rotator = new DigitRotator(this.digits)

        for (let i = 0; i < 4; i++) {
            const firstDigit = rotator.getCurrentFirst()
            const remainingDigits = rotator.getCurrentRemaining()
            const targets = this.targetMap[firstDigit] || []
            
            for (const target of targets) {
                const solutions = this.findThreeDigitsCombinations(remainingDigits, target)

                if (target + firstDigit === 10) {
                    solutions.forEach(sol => this.solutions.add(this.combineWithFirstDigit(firstDigit, sol, 'add')))
                }
                if (target - firstDigit === 10) {
                    solutions.forEach(sol => this.solutions.add(this.combineWithFirstDigit(firstDigit, sol, 'minus')))
                }
                if (target * firstDigit === 10) {
                    solutions.forEach(sol => this.solutions.add(this.combineWithFirstDigit(firstDigit, sol, 'multiply')))
                }
                if (target / firstDigit === 10) {
                    solutions.forEach(sol => this.solutions.add(this.combineWithFirstDigit(firstDigit, sol, 'divide')))
                }
            }
            rotator.rotate()
        }
        return Array.from(this.solutions)
    }

    validate() {
        return this.digits.length === 4
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



let numInput = 9978
const solver = new DivideAndConquerSolver(numInput)
console.log(`Solutions for ${numInput}:`)
console.log(solver.solve());