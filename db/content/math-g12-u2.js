module.exports = {
  subject: "math", grade: 12, unitNo: 2,
  unitTitle: "Introduction to Calculus",
  topics: [
    {
      section: "2.1", name: "Introduction to Derivatives",
      description: "The derivative as a rate of change and slope, and the basic rules for differentiating polynomials.",
      lesson: {
        objectives: [
          "Explain the derivative as an instantaneous rate of change and the slope of a tangent.",
          "Use the definition f'(x) = lim (f(x + h) - f(x)) / h.",
          "Differentiate using the constant, power, sum, product and quotient rules."
        ],
        sections: [
          { heading: "The idea of a derivative", body: [
            "The average rate of change of f between x and x + h is (f(x + h) - f(x)) / h. As h gets closer to 0, this ratio approaches a limit. That limit is the derivative f'(x), the instantaneous rate of change of f at x and the slope of the tangent line to the graph at that point.",
            "Other notations for the derivative are dy/dx and d/dx [f(x)]."
          ]},
          { heading: "Basic rules", body: [
            "Constant rule: the derivative of a constant is 0. Power rule: d/dx [x^n] = n x^(n-1). Constant multiple: d/dx [c f(x)] = c f'(x). Sum rule: the derivative of a sum is the sum of the derivatives."
          ]},
          { heading: "Product and quotient rules", body: [
            "Product rule: d/dx [u v] = u'v + u v'. Quotient rule: d/dx [u / v] = (u'v - u v') / v^2, for v not equal to 0. Differentiate each part first, then combine as the rule says."
          ]}
        ],
        example: { title: "Worked example: applying the rules", steps: [
          "Differentiate f(x) = 3x^4 - 5x^2 + 7. Using the power, multiple and constant rules: f'(x) = 12x^3 - 10x.",
          "Product rule for y = x^2 (x + 1): u = x^2, v = x + 1, so u' = 2x and v' = 1.",
          "y' = 2x(x + 1) + x^2(1) = 2x^2 + 2x + x^2 = 3x^2 + 2x.",
          "Check by expanding first: y = x^3 + x^2, so y' = 3x^2 + 2x. The answers agree."
        ]},
        key: "The derivative is the limit of the average rate of change. Power rule: d/dx [x^n] = n x^(n-1)."
      },
      questions: [
        { d: "Easy", q: "What is the derivative of f(x) = x^5?", o: ["x^4", "5x^4", "5x^5", "4x^5"], a: 1, e: "By the power rule, d/dx [x^5] = 5x^4." },
        { d: "Easy", q: "What is the derivative of the constant function f(x) = 7?", o: ["7", "1", "0", "7x"], a: 2, e: "The derivative of a constant is 0." },
        { d: "Medium", q: "Differentiate f(x) = 4x^3 - 2x + 9.", o: ["12x^2 - 2", "12x^2 - 2x", "4x^2 - 2", "12x^3 - 2"], a: 0, e: "Term by term: 12x^2 - 2 + 0." },
        { d: "Medium", q: "If f(x) = x^2 + 3x, what is f'(2)?", o: ["4", "5", "7", "10"], a: 2, e: "f'(x) = 2x + 3, so f'(2) = 7." },
        { d: "Hard", q: "Using the product rule, the derivative of x^2 (x + 1) is:", o: ["2x", "3x^2 + 2x", "2x^2 + x", "x^3 + 2x"], a: 1, e: "2x(x + 1) + x^2 = 3x^2 + 2x." },
        { d: "Hard", q: "What is the derivative of 1/x (that is, x^(-1))?", o: ["1/x^2", "-1/x^2", "-x^2", "ln x"], a: 1, e: "d/dx [x^(-1)] = -1 x^(-2) = -1/x^2." }
      ]
    },
    {
      section: "2.2", name: "Application of Derivatives",
      description: "Using derivatives for tangent lines, increasing and decreasing functions, maxima and minima, optimisation and motion.",
      lesson: {
        objectives: [
          "Find the slope and equation of a tangent line.",
          "Use f'(x) to find where a function is increasing or decreasing.",
          "Find and classify critical points.",
          "Solve optimisation and rate-of-change problems."
        ],
        sections: [
          { heading: "Tangents and monotonicity", body: [
            "The slope of the tangent to y = f(x) at x = a is f'(a), and the tangent line is y - f(a) = f'(a)(x - a). Where f'(x) > 0 the function is increasing; where f'(x) < 0 it is decreasing."
          ]},
          { heading: "Maxima and minima", body: [
            "A critical point is where f'(x) = 0. To classify it, use the second derivative test: if f''(x) > 0 there it is a local minimum, and if f''(x) < 0 it is a local maximum. Alternatively, check whether f' changes from positive to negative (maximum) or from negative to positive (minimum)."
          ]},
          { heading: "Optimisation and motion", body: [
            "To maximise or minimise a quantity, write it as a function of one variable, find the critical points and decide which gives the best value. If s(t) is position, the velocity is v(t) = s'(t) and the acceleration is a(t) = v'(t)."
          ]}
        ],
        example: { title: "Worked example: a minimum and a tangent", steps: [
          "Let f(x) = x^2 - 4x + 3. Then f'(x) = 2x - 4 = 0 gives x = 2.",
          "f''(x) = 2 > 0, so x = 2 is a minimum. f(2) = 4 - 8 + 3 = -1.",
          "Tangent to y = x^2 at x = 1: slope = 2(1) = 2 and the point is (1, 1), so y - 1 = 2(x - 1), which is y = 2x - 1.",
          "If s(t) = t^2 + 2t, then v(t) = 2t + 2, so at t = 3 the velocity is 8."
        ]},
        key: "f'(x) = 0 locates critical points; f'' > 0 means a minimum and f'' < 0 means a maximum. Velocity is the derivative of position."
      },
      questions: [
        { d: "Easy", q: "What is the slope of the tangent to y = x^2 at x = 3?", o: ["3", "6", "9", "2"], a: 1, e: "dy/dx = 2x, which is 6 at x = 3." },
        { d: "Medium", q: "Where does f(x) = x^2 - 6x + 5 have its critical point?", o: ["x = 2", "x = 3", "x = 5", "x = 6"], a: 1, e: "f'(x) = 2x - 6 = 0 gives x = 3." },
        { d: "Medium", q: "A particle's position is s(t) = t^2 + 2t. What is its velocity at t = 3?", o: ["8", "9", "15", "11"], a: 0, e: "v(t) = 2t + 2, so v(3) = 8." },
        { d: "Medium", q: "For f(x) = x^3 - 3x, on which interval is f increasing?", o: ["-1 < x < 1", "x < -1 or x > 1", "x > 0 only", "All x"], a: 1, e: "f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1), which is positive when x < -1 or x > 1." },
        { d: "Hard", q: "A rectangle has a perimeter of 40 m. What is its largest possible area?", o: ["80 m^2", "96 m^2", "100 m^2", "120 m^2"], a: 2, e: "Area A = x(20 - x), so A' = 20 - 2x = 0 gives x = 10, and A = 100." },
        { d: "Hard", q: "What is the maximum value of f(x) = -x^2 + 4x?", o: ["2", "3", "4", "8"], a: 2, e: "f'(x) = -2x + 4 = 0 gives x = 2 and f(2) = -4 + 8 = 4; f'' = -2 < 0 confirms a maximum." }
      ]
    },
    {
      section: "2.3", name: "Introduction to Integration",
      description: "Antiderivatives, the indefinite integral, the definite integral and area under a curve.",
      lesson: {
        objectives: [
          "Define the antiderivative and the indefinite integral.",
          "Integrate polynomials using the power rule.",
          "Evaluate definite integrals with the Fundamental Theorem of Calculus.",
          "Find area under a curve."
        ],
        sections: [
          { heading: "Antiderivatives", body: [
            "An antiderivative of f is a function F whose derivative is f. Because a constant disappears when differentiating, every antiderivative comes with a constant C. The indefinite integral is written ∫ f(x) dx = F(x) + C.",
            "Rules: ∫ x^n dx = x^(n+1) / (n + 1) + C for n not equal to -1; ∫ k dx = kx + C; and the integral of a sum is the sum of the integrals."
          ]},
          { heading: "Definite integrals and area", body: [
            "The definite integral of f from a to b is ∫ from a to b of f(x) dx = F(b) - F(a), where F is any antiderivative of f (the Fundamental Theorem of Calculus). When f(x) is at least 0 on [a, b], this number equals the area under the curve between x = a and x = b. No constant C is needed."
          ]}
        ],
        example: { title: "Worked example: integrals", steps: [
          "∫ (3x^2 + 2x - 5) dx = x^3 + x^2 - 5x + C.",
          "∫ from 0 to 2 of x^2 dx = [x^3 / 3] from 0 to 2 = 8/3 - 0 = 8/3.",
          "Area under y = 2x from x = 0 to x = 3: ∫ 2x dx = [x^2] from 0 to 3 = 9 - 0 = 9.",
          "If f'(x) = 6x and f(0) = 2, then f(x) = 3x^2 + C, and f(0) = 2 gives C = 2, so f(x) = 3x^2 + 2."
        ]},
        key: "Integration reverses differentiation: ∫ x^n dx = x^(n+1)/(n+1) + C. The definite integral F(b) - F(a) gives area under a curve."
      },
      questions: [
        { d: "Easy", q: "What is ∫ 2x dx?", o: ["x^2 + C", "2x^2 + C", "x + C", "2 + C"], a: 0, e: "The antiderivative of 2x is x^2, plus a constant." },
        { d: "Medium", q: "Find ∫ (3x^2 + 4) dx.", o: ["x^3 + 4 + C", "x^3 + 4x + C", "6x + C", "3x^3 + 4x + C"], a: 1, e: "∫ 3x^2 dx = x^3 and ∫ 4 dx = 4x." },
        { d: "Medium", q: "Evaluate the definite integral of 2x from 0 to 3.", o: ["3", "6", "9", "18"], a: 2, e: "[x^2] from 0 to 3 = 9 - 0 = 9." },
        { d: "Medium", q: "Evaluate the definite integral of x^2 from 1 to 2.", o: ["1", "7/3", "8/3", "3"], a: 1, e: "[x^3 / 3] from 1 to 2 = 8/3 - 1/3 = 7/3." },
        { d: "Hard", q: "If f'(x) = 6x and f(0) = 2, then f(x) is:", o: ["3x^2", "3x^2 + 2", "6x^2 + 2", "6"], a: 1, e: "f(x) = 3x^2 + C and f(0) = 2 gives C = 2." },
        { d: "Hard", q: "What is the area between y = x and the x-axis from x = 0 to x = 4?", o: ["4", "8", "16", "2"], a: 1, e: "[x^2 / 2] from 0 to 4 = 8." }
      ]
    }
  ]
};
