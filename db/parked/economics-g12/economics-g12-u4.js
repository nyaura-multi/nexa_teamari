module.exports = {
  subject: "economics", grade: 12, unitNo: 4,
  unitTitle: "Macroeconomic Policy Instruments",
  topics: [
    {
      section: "4.1", name: "Definition and Types of Macroeconomic Policies",
      description: "Why governments use macroeconomic policy, its general objectives, and the four main policy types.",
      lesson: {
        objectives: [
          "Explain why governments adopt macroeconomic policies.",
          "State the general objectives of macroeconomic policy.",
          "Name the four types of macroeconomic policy."
        ],
        sections: [
          { heading: "Why policy is needed", body: [
            "The economy does not always run smoothly. In a recession, national income, output and employment are far below their potential, and machines and factories sit idle. At other times the economy overheats and prices rise. Classical economists expected automatic mechanisms to cure both, but the severe depression of the 1930s showed that these mechanisms do not reliably work. Keynes therefore argued for government intervention using macroeconomic policy tools."
          ]},
          { heading: "Objectives and types", body: [
            "The general objectives are maximum feasible output, a high rate of economic growth, full employment, price stability, equality in the distribution of income and wealth, and a healthy balance of payments. Growth in turn depends on raising saving, investment and capital accumulation, where policy can help.",
            "Four types of policy are used to pursue these objectives: fiscal policy, monetary policy, income policy and foreign exchange policy."
          ]}
        ],
        example: { title: "Worked example: matching problem to policy", steps: [
          "Problem: unemployment is high and output is below potential. Policy goal: raise demand and employment. Tools: lower taxes, more public spending, lower interest rates.",
          "Problem: prices are rising fast. Policy goal: price stability. Tools: higher interest rates, lower spending, wage and price controls.",
          "Problem: a large trade deficit and a shortage of foreign currency. Policy goal: a healthier balance of payments. Tool: exchange rate policy."
        ]},
        key: "Macroeconomic policy aims at growth, full employment, price stability, fair distribution and balance of payments, using fiscal, monetary, income and foreign exchange policy."
      },
      questions: [
        { d: "Easy", q: "Which is NOT one of the four types of macroeconomic policy discussed in this unit?", o: ["Fiscal policy", "Monetary policy", "Income policy", "Marketing policy"], a: 3, e: "The four are fiscal, monetary, income and foreign exchange policies." },
        { d: "Medium", q: "Which of these is a general objective of macroeconomic policy?", o: ["Price stability", "Maximising unemployment", "Raising import prices only", "Removing all taxes"], a: 0, e: "Price stability, full employment and growth are general objectives." },
        { d: "Medium", q: "What did the 1930s depression show about the classical view?", o: ["Recessions always cure themselves quickly", "No automatic mechanism reliably restored stability, supporting government intervention", "Inflation is impossible", "Policy is never useful"], a: 1, e: "The experience of the 1930s led Keynes to argue for active policy." },
        { d: "Hard", q: "An economy has output far below potential and idle factories. This is best described as:", o: ["Overheating", "Recession", "Hyperinflation", "A trade surplus"], a: 1, e: "In recession, output and employment are far below potential levels." }
      ]
    },
    {
      section: "4.2.1", name: "Tools of Fiscal Policy",
      description: "Taxation and government spending as fiscal tools, and the main components of each.",
      lesson: {
        objectives: [
          "Define fiscal policy.",
          "Identify the two key fiscal tools.",
          "List the components of government spending and of tax revenue."
        ],
        sections: [
          { heading: "Fiscal policy and its two tools", body: [
            "Fiscal policy is the government's policy on spending and revenue (taxes) used to achieve desired objectives. Its two key tools are taxation and government spending. Taxes change people's disposable income and so their consumption, which changes real GDP. Spending on welfare, salaries, subsidies and infrastructure can directly raise or lower real GDP."
          ]},
          { heading: "Components of spending", body: [
            "Government spending has four main components. Government purchases (G) are spending on final goods and services, including public servants' salaries and investment projects. Transfer payments are direct payments to individuals, such as unemployment benefits or welfare, for which no good or service is received in return. Grants in aid are assistance from the national government to lower levels of government. Net interest payments are interest paid on government debt, less interest the government receives."
          ]},
          { heading: "Components of revenue", body: [
            "Tax revenue comes mainly from personal taxes (income and property taxes), social insurance contributions (a fixed percentage of wages up to a cap), taxes on production and imports (sales taxes and tariffs on imported goods) and corporate taxes (taxes on business profits)."
          ]}
        ],
        example: { title: "Worked example: the budget balance", steps: [
          "In a year, a government collects tax revenue of 500 billion Birr.",
          "It spends 420 on goods and services, 90 on transfer payments and 30 on net interest, so total spending is 540.",
          "Budget balance = revenue - spending = 500 - 540 = -40, a budget deficit of 40 billion Birr.",
          "To reduce the deficit the government could raise taxes or cut spending, both of which would also lower aggregate demand."
        ]},
        key: "Fiscal policy uses government spending and taxation. Spending includes purchases, transfer payments, grants in aid and net interest."
      },
      questions: [
        { d: "Easy", q: "Fiscal policy refers to government policy on:", o: ["The money supply", "Spending and taxation", "Exchange rates only", "Wages only"], a: 1, e: "Fiscal policy is the expenditure and revenue policy of the government." },
        { d: "Medium", q: "Unemployment benefits paid to individuals with no good or service in return are:", o: ["Government purchases", "Transfer payments", "Grants in aid", "Net interest"], a: 1, e: "Direct payments to individuals without goods or services in return are transfer payments." },
        { d: "Medium", q: "Tariffs on imported goods belong to which category of tax revenue?", o: ["Personal taxes", "Corporate taxes", "Taxes on production and imports", "Social insurance contributions"], a: 2, e: "Sales taxes and tariffs are taxes on production and imports." },
        { d: "Hard", q: "Revenue is 600 and total spending is 650. The budget balance is:", o: ["A surplus of 50", "A deficit of 50", "A deficit of 1,250", "Balanced"], a: 1, e: "600 - 650 = -50, a deficit of 50." }
      ]
    },
    {
      section: "4.2.2", name: "Expansionary and Contractionary Fiscal Policy",
      description: "How governments use spending and taxes to fight recessions and inflation.",
      lesson: {
        objectives: [
          "Distinguish expansionary from contractionary fiscal policy.",
          "State when each is appropriate.",
          "Show their effect on aggregate demand using the AD-AS model."
        ],
        sections: [
          { heading: "Expansionary fiscal policy", body: [
            "When aggregate demand falls short of full-employment output, there is deficient demand: unemployment rises and prices and incomes fall. Expansionary fiscal policy raises demand by increasing government spending (for example public works such as roads, bridges and railways, or free education and health services) and by cutting taxes, especially on lower incomes, so that people have more disposable income to spend. In the AD-AS model, the recession equilibrium lies below potential GDP, and tax cuts or more spending shift AD right toward potential GDP."
          ]},
          { heading: "Contractionary fiscal policy", body: [
            "When aggregate demand exceeds the output available at full employment, there is excess demand, which causes inflation and an overheating economy. Contractionary fiscal policy reduces spending on public works and raises taxes, which withdraws purchasing power and cuts demand. In the AD-AS model, AD shifts left so that equilibrium returns to potential GDP.",
            "Care is needed: the revenue measures should not harm production and savings."
          ]}
        ],
        example: { title: "Worked example: closing a gap", steps: [
          "Potential GDP is 700, but equilibrium output is 600 and unemployment is high. This is a recessionary gap.",
          "The government cuts income taxes and raises infrastructure spending, so AD shifts right.",
          "Output rises toward 700 and unemployment falls. Prices also rise somewhat.",
          "If instead equilibrium output were 750 with rising inflation, a tax rise and spending cut would shift AD left toward 700."
        ]},
        key: "Expansionary fiscal policy (more spending, lower taxes) fights recession; contractionary fiscal policy (less spending, higher taxes) fights inflation."
      },
      questions: [
        { d: "Easy", q: "To fight a recession, a government would use:", o: ["Higher taxes and lower spending", "Lower taxes and higher spending", "Price controls only", "A higher reserve ratio"], a: 1, e: "Expansionary fiscal policy raises demand through spending increases and tax cuts." },
        { d: "Medium", q: "Excess demand and inflation call for:", o: ["Expansionary fiscal policy", "Contractionary fiscal policy", "No policy", "More public works"], a: 1, e: "Contractionary policy reduces spending and raises taxes to cut demand." },
        { d: "Medium", q: "In the AD-AS model, a tax cut during a recession shifts:", o: ["AD left", "AD right", "LRAS left", "SRAS left"], a: 1, e: "Higher disposable income raises consumption and shifts AD right." },
        { d: "Hard", q: "Equilibrium output is 760 and potential GDP is 700, with rising prices. The best fiscal response is to:", o: ["Cut taxes", "Increase public works", "Cut government spending or raise taxes", "Do nothing"], a: 2, e: "Output above potential is an inflationary gap, so contractionary fiscal policy is needed." }
      ]
    },
    {
      section: "4.3.1", name: "Tools of Monetary Policy",
      description: "The National Bank's three tools: open market operations, the discount rate and the required reserve ratio.",
      lesson: {
        objectives: [
          "Define monetary policy and say who conducts it.",
          "Describe open market operations, the discount rate and the required reserve ratio.",
          "Explain how each affects the money supply."
        ],
        sections: [
          { heading: "What monetary policy is", body: [
            "Monetary policy is the set of actions taken by a country's central bank (the National Bank of Ethiopia in Ethiopia) to control the quantity of money and interest rates, aiming at goals such as controlling inflation and supporting growth. The central bank influences the money supply indirectly, by changing the monetary base or the reserve ratio."
          ]},
          { heading: "The three tools", body: [
            "Open market operations (OMO) are the central bank's purchases and sales of government bonds. When it buys bonds, the Birr it pays raises the monetary base and the money supply. When it sells bonds, it takes Birr out of circulation, reducing the money supply.",
            "The discount rate is the interest rate the central bank charges banks that borrow from it. A lower rate lets banks borrow more and lend more; a higher rate has the opposite effect.",
            "The required reserve ratio (RRR) is the share of deposits that banks must hold in reserve. Lowering it frees funds for lending; raising it cuts lending capacity and slows money supply growth. For example, the textbook notes that the National Bank of Ethiopia cut the minimum reserve from 15% to 10% in January 2012 to encourage lending, particularly to exporters."
          ]}
        ],
        example: { title: "Worked example: cutting the reserve ratio", steps: [
          "A bank holds deposits of 1,000 million Birr and must keep 15% in reserve: 150 million Birr.",
          "The central bank lowers the required reserve ratio to 10%. Required reserves fall to 100 million Birr.",
          "The bank can now lend an extra 50 million Birr, so credit expands.",
          "If the ratio were raised instead, lending capacity would shrink."
        ]},
        key: "The central bank's three tools are open market operations, the discount rate and the required reserve ratio. Buying bonds, cutting the discount rate and cutting the RRR all expand money."
      },
      questions: [
        { d: "Easy", q: "Who conducts monetary policy in Ethiopia?", o: ["The Ministry of Education", "The National Bank of Ethiopia", "Commercial banks", "The tax authority"], a: 1, e: "The National Bank is the central bank responsible for monetary policy." },
        { d: "Medium", q: "When the central bank buys government bonds from the public, the money supply:", o: ["Falls", "Rises", "Stays the same", "Becomes zero"], a: 1, e: "Payment for bonds adds money to the system, raising the monetary base." },
        { d: "Medium", q: "A bank has deposits of 2,000 and the RRR is 10%. Required reserves are:", o: ["20", "200", "2,000", "1,800"], a: 1, e: "10% of 2,000 = 200." },
        { d: "Hard", q: "Raising the required reserve ratio will most likely:", o: ["Increase banks' lending capacity", "Reduce banks' lending capacity and slow money supply growth", "Lower the discount rate", "Raise government spending"], a: 1, e: "Banks must hold more in reserve and so have less to lend." }
      ]
    },
    {
      section: "4.3.2", name: "Expansionary and Contractionary Monetary Policy",
      description: "Loose and tight monetary policy, their instruments, and why policy should be countercyclical.",
      lesson: {
        objectives: [
          "Distinguish expansionary from contractionary monetary policy.",
          "List the instruments used in each.",
          "Explain countercyclical policy and its risk of overreaction."
        ],
        sections: [
          { heading: "Expansionary (loose) policy", body: [
            "During a slowdown or recession with high unemployment, the central bank can lower interest rates and increase the money supply. Its instruments are: reducing the discount rate, buying securities through open market operations, and reducing the required reserve ratio. Lower interest rates make loans cheaper, raising investment and consumer spending, which shifts AD to the right and moves output back toward potential GDP."
          ]},
          { heading: "Contractionary (tight) policy", body: [
            "When excess demand causes inflation, the central bank raises interest rates and slows money supply growth. Its instruments are: raising the discount rate, selling securities through open market operations, and raising the required reserve ratio. Higher rates discourage borrowing and spending, shifting AD left and cooling price pressure, though this can slow growth and raise unemployment."
          ]},
          { heading: "Countercyclical, but with care", body: [
            "Monetary policy should be countercyclical: loosen it when a recession raises unemployment and tighten it when inflation threatens. There is a danger of overreaction. If loose policy goes too far it can trigger inflation; if tight policy goes too far it can start a recession."
          ]}
        ],
        example: { title: "Worked example: choosing the stance", steps: [
          "Economy A: output 600, potential 700, rising unemployment. The central bank lowers the discount rate and buys bonds. Interest rates fall, AD shifts right and output rises toward 700.",
          "Economy B: output 750, potential 700, prices rising quickly. The central bank sells bonds and raises the reserve ratio. Interest rates rise, AD shifts left and output falls toward 700.",
          "In both cases policy moves against the cycle."
        ]},
        key: "Expansionary monetary policy lowers interest rates to fight recession; contractionary policy raises them to fight inflation. Policy should be countercyclical."
      },
      questions: [
        { d: "Easy", q: "Which action is part of expansionary monetary policy?", o: ["Raising the discount rate", "Selling government securities", "Reducing the required reserve ratio", "Raising the reserve ratio"], a: 2, e: "A lower reserve ratio increases banks' capacity to lend." },
        { d: "Medium", q: "To fight inflation caused by excess demand, a central bank would:", o: ["Buy securities and cut the discount rate", "Sell securities and raise the discount rate", "Cut the reserve ratio", "Print more money"], a: 1, e: "Selling securities and raising the rate reduce money and credit." },
        { d: "Medium", q: "Contractionary monetary policy shifts the AD curve:", o: ["Right", "Left", "Upward vertically", "It does not shift"], a: 1, e: "Higher interest rates reduce spending, shifting AD left." },
        { d: "Hard", q: "What is the danger of an overly aggressive loose monetary policy?", o: ["It may trigger inflation", "It always causes deflation", "It removes all unemployment forever", "It lowers government spending"], a: 0, e: "Pushing AD too far right can raise the price level sharply." }
      ]
    },
    {
      section: "4.4", name: "Income Policy, Wages and Price Controls",
      description: "Income policy, minimum wages, and the effects of price ceilings and price floors.",
      lesson: {
        objectives: [
          "Define income policy.",
          "Explain the purpose of minimum wages.",
          "Distinguish price ceilings from price floors and state their effects."
        ],
        sections: [
          { heading: "Income policy", body: [
            "Income policies are economy-wide wage and price controls, most commonly introduced in response to inflation, usually seeking to set wages and prices below free-market levels. They range from voluntary guidelines to mandatory freezes. Governments can use them if restrictive fiscal and monetary policies fail to reduce rising prices. In a free labour market, the wage is set where labour supply meets labour demand."
          ]},
          { heading: "Minimum wages", body: [
            "A minimum wage is a legal price floor on pay: the lowest wage an employer may pay, which cannot be reduced by agreement. Its purpose is to protect workers from unduly low pay, help ensure a fair share of progress and a living wage, and contribute to reducing poverty and inequality, including between men and women."
          ]},
          { heading: "Price ceilings and floors", body: [
            "A price ceiling is a legal maximum price, set below the equilibrium price, usually for staples such as food or energy. It causes a shortage. A price floor is a legal minimum price and is only effective if set above equilibrium. It causes a surplus (excess supply), transfers some consumer surplus to producers and creates a deadweight loss. Minimum wage laws are an example of a price floor."
          ]}
        ],
        example: { title: "Worked example: ceiling and floor", steps: [
          "The market equilibrium price of a staple is 20 Birr, where 100 units are demanded and supplied.",
          "A ceiling at 15 Birr: quantity demanded rises to 120 but quantity supplied falls to 80. Shortage = 120 - 80 = 40 units.",
          "A floor at 25 Birr: quantity demanded falls to 80 and quantity supplied rises to 120. Surplus = 120 - 80 = 40 units.",
          "A ceiling below equilibrium creates shortages; a floor above equilibrium creates surpluses."
        ]},
        key: "A price ceiling below equilibrium causes a shortage; a price floor above equilibrium causes a surplus. A minimum wage is a price floor on labour."
      },
      questions: [
        { d: "Easy", q: "A legal maximum price set below the equilibrium price is a:", o: ["Price floor", "Price ceiling", "Subsidy", "Tariff"], a: 1, e: "A price ceiling caps the price." },
        { d: "Medium", q: "A binding price ceiling causes:", o: ["A surplus", "A shortage", "No change", "A permanent fall in demand"], a: 1, e: "Quantity demanded exceeds quantity supplied at the capped price." },
        { d: "Medium", q: "A minimum wage is an example of:", o: ["A price ceiling", "A price floor", "A tax", "Hyperinflation"], a: 1, e: "It sets a legal minimum price for labour." },
        { d: "Hard", q: "A price floor set BELOW the equilibrium price will:", o: ["Cause a surplus", "Cause a shortage", "Have no effect, as it is not binding", "Double the price"], a: 2, e: "A floor must be above equilibrium to be effective." }
      ]
    },
    {
      section: "4.5.1", name: "Exchange Rate Policies",
      description: "How exchange rates work, fixed and flexible regimes, and how currency changes affect trade.",
      lesson: {
        objectives: [
          "Define the exchange rate and the foreign exchange market.",
          "Distinguish fixed from flexible exchange rate policies.",
          "Distinguish devaluation and revaluation from depreciation and appreciation.",
          "Explain how a currency's value affects exports and imports."
        ],
        sections: [
          { heading: "The exchange rate", body: [
            "An exchange rate is the price of one currency in terms of another, so it can be analysed with supply and demand in the foreign exchange market. Participants include firms in international trade, tourists, and investors buying foreign firms or financial assets. Someone who demands one currency supplies another: an Ethiopian exporter earns dollars but needs Birr to pay workers, so supplies dollars and demands Birr."
          ]},
          { heading: "Fixed and flexible regimes", body: [
            "Under a fixed exchange rate policy the government decides the rate. A change made by the government is a devaluation (lowering the currency's official value) or a revaluation (raising it). An undervalued rate acts like an import tax and export subsidy; an overvalued rate does the reverse. Fixed rates can create a parallel (black) market.",
            "Under a flexible (floating) policy, the rate is set by supply and demand. A fall in the currency's value due to market forces is a depreciation; a rise is an appreciation."
          ]},
          { heading: "Effects and trade-offs", body: [
            "A depreciation or devaluation makes exports cheaper for foreigners and imports dearer at home, which tends to improve the trade balance. An appreciation or revaluation does the opposite and worsens it.",
            "Fixed rates give certainty and discipline government policy, but need large reserves, can invite speculation and leave little room to respond to shocks. Floating rates absorb external shocks and correct deficits automatically, but can be unstable and prone to speculation."
          ]}
        ],
        example: { title: "Worked example: depreciation and exports", steps: [
          "A coffee exporter sells a bag for 3,000 Birr. At 50 Birr per US dollar, a foreign buyer pays 3,000 / 50 = 60 dollars.",
          "The Birr depreciates to 60 Birr per dollar. The same bag now costs the buyer 3,000 / 60 = 50 dollars.",
          "Ethiopian exports are cheaper abroad, so foreigners may buy more.",
          "Imported goods priced in dollars cost more Birr, so Ethiopians may buy fewer imports. The trade balance tends to improve."
        ]},
        key: "A depreciation or devaluation makes exports cheaper and imports dearer. Fixed rates are set by government; flexible rates are set by the market."
      },
      questions: [
        { d: "Easy", q: "A government deliberately lowering the official value of its currency under a fixed regime is a:", o: ["Depreciation", "Appreciation", "Devaluation", "Revaluation"], a: 2, e: "Devaluation is a government decision under a fixed rate; depreciation is market-driven." },
        { d: "Easy", q: "Under a flexible exchange rate policy, the rate is set by:", o: ["The government", "Supply and demand in the foreign exchange market", "The tax authority", "Commercial banks alone"], a: 1, e: "Market forces determine a floating rate." },
        { d: "Medium", q: "A currency depreciation tends to:", o: ["Make exports dearer and imports cheaper", "Make exports cheaper and imports dearer", "Leave trade unchanged", "Cut the money supply"], a: 1, e: "Foreigners find exports cheaper; residents find imports more expensive." },
        { d: "Medium", q: "Which is an advantage of a fixed exchange rate?", o: ["Certainty for traders and investors", "No need for reserves", "Automatic correction of deficits", "Freedom from policy discipline"], a: 0, e: "Fixed rates give certainty and constrain irresponsible policy." },
        { d: "Hard", q: "An export priced at 4,000 Birr is bought by a foreigner at 40 Birr per dollar. If the Birr falls to 50 Birr per dollar, the dollar price becomes:", o: ["100 dollars", "80 dollars", "125 dollars", "160 dollars"], a: 1, e: "At 40 per dollar: 4,000 / 40 = 100. At 50 per dollar: 4,000 / 50 = 80, so it is cheaper." }
      ]
    },
    {
      section: "4.5.2", name: "Determinants of Exchange Rates and Ethiopia's Experience",
      description: "What moves exchange rates, and how Ethiopia's exchange rate policy has evolved.",
      lesson: {
        objectives: [
          "List the main factors that affect exchange rates.",
          "Describe the main stages of Ethiopia's exchange rate policy."
        ],
        sections: [
          { heading: "What moves exchange rates", body: [
            "Inflation: a country with lower inflation than others sees its currency appreciate; higher inflation tends to cause depreciation. Interest rates: higher rates attract foreign capital and raise the currency's value. Balance of payments: a current account deficit tends to cause depreciation. Government debt: heavy debt makes foreign capital less likely to come and can weaken the currency. Terms of trade (export prices relative to import prices): an improvement raises demand for the currency. Political stability and performance: stable countries attract investors. Recession: tends to lower interest rates and weaken the currency. Speculation: expecting a currency to rise increases demand for it."
          ]},
          { heading: "Ethiopia's exchange rate history", body: [
            "The Birr was introduced in 1945 at 2.48 Birr per US dollar and remained under a fixed arrangement for years, with small changes in 1964, 1971 and 1973. From 1973 it was pegged at 2.07 Birr per dollar until October 1992, when it was devalued by 140% to 5 Birr per dollar. In 1993 the National Bank introduced an auction-based exchange rate, unified with the official rate in 1995, and in 1998 it set up an interbank foreign exchange market. Today the rate is set daily in the interbank market, reflecting a gradual approach to liberalisation.",
            "The textbook also records devaluations in August 2010 (by 20% to 16.35 Birr per dollar) and on 10 October 2017 (by 15%) to boost exports, ease foreign exchange shortages and reduce the black market. It notes that inflation in Ethiopia has tended to rise after devaluations."
          ]}
        ],
        example: { title: "Worked example: predicting a currency move", steps: [
          "Country A has inflation of 3% and Country B has inflation of 15%, other things equal.",
          "Goods from A are becoming relatively cheaper, so demand for A's currency rises.",
          "B's currency is expected to depreciate against A's.",
          "If B's central bank then raises interest rates, capital inflows may support B's currency, partly offsetting the effect."
        ]},
        key: "Inflation, interest rates, the balance of payments, debt, terms of trade, political stability, recession and speculation all affect exchange rates."
      },
      questions: [
        { d: "Easy", q: "A country with consistently lower inflation than its trading partners will usually see its currency:", o: ["Depreciate", "Appreciate", "Disappear", "Stay fixed by law"], a: 1, e: "Lower inflation keeps its goods competitive, supporting currency value." },
        { d: "Medium", q: "Higher interest rates tend to cause a currency to appreciate because they:", o: ["Lower government debt", "Attract foreign capital", "Reduce exports", "Raise inflation"], a: 1, e: "Higher returns attract foreign capital, raising demand for the currency." },
        { d: "Medium", q: "In October 1992, Ethiopia devalued the Birr from 2.07 to about:", o: ["2.50 per dollar", "5 Birr per dollar", "13.63 Birr per dollar", "30 Birr per dollar"], a: 1, e: "The 1992 devaluation of 140% moved the rate to 5 Birr per dollar." },
        { d: "Hard", q: "An improvement in a country's terms of trade (export prices rising faster than import prices) tends to:", o: ["Depreciate its currency", "Appreciate its currency", "Have no effect", "Cause a fixed exchange rate"], a: 1, e: "Higher export revenue raises demand for the currency and its value." }
      ]
    }
  ]
};
