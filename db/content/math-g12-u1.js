module.exports = {
  subject: "math", grade: 12, unitNo: 1,
  unitTitle: "Sequences and Series",
  topics: [
    {
      section: "1.1", name: "Sequence",
      description: "What a sequence is, how to describe it with a general term or a recursive rule, and how to find its terms.",
      lesson: {
        objectives: [
          "Define a sequence and identify its terms.",
          "Find terms of a sequence from its general (nth) term.",
          "Use a recursive rule to generate terms.",
          "Find a general term from a pattern."
        ],
        sections: [
          { heading: "What is a sequence?", body: [
            "A sequence is an ordered list of numbers, called terms, written a1, a2, a3, and so on. It can also be seen as a function whose inputs are the natural numbers 1, 2, 3, ... and whose outputs are the terms. A sequence can be finite (it stops) or infinite (it continues without end).",
            "The position of a term is its index. In the sequence 3, 7, 11, 15, ..., the first term is a1 = 3 and the fourth term is a4 = 15."
          ]},
          { heading: "Describing a sequence", body: [
            "An explicit rule (general term) gives each term a_n directly in terms of n. For an = 3n + 2, the terms are 5, 8, 11, 14, ... A recursive rule gives the first term(s) and a rule that builds each term from the ones before it, such as a1 = 2 and a(n+1) = 2an + 1.",
            "To find the general term from a pattern, look at how each term changes. The sequence 2, 4, 8, 16, ... doubles each time, so an = 2^n. The sequence 1, 4, 9, 16, ... are squares, so an = n^2."
          ]}
        ],
        example: { title: "Worked example: explicit and recursive rules", steps: [
          "Explicit rule: an = 3n + 2. Then a1 = 5, a2 = 8, a3 = 11 and a10 = 3(10) + 2 = 32.",
          "Recursive rule: a1 = 2 and a(n+1) = 2an + 1.",
          "a2 = 2(2) + 1 = 5, a3 = 2(5) + 1 = 11, a4 = 2(11) + 1 = 23.",
          "So the sequence begins 2, 5, 11, 23, ..."
        ]},
        key: "A sequence is an ordered list of terms. An explicit rule gives an from n directly; a recursive rule builds each term from earlier terms."
      },
      questions: [
        { d: "Easy", q: "What is the next term of the sequence 3, 7, 11, 15, ...?", o: ["17", "18", "19", "21"], a: 2, e: "Each term increases by 4, so the next term is 15 + 4 = 19." },
        { d: "Easy", q: "For the sequence with general term an = 2n^2 - 1, what is a3?", o: ["5", "11", "17", "35"], a: 2, e: "a3 = 2(3^2) - 1 = 2(9) - 1 = 17." },
        { d: "Medium", q: "A sequence has a1 = 3 and a(n+1) = 2an - 1. What is a4?", o: ["9", "13", "17", "21"], a: 2, e: "a2 = 2(3) - 1 = 5, a3 = 2(5) - 1 = 9, a4 = 2(9) - 1 = 17." },
        { d: "Medium", q: "Which is the general term of the sequence 2, 4, 8, 16, ...?", o: ["an = 2n", "an = n + 2", "an = 2^n", "an = n^2"], a: 2, e: "Each term is double the previous one starting from 2, so an = 2^n." },
        { d: "Hard", q: "What are the first four terms of the sequence an = n / (n + 1)?", o: ["1/2, 2/3, 3/4, 4/5", "1, 2, 3, 4", "1/2, 1/3, 1/4, 1/5", "2/1, 3/2, 4/3, 5/4"], a: 0, e: "Substituting n = 1, 2, 3, 4 gives 1/2, 2/3, 3/4 and 4/5." }
      ]
    },
    {
      section: "1.2", name: "Arithmetic and Geometric Sequences",
      description: "The nth term and the sum of the first n terms of arithmetic and geometric sequences.",
      lesson: {
        objectives: [
          "Recognise arithmetic and geometric sequences.",
          "Find the nth term of each.",
          "Calculate the sum of the first n terms of each."
        ],
        sections: [
          { heading: "Arithmetic sequences", body: [
            "In an arithmetic sequence (AP) the difference between consecutive terms is a constant d, called the common difference. The nth term is an = a1 + (n - 1)d. The sum of the first n terms is Sn = n/2 (a1 + an), which can also be written Sn = n/2 [2a1 + (n - 1)d]."
          ]},
          { heading: "Geometric sequences", body: [
            "In a geometric sequence (GP) each term is the previous term multiplied by a constant ratio r. The nth term is an = a1 r^(n-1). For r not equal to 1, the sum of the first n terms is Sn = a1 (1 - r^n) / (1 - r), which equals a1 (r^n - 1) / (r - 1)."
          ]},
          { heading: "Telling them apart", body: [
            "Subtract consecutive terms: if the differences are all equal, it is arithmetic. Divide consecutive terms: if the ratios are all equal, it is geometric. The sequence 5, 8, 11, ... is arithmetic with d = 3; the sequence 3, 6, 12, ... is geometric with r = 2."
          ]}
        ],
        example: { title: "Worked example: one of each", steps: [
          "Arithmetic: a1 = 5 and d = 3. The 10th term is a10 = 5 + 9(3) = 32.",
          "Sum of the first 10 terms: S10 = 10/2 (5 + 32) = 5(37) = 185.",
          "Geometric: a1 = 3 and r = 2. The 6th term is a6 = 3(2^5) = 96.",
          "Sum of the first 6 terms: S6 = 3(2^6 - 1) / (2 - 1) = 3(63) = 189."
        ]},
        key: "AP: an = a1 + (n - 1)d and Sn = n/2 (a1 + an). GP: an = a1 r^(n-1) and Sn = a1 (r^n - 1) / (r - 1)."
      },
      questions: [
        { d: "Easy", q: "What is the common difference of the sequence 7, 12, 17, 22, ...?", o: ["4", "5", "7", "12"], a: 1, e: "12 - 7 = 5, and the same difference continues." },
        { d: "Medium", q: "What is the 10th term of the arithmetic sequence 4, 7, 10, ...?", o: ["28", "31", "34", "37"], a: 1, e: "a10 = 4 + 9(3) = 31." },
        { d: "Medium", q: "Find the sum of the first 20 terms of an arithmetic sequence with a1 = 2 and d = 3.", o: ["590", "600", "610", "620"], a: 2, e: "S20 = 20/2 [2(2) + 19(3)] = 10(4 + 57) = 610." },
        { d: "Medium", q: "What is the 6th term of the geometric sequence 2, 6, 18, ...?", o: ["162", "486", "1458", "54"], a: 1, e: "r = 3, so a6 = 2(3^5) = 2(243) = 486." },
        { d: "Hard", q: "Find the sum of the first 5 terms of the geometric sequence 3, 6, 12, ...", o: ["45", "63", "93", "96"], a: 2, e: "S5 = 3(2^5 - 1) / (2 - 1) = 3(31) = 93." },
        { d: "Hard", q: "Which term of the arithmetic sequence 3, 8, 13, ... is equal to 98?", o: ["18th", "19th", "20th", "21st"], a: 2, e: "3 + (n - 1)5 = 98 gives n - 1 = 19, so n = 20." }
      ]
    },
    {
      section: "1.3", name: "The Sigma Notation and Partial Sums",
      description: "Writing sums with sigma notation, its properties, and the formulas for sums of powers of natural numbers.",
      lesson: {
        objectives: [
          "Read and write sums using sigma notation.",
          "Use the linearity properties of sums.",
          "Use the standard formulas for the sum of k, k^2 and k^3."
        ],
        sections: [
          { heading: "Sigma notation", body: [
            "The symbol Σ (sigma) means 'add up'. The expression Σ from k = 1 to n of f(k) means f(1) + f(2) + ... + f(n). The letter k is the index, 1 is the lower limit and n is the upper limit. A partial sum Sn is the sum of the first n terms of a sequence."
          ]},
          { heading: "Properties", body: [
            "A constant factor can be taken outside: Σ c·ak = c Σ ak. Sums can be split: Σ (ak + bk) = Σ ak + Σ bk. The sum of a constant is Σ c (n times) = nc."
          ]},
          { heading: "Useful formulas", body: [
            "For k from 1 to n: Σ k = n(n + 1)/2; Σ k^2 = n(n + 1)(2n + 1)/6; Σ k^3 = [n(n + 1)/2]^2. Combined with the properties, these let you sum many expressions without adding term by term."
          ]}
        ],
        example: { title: "Worked example: summing with formulas", steps: [
          "Find Σ from k = 1 to 10 of (2k + 1).",
          "Split it: 2 Σ k + Σ 1 = 2(10)(11)/2 + 10.",
          "2(55) + 10 = 110 + 10 = 120.",
          "Check with Σ k^2 for k = 1 to 5: 5(6)(11)/6 = 55, which equals 1 + 4 + 9 + 16 + 25."
        ]},
        key: "Σ k = n(n + 1)/2, Σ k^2 = n(n + 1)(2n + 1)/6, Σ k^3 = [n(n + 1)/2]^2, and constants and sums can be pulled apart."
      },
      questions: [
        { d: "Easy", q: "What is the value of the sum of k for k = 1 to 4?", o: ["6", "9", "10", "16"], a: 2, e: "1 + 2 + 3 + 4 = 10." },
        { d: "Easy", q: "Σ from k = 1 to n of 5 equals:", o: ["5", "n", "5n", "n + 5"], a: 2, e: "Adding the constant 5 a total of n times gives 5n." },
        { d: "Medium", q: "Find the sum of 2k for k = 1 to 5.", o: ["15", "20", "30", "60"], a: 2, e: "2(1 + 2 + 3 + 4 + 5) = 2(15) = 30." },
        { d: "Medium", q: "Find the sum of k^2 for k = 1 to 10.", o: ["55", "100", "385", "3025"], a: 2, e: "10(11)(21)/6 = 385." },
        { d: "Hard", q: "Find the sum of (3k - 2) for k = 1 to 6.", o: ["45", "51", "57", "63"], a: 1, e: "3(21) - 2(6) = 63 - 12 = 51. Check: 1 + 4 + 7 + 10 + 13 + 16 = 51." }
      ]
    },
    {
      section: "1.4", name: "Infinite Series",
      description: "When an infinite series has a sum, and how to find the sum of an infinite geometric series.",
      lesson: {
        objectives: [
          "Distinguish convergent from divergent infinite series.",
          "Find the sum of a convergent infinite geometric series.",
          "Convert a repeating decimal to a fraction."
        ],
        sections: [
          { heading: "Convergence", body: [
            "An infinite series is the sum of the terms of an infinite sequence. If the partial sums approach a fixed number as more terms are added, the series converges to that number, called its sum. Otherwise it diverges."
          ]},
          { heading: "Infinite geometric series", body: [
            "A geometric series a + ar + ar^2 + ... converges only when |r| < 1, and then its sum is S = a / (1 - r). If |r| is 1 or more, the terms do not shrink and the series diverges.",
            "A repeating decimal is an infinite geometric series. For example, 0.333... = 0.3 + 0.03 + 0.003 + ..., with a = 0.3 and r = 0.1."
          ]}
        ],
        example: { title: "Worked example: sums and decimals", steps: [
          "The series 8 + 4 + 2 + 1 + ... has a = 8 and r = 1/2, and |r| < 1, so it converges.",
          "S = 8 / (1 - 1/2) = 8 / (1/2) = 16.",
          "For 0.333...: a = 0.3, r = 0.1, S = 0.3 / 0.9 = 1/3.",
          "The series 2 + 6 + 18 + ... has r = 3, which is greater than 1, so it diverges."
        ]},
        key: "An infinite geometric series converges when |r| < 1, with sum S = a / (1 - r)."
      },
      questions: [
        { d: "Easy", q: "What is the sum of the infinite series 1 + 1/2 + 1/4 + 1/8 + ...?", o: ["1", "1.5", "2", "It has no sum"], a: 2, e: "a = 1, r = 1/2, so S = 1 / (1 - 1/2) = 2." },
        { d: "Easy", q: "An infinite geometric series converges when:", o: ["r > 1", "|r| < 1", "r = 1", "r < 0 only"], a: 1, e: "The ratio must be strictly between -1 and 1." },
        { d: "Medium", q: "Find the sum of 12 + 6 + 3 + 3/2 + ...", o: ["18", "20", "24", "36"], a: 2, e: "a = 12 and r = 1/2, so S = 12 / (1/2) = 24." },
        { d: "Hard", q: "The repeating decimal 0.727272... equals:", o: ["72/100", "8/11", "7/9", "36/50"], a: 1, e: "a = 0.72 and r = 0.01, so S = 0.72 / 0.99 = 72/99 = 8/11." },
        { d: "Hard", q: "Which series diverges?", o: ["1 + 1/3 + 1/9 + ...", "5 - 5/2 + 5/4 - ...", "2 + 6 + 18 + ...", "0.9 + 0.09 + 0.009 + ..."], a: 2, e: "2 + 6 + 18 + ... has r = 3, and |r| is not less than 1." }
      ]
    },
    {
      section: "1.5", name: "Applications of Sequences and Series in Daily Life",
      description: "Using arithmetic and geometric sequences to model savings, population growth and bouncing balls.",
      lesson: {
        objectives: [
          "Model real situations with arithmetic and geometric sequences.",
          "Choose the correct formula for the situation.",
          "Solve problems on savings, growth and repeated rebounds."
        ],
        sections: [
          { heading: "Spotting the model", body: [
            "If a quantity changes by the same amount each period (saving 50 Birr more each month), the model is arithmetic. If it changes by the same percentage or factor each period (a population growing 10% a year), it is geometric.",
            "Write the first term, the common difference or ratio, then use an or Sn from the earlier topics. Always check what the question asks: a single value (the nth term) or a total (a sum)."
          ]},
          { heading: "Growth and decay", body: [
            "Growth by r percent per period multiplies by (1 + r/100) each time, so after n periods the value is P(1 + r/100)^n. A bouncing ball that returns to a fixed fraction of its previous height gives a geometric series for the total distance travelled."
          ]}
        ],
        example: { title: "Worked example: a bouncing ball", steps: [
          "A ball is dropped from 10 m and bounces to 60% of its previous height each time.",
          "Rebound heights are 6, 3.6, 2.16, ... a geometric series with a = 6 and r = 0.6.",
          "Sum of rebound heights = 6 / (1 - 0.6) = 15 m. Each rebound is travelled up and down, so 2 x 15 = 30 m.",
          "Add the first drop of 10 m: total distance = 10 + 30 = 40 m."
        ]},
        key: "Equal additions give an arithmetic model; equal percentage changes give a geometric model."
      },
      questions: [
        { d: "Easy", q: "A person saves 50 Birr in month 1 and 10 Birr more each month. How much is saved in month 6?", o: ["100", "110", "60", "150"], a: 0, e: "a6 = 50 + 5(10) = 100 Birr." },
        { d: "Medium", q: "Using the same plan (50 Birr in month 1, 10 more each month), how much is saved in total over 6 months?", o: ["375", "450", "500", "600"], a: 1, e: "S6 = 6/2 (50 + 100) = 3(150) = 450 Birr." },
        { d: "Medium", q: "A population of 1,000 grows by 10% each year. What is the population after 3 years?", o: ["1,300", "1,310", "1,331", "1,400"], a: 2, e: "1000(1.1)^3 = 1,331." },
        { d: "Hard", q: "A ball dropped from 20 m rebounds to half its previous height each time. What total distance does it travel before stopping?", o: ["40 m", "60 m", "80 m", "100 m"], a: 1, e: "Rebounds sum to 10 / (1 - 1/2) = 20 m, travelled twice = 40 m; plus the first drop of 20 m gives 60 m." },
        { d: "Hard", q: "Each year a machine's value falls to 80% of its value the year before. If it costs 10,000 Birr new, what is its value after 2 years?", o: ["6,000", "6,400", "8,000", "7,200"], a: 1, e: "10,000 x 0.8 x 0.8 = 6,400 Birr." }
      ]
    }
  ]
};
