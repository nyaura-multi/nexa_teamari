module.exports = {
  subject: "economics", grade: 12, unitNo: 6,
  unitTitle: "Poverty and Inequality",
  topics: [
    {
      section: "6.1.1", name: "The Concept of Poverty",
      description: "Why poverty is multidimensional and how the World Bank defines it.",
      lesson: {
        objectives: [
          "Explain why poverty is multidimensional.",
          "State the World Bank definition of poverty.",
          "Describe three views of wellbeing."
        ],
        sections: [
          { heading: "Poverty in the words of the poor", body: [
            "Poor people describe poverty as hunger, lack of clothing and medicine, low pay and no jobs, and also as having no voice and feeling inferior. These accounts show that poverty is multidimensional: it has many interlocked dimensions, and the bottom line is always hunger.",
            "Prominent dimensions include psychological ones (powerlessness, voicelessness, shame), lack of basic infrastructure such as roads and clean water, poor access to quality education, ill health as a source of destitution, and the struggle to manage physical, human, social and environmental assets when vulnerable."
          ]},
          { heading: "Definitions", body: [
            "Poverty covers both income and non-income deprivation: lack of income and material means, lack of access to services such as education, health and safe water, lack of personal security, and lack of empowerment to take part in decisions that affect one's life. The World Bank (2000) defines poverty as the pronounced deprivation in wellbeing.",
            "Wellbeing can be seen in three ways. The conventional view links it to command over commodities, so the poor are those with too little income or consumption to reach a minimum threshold. A second view ties poverty to specific types of consumption (being food poor or health poor). The broad view focuses on the capability to function in society: a person may lack income, education or health, feel powerless, or lack political freedoms."
          ]}
        ],
        example: { title: "Worked example: looking beyond income", steps: [
          "Household A farms a hectare, keeps animals, sells surplus produce, and can reach a clinic, a school and a market.",
          "Household B lives in a slum with no regular income, struggles to pay for food and rent, and sends only one child to school.",
          "Judged only by income, both may look similar in a bad month, but household B lacks food security, schooling and stable work. Poverty has several dimensions, not one."
        ]},
        key: "Poverty is multidimensional. The World Bank defines it as pronounced deprivation in wellbeing, covering income and non-income dimensions."
      },
      questions: [
        { d: "Easy", q: "Which organisation defines poverty as 'the pronounced deprivation in wellbeing'?", o: ["UNESCO", "The World Bank", "The ILO", "The WTO"], a: 1, e: "The World Bank (2000) gives this definition." },
        { d: "Easy", q: "Saying poverty is multidimensional means that:", o: ["It consists only of low income", "It has many interlocked dimensions, such as hunger, ill health and powerlessness", "It only affects cities", "It cannot be reduced"], a: 1, e: "Poor people describe many linked deprivations, with hunger at the base." },
        { d: "Medium", q: "Which is a psychological dimension of poverty?", o: ["Lack of roads", "Powerlessness and shame", "Inflation", "High exports"], a: 1, e: "Powerlessness, voicelessness, shame and humiliation are psychological dimensions." },
        { d: "Hard", q: "The 'broad approach' to wellbeing focuses mainly on:", o: ["Command over commodities only", "The capability of an individual to function in society", "Government spending only", "The size of the population"], a: 1, e: "The broad approach looks at capabilities, such as education, health and freedom, not only income." }
      ]
    },
    {
      section: "6.1.2", name: "Types of Poverty",
      description: "Relative and absolute poverty, and who the poor usually are.",
      lesson: {
        objectives: [
          "Distinguish relative from absolute poverty.",
          "Explain how absolute poverty is counted.",
          "Describe where the poor are mostly found."
        ],
        sections: [
          { heading: "Relative and absolute poverty", body: [
            "Relative poverty compares a person's standing with others in the economy. Someone can be poor in a relative sense while still meeting basic needs. It is most relevant in societies without acute absolute poverty and is seen as a failure of distributive justice.",
            "Absolute poverty is being unable, or barely able, to meet subsistence essentials such as food, clothing and shelter. It is counted as the number of people below a minimum real income or an international poverty line, such as those living on less than $1.25 or $2 a day in purchasing power parity dollars. It is seen as a failure to meet basic human dignity or human rights."
          ]},
          { heading: "Who are the poor?", body: [
            "Evidence from many developing countries shows the poor are disproportionately in rural areas, mainly engaged in agriculture, more likely to be women and children than adult men, and often concentrated among minority ethnic groups and indigenous peoples. About 80% of target poverty groups live in rural areas in Africa and Asia, and about 50% in Latin America."
          ]}
        ],
        example: { title: "Worked example: absolute or relative?", steps: [
          "A family cannot afford enough food or shelter and lives below an international poverty line: absolute poverty.",
          "A family in a wealthy country meets all basic needs but earns far less than most neighbours: relative poverty.",
          "A government that counts how many people live below a fixed real-income line is measuring absolute poverty."
        ]},
        key: "Absolute poverty is the inability to meet basic needs; relative poverty is being poor compared with others. Most of the poor live in rural areas and are more likely to be women and children."
      },
      questions: [
        { d: "Easy", q: "Being unable to meet food, clothing and shelter needs is:", o: ["Relative poverty", "Absolute poverty", "Inequality", "Underemployment"], a: 1, e: "Absolute poverty is deprivation of basic needs." },
        { d: "Medium", q: "Poverty defined by comparison with other people's standing in the economy is:", o: ["Absolute poverty", "Relative poverty", "Extreme poverty", "Subsistence poverty"], a: 1, e: "Relative poverty is judged against others in society." },
        { d: "Medium", q: "Which statement about the poor in developing countries is supported by the evidence?", o: ["They are mostly urban professionals", "They are disproportionately in rural areas and engaged in agriculture", "They are mostly adult men", "They are evenly spread across sectors"], a: 1, e: "Most of the poor live in rural areas, and women and children are over-represented." },
        { d: "Hard", q: "Relative poverty is mainly viewed as a failure of:", o: ["Distributive justice", "Currency stability", "Tax collection", "Trade balance"], a: 0, e: "Absolute poverty is a failure of basic dignity; relative poverty is a matter of distributive justice." }
      ]
    },
    {
      section: "6.1.3", name: "Measuring Poverty",
      description: "Why and how poverty is measured: the poverty line, headcount index, poverty gap and the Multidimensional Poverty Index.",
      lesson: {
        objectives: [
          "Give reasons for measuring poverty.",
          "List the steps in measuring poverty.",
          "Calculate a headcount ratio and a total poverty gap.",
          "Describe the Multidimensional Poverty Index."
        ],
        sections: [
          { heading: "Why and how", body: [
            "Poverty is measured to keep poor people on the agenda, to identify them so interventions can be targeted, to monitor and evaluate policies and projects, and to judge how effective helping institutions are. Measuring it takes three steps: define an indicator of welfare, set a minimum acceptable standard (the poverty line), and produce a summary statistic from the distribution relative to that line. The usual approach is a fixed consumption-based poverty line, a household survey, and the share of people below the line."
          ]},
          { heading: "Income-based measures", body: [
            "The poverty headcount index (headcount ratio) is H / N: the number of people below the poverty line divided by the total population. The total poverty gap (TPG) is the sum of the shortfalls of all poor people from the line, which is the income needed to lift everyone to the line. The average poverty gap (APG) divides the TPG by the total population. The Foster-Greer-Thorbecke index is a class of absolute poverty measures that also reflects inequality among the poor."
          ]},
          { heading: "The Multidimensional Poverty Index", body: [
            "Income alone cannot capture poverty, so the MPI (used by the UNDP from 2010) combines three dimensions at the household level: health, education and standard of living. Health has two indicators (a child has died; someone is malnourished), each worth one-sixth. Education has two (no one has completed five years of schooling; a school-age child is out of school), each worth one-sixth. Standard of living has six equally weighted deprivations: no electricity, unsafe drinking water, inadequate sanitation, inadequate flooring, unimproved cooking fuel, and not owning more than one of a set of assets. A person is multidimensionally poor under a dual cut-off: below the cut-off in each dimension, and deprived in enough dimensions."
          ]}
        ],
        example: { title: "Worked example: headcount and poverty gap", steps: [
          "A country has 100 million people, and 25 million have consumption below the poverty line. Headcount ratio = 25 / 100 = 0.25, or 25%.",
          "In a small group the poverty line is 100 Birr a month. Three people live on 40, 70 and 90 Birr.",
          "Their gaps are 60, 30 and 10, so the total poverty gap = 60 + 30 + 10 = 100 Birr.",
          "If the group has 10 people in total, the average poverty gap = 100 / 10 = 10 Birr."
        ]},
        key: "The headcount ratio is H/N. The total poverty gap is the sum of shortfalls from the poverty line. The MPI measures deprivation in health, education and living standards."
      },
      questions: [
        { d: "Easy", q: "The poverty headcount ratio is calculated as:", o: ["N / H", "H / N", "H x N", "H - N"], a: 1, e: "The number below the poverty line (H) divided by the total population (N)." },
        { d: "Medium", q: "Which is NOT one of the three dimensions of the MPI?", o: ["Health", "Education", "Standard of living", "Military spending"], a: 3, e: "The MPI uses health, education and standard of living." },
        { d: "Medium", q: "With a poverty line of 100, three people earn 20, 60 and 90. The total poverty gap is:", o: ["100", "130", "170", "200"], a: 1, e: "The gaps are 100 - 20 = 80, 100 - 60 = 40 and 100 - 90 = 10, so the total poverty gap is 130." },
        { d: "Hard", q: "A 'dual cut-off' method for multidimensional poverty uses:", o: ["Only an income line", "A cut-off in each dimension and a cut-off on the number of dimensions of deprivation", "The Gini coefficient", "The headcount of exports"], a: 1, e: "A person is poor if deprived in enough dimensions, each judged against its own cut-off." }
      ]
    },
    {
      section: "6.1.4", name: "Sen's Capability Approach",
      description: "Amartya Sen's view that poverty is a lack of capabilities and freedoms, not only low income.",
      lesson: {
        objectives: [
          "Explain the capability approach to wellbeing.",
          "Define functionings, capabilities and conversion factors.",
          "Explain why Sen criticises measuring poverty only by headcount."
        ],
        sections: [
          { heading: "Income as a means, not an end", body: [
            "Amartya Sen, the 1998 Nobel Laureate in economics, argued that traditional welfare economics, which relies on individuals' choices and preferences, lacks enough information to judge the social good. His capability approach says income and wealth are not ends in themselves but instruments for other purposes. What matters for being poor or not is a person's capability to function. Poverty is not simply low wellbeing but the inability to pursue wellbeing because of a lack of economic means."
          ]},
          { heading: "Functionings and capabilities", body: [
            "What matters is not the things a person has but what the person can be and do. A book is of little use to someone who cannot read. Functionings are what a person does or can do with commodities. Capabilities are the real freedoms people have to achieve their potential doings and beings. Whether someone can turn resources into a functioning depends on conversion factors: personal, socio-political and environmental conditions. Freedom of choice and control over one's own life are central to wellbeing.",
            "Sen argued against relying only on the headcount approach favoured by World Bank economists, and to look at the use of commodities. Wellbeing means being healthy, well nourished, well clothed, literate and long-lived, and being able to take part in community life, move about and choose what to become. A lack of these is poverty."
          ]}
        ],
        example: { title: "Worked example: same income, different capability", steps: [
          "Two people receive the same cash. One is healthy, literate and lives near a market; the other has a disability, cannot read, and lives far from services.",
          "The first can turn the money into good nutrition, schooling and trade (functionings). The second can convert much less.",
          "Sen would say the second person is poorer in capability even though measured income is identical."
        ]},
        key: "In Sen's capability approach, poverty is the lack of real freedom and capability to function, and income is only a means to that end."
      },
      questions: [
        { d: "Easy", q: "Which economist developed the capability approach to poverty?", o: ["Adam Smith", "Amartya Sen", "Corrado Gini", "Max Lorenz"], a: 1, e: "Amartya Sen, 1998 Nobel Laureate, developed it." },
        { d: "Medium", q: "In Sen's view, income and wealth are:", o: ["Ends in themselves", "Instruments for other purposes", "Irrelevant to welfare", "The only measure of poverty"], a: 1, e: "They matter because of what they allow people to be and do." },
        { d: "Medium", q: "What a person does or can do with commodities is called:", o: ["Conversion", "Functionings", "A poverty line", "Utility"], a: 1, e: "Functionings are the doings and beings a person achieves with commodities." },
        { d: "Hard", q: "Personal, socio-political and environmental conditions that affect whether resources become a functioning are called:", o: ["Conversion factors", "Poverty lines", "Quintiles", "Tax bases"], a: 0, e: "Conversion factors determine whether a person has a particular capability." }
      ]
    },
    {
      section: "6.2.1", name: "Inequality and Income Distribution",
      description: "Economic inequality, functional and personal income distribution, quintile shares and the Kuznets ratio.",
      lesson: {
        objectives: [
          "Define inequality and economic inequality.",
          "Distinguish functional from personal income distribution.",
          "Use quintile shares to measure inequality."
        ],
        sections: [
          { heading: "What is inequality?", body: [
            "Inequality is a social disparity in distribution or opportunity. It has economic, social and political dimensions, including inequalities of power, status and gender. The focus here is economic inequality: the disproportionate distribution of national income among households."
          ]},
          { heading: "Two kinds of distribution", body: [
            "Functional (factor share) distribution shows the share of national income that each factor of production receives: labour as wages, land as rent, and capital as interest and profit. Personal (size) distribution is the most commonly used indicator. It looks at the income of individuals or households, regardless of how it was earned."
          ]},
          { heading: "Quintiles and the Kuznets ratio", body: [
            "To measure personal distribution, rank individuals from lowest to highest income and divide them into quintiles (fifths) or deciles (tenths), then find each group's share of national income. The ratio of income received by the top 20% to the bottom 40% (named after Simon Kuznets) indicates inequality between high- and low-income groups. In the textbook example, the bottom 20% receive 5% of income, the bottom 40% receive 14%, and the top 20% receive 51%, so the ratio of bottom 40% to top 20% is about 0.28."
          ]}
        ],
        example: { title: "Worked example: quintile shares", steps: [
          "In a country, the bottom 40% of households receive 12% of total income and the top 20% receive 48%.",
          "The ratio of the bottom 40% to the top 20% = 12 / 48 = 0.25.",
          "A ratio closer to 1 would mean a more equal distribution; 0.25 shows the richest fifth receives four times as much as the poorest two fifths combined."
        ]},
        key: "Personal income distribution ranks households by income and compares shares by quintile or decile; a high share for the top group and a low share for the bottom shows inequality."
      },
      questions: [
        { d: "Easy", q: "The share of national income going to labour, land and capital describes:", o: ["Personal income distribution", "Functional income distribution", "Poverty gap", "The Gini index"], a: 1, e: "Functional distribution looks at factor shares." },
        { d: "Medium", q: "Dividing a ranked population into five equal groups produces:", o: ["Deciles", "Quintiles", "Lorenz points", "Poverty lines"], a: 1, e: "Quintiles are fifths, deciles are tenths." },
        { d: "Medium", q: "The bottom 40% of households receive 14% of income and the top 20% receive 56%. The ratio is:", o: ["0.25", "4.0", "0.40", "0.14"], a: 0, e: "14 / 56 = 0.25." },
        { d: "Hard", q: "Which distribution is the most commonly used indicator of income inequality?", o: ["Functional distribution", "Personal (size) distribution", "Regional distribution", "Sectoral distribution"], a: 1, e: "Personal or size distribution focuses on incomes of individuals and households." }
      ]
    },
    {
      section: "6.2.2", name: "The Lorenz Curve and the Gini Coefficient",
      description: "How the Lorenz curve shows income inequality and how the Gini coefficient summarises it.",
      lesson: {
        objectives: [
          "Describe how a Lorenz curve is drawn.",
          "Explain what the line of perfect equality shows.",
          "Interpret the Gini coefficient."
        ],
        sections: [
          { heading: "The Lorenz curve", body: [
            "The Lorenz curve, developed by Max Lorenz in 1905, shows cumulative shares of income. The horizontal axis shows the cumulative percentage of income recipients, from poorest to richest, and the vertical axis shows the cumulative share of income they receive. The diagram is a square with a diagonal 45-degree line, which represents perfect equality: the bottom 40% receive 40% of income, and so on at every point.",
            "In practice the Lorenz curve lies below the diagonal. The more bowed out the curve, the less equal the distribution."
          ]},
          { heading: "The Gini coefficient", body: [
            "The Gini coefficient, formulated by Corrado Gini in 1912, is the area between the Lorenz curve and the 45-degree line divided by the total area under that line. It ranges from 0 to 1. A value of 0 means perfect equality (the Lorenz curve lies on the diagonal). A value of 1 means perfect inequality (one person owns all income). The higher the Gini coefficient, the higher the inequality."
          ]}
        ],
        example: { title: "Worked example: comparing countries", steps: [
          "Country A has a Gini coefficient of 0.28 and Country B has a Gini coefficient of 0.60.",
          "Country B's Lorenz curve bows out further from the 45-degree line.",
          "So income is distributed more unequally in Country B than in Country A.",
          "A Gini of 0 would put the Lorenz curve on the diagonal, and a Gini of 1 would mean one person holds all income."
        ]},
        key: "The Lorenz curve plots cumulative income shares against cumulative population; the Gini coefficient (0 to 1) summarises its distance from perfect equality."
      },
      questions: [
        { d: "Easy", q: "A Gini coefficient of 0 means:", o: ["Perfect inequality", "Perfect equality", "Extreme poverty", "No population"], a: 1, e: "At 0 the Lorenz curve coincides with the 45-degree line." },
        { d: "Easy", q: "The 45-degree diagonal in a Lorenz diagram represents:", o: ["Perfect equality", "Perfect inequality", "The poverty line", "Average income"], a: 0, e: "At every point, the share of income equals the share of population." },
        { d: "Medium", q: "Country X has a Gini coefficient of 0.35 and Country Y has 0.55. Which statement is true?", o: ["X is more unequal", "Y is more unequal", "Both are equal", "Gini cannot compare countries"], a: 1, e: "A higher Gini coefficient means higher inequality." },
        { d: "Hard", q: "The more bowed out (further from the diagonal) a Lorenz curve is, the:", o: ["Less equal the distribution", "More equal the distribution", "Lower the Gini coefficient", "Lower the poverty rate"], a: 0, e: "A larger gap between the curve and the diagonal means greater inequality and a higher Gini." }
      ]
    },
    {
      section: "6.3", name: "Global and Regional Poverty",
      description: "Trends in extreme poverty, sub-Saharan Africa, the Sustainable Development Goals and rising global inequality.",
      lesson: {
        objectives: [
          "Describe trends in global poverty.",
          "Explain why extreme poverty persists in sub-Saharan Africa.",
          "State what SDG 1 aims to do."
        ],
        sections: [
          { heading: "Progress and persistence", body: [
            "Global poverty is hard to estimate exactly, but conditions improved over the past half century. Countries such as China lifted millions of citizens out of poverty, and the share of people in extreme poverty fell from 36% in 1990 to 10% in 2015. Even so, extreme poverty is widespread in the developing world, especially in sub-Saharan Africa. In 2010, more than 1.2 billion people lived on less than $1.25 a day and about 2.4 billion on less than $2 a day. The UN reported more than 700 million people, 10% of the world population, in extreme poverty, with most of those on under $1.90 a day living in sub-Saharan Africa, where the poverty rate barely fell between 1950 and 2000."
          ]},
          { heading: "Goals and strategies", body: [
            "Because of this, many developing countries made poverty eradication a policy goal. The Sustainable Development Goals for 2015 to 2030 include Goal 1, to end poverty in all its forms. The World Bank promotes the Poverty Reduction Strategy Paper (PRSP) process to help countries plan how to improve the position of the poor; Ethiopia has used it. Meanwhile, inequality has been rising globally because of globalisation, technical progress and the policies and institutions of different countries."
          ]}
        ],
        example: { title: "Worked example: reading the trend", steps: [
          "Extreme poverty fell from 36% of the world population in 1990 to 10% in 2015.",
          "The fall is 26 percentage points, so poverty did decline strongly.",
          "But 10% of the world's population is still hundreds of millions of people, and most live in sub-Saharan Africa.",
          "So progress is real, but it is uneven across regions."
        ]},
        key: "Extreme poverty fell from 36% (1990) to 10% (2015) but remains concentrated in sub-Saharan Africa. SDG 1 aims to end poverty in all its forms."
      },
      questions: [
        { d: "Easy", q: "Goal 1 of the Sustainable Development Goals aims to:", o: ["End poverty in all its forms", "Reduce inflation", "Improve exports", "Build more roads"], a: 0, e: "SDG 1 is 'no poverty'." },
        { d: "Medium", q: "Which region has the majority of people living on less than $1.90 a day?", o: ["East Asia", "Sub-Saharan Africa", "Europe", "North America"], a: 1, e: "The UN reported most extreme poor live in sub-Saharan Africa." },
        { d: "Medium", q: "According to the textbook, extreme poverty fell from 36% in 1990 to what in 2015?", o: ["1%", "10%", "25%", "50%"], a: 1, e: "It fell to 10% of the world population." },
        { d: "Hard", q: "Which factors are said to have contributed to rising global inequality?", o: ["Globalisation, technical progress and national policies and institutions", "Only wars", "Only climate", "Only taxation"], a: 0, e: "The textbook names globalisation, technical progress and the policies and institutions of different countries." }
      ]
    },
    {
      section: "6.4", name: "Women and Poverty",
      description: "Why women are disproportionately poor and what policies can help.",
      lesson: {
        objectives: [
          "Explain why women are disproportionately poor in developing countries.",
          "Describe intra-household inequality.",
          "Suggest policy measures to reduce women's poverty."
        ],
        sections: [
          { heading: "Why women face harsher poverty", body: [
            "Women and children experience the harshest deprivation in the poorest communities. They are more likely to be poor and malnourished and less likely to get medical services, clean water and sanitation. Reasons include female-headed households, women's lower earning capacity, and their limited control over a spouse's income. Women have less access to education, formal jobs, social security and government employment programmes. In urban areas they are often restricted to low-productivity work, and in rural areas they have less access to the resources needed for stable incomes; customs and laws can limit women's ownership of property."
          ]},
          { heading: "Inside the household", body: [
            "Household income alone understates the deprivation. Female-headed households are more often in the poorest areas with little access to water, sanitation and health care, and their children are less likely to be in school. Within households, resources may be allocated unequally, with bias against females in nutrition, medical care, education and inheritance. Where women's share of household income is higher, there is less discrimination against girls. Much of women's work is unpaid, such as collecting firewood and cooking, and women often do not control the income from family farms or businesses."
          ]},
          { heading: "What can be done", body: [
            "Poverty programmes that work only with men tend to widen the gaps. Policies should include women in education and training, formal-sector employment and agricultural extension, give women equal access to schooling, health and other services, and formalise informal work. Improving women's status also supports long-run growth, because education and economic status for women are critical to building human capital."
          ]}
        ],
        example: { title: "Worked example: targeting a nutrition programme", steps: [
          "A programme aims to improve children's nutrition in poor households.",
          "When household income is marginal, women spend most of their income on household nutrition, while men spend a smaller fraction.",
          "So a rise in women's income raises nutrition spending more than the same rise in men's income.",
          "Nutrition and health programmes are therefore more effective when targeted at women."
        ]},
        key: "Women face a higher risk of poverty because of lower earnings, less access to education, jobs and resources, and unequal control of income. Including women in development programmes helps the whole household and long-run growth."
      },
      questions: [
        { d: "Easy", q: "Which group usually experiences the harshest deprivation in the poorest communities?", o: ["Women and children", "Government workers", "Large firms", "Foreign investors"], a: 0, e: "Women and children are more likely to be poor, malnourished and lack services." },
        { d: "Medium", q: "Which of these contributes to women's greater poverty?", o: ["Higher earning potential than men", "Limited control over household income and less access to formal jobs", "Easier access to credit", "Higher land ownership"], a: 1, e: "Lower earnings, less access to resources and limited control over income all contribute." },
        { d: "Medium", q: "Why are nutrition programmes often more effective when targeted at women?", o: ["Women spend more of their income on household nutrition", "Women never earn income", "Men are not part of households", "Programmes are cheaper for women"], a: 0, e: "A larger share of women's income goes to household nutritional intake." },
        { d: "Hard", q: "Which policy would best address women's poverty?", o: ["Excluding women from training programmes", "Increasing women's participation in education, formal employment and agricultural extension", "Ending all education spending", "Restricting property ownership"], a: 1, e: "Policies should integrate women into education, jobs and extension services." }
      ]
    },
    {
      section: "6.5", name: "Poverty and Inequality in Ethiopia",
      description: "Trends in poverty in Ethiopia, rural poverty, and how poverty is monitored.",
      lesson: {
        objectives: [
          "Describe poverty trends in Ethiopia.",
          "Explain why rural poverty is harder to reduce.",
          "Name the surveys used to monitor poverty."
        ],
        sections: [
          { heading: "The numbers in the textbook", body: [
            "The textbook, citing the World Bank (2020), reports that Ethiopia's economy grew by an average of 9.8% a year from 2008/09 to 2018/19, while the share of people below the national poverty line fell from 38% to 24%. It cites government figures of headcount poverty falling from 59% in 1992 to 29.5% in 2011, and a per capita income of about $883. Ethiopia's HDI value in 2019 was 0.485, ranking 173 of 189 countries and placing it in the low human development category. It also notes more than 12 million people are chronically or periodically food insecure, mostly smallholder farmers."
          ]},
          { heading: "Rural poverty and monitoring", body: [
            "Poverty has fallen, but it remains a challenge, especially in rural areas, where it falls more slowly than in urban areas. Most rural livelihoods depend on rain-fed agriculture, which is exposed to climate shocks, and poor health, education and access to basic services add to vulnerability.",
            "Ethiopia follows the World Bank's Poverty Reduction Strategy Paper process. The Central Statistical Agency runs regular Household Income and Consumption Expenditure Surveys (HICES) and the Welfare Monitoring Survey, and the Ministry of Finance and Economic Development prepares the Poverty Analysis Report on poverty incidence, gap and severity and on income inequality as measured by the Gini coefficient."
          ]}
        ],
        example: { title: "Worked example: reading the trend", steps: [
          "Headcount poverty fell from 59% in 1992 to 29.5% in 2011, a drop of 29.5 percentage points.",
          "The national poverty line share fell from 38% to 24% between 2008/09 and 2018/19, a drop of 14 percentage points.",
          "Even with strong growth, rural households that depend on rain-fed farming stay exposed to weather shocks, so rural poverty falls more slowly."
        ]},
        key: "Poverty in Ethiopia has fallen but remains high, especially in rural areas that depend on rain-fed agriculture. HICES and the Welfare Monitoring Survey track it."
      },
      questions: [
        { d: "Easy", q: "Poverty reduction in Ethiopia has been slower in:", o: ["Urban areas", "Rural areas", "Capital cities", "Industrial parks"], a: 1, e: "Rural areas, reliant on rain-fed farming, have seen slower reductions." },
        { d: "Medium", q: "Which survey tracks household spending and poverty in Ethiopia?", o: ["HICES", "CPI-X", "GDP-Net", "TOT"], a: 0, e: "The Household Income and Consumption Expenditure Survey is run by the Central Statistical Agency." },
        { d: "Medium", q: "According to the textbook, headcount poverty fell from 59% in 1992 to:", o: ["50%", "29.5%", "10%", "5%"], a: 1, e: "Government figures show 29.5% in 2011." },
        { d: "Hard", q: "Why does rural poverty fall more slowly in Ethiopia?", o: ["Rural livelihoods depend on rain-fed agriculture exposed to climate vulnerability", "Rural areas have more banks", "Rural households have more industry jobs", "Rural areas are taxed more"], a: 0, e: "Rain-fed farming leaves rural households vulnerable to weather shocks, alongside weak services." }
      ]
    },
    {
      section: "6.6", name: "Indigenous Knowledge and Institutions in Reducing Poverty",
      description: "Idir, Iqub, Debo, cottage industries and cooperatives as local ways of reducing poverty.",
      lesson: {
        objectives: [
          "Define indigenous knowledge.",
          "Describe Idir, Iqub and Debo.",
          "Explain the role of cottage industries and cooperatives."
        ],
        sections: [
          { heading: "Indigenous knowledge", body: [
            "Indigenous knowledge is the accumulated common-sense knowledge of local people about their everyday realities, unique to a community. It forms the basis for local decision-making, is developed within communities, and is dynamic. It is also called traditional or local knowledge, and it is used to solve problems including poverty, often by pooling resources for a common good."
          ]},
          { heading: "Idir, Iqub and Debo", body: [
            "Idir is the most common informal institution in Ethiopia: a burial association, or a form of group life insurance, in which members make small regular contributions to raise funds for emergencies such as a death in a member's family, and give practical help at funerals. Iqub is a rotating credit and savings association: each member contributes weekly or monthly and the pool goes to members in turn, which lets poor families fund weddings, houses or small businesses without formal banks and with little paperwork. Idir is long term, while Iqub can be temporary or permanent.",
            "Debo is a work group in which members help one another on a rotating basis, often unpaid, for example pooling labour on each other's farms. These associations rest on participation, so they promote accountability, transparency and tolerance, and the strong ties discourage defaults. Because they are informal, they do not appear in formal records."
          ]},
          { heading: "Cottage industries and cooperatives", body: [
            "Cottage industries are small, decentralised, labour-intensive producers using low-technology methods, often at home. In Ethiopia the oldest examples are weaving, leatherwork, pottery, basketry and blacksmithing. They need little investment but provide jobs and self-employment for men and women. Modern cooperatives, such as coffee unions, are also important vehicles for poverty reduction and sustainable livelihoods."
          ]}
        ],
        example: { title: "Worked example: how an Iqub works", steps: [
          "Ten neighbours each contribute 500 Birr every month into a common pool of 5,000 Birr.",
          "Each month one member receives the whole pool, by agreed order or draw.",
          "Over ten months every member receives 5,000 Birr once, having paid in 5,000 Birr in total.",
          "A member can use the lump sum for a purpose such as starting a small trade, which small monthly savings alone would be slow to fund."
        ]},
        key: "Idir (burial and emergency support), Iqub (rotating savings and credit) and Debo (rotating labour), plus cottage industries and cooperatives, are local routes out of poverty."
      },
      questions: [
        { d: "Easy", q: "A rotating savings and credit association in Ethiopia is called:", o: ["Idir", "Iqub", "Debo", "Surtax"], a: 1, e: "Iqub members pay in regularly and take turns receiving the pool." },
        { d: "Easy", q: "Idir is best described as:", o: ["A bank loan", "A burial association that works as group insurance", "A tax", "A cooperative union for coffee"], a: 1, e: "Idir helps members at times of death and other emergencies." },
        { d: "Medium", q: "Debo refers to:", o: ["A group that helps members with farm work on a rotating basis", "A type of tax", "A kind of loan", "A government agency"], a: 0, e: "Debo is a rotational work group." },
        { d: "Medium", q: "Which is an example of a cottage industry in Ethiopia?", o: ["Weaving or pottery", "A steel mill", "A bank", "A telecom company"], a: 0, e: "Weaving, leatherwork, pottery, basketry and blacksmithing are the oldest cottage industries." },
        { d: "Hard", q: "Why do Iqub members rarely default?", o: ["Strong ties and participatory principles discourage defaults", "Iqub is enforced by police", "Iqub is run by the central bank", "Members never pay anything"], a: 0, e: "Close social ties and mutual accountability make defaulting unlikely." }
      ]
    }
  ]
};
