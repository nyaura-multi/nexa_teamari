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
        { d: "Medium", q: "What are the first four terms of the sequence an = n / (n + 1)?", o: ["1/2, 2/3, 3/4, 4/5", "1, 2, 3, 4", "1/2, 1/3, 1/4, 1/5", "2/1, 3/2, 4/3, 5/4"], a: 0, e: "Substituting n = 1, 2, 3, 4 gives 1/2, 2/3, 3/4 and 4/5." },
        { d: 'Medium', q: 'For a_n = 4n - 3, find a_8.', o: ['25', '29', '32', '35'], a: 1, e: 'Substitute n = 8: 4(8) - 3 = 29.' },
        { d: 'Medium', q: 'For a_n = 3n + 2, which term is 35?', o: ['9th', '10th', '11th', '12th'], a: 2, e: 'Solve 3n + 2 = 35, so n = 11.' },
        { d: 'Medium', q: 'A sequence has a_1 = 2 and a_(n+1) = 3a_n. Find a_4.', o: ['18', '27', '54', '81'], a: 2, e: 'The terms are 2, 6, 18, 54, so a_4 = 54.' },
        { d: 'Medium', q: 'The sequence is 4, 7, 12, 19, ... What is the next term if the pattern continues?', o: ['26', '27', '28', '29'], a: 2, e: 'The differences are 3, 5, 7; the next difference is 9, giving 19 + 9 = 28.' },
        { d: 'Hard', q: 'A sequence has a_1 = 1 and a_(n+1) = a_n + 2n. Find a_4.', o: ['9', '11', '13', '15'], a: 2, e: 'a_2=3, a_3=7, and a_4=7+2(3)=13.' },
        { d: 'Medium', q: 'For a_n = n^2, what is the first index n for which a_n is greater than 100?', o: ['9', '10', '11', '12'], a: 2, e: '10^2 = 100 is not greater than 100; 11^2 = 121.' },
        { d: 'Medium', q: 'If a_n = (-1)^n(n + 1), what are the first four terms?', o: ['-2, 3, -4, 5', '2, -3, 4, -5', '-1, 2, -3, 4', '-2, -3, -4, -5'], a: 0, e: 'Substituting n = 1, 2, 3, 4 gives -2, 3, -4, 5.' },
        { d: 'Medium', q: 'For a_n = 5n - 2, which term equals 103?', o: ['19th', '20th', '21st', '22nd'], a: 2, e: 'Solve 5n - 2 = 103: 5n = 105, so n = 21.' },
        { d: 'Hard', q: 'The sequence 2, 6, 12, 20, ... follows a_n = n(n + 1). Find a_15.', o: ['225', '230', '240', '255'], a: 2, e: 'a_15 = 15(16) = 240.' },
        { d: 'Hard', q: 'If a_n = 3n^2 - 2n, what is a_(n+1) - a_n?', o: ['6n - 1', '6n + 1', '6n + 3', '3n^2 + 1'], a: 1, e: 'Expand a_(n+1)=3(n+1)^2-2(n+1)=3n^2+4n+1; subtract a_n to get 6n+1.' },
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
        { d: "Medium", q: "Find the sum of the first 5 terms of the geometric sequence 3, 6, 12, ...", o: ["45", "63", "93", "96"], a: 2, e: "S5 = 3(2^5 - 1) / (2 - 1) = 3(31) = 93." },
        { d: "Medium", q: "Which term of the arithmetic sequence 3, 8, 13, ... is equal to 98?", o: ["18th", "19th", "20th", "21st"], a: 2, e: "3 + (n - 1)5 = 98 gives n - 1 = 19, so n = 20." },
        { d: 'Medium', q: 'An arithmetic sequence has first term 7 and common difference -2. Find its 12th term.', o: ['-17', '-15', '15', '29'], a: 1, e: 'a_12 = 7 + 11(-2) = -15.' },
        { d: 'Medium', q: 'Find the sum of the first 12 terms of 5, 8, 11, ...', o: ['246', '252', '258', '264'], a: 2, e: 'a_12=38, so S_12 = 12(5+38)/2 = 258.' },
        { d: 'Medium', q: 'Find the 6th term of 4, -2, 1, -1/2, ...', o: ['1/16', '-1/8', '1/8', '-1/16'], a: 1, e: 'The ratio is -1/2, so a_6=4(-1/2)^5=-1/8.' },
        { d: 'Medium', q: 'Find the sum 2 + 6 + 18 + 54.', o: ['72', '78', '80', '82'], a: 2, e: 'Add the four terms: 2 + 6 + 18 + 54 = 80.' },
        { d: 'Medium', q: 'Which term of 4, 9, 14, ... is 64?', o: ['11th', '12th', '13th', '14th'], a: 2, e: '4 + (n-1)5 = 64 gives n=13.' },
        { d: 'Easy', q: 'What is the common ratio of 5, 15, 45, ...?', o: ['2', '3', '5', '10'], a: 1, e: 'Divide consecutive terms: 15/5 = 3 and 45/15 = 3.' },
        { d: 'Medium', q: 'An arithmetic sequence has a_1=2 and d=4. Find S_10.', o: ['180', '190', '200', '210'], a: 2, e: 'a_10=38, so S_10=10(2+38)/2=200.' },
        { d: 'Medium', q: 'A geometric sequence has a_1=81 and r=1/3. Find a_5.', o: ['1/3', '1', '3', '9'], a: 1, e: 'a_5=81(1/3)^4=81/81=1.' },
        { d: 'Hard', q: 'The sum of the first n terms of 3, 7, 11, ... is 210. Find n.', o: ['8', '9', '10', '11'], a: 2, e: 'S_n=n/2[6+4(n-1)]=n(2n+1). Solving n(2n+1)=210 gives n=10.' },
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
        { d: "Medium", q: "Find the sum of (3k - 2) for k = 1 to 6.", o: ["45", "51", "57", "63"], a: 1, e: "3(21) - 2(6) = 63 - 12 = 51. Check: 1 + 4 + 7 + 10 + 13 + 16 = 51." },
        { d: 'Easy', q: 'Find the sum of 2k for k from 1 to 6.', o: ['36', '40', '42', '48'], a: 2, e: '2(1+2+3+4+5+6)=2(21)=42.' },
        { d: 'Medium', q: 'Find the sum of (k^2-k) for k from 1 to 5.', o: ['25', '30', '35', '40'], a: 3, e: 'Sum k^2 is 55 and sum k is 15, so 55-15=40.' },
        { d: 'Easy', q: 'Find the sum of 3 for k from 2 to 5.', o: ['9', '12', '15', '18'], a: 1, e: 'There are four terms, each equal to 3, so the sum is 12.' },
        { d: 'Medium', q: 'Find the sum of (4k-1) for k from 1 to 8.', o: ['128', '132', '136', '140'], a: 2, e: '4(1+...+8)-8 = 4(36)-8 = 136.' },
        { d: 'Medium', q: 'Find the sum of k^2 for k from 1 to 6.', o: ['81', '91', '101', '111'], a: 1, e: '6(7)(13)/6 = 91.' },
        { d: 'Easy', q: 'Find the sum of (k+2) for k from 1 to 6.', o: ['27', '30', '33', '36'], a: 2, e: 'Sum k is 21 and six added 2s contribute 12; total 33.' },
        { d: 'Medium', q: 'The sum of k for k from 1 to n is 45. Find n.', o: ['8', '9', '10', '11'], a: 1, e: 'n(n+1)/2=45, so n=9.' },
        { d: 'Medium', q: 'Find the sum of (2k^2+1) for k from 1 to 3.', o: ['27', '29', '31', '33'], a: 2, e: '2(1+4+9)+3 = 28+3 = 31.' },
        { d: 'Medium', q: 'Find the sum of (3k-2) for k from 1 to 5.', o: ['30', '35', '40', '45'], a: 1, e: 'The terms are 1, 4, 7, 10, 13; their sum is 35.' },
        { d: 'Hard', q: 'Using a formula, find the sum of (4k-1) for k from 1 to 12.', o: ['276', '288', '300', '312'], a: 2, e: '4[12(13)/2]-12=4(78)-12=300.' },
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
        { d: "Medium", q: "The repeating decimal 0.727272... equals:", o: ["72/100", "8/11", "7/9", "36/50"], a: 1, e: "a = 0.72 and r = 0.01, so S = 0.72 / 0.99 = 72/99 = 8/11." },
        { d: "Medium", q: "Which series diverges?", o: ["1 + 1/3 + 1/9 + ...", "5 - 5/2 + 5/4 - ...", "2 + 6 + 18 + ...", "0.9 + 0.09 + 0.009 + ..."], a: 2, e: "2 + 6 + 18 + ... has r = 3, and |r| is not less than 1." },
        { d: 'Medium', q: 'Find the sum of the infinite geometric series 6 - 2 + 2/3 - 2/9 + ...', o: ['3', '7/2', '4', '9/2'], a: 3, e: 'a=6 and r=-1/3, so S=6/[1-(-1/3)]=6/(4/3)=9/2.' },
        { d: 'Medium', q: 'Find the sum of 5 + 10/3 + 20/9 + ...', o: ['10', '12', '15', '18'], a: 2, e: 'a=5 and r=2/3, so S=5/(1-2/3)=15.' },
        { d: 'Easy', q: 'What happens to the series 4 - 8 + 16 - 32 + ...?', o: ['It converges to 4', 'It converges to -4', 'It diverges', 'It sums to 0'], a: 2, e: 'Its ratio is -2, whose absolute value is greater than 1, so it diverges.' },
        { d: 'Medium', q: 'Find the sum of 12 + 3 + 3/4 + ...', o: ['15', '16', '18', '20'], a: 1, e: 'a=12 and r=1/4, so S=12/(1-1/4)=16.' },
        { d: 'Medium', q: 'Find the sum of the first four terms of 3 + 3/2 + 3/4 + ...', o: ['45/8', '21/4', '6', '45/4'], a: 0, e: 'The terms sum to 3+1.5+0.75+0.375=5.625=45/8.' },
        { d: 'Medium', q: 'What is the sum of 8 + 4 + 2 + 1 + ...?', o: ['12', '14', '16', '18'], a: 2, e: 'a=8 and r=1/2, so S=8/(1-1/2)=16.' },
        { d: 'Medium', q: 'A convergent infinite geometric series has first term 6 and sum 18. Find its common ratio.', o: ['1/2', '2/3', '3/4', '4/5'], a: 1, e: '18=6/(1-r), so 1-r=1/3 and r=2/3.' },
        { d: 'Hard', q: 'A convergent geometric series has first term 10 and sum 25. Find its common ratio.', o: ['1/2', '3/5', '2/3', '4/5'], a: 1, e: '25=10/(1-r), so 1-r=0.4 and r=0.6=3/5.' },
        { d: 'Medium', q: 'Which series converges?', o: ['3 - 6 + 12 - ...', '4 + 2 + 1 + ...', '2 + 2 + 2 + ...', '1 + 2 + 4 + ...'], a: 1, e: 'Only the second has |r|<1; its ratio is 1/2.' },
        { d: 'Medium', q: 'Convert 0.454545... to a fraction.', o: ['4/9', '5/11', '45/100', '9/20'], a: 1, e: 'The repeating block gives 45/99, which simplifies to 5/11.' },
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
        { d: "Medium", q: "Each year a machine's value falls to 80% of its value the year before. If it costs 10,000 Birr new, what is its value after 2 years?", o: ["6,000", "6,400", "8,000", "7,200"], a: 1, e: "10,000 x 0.8 x 0.8 = 6,400 Birr." },
        { d: 'Medium', q: 'A student saves 200 Birr in month 1 and increases the amount by 50 Birr each month. How much in month 8?', o: ['500', '550', '600', '650'], a: 1, e: 'a_8=200+7(50)=550 Birr.' },
        { d: 'Hard', q: 'Using that saving plan, how much is saved in total over 8 months?', o: ['2800', '3000', '3200', '3400'], a: 1, e: 'S_8=8(200+550)/2=3000 Birr.' },
        { d: 'Medium', q: 'A 5,000 Birr investment grows by 8% per year. What is its value after 2 years?', o: ['5,800', '5,832', '5,840', '6,000'], a: 1, e: '5000(1.08)^2=5832 Birr.' },
        { d: 'Medium', q: 'A machine worth 2,000 Birr loses 5% of its value each year. What is its value after 3 years?', o: ['1,700', '1,714.75', '1,715', '1,850'], a: 1, e: '2000(0.95)^3=1714.75 Birr.' },
        { d: 'Hard', q: 'A ball is dropped from 12 m and each rebound reaches 75% of the previous height. Find the total distance traveled.', o: ['72 m', '80 m', '84 m', '96 m'], a: 2, e: 'Rebound heights sum to 9/(1-0.75)=36 m. They are traveled up and down, so total=12+2(36)=84 m.' },
        { d: 'Medium', q: 'A 20,000 Birr machine depreciates by 10% each year. Find its value after 3 years.', o: ['14,400', '14,580', '15,000', '17,100'], a: 1, e: '20000(0.9)^3=14,580 Birr.' },
        { d: 'Hard', q: 'A student saves 100 Birr in week 1 and doubles the amount each week for 8 weeks. How much is saved altogether?', o: ['12,700', '25,500', '25,600', '51,100'], a: 1, e: 'The total is 100(2^8-1)/(2-1)=25,500 Birr.' },
        { d: 'Medium', q: 'A student saves 80 Birr in month 1 and adds 10 Birr each month. Find the total saved in 10 months.', o: ['1,150', '1,200', '1,250', '1,300'], a: 2, e: 'a_10=170, so S_10=10(80+170)/2=1,250 Birr.' },
        { d: 'Medium', q: 'A 5,000 Birr deposit grows by 4% annually. Find its value after 5 years, rounded to 2 decimal places.', o: ['5,800.00', '6,000.00', '6,083.26', '6,250.00'], a: 2, e: '5000(1.04)^5=6083.2645, which rounds to 6,083.26 Birr.' },
        { d: 'Hard', q: 'A ball is dropped from 15 m and rebounds to 40% of its previous height. Find the total distance traveled.', o: ['25 m', '30 m', '35 m', '40 m'], a: 2, e: 'Rebound heights sum to 6/(1-0.4)=10 m; total distance is 15+2(10)=35 m.' },
      ]
    }
  ]
};

