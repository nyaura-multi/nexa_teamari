module.exports = {
  subject: "math", grade: 12, unitNo: 3,
  unitTitle: "Statistics",
  topics: [
    {
      section: "3.1", name: "Measures of Absolute Dispersion",
      description: "Range, quartile deviation, mean deviation, variance and standard deviation.",
      lesson: {
        objectives: [
          "Explain what dispersion measures.",
          "Calculate the range and quartile deviation.",
          "Calculate mean deviation, variance and standard deviation."
        ],
        sections: [
          { heading: "Why measure spread?", body: [
            "Two data sets can have the same mean but very different spread. Measures of dispersion describe how far values are scattered around the centre. Absolute measures are expressed in the same units as the data."
          ]},
          { heading: "Simple measures", body: [
            "The range is the largest value minus the smallest. The interquartile range is Q3 - Q1, and the quartile deviation (semi-interquartile range) is (Q3 - Q1) / 2. These depend on only a few values and ignore the rest."
          ]},
          { heading: "Measures using every value", body: [
            "Let the mean be x-bar. The mean deviation is the average of |x - x-bar|. The variance is the average squared deviation: for a population, σ^2 = Σ (x - μ)^2 / N, and for a sample, s^2 = Σ (x - x-bar)^2 / (n - 1). The standard deviation is the square root of the variance, which returns it to the original units.",
            "Adding the same number to every value does not change the spread. Multiplying every value by k multiplies the standard deviation by |k|."
          ]}
        ],
        example: { title: "Worked example: spread of a small data set", steps: [
          "Data: 4, 8, 6, 5, 7. The mean is (4 + 8 + 6 + 5 + 7) / 5 = 6.",
          "Deviations from the mean: -2, 2, 0, -1, 1. Mean deviation = (2 + 2 + 0 + 1 + 1) / 5 = 1.2.",
          "Squared deviations: 4, 4, 0, 1, 1, with sum 10. Population variance = 10 / 5 = 2.",
          "Standard deviation = √2, about 1.41. The range is 8 - 4 = 4."
        ]},
        key: "Range = largest - smallest; variance is the mean of squared deviations; standard deviation = √variance."
      },
      questions: [
        { d: "Easy", q: "What is the range of the data 3, 9, 12, 5, 20?", o: ["12", "15", "17", "20"], a: 2, e: "Range = 20 - 3 = 17." },
        { d: "Medium", q: "The variance of a data set is 16. What is its standard deviation?", o: ["2", "4", "8", "256"], a: 1, e: "Standard deviation = √16 = 4." },
        { d: "Medium", q: "If Q1 = 10 and Q3 = 30, the quartile deviation is:", o: ["10", "20", "30", "40"], a: 0, e: "(Q3 - Q1) / 2 = (30 - 10) / 2 = 10." },
        { d: "Medium", q: "Find the population variance of 2, 4, 6, 8.", o: ["4", "5", "6", "20"], a: 1, e: "Mean = 5; squared deviations 9, 1, 1, 9 sum to 20; 20 / 4 = 5." },
        { d: "Hard", q: "Each value in a data set is increased by 5. What happens to the standard deviation?", o: ["It increases by 5", "It is multiplied by 5", "It stays the same", "It decreases"], a: 2, e: "Adding a constant shifts every value, but the distances between values (spread) do not change." }
      ]
    },
    {
      section: "3.2", name: "Interpretation of Relative Dispersion",
      description: "Coefficient of variation and other relative measures used to compare variability between data sets.",
      lesson: {
        objectives: [
          "Explain why relative measures are needed.",
          "Calculate the coefficient of variation.",
          "Calculate the coefficients of range and quartile deviation.",
          "Compare the consistency of two data sets."
        ],
        sections: [
          { heading: "Comparing different data sets", body: [
            "Absolute measures cannot fairly compare data sets with different units or very different means. A relative measure of dispersion divides a spread measure by an average, giving a pure number (or a percentage) with no units."
          ]},
          { heading: "The main coefficients", body: [
            "Coefficient of variation: CV = (standard deviation / mean) x 100%. Coefficient of range = (H - L) / (H + L), where H is the largest and L the smallest value. Coefficient of quartile deviation = (Q3 - Q1) / (Q3 + Q1).",
            "The smaller the coefficient, the more consistent (less variable) the data."
          ]}
        ],
        example: { title: "Worked example: which is more consistent?", steps: [
          "Group A has mean 50 and standard deviation 5, so CV = 5 / 50 x 100 = 10%.",
          "Group B has mean 20 and standard deviation 4, so CV = 4 / 20 x 100 = 20%.",
          "Group A has the larger standard deviation (5 against 4), but relative to its mean it varies much less than Group B does.",
          "So Group A (CV 10%) is more consistent than Group B (CV 20%)."
        ]},
        key: "CV = (standard deviation / mean) x 100%. A lower CV means the data are more consistent."
      },
      questions: [
        { d: "Easy", q: "The coefficient of variation is calculated as:", o: ["Mean / standard deviation x 100", "Standard deviation / mean x 100", "Range / mean", "Variance x mean"], a: 1, e: "CV = (standard deviation / mean) x 100%." },
        { d: "Medium", q: "A data set has mean 40 and standard deviation 8. What is the CV?", o: ["5%", "20%", "32%", "48%"], a: 1, e: "8 / 40 x 100 = 20%." },
        { d: "Medium", q: "Class A has CV 12% and Class B has CV 18%. Which is more consistent?", o: ["Class A", "Class B", "They are equally consistent", "It cannot be known"], a: 0, e: "A lower CV means less relative variability, so Class A is more consistent." },
        { d: "Hard", q: "The largest value is 70 and the smallest is 30. The coefficient of range is:", o: ["0.4", "0.57", "40", "2.33"], a: 0, e: "(70 - 30) / (70 + 30) = 40 / 100 = 0.4." },
        { d: "Hard", q: "If Q1 = 20 and Q3 = 60, the coefficient of quartile deviation is:", o: ["0.25", "0.5", "0.67", "2"], a: 1, e: "(60 - 20) / (60 + 20) = 40 / 80 = 0.5." }
      ]
    },
    {
      section: "3.3", name: "Use of Frequency Curves",
      description: "Histograms, frequency polygons, ogives, and the shapes of distributions including symmetry and skewness.",
      lesson: {
        objectives: [
          "Draw and read histograms, frequency polygons and ogives.",
          "Describe a distribution as symmetric or skewed.",
          "Relate the mean, median and mode to the shape."
        ],
        sections: [
          { heading: "Graphs of grouped data", body: [
            "A histogram uses touching bars whose areas show class frequencies. A frequency polygon joins the midpoints of the tops of the bars. A cumulative frequency curve (ogive) plots cumulative frequency against upper class boundaries; it can be used to estimate the median, quartiles and percentiles."
          ]},
          { heading: "Shapes of distributions", body: [
            "A smooth frequency curve can be symmetric, where the mean, median and mode are equal, as in the bell-shaped normal curve. It can be positively skewed, with a long tail to the right, where mean > median > mode. It can be negatively skewed, with a long tail to the left, where mean < median < mode.",
            "The tail pulls the mean toward it more strongly than the median, which is why the mean moves in the direction of the skew."
          ]}
        ],
        example: { title: "Worked example: reading skewness", steps: [
          "Incomes in a village: most people earn little and a few earn a lot. The right tail is long, so the distribution is positively skewed.",
          "The few very large incomes pull the mean above the median.",
          "Test marks that are bunched near the maximum with a few very low scores give a long left tail: negatively skewed, with mean < median.",
          "To estimate the median from an ogive, find the value on the horizontal axis that matches half of the total cumulative frequency."
        ]},
        key: "Symmetric: mean = median = mode. Positive skew: mean > median > mode. Negative skew: mean < median < mode."
      },
      questions: [
        { d: "Easy", q: "In a symmetric distribution, the mean, median and mode are:", o: ["All different", "Equal", "Zero", "Always negative"], a: 1, e: "Symmetry places all three measures at the centre." },
        { d: "Medium", q: "In a positively skewed distribution:", o: ["mean < median", "mean = median", "mean > median", "median = 0"], a: 2, e: "The long right tail pulls the mean above the median." },
        { d: "Medium", q: "A cumulative frequency curve (ogive) can be used to estimate the:", o: ["Median and quartiles", "Number of classes", "Range of the sample frame", "Sampling error"], a: 0, e: "Reading off cumulative frequency gives medians, quartiles and percentiles." },
        { d: "Hard", q: "If mean < median < mode, the distribution is:", o: ["Symmetric", "Positively skewed", "Negatively skewed", "Uniform"], a: 2, e: "Mean below median below mode indicates a long left tail." },
        { d: "Hard", q: "A frequency polygon is drawn by joining:", o: ["The tops of the bars at the class limits", "The midpoints of the tops of the bars", "The bottoms of the bars", "Cumulative frequencies"], a: 1, e: "A frequency polygon connects the midpoints of the tops of the histogram bars." }
      ]
    },
    {
      section: "3.4", name: "Sampling Techniques",
      description: "Populations and samples, random, systematic, stratified and cluster sampling, and sources of bias.",
      lesson: {
        objectives: [
          "Distinguish a population from a sample.",
          "Describe simple random, systematic, stratified and cluster sampling.",
          "Recognise non-probability methods and sources of bias."
        ],
        sections: [
          { heading: "Population and sample", body: [
            "A population is the entire group being studied. A sample is a part of it that is actually observed. Studying a sample is faster and cheaper than a full census, but the sample must represent the population or the conclusions will be biased. A sampling frame is the list from which the sample is drawn."
          ]},
          { heading: "Probability sampling", body: [
            "Simple random sampling: every member has an equal chance of selection, for example by drawing lots or using random numbers. Systematic sampling: choose every k-th member after a random start, where k = N / n. Stratified sampling: divide the population into groups (strata) such as grade levels and take a sample from each, usually in proportion to its size. Cluster sampling: randomly select whole groups (clusters) such as schools and study everyone in them."
          ]},
          { heading: "Non-probability sampling", body: [
            "Convenience sampling takes whoever is easy to reach. Quota and purposive sampling select by the researcher's judgement. These methods are cheap but often biased because not everyone has a known chance of being chosen."
          ]}
        ],
        example: { title: "Worked example: sampling a school", steps: [
          "A school has 1,200 students and the survey needs a sample of 60.",
          "Systematic: k = 1,200 / 60 = 20, so pick a random start from 1 to 20 and then every 20th student on the register.",
          "Stratified (10% from each grade): if Grade 9 has 400 students, take 40 from it; Grade 10 with 500 students gives 50, and the other grades are sampled in the same proportion.",
          "Cluster: randomly select 3 classes and survey every student in them."
        ]},
        key: "A sample should represent the population. Random, systematic, stratified and cluster methods are probability methods; convenience sampling is not."
      },
      questions: [
        { d: "Easy", q: "The entire group of people or items being studied is the:", o: ["Sample", "Population", "Stratum", "Cluster"], a: 1, e: "The population is the whole group; a sample is a part of it." },
        { d: "Medium", q: "A population of 1,000 is sampled systematically to get 50 items. The sampling interval k is:", o: ["5", "20", "50", "950"], a: 1, e: "k = N / n = 1,000 / 50 = 20." },
        { d: "Medium", q: "Dividing a population into groups and sampling from each group in proportion to its size is called:", o: ["Cluster sampling", "Convenience sampling", "Stratified sampling", "Systematic sampling"], a: 2, e: "That is the definition of stratified sampling." },
        { d: "Medium", q: "Randomly choosing 3 schools from a district and surveying every student in them is:", o: ["Cluster sampling", "Stratified sampling", "Quota sampling", "Census"], a: 0, e: "Whole groups are selected at random, which is cluster sampling." },
        { d: "Hard", q: "Surveying only the students who happen to be standing near the gate is an example of:", o: ["Simple random sampling", "Systematic sampling", "Convenience sampling, which may be biased", "Stratified sampling"], a: 2, e: "People are chosen because they are easy to reach, not by a known chance, so bias is likely." }
      ]
    }
  ]
};
