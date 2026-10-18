module.exports = {
  subject: "economics", grade: 12, unitNo: 3,
  unitTitle: "Market Failure and Consumer Protection",
  topics: [
    {
      section: "3.1", name: "Market Failure",
      description: "What market failure is, its common types, and the main kinds of solution.",
      lesson: {
        objectives: [
          "Define market failure.",
          "Name the commonly cited types of market failure.",
          "Describe private, government and collective-action solutions."
        ],
        sections: [
          { heading: "What is market failure?", body: [
            "Market failure is a situation in which the free market distributes goods and services inefficiently. It happens when the price mechanism does not reflect all the costs and benefits of providing and consuming a good, so decisions that are rational for each individual add up to a poor outcome for the group.",
            "Not every bad outcome is a market failure, and market failure does not mean private actors can never solve the problem. Governments can fail too: rent-seeking by special interest groups, who lobby for benefits such as tariffs while spreading small costs over everyone else, leaves society worse off."
          ]},
          { heading: "Common types", body: [
            "Commonly cited market failures are externalities, monopoly, information asymmetries and factor immobility. The public goods problem is another classic example: a good like national defence benefits everyone whether or not they pay, so the market struggles to supply the right amount."
          ]},
          { heading: "Solutions", body: [
            "Solutions may be private (for example, lawsuits that make polluters bear costs), government-imposed (taxes on harmful activity such as tobacco, subsidies for activity with positive spillovers such as education), or voluntary collective action (for example, farmers forming a co-operative to share a cold-storage facility, or groups agreeing rules to avoid overusing a shared resource). Other government tools include legislation, direct provision of merit and public goods, tradable permits and extending property rights."
          ]}
        ],
        example: { title: "Worked example: choosing a remedy", steps: [
          "Problem: smoking imposes costs on non-smokers, and the price of cigarettes does not include them.",
          "A tax on tobacco raises its price and discourages consumption, bringing the price closer to the full social cost.",
          "Problem: education benefits society beyond the student, so the market under-supplies it.",
          "A subsidy or scholarship encourages more education. Different failures call for different remedies."
        ]},
        key: "Market failure is an inefficient market outcome caused by factors such as externalities, public goods, monopoly and asymmetric information. Taxes, subsidies, regulation and collective action can help."
      },
      questions: [
        { d: "Easy", q: "Market failure refers to:", o: ["A market that earns zero profit", "An inefficient allocation of goods and services by the free market", "A fall in the price of a good", "A government budget deficit"], a: 1, e: "Market failure is an inefficient distribution of goods and services in the free market." },
        { d: "Medium", q: "Which is commonly cited as a type of market failure?", o: ["Perfect competition", "Externalities", "Rising GDP", "A balanced budget"], a: 1, e: "Externalities, monopoly, information asymmetries and factor immobility are common types." },
        { d: "Medium", q: "A tax on tobacco is an example of a government solution that:", o: ["Encourages positive spillovers", "Raises the cost of a harmful activity to reduce it", "Provides a public good", "Removes property rights"], a: 1, e: "Taxing harmful behaviour raises its cost and discourages it." },
        { d: "Hard", q: "Which statement is correct?", o: ["Governments never fail", "Market failure always means private actors cannot solve the problem", "Not every bad market outcome counts as a market failure", "All market failures have a perfect solution"], a: 2, e: "The concept can be misidentified: not every bad outcome is a market failure, and not all failures have solutions." }
      ]
    },
    {
      section: "3.2", name: "Public Goods",
      description: "Non-rivalry, non-excludability, pure and impure public goods, and the free rider problem.",
      lesson: {
        objectives: [
          "Define public goods and state their two features.",
          "Distinguish pure public goods, impure public goods and private goods.",
          "Explain the free rider problem.",
          "Describe ways of providing public goods."
        ],
        sections: [
          { heading: "Two features", body: [
            "Public goods are goods whose benefits are shared. They have two features. Non-rivalry: one person's consumption does not reduce what is left for others, so the cost of letting one more person consume is zero. Non-excludability: it is difficult or expensive to stop non-payers from consuming.",
            "A good with both features is a pure public good, such as national defence, clean air or biodiversity. A pure private good is rivalrous and excludable, such as food, clothes or a house. Goods between the extremes are impure public goods."
          ]},
          { heading: "Technology and provision", body: [
            "Classification is not fixed. Encryption lets broadcasters exclude people without a decoder, and toll systems on expressways such as Addis Ababa to Adama make roads excludable. Also, a private good is not always supplied privately and a public good is not always produced by government. A municipality can provide garbage collection but hire a private firm to produce it."
          ]},
          { heading: "The free rider problem", body: [
            "A free rider enjoys a public good without paying for it. Because non-payers cannot be excluded, each person has an incentive to let others pay, so the private market may supply none. Collective action is therefore needed: private provision where the good can be made excludable (concerts), public provision funded by entrance fees (national parks), or public provision funded by taxes (national defence)."
          ]}
        ],
        example: { title: "Worked example: classifying goods", steps: [
          "National defence: one citizen's protection does not reduce another's (non-rival) and nobody can be excluded (non-excludable). It is a pure public good.",
          "Bread: if I eat it you cannot (rival) and the baker can refuse to sell (excludable). It is a pure private good.",
          "A toll expressway: excludable through the toll, but one more car adds almost no cost when it is uncongested. It has features of both, so it is an impure public good.",
          "A street light in a neighbourhood: everyone benefits and it is hard to charge individuals. A free rider would let the neighbours pay, so it is usually provided by local government."
        ]},
        key: "Pure public goods are non-rival and non-excludable. Because non-payers cannot be excluded, free riding makes private markets under-supply them."
      },
      questions: [
        { d: "Easy", q: "A good that is non-rival and non-excludable is called a:", o: ["Pure private good", "Pure public good", "Normal good", "Inferior good"], a: 1, e: "Non-rivalry and non-excludability together define a pure public good." },
        { d: "Easy", q: "Which is an example of a pure public good?", o: ["A loaf of bread", "A pair of shoes", "National defence", "A taxi ride"], a: 2, e: "National defence benefits everyone and no one can be excluded." },
        { d: "Medium", q: "A person who enjoys a public good without contributing to its cost is a:", o: ["Monopolist", "Free rider", "Rent-seeker", "Screener"], a: 1, e: "That is the definition of a free rider." },
        { d: "Medium", q: "Why do private markets tend to under-supply public goods?", o: ["They are always too expensive to produce", "Non-payers cannot be excluded, so people have an incentive not to pay", "Consumers do not value them", "Governments forbid private production"], a: 1, e: "Non-excludability creates free riding and weakens the incentive to pay." },
        { d: "Hard", q: "Toll booths on an expressway make the road:", o: ["Less excludable", "More excludable", "More rivalrous only", "Non-rival and non-excludable"], a: 1, e: "Tolls let operators exclude non-payers, so technology can make a good excludable." }
      ]
    },
    {
      section: "3.3", name: "Externalities",
      description: "Positive and negative externalities, why they cause inefficiency, and solutions such as taxes, subsidies and bargaining.",
      lesson: {
        objectives: [
          "Define externalities and distinguish positive from negative ones.",
          "Explain why externalities cause over- or under-production.",
          "Describe the Pigouvian tax, subsidy, Coase theorem and property rights solutions."
        ],
        sections: [
          { heading: "What are externalities?", body: [
            "An externality is an effect of producing or consuming a good on other people that is not reflected in the price. A positive externality benefits a third party without payment (education, a park, street lights). A negative externality harms a third party without compensation (pollution, smoking, factories emitting carbon dioxide or dumping waste in rivers). Externalities can be created by consumers or producers, and they are reciprocal in nature, since they result from the combined actions of two or more parties."
          ]},
          { heading: "Why they cause inefficiency", body: [
            "Efficiency requires price to equal marginal cost, but with an externality private and social costs or benefits differ. With a negative externality, marginal social cost exceeds marginal private cost (MSC = MPC + marginal external cost), so firms produce too much. With a positive externality, marginal social benefit exceeds marginal private benefit, so too little is produced. Either way there is a deadweight loss."
          ]},
          { heading: "Solutions", body: [
            "For a negative externality: a per-unit tax equal to the gap between MSC and MPC at the socially optimal output (proposed by A.C. Pigou in 1920); private bargaining between the affected parties (the Coase theorem of 1960, which needs low transaction costs, few parties and well-defined property rights); or defining and selling property rights to pollute, so producers take the cost into account. Optimal pollution is not zero pollution, which would mean zero production.",
            "For a positive externality: a per-unit subsidy equal to the gap between marginal social and private benefit, or direct government supply. All these solutions aim to internalise the externality, so that the external cost or benefit enters private decisions."
          ]}
        ],
        example: { title: "Worked example: a Pigouvian tax", steps: [
          "A leather factory's private marginal cost is 40 Birr per unit. Its waste costs people downstream 10 Birr per unit.",
          "Marginal social cost = 40 + 10 = 50 Birr per unit.",
          "At a market price of 45 Birr the factory is happy to produce, since 45 > 40, but society loses, since 45 < 50. The factory over-produces.",
          "A tax of 10 Birr per unit raises the factory's cost to 50, so it only produces units whose value covers the full social cost. The externality has been internalised."
        ]},
        key: "A negative externality causes over-production (MSC > MPC); a positive externality causes under-production (MSB > MPB). Taxes, subsidies, bargaining and property rights can internalise them."
      },
      questions: [
        { d: "Easy", q: "Pollution from a factory that harms nearby residents is an example of a:", o: ["Positive externality", "Negative externality", "Public good", "Free rider"], a: 1, e: "Pollution imposes uncompensated costs on third parties." },
        { d: "Medium", q: "With a negative externality in production, which relationship holds?", o: ["MSC < MPC", "MSC = MPC", "MSC > MPC", "MSB > MPB"], a: 2, e: "MSC = MPC + marginal external cost, so MSC exceeds MPC." },
        { d: "Medium", q: "A per-unit tax equal to the marginal external cost is known as a:", o: ["Coase tax", "Pigouvian tax", "Poll tax", "Tariff"], a: 1, e: "A.C. Pigou proposed taxing the difference between social and private cost." },
        { d: "Medium", q: "A positive externality leads to:", o: ["Over-production", "Under-production", "Efficient production", "No production"], a: 1, e: "Because MSB exceeds MPB, the market produces too little." },
        { d: "Hard", q: "Which condition is NOT required for the Coase theorem to give an efficient bargain?", o: ["Low transaction costs", "A small number of affected parties", "Well-defined property rights", "A government tax on the polluter"], a: 3, e: "Coase relies on bargaining, not taxes: low transaction costs, few parties and clear property rights." }
      ]
    },
    {
      section: "3.4", name: "Asymmetric Information",
      description: "Adverse selection, moral hazard, and the signalling and screening solutions.",
      lesson: {
        objectives: [
          "Define asymmetric information.",
          "Distinguish adverse selection from moral hazard.",
          "Explain signalling and screening."
        ],
        sections: [
          { heading: "One side knows more", body: [
            "Asymmetric information exists when one party in a transaction has more information than the other, for example when a seller knows more about a good than the buyer. This imbalance can lead the transaction to break down. Two problems follow: adverse selection and moral hazard."
          ]},
          { heading: "Adverse selection and moral hazard", body: [
            "Adverse selection (the hidden information problem) arises when one side cannot observe the type or quality of what the other side offers, so bad products or customers are more likely to be selected. Health insurance, for example, is more likely to be bought by people who expect to get sick.",
            "Moral hazard (the hidden action problem) arises when one side cannot observe the other's actions. A party protected from risk may act less carefully. An owner with theft insurance may be less careful about locking the car. After insurance becomes available, some people also claim for treatment they would otherwise not have bought."
          ]},
          { heading: "Signalling and screening", body: [
            "Signalling: the informed party conveys information about itself, such as workers acquiring education to show their skills, or the owner of a good used car offering a warranty that the owner of a bad car could not afford. Screening: the less-informed party gathers information, such as a bank asking a borrower for financial history, job security and the reason for the loan. Offering health insurance as part of a job package also avoids adverse selection, since all employees take part."
          ]}
        ],
        example: { title: "Worked example: spotting the problem", steps: [
          "A used-car seller knows the car has engine trouble, but the buyer cannot tell. This is adverse selection: hidden information about quality.",
          "A driver stops locking the car after buying theft insurance. This is moral hazard: a hidden action after the contract.",
          "A seller offers a two-year warranty to show the car is sound. This is signalling.",
          "A bank asks a loan applicant for pay slips and credit history. This is screening."
        ]},
        key: "Adverse selection is hidden information before a deal; moral hazard is hidden action after it. Signalling and screening reduce them."
      },
      questions: [
        { d: "Easy", q: "Asymmetric information means that:", o: ["All parties know everything", "One party has more information than the other", "Prices are equal in all markets", "Information is free"], a: 1, e: "Asymmetric information is when one party holds more information than the other." },
        { d: "Medium", q: "A person with car-theft insurance stops locking the car. This is:", o: ["Adverse selection", "Signalling", "Moral hazard", "Screening"], a: 2, e: "Being insulated from risk changes behaviour: a hidden action problem." },
        { d: "Medium", q: "Health insurance being bought mostly by people who expect to get sick is an example of:", o: ["Moral hazard", "Adverse selection", "A free rider problem", "A positive externality"], a: 1, e: "Hidden information about type leads the worse risks to be selected." },
        { d: "Hard", q: "A bank asking a borrower for financial history before lending is:", o: ["Signalling by the borrower", "Screening by the lender", "Moral hazard", "A public good"], a: 1, e: "The less-informed party gathers information to combat adverse selection: screening." }
      ]
    },
    {
      section: "3.5", name: "Consumer Protection",
      description: "Why consumers need protection, common malpractices, and the consumer rights under Ethiopian Proclamation No. 813/2013.",
      lesson: {
        objectives: [
          "Define consumer protection.",
          "Identify common business malpractices.",
          "Explain why consumer protection is needed.",
          "State the main consumer rights in Ethiopia's Consumer Proclamation."
        ],
        sections: [
          { heading: "What it is and why it is needed", body: [
            "Consumer protection means safeguarding the interests and rights of consumers, through measures by governments or non-governmental organisations that protect them from unethical business practices and give them quick redress. Consumers often lack awareness or are in a weak position, so they need physical safety, protection of their economic interests, access to information, satisfactory standards and legal remedies.",
            "Businesses also gain: they have a social responsibility to serve consumers, consumer satisfaction is the key to success, and in a competitive globalised market a business that cheats consumers will find it hard to survive."
          ]},
          { heading: "Common malpractices", body: [
            "These include selling adulterated goods (adding something inferior), spurious goods (little value instead of the real product), sub-standard or defective goods, false weights and measures, hoarding and black-marketing, charging above the maximum retail price, misleading advertisements and supplying inferior services."
          ]},
          { heading: "Consumer protection in Ethiopia", body: [
            "Consumer Proclamation No. 813/2013 gives consumers rights including: receiving sufficient and accurate information about the quality and type of goods and services; choosing freely; not being obliged to buy simply because they inspected goods or bargained; being treated respectfully; and claiming compensation for damage from the goods or services from those involved in supplying them, such as the manufacturer, importer, wholesaler or retailer.",
            "Its objectives are to protect the business community from anti-competitive and unfair practices and consumers from misleading conduct, to ensure goods and services are safe and worth the price, and to speed up economic development."
          ]}
        ],
        example: { title: "Worked example: applying the rights", steps: [
          "A shop sells cooking oil mixed with a cheaper oil but labelled as pure. This is the sale of adulterated goods and a misleading claim.",
          "The buyer was denied accurate information about the product, a right under the Proclamation.",
          "A customer who falls ill from the oil may claim compensation from those who supplied it, such as the manufacturer or retailer.",
          "A second shop charges more than the maximum retail price. This is also a malpractice the law is meant to prevent."
        ]},
        key: "Consumer protection safeguards buyers from unethical practices. Ethiopia's Consumer Proclamation No. 813/2013 gives rights to information, choice, respect and compensation."
      },
      questions: [
        { d: "Easy", q: "Adding an inferior substance to a product being sold is called:", o: ["Hoarding", "Adulteration", "Signalling", "Screening"], a: 1, e: "Adulterated goods have something inferior added." },
        { d: "Easy", q: "Consumer protection means:", o: ["Protecting firms from competition", "Safeguarding the interests and rights of consumers", "Setting all prices", "Banning imports"], a: 1, e: "It refers to measures that protect consumers from unethical business practices." },
        { d: "Medium", q: "Which is a right of consumers under the Ethiopian Consumer Proclamation?", o: ["To receive sufficient and accurate information about goods and services", "To pay any price they choose", "To be forced to buy after inspecting goods", "To avoid all taxes"], a: 0, e: "The Proclamation guarantees sufficient and accurate information, among other rights." },
        { d: "Medium", q: "Hoarding goods to create scarcity and raise prices is classed as:", o: ["A consumer right", "A business malpractice", "A public good", "An externality benefit"], a: 1, e: "Hoarding and black-marketing are listed among malpractices." },
        { d: "Hard", q: "Why does consumer protection also benefit honest businesses?", o: ["It removes all competition", "It builds trust and consumer satisfaction, which support long-run survival and growth", "It guarantees profits", "It lets businesses set any price"], a: 1, e: "Consumer satisfaction and trust are key to a business's long-run success, and unfair rivals are restrained." }
      ]
    }
  ]
};
