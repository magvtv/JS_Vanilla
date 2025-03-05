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
                [9, 'add'], // 9 + 1 = 10
                [11, 'minus'],  // 11 - 1 = 10
                [10, 'multiply'], // 1 × 10 = 10
            ],
            2: [
                [8, 'add'], // 2 + 8 = 10
                [12, 'minus'],  // 12 -2 = 10
                [5, 'multiply'],    // 5 x 2 = 10
                [20, 'divide']  // 20 / 2 = 10
            ],
            3: [
                [7, 'add'], // 7 + 3 = 10
                [13, 'minus'],  // 13 - 3 = 10
                [30, 'divide'], // 30 / 3 = 10
                [10/3, 'multiply']  // 10/3 x 3 = 10
            ],
            4: [
                [6, 'add'], // 6 + 4 = 10
                [14, 'minus'],  // 14 -4 = 10
                [40, 'divide'], // 40 / 4 = 10
                [5/2, 'mulitply']  //10/4 or 5/2 x 4 = 10
            ],
            5: [
                [5, 'add'], // 5 + 5 = 10
                [15, 'minus'],  // 15 - 5 = 10
                [2, 'multiply'],    // 2 x 5 = 10
                [50, 'divide']  // 50 / 5 = 10
            ],
            6: [
                [4, 'add'], // 4 + 6 = 10
                [16, 'minus'],  // 16 - 6 = 10
                [60, 'divide'], // 60 / 6 = 10
                [5/3, 'mulitply']   // 10/6 or 5/3 x 6 = 10
            ],
            7: [
                [3, 'add'], // 3 + 7 = 10
                [17, 'minus'],  // 17 - 7 = 10 
                [70, 'divide'], // 70 / 7 = 10
                [10/7, 'mulitply']  // 10/7 * 7 = 10
            ],
            8: [
                [2, 'add'], // 2 + 8 = 10
                [18, 'minus'],  // 18 - 8 = 10
                [80, 'divide'], // 80 / 8 = 10
                [5/4, 'multiply']   // 10/8 or 5/4 * 8 = 10
            ],
            9: [
                [1, 'add'], // 9 + 1 = 10
                [19, 'minus'],  // 19 - 9 = 10
                [90, 'divide'], // 90 / 9 = 10
                [10/9, 'mulitply']  // 10 / 9 x 9 = 10
            ]
        };
    }

    findThreeDigitCombinations(digits, target) {
        const solutions = new Set();
        const matchesTarget = (result) => Math.abs(result - target) < 0.0000001;

        for (let i = 0; i < this.operators.length; i++) {
            for (let j = 0; j < this.operators.length; j++) {
                // Try ((a op b) op c)
                const expr1 = `(${digits[0]}${this.operators[i]}${digits[1]})${this.operators[j]}${digits[2]}`;
                try {
                    if (matchesTarget(eval(expr1))) {
                        solutions.add(this.format(expr1));
                    }
                } catch (e) {
                    continue;
                }
                // Try (a op (b op c))
                const expr2 = `${digits[0]}${this.operators[i]}(${digits[1]}${this.operators[j]}${digits[2]})`;
                try {
                    if (matchesTarget(eval(expr2))) {
                        solutions.add(this.format(expr2));
                    }
                } catch (e) {
                    continue;
                }
            }
        }
        return Array.from(solutions);
    }

    formatSolution(firstDigit, threedigitSolution, operation) {
        switch (operation) {
            case 'add':
                return `${firstDigit} + (${threedigitSolution})`;
            case 'minus':
                return `(${threedigitSolution}) - ${firstDigit}`;
            case 'multiply':
                return `${firstDigit} × (${threedigitSolution})`;
            case 'divide':
                return `(${threedigitSolution}) ÷ ${firstDigit}`;
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

class SolutionAnalyzer {
    constructor() {
        this.stats = {
            operations: {
                add: 0,
                minus: 0,
                multiply: 0,
                divide: 0
            },
            digitPatterns: {
                hasZero: { success: 0, total: 0 },
                hasNine: { success: 0, total: 0 },
                hasDouble: { success: 0, total: 0 },
                sequential: { success: 0, total: 0 },
                allUnique: { success: 0, total: 0 }
            },
            firstDigitSuccess: {
                1: { success: 0, total: 0 },
                2: { success: 0, total: 0 },
                3: { success: 0, total: 0 },
                4: { success: 0, total: 0 },
                5: { success: 0, total: 0 },
                6: { success: 0, total: 0 },
                7: { success: 0, total: 0 },
                8: { success: 0, total: 0 },
                9: { success: 0, total: 0 }
            }
        };
    }

    analyzeNumber(number) {
        const digits = String(number).split('').map(Number);
        const solver = new DivideAndConquerSolver(number);
        const solutions = solver.solve();
        
        // Update pattern stats
        this.updatePatternStats(digits, solutions.length > 0);
        
        // Update operation stats
        this.updateOperationStats(solutions);
        
        // Update first digit stats
        this.updateFirstDigitStats(digits[0], solutions.length > 0);

        return {
            number,
            solutionsCount: solutions.length,
            solutions
        };
    }

    updatePatternStats(digits, hasSuccess) {
        // check for zeros
        if (digits.includes(0)) {
            this.stats.digitPatterns.hasZero.total++;
            if (hasSuccess) this.stats.digitPatterns.hasZero.success++;
        }

        // check for nines
        if (digits.includes(9)) {
            this.stats.digitPatterns.hasNine.total++;
            if (hasSuccess) this.stats.digitPatterns.hasNine.success++;
        }

        // check for double digit occurrence
        if (new Set(digits).size !== digits.length) {
            this.stats.digitPatterns.hasDouble.total++;
            if (hasSuccess) this.stats.digitPatterns.hasDouble.success++;
        }

        // check for sequential digits
        let isSequential = false;
        for (let i = 0; i < digits.length - 1; i++) {
            if (digits[i] + 1 === digits[i + 1]) {
                isSequential = true;
                break;
            }
        }
        if (isSequential) {
            this.stats.digitPatterns.sequential.total++;
            if (hasSuccess) this.stats.digitPatterns.sequential.success++;
        }

        // check for all unique digits
        if (new Set(digits).size === digits.length) {
            this.stats.digitPatterns.allUnique.total++;
            if (hasSuccess) this.stats.digitPatterns.allUnique.success++;
        }
    }

    updateOperationStats(solutions) {
        solutions.forEach(solution => {
            if (solution.includes('+')) this.stats.operations.add++;
            if (solution.includes('-')) this.stats.operations.minus++;
            if (solution.includes('×')) this.stats.operations.multiply++;
            if (solution.includes('÷')) this.stats.operations.divide++;
        });
    }

    updateFirstDigitStats(firstDigit, hasSuccess) {
        if (this.stats.firstDigitSuccess[firstDigit]) {
            this.stats.firstDigitSuccess[firstDigit].total++;
            if (hasSuccess) {
                this.stats.firstDigitSuccess[firstDigit].success++;
            }
        }
    }

    analyzeRange(start, end) {
        for (let num = start; num <= end; num++) {
            this.analyzeNumber(num);
        }
        return this.generateReport();
    }

    generateReport() {
        const report = {
            operationEffectiveness: {},
            patternSuccessRates: {},
            firstDigitSuccessRates: {},
            recommendations: []
        };

        // calculate operation effectiveness
        const totalOps = Object.values(this.stats.operations).reduce((a, b) => a + b, 0);
        for (const [op, count] of Object.entries(this.stats.operations)) {
            report.operationEffectiveness[op] = {
                count,
                percentage: ((count / totalOps) * 100).toFixed(2) + '%'
            };
        }

        // calculate pattern success rates
        for (const [pattern, stats] of Object.entries(this.stats.digitPatterns)) {
            if (stats.total > 0) {
                report.patternSuccessRates[pattern] = {
                    successRate: ((stats.success / stats.total) * 100).toFixed(2) + '%',
                    total: stats.total,
                    successful: stats.success
                };
            }
        }

        // calculate first digit success rates
        for (const [digit, stats] of Object.entries(this.stats.firstDigitSuccess)) {
            if (stats.total > 0) {
                report.firstDigitSuccessRates[digit] = {
                    successRate: ((stats.success / stats.total) * 100).toFixed(2) + '%',
                    total: stats.total,
                    successful: stats.success
                };
            }
        }

        // generate recommendations
        this.generateRecommendations(report);

        return report;
    }

    generateRecommendations(report) {
        // finding most successful patterns
        const patterns = Object.entries(report.patternSuccessRates)
            .sort((a, b) => parseFloat(b[1].successRate) - parseFloat(a[1].successRate));
        
        // find most effective operations
        const operations = Object.entries(report.operationEffectiveness)
            .sort((a, b) => parseFloat(b[1].percentage) - parseFloat(a[1].percentage));

        report.recommendations.push(
            `Most successful digit pattern: ${patterns[0][0]} with ${patterns[0][1].successRate} success rate`,
            `Most effective operation: ${operations[0][0]} used in ${operations[0][1].percentage} of solutions`,
            `Least successful digit pattern: ${patterns[patterns.length-1][0]} with ${patterns[patterns.length-1][1].successRate} success rate`
        );
    }
}

class FourEqualsTenApp {
    constructor() {
        this.solver = null
        this.analyzer = new SolutionAnalyzer()
    }

    solveSingle(number) {
        this.solver = new DivideAndConquerSolver(number)
        const solutions = this.solver.solve()
        const analysis = this.analyzer.analyzeNumber(number)

        return {
            number,
            solutions,
            analysis
        };
    }

    analyzeRange(start, end) {
        return this.analyzer.analyzeRange(start, end)
    }

    displayResults(result) {
        console.log(`\nResults for number ${result.number}:`);
        console.log('Solutions:', result.solutions);
        console.log('Analysis:', result.analysis);
    }

    displayAnalysis(report) {
        console.log('\nStatistical Analysis:');
        console.log('\nOperation Effectiveness:');
        console.log(report.operationEffectiveness);
        
        console.log('\nPattern Success Rates:');
        console.log(report.patternSuccessRates);
        
        console.log('\nFirst Digit Success Rates:');
        console.log(report.firstDigitSuccessRates);
        
        console.log('\nRecommendations:');
        report.recommendations.forEach(rec => console.log('-', rec));
    }
}


const app = new FourEqualsTenApp()
let numInput = 3847
const result = app.solveSingle(numInput)
app.displayResults(result)