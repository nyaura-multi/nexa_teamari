module.exports = {
  subject: "math", grade: 12, unitNo: 5,
  unitTitle: "Mathematical Applications in Business",
  topics: [
    {
      section: "5.1", name: "Basic Mathematical Concepts in Business",
      description: "Percentages, profit and loss, discounts, mark-up and break-even analysis.",
      lesson: {
        objectives: [
          "Calculate percentage profit, loss and discount.",
          "Apply successive discounts.",
          "Find the break-even point."
        ],
        sections: [
          { heading: "Profit, loss and discount", body: [
            "Profit = selling price - cost price (when selling price is higher); loss = cost price - selling price (when it is lower). Percentage profit = profit / cost price x 100, and percentage loss = loss / cost price x 100. A discount reduces the marked price: selling price = marked price x (1 - discount rate). A mark-up is an amount added to cost to set the selling price."
          ]},
          { heading: "Successive discounts", body: [
            "When two discounts are applied one after the other, multiply the factors; do not add the percentages. A 10% discount followed by a 5% discount multiplies the price by 0.90 and then by 0.95."
          ]},
          { heading: "Break-even analysis", body: [
            "Total cost = fixed cost + variable cost per unit x number of units. Revenue = price per unit x units. The break-even point is where revenue equals total cost: units = fixed cost / (price per unit - variable cost per unit). Below this quantity the business makes a loss; above it, a profit."
          ]}
        ],
        example: { title: "Worked example: profit and break-even", steps: [
          "An item costs 800 Birr and is sold for 1,000 Birr. Profit = 200 and percentage profit = 200 / 800 x 100 = 25%.",
          "Successive discounts: a 1,200 Birr item reduced by 10% then 5% costs 1,200 x 0.90 x 0.95 = 1,026 Birr.",
          "Break-even: fixed cost 12,000 Birr, price 50 Birr, variable cost 30 Birr per unit.",
          "Units = 12,000 / (50 - 30) = 600. The business must sell 600 units to cover its costs."
        ]},
        key: "Profit % = profit / cost price x 100. Break-even units = fixed cost / (price - variable cost per unit)."
      },
      questions: [
        { d: "Easy", q: "An item bought for 200 Birr is sold for 250 Birr. The percentage profit is:", o: ["20%", "25%", "50%", "10%"], a: 1, e: "Profit = 50 and 50 / 200 x 100 = 25%." },
        { d: "Medium", q: "A 20% discount is given on an item marked at 500 Birr. The selling price is:", o: ["380", "400", "420", "480"], a: 1, e: "500 x 0.80 = 400 Birr." },
        { d: "Medium", q: "An item costing 400 Birr is sold for 340 Birr. The percentage loss is:", o: ["10%", "15%", "17.6%", "60%"], a: 1, e: "Loss = 60 and 60 / 400 x 100 = 15%." },
        { d: "Medium", q: "Fixed costs are 10,000 Birr, the price is 25 Birr per unit and the variable cost is 15 Birr per unit. The break-even quantity is:", o: ["400 units", "667 units", "1,000 units", "2,500 units"], a: 2, e: "10,000 / (25 - 15) = 1,000 units." },
        { d: "Hard", q: "A 1,200 Birr item is discounted by 10% and then by a further 5%. The final price is:", o: ["1,020", "1,026", "1,032", "1,080"], a: 1, e: "1,200 x 0.90 = 1,080, then 1,080 x 0.95 = 1,026. It is not a single 15% discount." }
      ]
    },
    {
      section: "5.2", name: "Time Value of Money",
      description: "Simple and compound interest, future value and present value.",
      lesson: {
        objectives: [
          "Explain why money has a time value.",
          "Calculate simple and compound interest.",
          "Find future value and present value."
        ],
        sections: [
          { heading: "Why time matters", body: [
            "Money received now is worth more than the same amount received later, because it can earn interest and because prices tend to rise. This is the time value of money."
          ]},
          { heading: "Simple and compound interest", body: [
            "Simple interest is earned only on the original amount (the principal P): I = Prt, where r is the yearly rate and t the time in years. The total is A = P(1 + rt). Compound interest is earned on the principal and on interest already added: A = P(1 + r/m)^(mt), where m is the number of compounding periods per year."
          ]},
          { heading: "Present and future value", body: [
            "Future value (FV) is what an amount today will grow to. Present value (PV) is what a future amount is worth today: PV = FV / (1 + r)^t for annual compounding. Discounting is the reverse of compounding."
          ]}
        ],
        example: { title: "Worked example: 1,000 Birr at 10%", steps: [
          "Simple interest for 2 years at 10%: I = 1,000 x 0.10 x 2 = 200, so the total is 1,200 Birr.",
          "Compound interest, annually, for 2 years: A = 1,000(1.10)^2 = 1,210 Birr.",
          "Compounding earns 10 Birr more because interest is earned on the first year's interest.",
          "Present value of 1,210 due in 2 years at 10%: PV = 1,210 / 1.21 = 1,000 Birr."
        ]},
        key: "Simple: A = P(1 + rt). Compound: A = P(1 + r/m)^(mt). Present value = future value / (1 + r)^t."
      },
      questions: [
        { d: "Easy", q: "What is the simple interest on 2,000 Birr at 5% per year for 3 years?", o: ["100", "200", "300", "315"], a: 2, e: "I = 2,000 x 0.05 x 3 = 300 Birr." },
        { d: "Medium", q: "What is 1,000 Birr worth after 2 years at 10% compounded annually?", o: ["1,100", "1,200", "1,210", "1,220"], a: 2, e: "1,000(1.10)^2 = 1,210 Birr." },
        { d: "Medium", q: "The present value of 1,210 Birr due in 2 years at 10% compounded annually is:", o: ["1,000", "1,100", "1,089", "968"], a: 0, e: "PV = 1,210 / (1.10)^2 = 1,210 / 1.21 = 1,000." },
        { d: "Medium", q: "Compared with simple interest at the same rate, compound interest over several years gives:", o: ["Less interest", "The same interest", "More interest", "No interest"], a: 2, e: "Compounding earns interest on previously earned interest as well." },
        { d: "Hard", q: "5,000 Birr is invested at 6% per year compounded semi-annually for 1 year. The final amount is:", o: ["5,300.00", "5,304.50", "5,306.00", "5,309.10"], a: 1, e: "A = 5,000(1 + 0.06/2)^2 = 5,000(1.03)^2 = 5,304.50." }
      ]
    },
    {
      section: "5.3", name: "Saving, Investing and Borrowing Money",
      description: "Regular savings, loans with flat and reducing-balance interest, and the idea of risk and return.",
      lesson: {
        objectives: [
          "Calculate the future value of regular savings.",
          "Calculate repayments on a flat-rate loan.",
          "Compare flat-rate and reducing-balance interest.",
          "Explain the link between risk and return."
        ],
        sections: [
          { heading: "Saving regularly", body: [
            "If you deposit the same amount PMT at the end of each period and the interest rate per period is i, the future value after n deposits is FV = PMT [(1 + i)^n - 1] / i. Regular saving builds a larger sum than the deposits alone because each deposit earns interest."
          ]},
          { heading: "Borrowing", body: [
            "With flat-rate interest, interest is calculated on the original loan for the whole term: interest = P x r x t, total repayment = P + interest, and each instalment = total / number of instalments. With reducing-balance interest, interest is charged only on the amount still owed, so at the same stated rate it costs less than flat interest."
          ]},
          { heading: "Investing", body: [
            "Investments such as savings accounts, bonds and shares differ in risk, the chance of losing money or earning less than expected. In general, investments with higher expected returns carry higher risk, so a saver must balance the two."
          ]}
        ],
        example: { title: "Worked example: saving and borrowing", steps: [
          "Saving 500 Birr at the end of each year at 10% for 3 years: FV = 500 [(1.10)^3 - 1] / 0.10 = 500(0.331) / 0.10 = 1,655 Birr.",
          "A flat-rate loan of 12,000 Birr at 10% a year for 2 years: interest = 12,000 x 0.10 x 2 = 2,400.",
          "Total repayment = 12,000 + 2,400 = 14,400 Birr.",
          "Monthly instalment over 24 months = 14,400 / 24 = 600 Birr."
        ]},
        key: "Regular saving: FV = PMT [(1 + i)^n - 1] / i. A flat-rate loan charges interest on the full original amount for the whole term."
      },
      questions: [
        { d: "Easy", q: "A loan of 6,000 Birr is borrowed at 10% simple interest for 1 year. The total to repay is:", o: ["6,000", "6,060", "6,600", "7,200"], a: 2, e: "Interest = 600, so the total is 6,600 Birr." },
        { d: "Medium", q: "A 12,000 Birr loan at 10% flat for 2 years is repaid in 24 equal monthly instalments. Each instalment is:", o: ["500", "550", "600", "650"], a: 2, e: "Total = 14,400 and 14,400 / 24 = 600 Birr." },
        { d: "Medium", q: "Saving 500 Birr at the end of each year at 10% for 3 years gives a future value of:", o: ["1,500", "1,650", "1,655", "1,815"], a: 2, e: "FV = 500 x (1.331 - 1) / 0.10 = 1,655 Birr." },
        { d: "Medium", q: "In general, an investment with a higher expected return usually has:", o: ["Lower risk", "Higher risk", "No risk", "Guaranteed profit"], a: 1, e: "Higher potential returns normally come with greater risk." },
        { d: "Hard", q: "For the same stated interest rate and term, which loan costs the borrower less?", o: ["Flat-rate interest", "Reducing-balance interest", "They always cost the same", "It depends only on the lender's name"], a: 1, e: "With reducing balance, interest falls as the loan is repaid, while flat rate charges on the full original amount throughout." }
      ]
    },
    {
      section: "5.4", name: "Taxation",
      description: "Progressive income tax calculations, value added tax and prices that include tax.",
      lesson: {
        objectives: [
          "Calculate tax using a progressive tax table.",
          "Calculate VAT and a price including VAT.",
          "Find the price before tax from a price that includes tax."
        ],
        sections: [
          { heading: "Progressive income tax", body: [
            "In a progressive income tax, income is divided into bands, and each band is taxed at its own rate, with higher bands taxed at higher rates. Only the part of income inside a band is taxed at that band's rate, so the tax is the sum of the amounts from each band. The average tax rate (tax / income) rises as income rises."
          ]},
          { heading: "Value added tax", body: [
            "VAT is a percentage added to the price of goods and services. In Ethiopia the standard rate is 15%. Price including VAT = price before VAT x (1 + rate). To find the price before VAT from a VAT-inclusive price, divide by (1 + rate), not subtract the percentage."
          ]}
        ],
        example: { title: "Worked example: a tax table and VAT", steps: [
          "A sample tax table: the first 1,000 Birr is taxed at 0%, the next 2,000 Birr at 10%, and anything above 3,000 Birr at 20%.",
          "For an income of 4,500 Birr: tax = 0 + 2,000 x 0.10 + 1,500 x 0.20 = 200 + 300 = 500 Birr.",
          "VAT at 15% on goods priced 800 Birr: VAT = 120, so the price is 920 Birr.",
          "A VAT-inclusive price of 1,150 Birr: price before VAT = 1,150 / 1.15 = 1,000 Birr."
        ]},
        key: "Each band of income is taxed at its own rate. Price with VAT = price x 1.15; price before VAT = inclusive price / 1.15."
      },
      questions: [
        { d: "Easy", q: "VAT at 15% is charged on goods priced 400 Birr. The VAT amount is:", o: ["15", "40", "60", "100"], a: 2, e: "400 x 0.15 = 60 Birr." },
        { d: "Medium", q: "A product costs 2,000 Birr before VAT. With 15% VAT, the total price is:", o: ["2,015", "2,150", "2,300", "2,400"], a: 2, e: "2,000 x 1.15 = 2,300 Birr." },
        { d: "Medium", q: "A price including 15% VAT is 1,150 Birr. The price before VAT is:", o: ["977.50", "1,000", "1,035", "1,122.50"], a: 1, e: "1,150 / 1.15 = 1,000 Birr." },
        { d: "Medium", q: "Using the table (first 1,000 at 0%, next 2,000 at 10%, above 3,000 at 20%), the tax on an income of 3,000 Birr is:", o: ["0", "200", "300", "600"], a: 1, e: "The first 1,000 is untaxed and the next 2,000 is taxed at 10%, giving 200 Birr." },
        { d: "Hard", q: "Using the same table, the tax on an income of 5,000 Birr is:", o: ["400", "500", "600", "1,000"], a: 2, e: "0 + 2,000 x 0.10 + 2,000 x 0.20 = 200 + 400 = 600 Birr." }
      ]
    }
  ]
};
