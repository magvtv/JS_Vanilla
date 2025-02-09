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
        // Check for zeros
        if (digits.includes(0)) {
            this.stats.digitPatterns.hasZero.total++;
            if (hasSuccess) this.stats.digitPatterns.hasZero.success++;
        }

        // Check for nines
        if (digits.includes(9)) {
            this.stats.digitPatterns.hasNine.total++;
            if (hasSuccess) this.stats.digitPatterns.hasNine.success++;
        }

        // Check for double digits
        if (new Set(digits).size !== digits.length) {
            this.stats.digitPatterns.hasDouble.total++;
            if (hasSuccess) this.stats.digitPatterns.hasDouble.success++;
        }

        // Check for sequential digits
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

        // Check for all unique digits
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

        // Calculate operation effectiveness
        const totalOps = Object.values(this.stats.operations).reduce((a, b) => a + b, 0);
        for (const [op, count] of Object.entries(this.stats.operations)) {
            report.operationEffectiveness[op] = {
                count,
                percentage: ((count / totalOps) * 100).toFixed(2) + '%'
            };
        }

        // Calculate pattern success rates
        for (const [pattern, stats] of Object.entries(this.stats.digitPatterns)) {
            if (stats.total > 0) {
                report.patternSuccessRates[pattern] = {
                    successRate: ((stats.success / stats.total) * 100).toFixed(2) + '%',
                    total: stats.total,
                    successful: stats.success
                };
            }
        }

        // Calculate first digit success rates
        for (const [digit, stats] of Object.entries(this.stats.firstDigitSuccess)) {
            if (stats.total > 0) {
                report.firstDigitSuccessRates[digit] = {
                    successRate: ((stats.success / stats.total) * 100).toFixed(2) + '%',
                    total: stats.total,
                    successful: stats.success
                };
            }
        }

        // Generate recommendations
        this.generateRecommendations(report);

        return report;
    }

    generateRecommendations(report) {
        // Find most successful patterns
        const patterns = Object.entries(report.patternSuccessRates)
            .sort((a, b) => parseFloat(b[1].successRate) - parseFloat(a[1].successRate));
        
        // Find most effective operations
        const operations = Object.entries(report.operationEffectiveness)
            .sort((a, b) => parseFloat(b[1].percentage) - parseFloat(a[1].percentage));

        report.recommendations.push(
            `Most successful digit pattern: ${patterns[0][0]} with ${patterns[0][1].successRate} success rate`,
            `Most effective operation: ${operations[0][0]} used in ${operations[0][1].percentage} of solutions`,
            `Least successful digit pattern: ${patterns[patterns.length-1][0]} with ${patterns[patterns.length-1][1].successRate} success rate`
        );
    }
}

// Example usage:
const analyzer = new SolutionAnalyzer();

// Analyze a range of numbers (for example, 1000-1100)
console.log("Analyzing numbers from 1000 to 1100...");
const report = analyzer.analyzeRange(1000, 1100);

console.log("\nOperation Effectiveness:");
console.log(report.operationEffectiveness);

console.log("\nPattern Success Rates:");
console.log(report.patternSuccessRates);

console.log("\nFirst Digit Success Rates:");
console.log(report.firstDigitSuccessRates);

console.log("\nRecommendations:");
report.recommendations.forEach(rec => console.log("-", rec));