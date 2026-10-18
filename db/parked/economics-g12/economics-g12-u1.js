module.exports = {
  subject: "economics", grade: 12, unitNo: 1,
  unitTitle: "The Fundamental Concepts of Macroeconomics",
  topics: [
    {
      section: "1.1", name: "Definition and Focus Areas of Macroeconomics",
      description: "How macroeconomics differs from microeconomics, what it studies, and how GDP and GNP are measured.",
      lesson: {
        objectives: [
          "Explain the difference between microeconomics and macroeconomics.",
          "List the main focus areas and goals of macroeconomics.",
          "Distinguish GDP from GNP and state how they are related.",
          "Name the three approaches used to measure GDP."
        ],
        sections: [
          { heading: "Micro versus macro", body: [
            "Microeconomics studies the decisions of individual economic units such as households, firms and governments. Macroeconomics steps back and studies the economy as a whole: the total level of output, prices and employment. The word macro comes from a Greek word meaning large.",
            "Macroeconomics grew into a distinct branch after John Maynard Keynes published The General Theory of Employment, Interest and Money in 1936. The two branches are complementary: one looks at the individual parts, the other at the whole system."
          ]},
          { heading: "Focus areas and goals", body: [
            "Macroeconomics looks at economic growth, employment, inflation, the distribution of income, macroeconomic policy and international trade. These link to its goals: faster growth, full employment, stable prices, a manageable budget and trade balance, and a fair distribution of income.",
            "A country's macroeconomic health is judged through variables such as GDP, the unemployment rate and the inflation rate."
          ]},
          { heading: "Measuring output: GDP and GNP", body: [
            "GDP is the market value of all final goods and services produced within a country in a year. GNP counts the final output produced by a country's own factors of production, wherever in the world they operate. The two are related by GNP = GDP + NFI, where NFI is net factor income from abroad (income citizens earn abroad minus income paid to foreigners).",
            "GDP can be measured three ways: the product (value added) approach, which adds the value of final output of each sector; the expenditure approach, which adds C + I + G + net exports; and the income approach, which adds all incomes earned by factors of production. Only final goods are counted, to avoid double counting. Nominal GDP uses current prices, while real GDP uses the prices of a base year, so it shows changes in output rather than in prices."
          ]}
        ],
        example: { title: "Worked example: GDP and GNP", steps: [
          "An economy has household consumption C = 800, investment I = 300, government purchases G = 250, exports = 200 and imports = 150 (all in billion Birr).",
          "Net exports = exports - imports = 200 - 150 = 50.",
          "Expenditure approach: GDP = C + I + G + NE = 800 + 300 + 250 + 50 = 1,400.",
          "Citizens earn 40 from abroad and foreigners earn 70 in this country, so NFI = 40 - 70 = -30.",
          "GNP = GDP + NFI = 1,400 + (-30) = 1,370."
        ]},
        key: "Macroeconomics studies the economy as a whole. GDP measures output produced inside a country; GNP = GDP + net factor income from abroad."
      },
      questions: [
        { d: "Easy", q: "Which statement best describes macroeconomics?", o: ["The study of how one household decides what to buy", "The study of the whole economy, such as total output, prices and employment", "The study of how a single firm sets its prices", "The study of government budgets only"], a: 1, e: "Macroeconomics deals with aggregate behaviour of the whole economy, while microeconomics deals with individual units." },
        { d: "Easy", q: "Macroeconomics emerged as a distinct branch after the publication of which work?", o: ["Das Kapital (1867)", "Principles of Economics (1890)", "The General Theory of Employment, Interest and Money (1936)", "The Wealth of Nations (1776)"], a: 2, e: "Keynes's The General Theory (1936) is the work associated with the emergence of modern macroeconomics." },
        { d: "Medium", q: "A country's GDP is 1,000 and its net factor income from abroad is -50. What is its GNP?", o: ["1,050", "950", "1,000", "50"], a: 1, e: "GNP = GDP + NFI = 1,000 + (-50) = 950." },
        { d: "Medium", q: "Which approach to measuring GDP adds consumption, investment, government purchases and net exports?", o: ["The product (value added) approach", "The income approach", "The expenditure approach", "The nominal approach"], a: 2, e: "The expenditure approach sums C + I + G + (exports - imports)." },
        { d: "Hard", q: "Why does real GDP give a better picture of output growth than nominal GDP?", o: ["It ignores the production of services", "It is measured at the prices of a base year, so price changes do not distort it", "It includes only exports", "It is always larger than nominal GDP"], a: 1, e: "Real GDP holds prices constant at a base year, so a rise in real GDP reflects more output, not just higher prices." }
      ]
    },
    {
      section: "1.2.1", name: "Economic Growth",
      description: "What economic growth is, how it is measured, and why GDP alone is not a full measure of development.",
      lesson: {
        objectives: [
          "Define economic growth and the economic growth rate.",
          "Explain why measuring income is difficult in developing countries.",
          "Explain why real per capita income is a better measure than total GNP.",
          "Describe the Human Development Index."
        ],
        sections: [
          { heading: "What is economic growth?", body: [
            "Economic growth is an increase in an economy's capacity to produce goods and services. The economic growth rate is the rate at which real GDP increases over a period. Higher growth comes from more or more productive labour, land and capital, backed by institutions such as the rule of law and protected property rights.",
            "Growth matters because higher GDP per capita is linked to a better diet, better health, longer life expectancy and more educational opportunity."
          ]},
          { heading: "Problems with measuring growth", body: [
            "Income is often understated in developing countries: many people are subsistence farmers whose output is not recorded, income is under-reported to avoid tax, non-monetary activity is left out, prices are distorted, and the cost of pollution is not deducted.",
            "Simple growth in national income also has two weaknesses. It changes when prices change, so it must be adjusted to real terms, and it ignores population growth. That is why economists use real per capita income, which is total real GNP divided by population."
          ]},
          { heading: "Beyond income: the HDI", body: [
            "Per capita income is an average, and averages hide how income is distributed. The Human Development Index, developed by the UNDP and sometimes called the quality of life index, combines non-monetary indicators such as education, health and living standards into one composite figure."
          ]}
        ],
        example: { title: "Worked example: growth rate", steps: [
          "Real GDP was 2,000 billion Birr last year and is 2,120 billion Birr this year.",
          "Change in real GDP = 2,120 - 2,000 = 120.",
          "Growth rate = (120 / 2,000) x 100 = 6%.",
          "If population grew by 2%, real per capita income grew by only about 4%, which is why per capita figures tell a more honest story."
        ]},
        key: "Economic growth is a rise in real GDP over time. Real per capita income and the HDI give a fuller picture of living standards than total GDP."
      },
      questions: [
        { d: "Easy", q: "The rate at which a country's real GDP increases over a period is called the:", o: ["Inflation rate", "Economic growth rate", "Unemployment rate", "Exchange rate"], a: 1, e: "The economic growth rate is the percentage increase in real GDP over time." },
        { d: "Medium", q: "Which is a reason national income may be understated in developing countries?", o: ["Most output is exported", "Many people are subsistence farmers whose output is not recorded", "Prices are perfectly stable", "All incomes are fully taxed"], a: 1, e: "Subsistence output for own consumption, under-reporting and a large non-monetary sector all lead to understatement." },
        { d: "Medium", q: "Why is real per capita income preferred to total GNP as a growth measure?", o: ["It adjusts for price changes and population growth", "It is always higher", "It ignores inflation", "It only counts exports"], a: 0, e: "Real per capita income removes price effects and divides by population, so it better reflects average living standards." },
        { d: "Hard", q: "The Human Development Index differs from per capita income mainly because it:", o: ["Counts only monetary income", "Combines non-monetary indicators such as education and health into one index", "Is calculated by each country's central bank", "Ignores quality of life"], a: 1, e: "The HDI, from the UNDP, is a composite index built from non-monetary indicators like education and health." }
      ]
    },
    {
      section: "1.2.2", name: "Inflation",
      description: "Inflation, the consumer price index, how to calculate the inflation rate, and the types and causes of inflation.",
      lesson: {
        objectives: [
          "Define inflation, deflation and the inflation rate.",
          "Calculate the CPI and the inflation rate from price data.",
          "Classify inflation by speed.",
          "Explain how money printing can cause inflation."
        ],
        sections: [
          { heading: "What inflation is", body: [
            "Inflation is a continuous rise in the general price level; a fall in the general price level is deflation. The inflation rate is the percentage change in the price level from one period to the next. When prices rise, money buys less: inflation raises the cost of living and lowers the purchasing power of currency. If wages do not rise as fast as prices, the real wage falls.",
            "Some governments index wages, contracts and interest rates to inflation so that they rise with prices."
          ]},
          { heading: "The CPI and the inflation rate", body: [
            "The consumer price index (CPI) tracks the cost of a typical basket of goods bought by consumers. CPI = (cost of the basket in the current year / cost in the base year) x 100. The inflation rate between two years is (CPI this year - CPI last year) / CPI last year x 100. A negative result means deflation."
          ]},
          { heading: "Types of inflation", body: [
            "By speed: creeping inflation is about 3% or less a year; walking inflation is 3% to under 10%; running inflation is 10% to 20%; galloping inflation reaches double or triple digits; hyperinflation exceeds 50% per month. By cause, inflation may be demand-pull or cost-push, among others.",
            "Governments that print money to pay their bills increase the money supply and cause inflation. This works like an inflation tax on everyone holding money. Wars, large deficits and loss of confidence in government debt often push governments in this direction."
          ]}
        ],
        example: { title: "Worked example: CPI and inflation rate", steps: [
          "A basket costs 500 Birr in the base year, 600 Birr in year 2 and 690 Birr in year 3.",
          "CPI year 1 = (500 / 500) x 100 = 100. CPI year 2 = (600 / 500) x 100 = 120. CPI year 3 = (690 / 500) x 100 = 138.",
          "Inflation, year 1 to 2 = (120 - 100) / 100 x 100 = 20%.",
          "Inflation, year 2 to 3 = (138 - 120) / 120 x 100 = 15%.",
          "Prices rose in both years, but more slowly in year 3, so inflation fell even though the CPI kept rising."
        ]},
        key: "Inflation is a sustained rise in the general price level, measured by the percentage change in the CPI. It lowers the purchasing power of money."
      },
      questions: [
        { d: "Easy", q: "A continuous fall in the general price level is called:", o: ["Inflation", "Hyperinflation", "Deflation", "Stagnation"], a: 2, e: "Deflation is the opposite of inflation: the general price level falls." },
        { d: "Medium", q: "The CPI was 125 last year and is 150 this year. What is the inflation rate?", o: ["25%", "20%", "16.7%", "50%"], a: 1, e: "(150 - 125) / 125 x 100 = 20%." },
        { d: "Medium", q: "Inflation of 15% per year would be classified as:", o: ["Creeping inflation", "Walking inflation", "Running inflation", "Hyperinflation"], a: 2, e: "Running inflation is 10% to 20% per year." },
        { d: "Hard", q: "Why is printing money to finance government spending described as an inflation tax?", o: ["It raises income tax rates", "Higher prices reduce the real value of money held by everyone", "It reduces the money supply", "It is collected by the tax authority as a fee"], a: 1, e: "More money chasing the same goods raises prices, so holders of money lose purchasing power, as if taxed." }
      ]
    },
    {
      section: "1.2.3", name: "Unemployment",
      description: "Who counts as unemployed, the labour force and unemployment rate, and the main types of unemployment.",
      lesson: {
        objectives: [
          "Distinguish the employed, the unemployed and those outside the labour force.",
          "Calculate the unemployment rate and the labour-force participation rate.",
          "Explain frictional, cyclical and structural unemployment.",
          "Define underemployment."
        ],
        sections: [
          { heading: "Measuring unemployment", body: [
            "A person is employed if they spend some time in paid work. A person is unemployed if they have no job and are looking for one, or are on temporary layoff. People who are neither, such as full-time students and retirees, are outside the labour force. In Ethiopia, people aged 14 to 60 are considered of working age.",
            "The labour force is the employed plus the unemployed. The unemployment rate is the share of the labour force that is unemployed. The labour-force participation rate is the share of the adult population that is in the labour force."
          ]},
          { heading: "Why it matters", body: [
            "Unemployment hits people more directly than most macroeconomic problems. For society, it wastes resources: the opportunity cost is the output the unemployed could have produced. That is why low unemployment is a public policy priority."
          ]},
          { heading: "Types of unemployment", body: [
            "Frictional unemployment arises while workers move between jobs or search for a first job, because matching workers and vacancies takes time. Cyclical unemployment comes from too little aggregate demand during a recession or depression. Structural unemployment comes from a mismatch between the skills workers have and the skills employers need, or from labour growing faster than capital can absorb. Education and retraining reduce it.",
            "Underemployment is when people take jobs that do not use their training, or work full time but earn too little to rise above poverty."
          ]}
        ],
        example: { title: "Worked example: unemployment rate", steps: [
          "In a town, the adult population is 10,000. There are 6,000 employed, 1,000 unemployed and 3,000 outside the labour force.",
          "Labour force = employed + unemployed = 6,000 + 1,000 = 7,000.",
          "Unemployment rate = 1,000 / 7,000 x 100 = 14.3%.",
          "Participation rate = 7,000 / 10,000 x 100 = 70%.",
          "The 3,000 students, retirees and others outside the labour force are not counted as unemployed."
        ]},
        key: "Unemployment rate = unemployed / labour force x 100. The labour force is employed plus unemployed; students and retirees are outside it."
      },
      questions: [
        { d: "Easy", q: "Which person is counted as outside the labour force?", o: ["A graduate searching for a job", "A worker on temporary layoff", "A full-time student not looking for work", "A farmer employed for pay"], a: 2, e: "Full-time students and retirees are neither employed nor looking for work, so they are not in the labour force." },
        { d: "Medium", q: "A country has 80 employed, 20 unemployed and 50 people outside the labour force. What is the unemployment rate?", o: ["25%", "20%", "40%", "14.3%"], a: 1, e: "Labour force = 80 + 20 = 100. Unemployment rate = 20 / 100 x 100 = 20%." },
        { d: "Medium", q: "Workers laid off because aggregate demand falls in a recession experience:", o: ["Frictional unemployment", "Structural unemployment", "Cyclical unemployment", "Voluntary unemployment"], a: 2, e: "Cyclical unemployment is caused by insufficient aggregate demand during downturns." },
        { d: "Hard", q: "A recent graduate takes three months to find a first job. This is mainly:", o: ["Cyclical unemployment", "Frictional unemployment", "Disguised unemployment", "Structural unemployment caused by lack of skills"], a: 1, e: "Time spent searching and matching to a first job is frictional unemployment." }
      ]
    },
    {
      section: "1.2.4", name: "The Business Cycle",
      description: "The four phases of the business cycle and why economies fluctuate around a long-term growth trend.",
      lesson: {
        objectives: [
          "Define the business cycle.",
          "Describe expansion, peak, contraction and trough.",
          "Explain why policymakers try to smooth the cycle."
        ],
        sections: [
          { heading: "Ups and downs in output", body: [
            "Economic growth does not move in a straight line. The business cycle, also called the trade or economic cycle, is the pattern of expansions and contractions in GDP and economic activity around a long-term growth trend. The swings recur, but they are not regular or predictable."
          ]},
          { heading: "The four phases", body: [
            "In an expansion, employment and output rise and prices tend to rise. The peak is the highest point, with output at its maximum, full employment and visible inflationary pressure. In a contraction, growth slows, unemployment rises and price pressures ease. The trough is the bottom, after which a new expansion begins.",
            "Just as Egypt uses the Aswan Dam to control the flooding of the Nile, modern governments use economic policy to try to control the business cycle."
          ]}
        ],
        example: { title: "Worked example: naming the phase", steps: [
          "Case A: GDP is growing quickly, firms are hiring and prices are starting to rise. This is an expansion.",
          "Case B: output is at its highest level, unemployment is very low and inflation is increasing. This is a peak.",
          "Case C: GDP growth slows, firms lay off workers and unemployment rises. This is a contraction.",
          "Case D: output has stopped falling and is at its lowest point before recovery. This is a trough."
        ]},
        key: "The business cycle has four phases: expansion, peak, contraction and trough. Fluctuations recur but are neither regular nor predictable."
      },
      questions: [
        { d: "Easy", q: "Which is NOT one of the four phases of the business cycle?", o: ["Expansion", "Peak", "Inflation", "Trough"], a: 2, e: "The four phases are expansion, peak, contraction and trough. Inflation is a separate macroeconomic variable." },
        { d: "Medium", q: "During which phase is the economy producing at its maximum output with strong inflationary pressure?", o: ["Trough", "Contraction", "Peak", "Early expansion"], a: 2, e: "At the peak, output and employment are at their highest and price pressures are evident." },
        { d: "Medium", q: "The lowest point of the cycle, after which recovery begins, is the:", o: ["Peak", "Trough", "Boom", "Recession"], a: 1, e: "The trough is the bottom from which the next expansion emerges." },
        { d: "Hard", q: "Which statement about business cycles is correct?", o: ["They follow an exact, predictable schedule", "They are fluctuations of output around a long-term growth trend that recur irregularly", "They only affect developing countries", "They end permanently once a country reaches full employment"], a: 1, e: "Cycles recur but their timing and size are not regular or predictable." }
      ]
    },
    {
      section: "1.2.5", name: "Balance of Trade",
      description: "Trade surplus, trade deficit, and how the balance of trade fits into the balance of payments.",
      lesson: {
        objectives: [
          "Define the balance of trade and distinguish a surplus from a deficit.",
          "Explain how the balance of trade relates to the balance of payments.",
          "Discuss when a trade deficit is a problem."
        ],
        sections: [
          { heading: "Surplus, deficit and balance", body: [
            "The balance of trade is the difference between a country's exports and imports of goods and services over a period. If exports exceed imports there is a trade surplus; if imports exceed exports there is a trade deficit; if they are equal, trade is balanced. In 2020, for example, Ethiopia ran a trade deficit of about US$10.7 billion, while China had a surplus of about US$535 billion."
          ]},
          { heading: "Balance of payments", body: [
            "The balance of payments is the systematic record of a nation's financial transactions with the rest of the world. It has a current account (exports and imports of goods and services, investment income, debt service, remittances and transfers) and a capital account (private foreign investment and public grants and loans). The balance of trade is an important part of the current account."
          ]},
          { heading: "Is a deficit always bad?", body: [
            "Many countries seek surpluses, but some deficit is tolerable when it reflects imports of capital equipment that raise future productivity. Large, persistent deficits are risky: if foreign investors lose confidence and withdraw their money, a country can fall into deep recession, as Mexico did in 1995 and several East Asian countries in 1997-1998. Foreign trade still brings real benefits, such as access to goods the country cannot produce efficiently."
          ]}
        ],
        example: { title: "Worked example: trade balance", steps: [
          "A country exports goods worth US$4.0 billion and imports goods worth US$6.5 billion.",
          "Trade balance = exports - imports = 4.0 - 6.5 = -2.5 billion.",
          "The negative result means a trade deficit of US$2.5 billion.",
          "If the imports were mainly machinery that raises future output, the deficit may be less worrying than if they were mostly consumer goods."
        ]},
        key: "Trade balance = exports - imports. A surplus means exports exceed imports; a deficit means imports exceed exports."
      },
      questions: [
        { d: "Easy", q: "A country whose exports exceed its imports has a:", o: ["Trade deficit", "Trade surplus", "Balanced budget", "Capital account deficit"], a: 1, e: "Exports greater than imports is a trade surplus." },
        { d: "Medium", q: "Exports are US$12 billion and imports are US$15 billion. The trade balance is:", o: ["+3 billion (surplus)", "-3 billion (deficit)", "+27 billion", "0"], a: 1, e: "12 - 15 = -3, a deficit of US$3 billion." },
        { d: "Medium", q: "Which account of the balance of payments records exports and imports of goods and services?", o: ["The capital account", "The current account", "The savings account", "The budget account"], a: 1, e: "The current account includes trade in goods and services, investment income and transfers." },
        { d: "Hard", q: "Under which circumstance is a trade deficit most easily justified?", o: ["Imports are mostly luxury consumer goods", "Imports are mostly capital equipment that will raise productivity and output", "Foreign investors are withdrawing their money", "Exports are falling because of lower quality"], a: 1, e: "A deficit that finances capital equipment can boost future productivity and output." }
      ]
    },
    {
      section: "1.3", name: "Schools of Thought in Macroeconomics",
      description: "The classical, neoclassical, Keynesian, monetarist, new classical and new Keynesian views and how they differ.",
      lesson: {
        objectives: [
          "Describe the classical and neoclassical view of the economy.",
          "Explain why the Great Depression led to Keynesian economics.",
          "Contrast Keynesian and monetarist views on policy.",
          "Outline the new classical and new Keynesian schools."
        ],
        sections: [
          { heading: "Classical and neoclassical", body: [
            "The classical school (Adam Smith, David Ricardo, J.B. Say and others) dominated until the Great Depression. With flexible prices, they argued, the economy quickly returns to full employment by itself, so government should keep a hands-off approach. Supply-siders such as Arthur Laffer, linked to this tradition, favour tax cuts to stimulate the economy.",
            "Neoclassical economics (Walras, Marshall, Pareto) developed in the late 19th and early 20th centuries. It holds that in the long run the economy fluctuates around potential GDP and the natural rate of unemployment, so policy should focus on long-run growth and inflation."
          ]},
          { heading: "Keynesian and monetarist", body: [
            "The Great Depression of the 1930s showed that markets do not always self-correct, and contradicted Say's Law that supply creates its own demand. Keynes argued that output depends on aggregate demand, which can be too low to give full employment, and that wages and prices adjust slowly (they are sticky). He prescribed active fiscal policy to raise demand.",
            "Monetarists, led by Milton Friedman, argued that monetary policy, not fiscal policy, matters. They expected fiscal policy to crowd out private investment, and doubted policymakers could time policy well because of long and variable lags. Friedman proposed a constant growth rule for the money supply."
          ]},
          { heading: "New classical and new Keynesian", body: [
            "The new classicals (Lucas, Sargent, Barro, Prescott) revived flexible prices and wages, using rational expectations and mathematical methods. Their policy ineffectiveness proposition says countercyclical policy either cannot or should not be used.",
            "The new Keynesians (Akerlof, Phelps, Taylor, Fischer, Blanchard, Mankiw) accept rational expectations but stress nominal rigidities such as multi-period wage contracts. These rigidities mean policy can still stabilise the economy."
          ]}
        ],
        example: { title: "Worked example: one recession, different advice", steps: [
          "Suppose an economy falls into recession and unemployment rises.",
          "Classical view: prices and wages will fall and the economy will return to full employment on its own, so do nothing.",
          "Keynesian view: demand is too weak and adjustment is slow, so government should raise spending or cut taxes.",
          "Monetarist view: avoid active fiscal policy; keep the money supply growing at a steady rate.",
          "New Keynesian view: rigid wages and prices justify government stabilisation even when expectations are rational."
        ]},
        key: "Classical economists trust self-correcting markets; Keynesians favour active fiscal policy; monetarists stress money supply rules; new schools refine these views with rational expectations."
      },
      questions: [
        { d: "Easy", q: "Which school held that markets quickly self-correct to full employment, so government should stay hands-off?", o: ["Keynesian", "Classical", "New Keynesian", "Monetarist"], a: 1, e: "Classical economists believed flexible prices restore full employment without intervention." },
        { d: "Medium", q: "Which event most directly undermined classical thinking and led to Keynesian economics?", o: ["The Asian financial crisis", "The Great Depression of the 1930s", "The discovery of oil", "Zimbabwe's hyperinflation"], a: 1, e: "The Great Depression showed that markets did not self-correct and contradicted Say's Law." },
        { d: "Medium", q: "Milton Friedman and the monetarists argued that the central bank should:", o: ["Use active fiscal policy to fight recessions", "Follow a constant growth rule for the money supply", "Abolish money", "Set all prices directly"], a: 1, e: "Friedman suggested a constant growth rule for a monetary aggregate instead of tinkering with monetary policy." },
        { d: "Hard", q: "What do the new Keynesians stress that justifies government stabilisation even under rational expectations?", o: ["Perfectly flexible wages", "Nominal rigidities such as multi-period wage contracts", "The irrelevance of aggregate demand", "The absence of unemployment"], a: 1, e: "Nominal rigidities invalidate the policy ineffectiveness proposition, so stabilisation policy can still work." }
      ]
    }
  ]
};
