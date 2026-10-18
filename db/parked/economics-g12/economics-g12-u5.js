module.exports = {
  subject: "economics", grade: 12, unitNo: 5,
  unitTitle: "Tax Theory and Practice",
  topics: [
    {
      section: "5.1.1", name: "Taxes: Definition and Key Terms",
      description: "What a tax is, why governments levy taxes, and the terms tax rate, tax base, incidence, impact and effect.",
      lesson: {
        objectives: [
          "Define a tax using the words compulsory and unrequited.",
          "Explain why governments impose taxes.",
          "Distinguish tax rate, tax base, tax incidence, impact and effect."
        ],
        sections: [
          { heading: "What is a tax?", body: [
            "The OECD defines a tax as a compulsory, unrequited payment to general government. Compulsory means taxes are not voluntary purchases: they are required by law, backed by constitutions, proclamations, regulations and directives. Unrequited means the benefits a taxpayer receives are not in proportion to what that taxpayer pays, so a tax is levied without anything in direct return.",
            "Taxation is not the only source of government revenue (borrowing, fees for services and printing money are others), but in peacetime it typically provides 90% or more of total government receipts."
          ]},
          { heading: "Why governments tax", body: [
            "At a minimum, taxes pay for administration, law and order, and defence. Governments also tax to fund infrastructure, health, education, transport, telecoms and electricity, to provide public goods, to redistribute income and wealth, and to discourage harmful goods such as cigarettes and alcohol (demerit goods with negative externalities)."
          ]},
          { heading: "Key terms", body: [
            "The tax rate is the per-unit amount or percentage at which an activity is taxed. The tax base is the quantity of the activity that is taxed; higher rates tend to shrink the base because the activity becomes less attractive.",
            "Tax incidence is where the burden finally rests, in other words who is really made worse off. Tax impact is the first point of contact: the person who is legally responsible for paying the tax to the government. Tax effect is the response of taxpayers and the economy to a tax, such as changes in production, saving, investment and inequality. A firm may pay a tax (impact) but pass it on to consumers through higher prices (incidence)."
          ]}
        ],
        example: { title: "Worked example: impact versus incidence", steps: [
          "The government imposes a tax of 2 Birr per litre on a drink, payable by the manufacturer. The manufacturer is legally responsible, so the impact falls on the manufacturer.",
          "The manufacturer raises the shelf price by 1.50 Birr per litre. Consumers now pay most of the tax, so most of the incidence falls on consumers.",
          "Some consumers buy less, so the tax base (litres sold) shrinks. That change in behaviour is part of the effect of the tax."
        ]},
        key: "A tax is a compulsory, unrequited payment to government. Impact is who pays first, incidence is who finally bears the burden, and effect is how people and the economy respond."
      },
      questions: [
        { d: "Easy", q: "In the OECD definition, the word 'unrequited' means that:", o: ["Taxes are optional", "Benefits received are not in proportion to the tax paid", "Taxes are paid only by firms", "Taxes are refunded each year"], a: 1, e: "A tax is levied without a direct quid pro quo, so benefits are not tied to the amount paid." },
        { d: "Easy", q: "The first point of contact of a tax with the taxpayer, who is legally responsible for paying it, is the tax:", o: ["Incidence", "Impact", "Effect", "Base"], a: 1, e: "Impact is the first statutory burden; incidence is where the burden finally rests." },
        { d: "Medium", q: "A firm pays a tax to the government but raises its prices so that customers bear most of the burden. The final resting place of the burden is the tax:", o: ["Impact", "Rate", "Incidence", "Base"], a: 2, e: "Incidence is the final distribution of the burden, here on consumers." },
        { d: "Medium", q: "The quantity or level of an activity that is taxed is called the:", o: ["Tax rate", "Tax base", "Tax shelter", "Tax schedule"], a: 1, e: "The tax base is what is taxed; the rate is the percentage or amount applied to it." },
        { d: "Hard", q: "Which statement about tax is correct?", o: ["Taxes are the only possible source of government revenue", "Taxes are voluntary payments for specific services", "Taxation typically accounts for 90% or more of government receipts in peacetime", "Taxes are never used to discourage harmful goods"], a: 2, e: "Other sources exist, but taxation typically provides 90% or more of receipts in peacetime." }
      ]
    },
    {
      section: "5.1.2", name: "Objectives of Taxation",
      description: "The economic and social goals that governments pursue through taxes.",
      lesson: {
        objectives: [
          "List the main objectives of taxation.",
          "Explain how taxes can reduce inequality and discourage harmful goods.",
          "Link taxation to allocation, distribution and stabilisation."
        ],
        sections: [
          { heading: "Goals of taxation", body: [
            "Governments use taxes to pursue macroeconomic and social goals. The objectives of taxation are to minimise income and wealth inequalities, stabilise the economy, discourage consumption of harmful products, provide incentives for capital formation in the private sector, reduce regional imbalance, raise standards of living, direct scarce resources to more essential goods, and reduce unemployment while encouraging exports."
          ]},
          { heading: "Taxation and resource use", body: [
            "Governments also have monetary and fiscal tools for these aims, but taxation plays a major part in the allocation, distribution and redistribution of resources. A tax on cigarettes shifts resources away from a harmful good; a progressive income tax moves income from richer to poorer households through government spending; a tax holiday for a new factory encourages investment."
          ]}
        ],
        example: { title: "Worked example: matching a tax to its objective", steps: [
          "A high excise tax on alcohol: objective is to discourage consumption of a harmful good.",
          "A higher income tax rate on very large incomes, with the revenue spent on services for low-income families: objective is to reduce inequality.",
          "A temporary tax break for firms that invest in machinery: objective is to encourage capital formation.",
          "Higher taxes in a boom and lower taxes in a recession: objective is to stabilise the economy."
        ]},
        key: "Taxes raise revenue and also serve goals such as reducing inequality, stabilising the economy, encouraging investment and discouraging harmful goods."
      },
      questions: [
        { d: "Easy", q: "Which is an objective of taxation?", o: ["To increase income inequality", "To discourage consumption of harmful goods", "To eliminate all government spending", "To raise unemployment"], a: 1, e: "Taxing harmful goods raises their price and reduces their consumption." },
        { d: "Medium", q: "A tax break for firms that buy new machinery mainly serves the objective of:", o: ["Discouraging imports", "Providing incentives for capital formation", "Reducing exports", "Increasing consumption of harmful goods"], a: 1, e: "Incentives for private capital formation are a stated objective of taxation." },
        { d: "Medium", q: "Which function of taxation is served when the government taxes rich households more and spends on services for poor households?", o: ["Redistribution of income", "Hoarding", "Devaluation", "Price control"], a: 0, e: "Taxing and spending in this way redistributes income and reduces inequality." },
        { d: "Hard", q: "Raising taxes during a boom and cutting them in a recession is mainly intended to:", o: ["Maximise tax evasion", "Stabilise the economy", "Reduce regional imbalance only", "Increase the tax base permanently"], a: 1, e: "Using taxes counter-cyclically is a stabilisation objective." }
      ]
    },
    {
      section: "5.1.3", name: "Principles of Taxation and a Good Tax System",
      description: "Adam Smith's canons of taxation and the characteristics of a good tax system.",
      lesson: {
        objectives: [
          "State Adam Smith's canons of taxation.",
          "Explain the principles of economy and fiscal adequacy.",
          "List the characteristics of a good tax system."
        ],
        sections: [
          { heading: "Adam Smith's canons", body: [
            "In The Wealth of Nations (1776), Adam Smith set out principles for taxation. Equity: people should contribute in proportion to their abilities. Certainty: the time, manner and amount of payment should be clear, not arbitrary. Convenience: a tax should be collected at the time and in the way that is easiest for the taxpayer. Economy: the cost of collection should be as small as possible, and the tax should take as little as possible from people beyond what it brings into the treasury. A fifth, the canon of fiscal adequacy, says the system should yield enough revenue so the government is not forced into deficit financing."
          ]},
          { heading: "Modern principles", body: [
            "These maxims translate into modern principles: a tax system should not distort the efficient allocation of resources, should be fair, should act as a flexible automatic stabiliser, and should be clear, transparent and cheap to collect. In short, principles touch on equity, certainty, convenience, economy, flexibility, simplicity, diversity and buoyancy."
          ]},
          { heading: "A good tax system", body: [
            "A good tax system is simple, financially adequate and elastic; broad based (covering income, property and commodities); administratively efficient; balanced; and helps reduce inequality, support stability and promote growth. Its revenue yield should be adequate, the burden should be equitable, interference with efficient markets should be minimal, and administration should be fair, non-arbitrary and understandable to the taxpayer. Above all, a good tax system should be both equitable and efficient."
          ]}
        ],
        example: { title: "Worked example: judging a tax against the canons", steps: [
          "A tax is due on a date that changes each year and the amount is decided by the collector's judgement. This breaks the canon of certainty.",
          "A small tax costs more to collect than it raises. This breaks the canon of economy.",
          "A tax is collected from farmers only at harvest, when they have cash. This follows the canon of convenience.",
          "A tax system that regularly leaves the government short of revenue and forces deficit financing fails the canon of fiscal adequacy."
        ]},
        key: "Smith's canons are equity, certainty, convenience and economy, with fiscal adequacy added. A good tax system is simple, adequate, broad-based, efficient and fair."
      },
      questions: [
        { d: "Easy", q: "Who set out the classic canons of taxation in The Wealth of Nations (1776)?", o: ["Keynes", "Adam Smith", "Friedman", "Pigou"], a: 1, e: "Adam Smith proposed the principles of taxation." },
        { d: "Medium", q: "A tax whose payment date and amount are clear to the taxpayer satisfies the canon of:", o: ["Economy", "Certainty", "Fiscal adequacy", "Buoyancy"], a: 1, e: "Certainty means the time, manner and quantity to be paid are clear and not arbitrary." },
        { d: "Medium", q: "A tax that costs more to collect than it raises breaks the canon of:", o: ["Convenience", "Equity", "Economy", "Certainty"], a: 2, e: "The cost of collection should be as small as possible." },
        { d: "Hard", q: "A tax system that regularly raises too little revenue and forces the government to borrow heavily fails the canon of:", o: ["Fiscal adequacy", "Certainty", "Convenience", "Equity"], a: 0, e: "Fiscal adequacy means yielding enough revenue to avoid deficit financing." }
      ]
    },
    {
      section: "5.1.4", name: "Classification of Taxes: Direct and Indirect",
      description: "Direct and indirect taxes, their examples, and how tax systems are classified in Ethiopia, the UK and the USA.",
      lesson: {
        objectives: [
          "Distinguish direct taxes from indirect taxes.",
          "Give examples of each.",
          "Explain what a sin tax is."
        ],
        sections: [
          { heading: "Direct taxes", body: [
            "With a direct tax, the impact and the incidence fall on the same person, and the amount depends on the taxpayer's ability to pay: the more capacity, the higher the tax. Examples include employment income tax, business income tax, rental income tax, agricultural income tax, poll tax, land tax, property tax, royalty tax, capital gains tax, gift tax and inheritance tax. Income tax is charged on income earned by individuals and businesses; property tax on land and buildings; capital gains tax when assets such as shares or real estate are sold, computed from the buying and selling amounts."
          ]},
          { heading: "Indirect taxes", body: [
            "With an indirect tax, the impact (first burden) and incidence (final burden) fall on different persons. Examples are consumption taxes such as value added tax (VAT), excise tax, turnover tax, surtax, customs duty and stamp duty."
          ]},
          { heading: "Classifications in different countries", body: [
            "Countries name their taxes differently. Ethiopia groups taxes into schedules (employment, rental of buildings, business, other income). The UK's main taxes include income tax, national insurance contributions, VAT, excise duties, corporation tax and stamp duty, plus so-called sin taxes on tobacco, alcohol, sugary drinks and gambling, which aim to reduce harmful consumption and raise revenue. The USA's common taxes are payroll, individual income, corporate income, wealth and consumption taxes; the first four are direct and consumption taxes are indirect."
          ]}
        ],
        example: { title: "Worked example: direct or indirect?", steps: [
          "A teacher's salary tax is withheld from pay: the teacher bears it directly, so it is a direct tax.",
          "VAT on a shirt is charged to the shopkeeper but passed on in the price, so the buyer finally bears it: an indirect tax.",
          "A tax on the sale of shares, based on the buying and selling amounts, is a capital gains tax: a direct tax.",
          "Customs duty on imported goods is paid at the border but usually passed on to buyers: an indirect tax."
        ]},
        key: "Direct taxes are borne by the person they are levied on; indirect taxes are shifted to someone else. Income, property and capital gains taxes are direct; VAT, excise and customs duty are indirect."
      },
      questions: [
        { d: "Easy", q: "Which is an indirect tax?", o: ["Employment income tax", "Value added tax (VAT)", "Property tax", "Capital gains tax"], a: 1, e: "VAT is a consumption tax whose burden is passed on to the consumer." },
        { d: "Easy", q: "In a direct tax, the impact and the incidence fall on:", o: ["Different persons", "The same person", "Only foreigners", "Only the government"], a: 1, e: "Direct taxes are borne by the person on whom they are levied." },
        { d: "Medium", q: "A tax paid when a person sells shares or land at a profit is a:", o: ["Capital gains tax", "Stamp duty", "Turnover tax", "Excise tax"], a: 0, e: "Capital gains tax is charged on gains from selling assets." },
        { d: "Medium", q: "A 'sin tax' is mainly imposed on:", o: ["Basic foods", "Goods such as tobacco, alcohol and gambling", "Exports of coffee", "Medicine"], a: 1, e: "Sin taxes discourage harmful consumption and raise revenue." },
        { d: "Hard", q: "Which pair correctly matches the tax and its type?", o: ["Customs duty - direct", "Inheritance tax - direct", "Excise tax - direct", "VAT - direct"], a: 1, e: "Inheritance tax is a direct tax, while customs duty, excise tax and VAT are indirect." }
      ]
    },
    {
      section: "5.2", name: "Approaches to Tax Equity",
      description: "The benefits approach and the ability-to-pay approach, horizontal and vertical equity, and progressive, proportional and regressive taxes.",
      lesson: {
        objectives: [
          "Explain the benefits approach and the ability-to-pay approach.",
          "Distinguish horizontal from vertical equity.",
          "Classify a tax as progressive, proportional or regressive."
        ],
        sections: [
          { heading: "Two approaches to fairness", body: [
            "Under the benefits approach, each taxpayer should contribute in line with the benefits received from public services. It links tax fairness to the spending side of the budget, but it is hard to apply: health and education spending can be attributed to households, whereas defence, police, courts and diplomacy cannot easily be assigned to individuals.",
            "Under the ability-to-pay approach, tax should be levied according to capacity: people with equal capacity pay the same, and people with greater ability pay more. The difficulty is measuring ability to pay, since a full measure would include consumption, wealth and even leisure."
          ]},
          { heading: "Horizontal and vertical equity", body: [
            "Horizontal equity means people in the same circumstances pay the same tax. Vertical equity means unequals should be treated unequally: those with more capacity should pay more."
          ]},
          { heading: "Progressive, proportional and regressive", body: [
            "A progressive tax takes a higher share of income as income rises (the average tax rate rises with income). A proportional tax takes the same share at every income level. A regressive tax takes a lower share as income rises, so it weighs more heavily on the poor."
          ]}
        ],
        example: { title: "Worked example: classifying a tax", steps: [
          "Person A earns 5,000 Birr and pays 250 Birr: 250 / 5,000 = 5%.",
          "Person B earns 20,000 Birr and pays 2,000 Birr: 2,000 / 20,000 = 10%.",
          "The share rises with income, so the tax is progressive.",
          "If B had paid only 800 Birr, the share would be 4%, lower than A's 5%, so the tax would be regressive. If both paid 5%, it would be proportional."
        ]},
        key: "Tax equity can follow the benefits received or the ability to pay. Progressive taxes take a larger share from higher incomes, proportional taxes the same share, regressive taxes a smaller share."
      },
      questions: [
        { d: "Easy", q: "A tax that takes a larger percentage of income from people with higher incomes is:", o: ["Regressive", "Proportional", "Progressive", "Indirect"], a: 2, e: "The average tax rate rises with income in a progressive tax." },
        { d: "Medium", q: "Under which approach should people with greater capacity pay more tax?", o: ["The benefits approach", "The ability-to-pay approach", "Tax evasion", "The turnover approach"], a: 1, e: "The ability-to-pay approach ties tax to capacity." },
        { d: "Medium", q: "Mulu earns 6,000 Birr and pays 300 Birr; Dawit earns 30,000 Birr and pays 1,200 Birr. This tax is:", o: ["Progressive", "Regressive", "Proportional", "Impossible to classify"], a: 1, e: "Mulu pays 5% and Dawit pays 4%, so the share falls as income rises: regressive." },
        { d: "Medium", q: "People in the same circumstances paying the same tax is called:", o: ["Vertical equity", "Horizontal equity", "Tax avoidance", "Fiscal adequacy"], a: 1, e: "Horizontal equity means equal treatment of equals." },
        { d: "Hard", q: "Why is the benefits approach difficult to apply fully?", o: ["Taxes are never spent", "Spending on defence or courts cannot easily be assigned to individual beneficiaries", "Everyone benefits equally from all spending", "It ignores public services altogether"], a: 1, e: "About half of government spending is hard to attribute to specific households." }
      ]
    },
    {
      section: "5.3", name: "The Tax System and Structure in Ethiopia",
      description: "The history, legal framework and federal structure of taxation in Ethiopia.",
      lesson: {
        objectives: [
          "Describe how income taxation began in Ethiopia.",
          "Name the legal framework for taxation.",
          "Explain how revenue is shared between federal and regional governments."
        ],
        sections: [
          { heading: "A short history", body: [
            "Ethiopia introduced income taxation in 1944, when a decree required peasants to pay one-tenth of their agricultural produce to tax officials. Tax regimes have changed along with governments since then."
          ]},
          { heading: "Legal framework and structure", body: [
            "The legal framework is provided by Proclamation No. 33/1992 and the FDRE Constitution of 1995, which provides for revenue sharing between the federal and regional governments. The federal government levies taxes and duties on sources reserved to it and prepares and administers the federal budget (Article 51(10)). Regional states levy and collect taxes on sources reserved to them and administer their own budgets (Article 52(2)(e)).",
            "The textbook notes that, as of April 2022, Ethiopia has 11 regional states and the two city administrations of Addis Ababa and Dire Dawa. The government agency responsible for tax collection is described as the federal Ministry of Revenues, which prepares decrees, directives and regulations on fiscal policy for parliament to legislate."
          ]}
        ],
        example: { title: "Worked example: who taxes what?", steps: [
          "A source of revenue is reserved to the federal government by law: the federal government levies and collects it and includes it in the federal budget.",
          "A different source is reserved to a regional state: the state levies and collects it and uses it in its own state budget.",
          "Revenue sharing is the constitutional rule that lets both levels of government fund their responsibilities."
        ]},
        key: "Ethiopia's income taxation began in 1944. The 1995 FDRE Constitution shares revenue between federal and regional governments, each levying the taxes reserved to it."
      },
      questions: [
        { d: "Easy", q: "Income taxation in Ethiopia was introduced in:", o: ["1844", "1944", "1992", "2002"], a: 1, e: "A 1944 decree required peasants to pay one-tenth of their agricultural produce." },
        { d: "Medium", q: "Which provides for the sharing of revenue between federal and regional governments?", o: ["The FDRE Constitution (1995)", "The Wealth of Nations", "The VAT Act only", "The Excise Tax Proclamation only"], a: 0, e: "The 1995 Constitution sets out revenue sharing between federal and regional levels." },
        { d: "Medium", q: "Regional states levy and collect taxes on:", o: ["All revenue sources in the country", "Revenue sources reserved to the states", "Only imports", "Nothing, they only receive grants"], a: 1, e: "Article 52 gives states power over the sources reserved to them." },
        { d: "Hard", q: "Which statement about Ethiopia's tax structure is correct?", o: ["Only the federal government may collect any tax", "Federal and regional governments each levy taxes on sources reserved to them", "Taxes are decided by each taxpayer", "There is no legal framework for taxation"], a: 1, e: "Ethiopia's federal structure divides taxing powers by reserved revenue sources." }
      ]
    },
    {
      section: "5.4.1", name: "Direct Taxes in Ethiopia: Income Tax Schedules",
      description: "Schedules A to E of Ethiopia's income tax: employment, rental, business, other and exempt income.",
      lesson: {
        objectives: [
          "List the schedules of income tax in Ethiopia.",
          "Describe what each schedule covers.",
          "Explain how employment income tax is collected."
        ],
        sections: [
          { heading: "Schedules of income", body: [
            "Under Tax Proclamation No. 286/2002, income is divided into schedules. Schedule A is income from employment. Schedule B is income from rental of buildings. Schedule C is income from business. Schedule D is other income. Schedule E lists exempt income."
          ]},
          { heading: "Schedule A: employment", body: [
            "Employment income is taxed at rates ranging from 10% to 35%. It is withheld by the employer and is a final tax, so employees whose income comes only from employment do not have to declare it separately. Employment income includes salary, wages, allowances, bonuses, commissions, gratuities and other pay, the value of fringe benefits, and amounts received on termination of employment."
          ]},
          { heading: "Schedules B to E", body: [
            "Rental income is the gross rent from buildings in the year less allowed deductions. Business income is total business income less allowed deductions. Schedule D covers royalties, payments for services rendered outside Ethiopia, income from games, dividends, casual rental of property, interest income and specified non-business capital gains. Schedule E, exempt income, includes the cost of medical treatment for employees, hardship allowances, pay to domestic servants, maintenance or child support payments, pension contributions and compensation payments."
          ]}
        ],
        example: { title: "Worked example: which schedule?", steps: [
          "A teacher's monthly salary: Schedule A (employment), withheld by the employer.",
          "A landlord's income from renting out a building, less allowed deductions: Schedule B.",
          "A shop owner's profit after allowed business expenses: Schedule C.",
          "Interest earned on a savings account or dividends from shares: Schedule D (other income).",
          "Payments for an employee's medical treatment: Schedule E (exempt)."
        ]},
        key: "Ethiopia's income tax uses Schedules A (employment), B (rental), C (business), D (other income) and E (exempt income). Employment income tax rates run from 10% to 35%."
      },
      questions: [
        { d: "Easy", q: "Income from employment is taxed under which schedule?", o: ["Schedule A", "Schedule B", "Schedule C", "Schedule D"], a: 0, e: "Schedule A covers income from employment." },
        { d: "Easy", q: "Income from renting out a building falls under:", o: ["Schedule A", "Schedule B", "Schedule C", "Schedule E"], a: 1, e: "Schedule B covers rental income from buildings." },
        { d: "Medium", q: "Dividends and interest income are taxed under:", o: ["Schedule A", "Schedule B", "Schedule C", "Schedule D"], a: 3, e: "Schedule D covers other income such as royalties, dividends and interest." },
        { d: "Medium", q: "Employment income tax in Ethiopia is:", o: ["Paid only by employers' customers", "Withheld by the employer and treated as a final tax", "Optional", "Collected only at the border"], a: 1, e: "Employers withhold it, and employees with only employment income need not declare." },
        { d: "Hard", q: "The range of Schedule A (employment income) tax rates is:", o: ["0% to 5%", "10% to 35%", "15% to 100%", "50% to 500%"], a: 1, e: "The textbook gives rates from 10% to 35%." }
      ]
    },
    {
      section: "5.4.2", name: "Indirect Taxes and Tax Accounting in Ethiopia",
      description: "VAT, turnover tax, excise tax, surtax, withholding, stamp duty, customs duty and tax accounting.",
      lesson: {
        objectives: [
          "Describe VAT, turnover tax, excise tax and surtax in Ethiopia.",
          "Explain the purpose of customs duty and stamp duty.",
          "State what tax accounting is."
        ],
        sections: [
          { heading: "VAT and turnover tax", body: [
            "Value added tax (VAT) is a tax on the value added at each stage of production and distribution. Ethiopia introduced VAT on 1 January 2003 with a standard rate of 15% on every taxable transaction by a registered person. It is a destination-based consumption tax: only the consumption of goods and services is taxed. Exempt suppliers do not charge VAT on their sales but cannot recover the VAT on their purchases.",
            "Turnover tax (TOT) is an equalisation tax on persons who are not registered for VAT, so that the tax system covers them too. VAT registration is limited to those with annual transactions above 500,000 Birr. For services rendered locally the rate is 2% for contractors, grain mills, tractors and combine harvesters, and 10% for others."
          ]},
          { heading: "Excise tax, surtax and others", body: [
            "Excise tax is imposed on selected goods such as luxury items, demand-inelastic basic goods and goods harmful to health. It applies to 19 groups of items and 378 goods, with rates from 5% to 500%. Surtax is an extra 10% on imported goods, except items such as fertiliser, petroleum, freight vehicles and capital goods. Pension contributions to the Private Organisations Pension Fund are 11% by the employer and 7% by the employee, and withholding tax of 2% applies to domestic transactions and is remitted monthly.",
            "Stamp duty is raised by requiring government stamps to be affixed to designated documents. Customs duty is levied on imported or exported goods; high rates can discourage imports and protect infant domestic industries from foreign competition."
          ]},
          { heading: "Tax accounting", body: [
            "Taxation relies on accounting, the practice of calculating financial statements and figures used in tax calculations. Individuals focus on income, qualifying deductions and investment gains or losses, while businesses must keep up-to-date financial records to determine what they owe."
          ]}
        ],
        example: { title: "Worked example: VAT and the final price", steps: [
          "A registered vendor sells goods with a pre-tax price of 1,000 Birr.",
          "VAT at 15% = 1,000 x 0.15 = 150 Birr.",
          "The consumer pays 1,000 + 150 = 1,150 Birr, and the VAT is included in the selling price.",
          "A trader with annual transactions below 500,000 Birr is not required to register for VAT and falls under turnover tax instead."
        ]},
        key: "Ethiopia's indirect taxes include 15% VAT, turnover tax for unregistered traders, excise tax (5% to 500%), 10% surtax on many imports, stamp duty and customs duty."
      },
      questions: [
        { d: "Easy", q: "The standard VAT rate introduced in Ethiopia in 2003 is:", o: ["5%", "10%", "15%", "35%"], a: 2, e: "The VAT Act set a standard rate of 15%." },
        { d: "Medium", q: "Turnover tax in Ethiopia is mainly imposed on:", o: ["VAT-registered large companies", "Persons not registered for VAT", "Imports only", "Government employees"], a: 1, e: "TOT is an equalisation tax on traders outside the VAT net." },
        { d: "Medium", q: "A vendor sells goods for 2,000 Birr before VAT at 15%. The consumer pays:", o: ["2,015 Birr", "2,150 Birr", "2,300 Birr", "2,030 Birr"], a: 2, e: "VAT = 2,000 x 0.15 = 300, so the price is 2,300 Birr." },
        { d: "Medium", q: "A tax on imported or exported goods that can protect infant domestic industries is:", o: ["Stamp duty", "Withholding tax", "Customs duty", "Pension contribution"], a: 2, e: "Customs duty is levied on traded goods and can act as a trade barrier." },
        { d: "Hard", q: "Which statement about excise tax in Ethiopia is correct?", o: ["It applies to every good at a flat 15%", "It targets selected goods such as luxuries and harmful products, with rates from 5% to 500%", "It is only paid by farmers", "It replaced customs duty"], a: 1, e: "Excise tax applies to selected goods, 19 groups and 378 items, with rates from 5% to 500%." }
      ]
    },
    {
      section: "5.5", name: "Problems of Taxation in Ethiopia",
      description: "Tax compliance, tax avoidance versus tax evasion, and common problems in tax administration.",
      lesson: {
        objectives: [
          "Explain tax compliance and non-compliance.",
          "Distinguish tax avoidance from tax evasion.",
          "List problems faced by tax administrations in Ethiopia."
        ],
        sections: [
          { heading: "Complexity and compliance", body: [
            "Tax systems everywhere are criticised for complex administration and for being hard for taxpayers to understand and comply with. These costs can push people into unreported transactions in the underground economy (evasion) and into seeking tax shelters (avoidance). In developing countries including Ethiopia, problems include a complex tax system, perceptions of corruption, the cost of compliance, perceived unfairness and limited tax knowledge. Better tax knowledge supports voluntary compliance."
          ]},
          { heading: "Avoidance versus evasion", body: [
            "Tax compliance is the degree to which taxpayers follow the tax laws; non-compliance takes the form of avoidance and evasion. Tax avoidance means arranging one's affairs to reduce tax by using the law's exemptions, deductions and incentives. It is not illegal, though it creates problems for administrators. Tax evasion means falsifying information on a tax return or not filing at all to reduce tax owed. It is illegal.",
            "Evasion is rooted in underground activity, which exists because some activities are illegal and people do not want records of them, and because high marginal tax rates give people an incentive to earn income without reporting it."
          ]},
          { heading: "Other administrative problems", body: [
            "Tax administrations also face a growing workload, complex legislation, taxpayers' attitudes, the need to improve customer service, the need to lower the cost of assessment and collection, and the need for efficient management."
          ]}
        ],
        example: { title: "Worked example: avoidance or evasion?", steps: [
          "A business owner uses a deduction that the tax law explicitly allows to lower the tax due. This is tax avoidance and is legal.",
          "A trader records only half of his sales on his tax return. This is tax evasion and is illegal.",
          "A person with a job does not file a return at all, although income should be declared. This is also evasion."
        ]},
        key: "Tax avoidance legally uses the rules to reduce tax; tax evasion illegally hides income or fails to file. Complexity, corruption perception and low tax knowledge hurt compliance."
      },
      questions: [
        { d: "Easy", q: "Falsifying information on a tax return to reduce tax owed is:", o: ["Tax avoidance", "Tax evasion", "Tax incidence", "Tax equity"], a: 1, e: "Tax evasion is illegal." },
        { d: "Easy", q: "Using exemptions and deductions allowed by the tax code to lower tax owed is:", o: ["Tax evasion", "Tax avoidance", "A crime in every case", "Smuggling"], a: 1, e: "Avoidance is legal use of the rules, though it creates administrative problems." },
        { d: "Medium", q: "Which of these is a problem for tax systems in developing countries?", o: ["Perception of corruption", "A very simple system", "Zero compliance cost", "No tax rules"], a: 0, e: "Complexity, perceived corruption, compliance costs and low tax knowledge are common problems." },
        { d: "Hard", q: "High marginal tax rates can encourage evasion because they:", o: ["Make unreported income more attractive", "Reduce incentives to hide income", "Remove the tax base", "Make taxes voluntary"], a: 0, e: "A higher tax on each extra Birr raises the incentive to obtain income without reporting it." }
      ]
    }
  ]
};
