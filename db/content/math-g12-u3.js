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
        { d: "Easy", q: "What is the range of the data 3, 9, 12, 5, 20?", o: ["12","15","17","20"], a: 2, e: "Range = 20 - 3 = 17." },
        { d: "Medium", q: "The variance of a data set is 16. What is its standard deviation?", o: ["2","4","8","256"], a: 1, e: "Standard deviation = √16 = 4." },
        { d: "Medium", q: "If Q1 = 10 and Q3 = 30, the quartile deviation is:", o: ["10","20","30","40"], a: 0, e: "(Q3 - Q1) / 2 = (30 - 10) / 2 = 10." },
        { d: "Medium", q: "Find the population variance of 2, 4, 6, 8.", o: ["4","5","6","20"], a: 1, e: "Mean = 5; squared deviations 9, 1, 1, 9 sum to 20; 20 / 4 = 5." },
        { d: "Hard", q: "Each value in a data set is increased by 5. What happens to the standard deviation?", o: ["It increases by 5","It is multiplied by 5","It stays the same","It decreases"], a: 2, e: "Adding a constant shifts every value, but the distances between values (spread) do not change." },
        { d: "Easy", q: "Find the range of 4, 7, 9, 15, 18.", o: ["11","12","14","18"], a: 2, e: "Range = largest - smallest = 18 - 4 = 14." },
        { d: "Medium", q: "Find the population variance of 1, 3, 5, 7, 9.", o: ["4","6","8","10"], a: 2, e: "Mean=5; squared deviations are 16,4,0,4,16, summing to 40. Divide by N=5: variance=8." },
        { d: "Medium", q: "For data 2, 4, 6, the mean deviation about the mean is:", o: ["1","4/3","2","3"], a: 1, e: "Mean=4; absolute deviations are 2,0,2. Their mean is 4/3." },
        { d: "Medium", q: "If every observation is multiplied by -3, the standard deviation is:", o: ["unchanged","multiplied by 3","multiplied by 9","decreased by 3"], a: 1, e: "Multiplying all values by k multiplies standard deviation by |k|. Here |-3|=3." },
        { d: "Hard", q: "Two data sets have the same mean. Set A has standard deviation 2 and set B has standard deviation 5. Which has greater absolute dispersion?", o: ["Set A","Set B","They are equal","Cannot be determined"], a: 1, e: "With the same mean, the larger standard deviation indicates more spread, so set B is more dispersed." },
        { d: "Hard", q: "The population variance is 9. If 10 is added to every data value, what is the new standard deviation?", o: ["3","9","13","19"], a: 0, e: "Adding a constant changes the centre but not the spread. The standard deviation remains √9=3." },
        { d: "Hard", q: "For the population 2, 4, 6, 8, find the standard deviation.", o: ["√2","2","√5","4"], a: 2, e: "Mean=5; squared deviations total 20, so population variance=20/4=5 and standard deviation=√5." }
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
        { d: "Easy", q: "The coefficient of variation is calculated as:", o: ["Mean / standard deviation x 100","Standard deviation / mean x 100","Range / mean","Variance x mean"], a: 1, e: "CV = (standard deviation / mean) x 100%." },
        { d: "Medium", q: "A data set has mean 40 and standard deviation 8. What is the CV?", o: ["5%","20%","32%","48%"], a: 1, e: "8 / 40 x 100 = 20%." },
        { d: "Medium", q: "Class A has CV 12% and Class B has CV 18%. Which is more consistent?", o: ["Class A","Class B","They are equally consistent","It cannot be known"], a: 0, e: "A lower CV means less relative variability, so Class A is more consistent." },
        { d: "Hard", q: "The largest value is 70 and the smallest is 30. The coefficient of range is:", o: ["0.4","0.57","40","2.33"], a: 0, e: "(70 - 30) / (70 + 30) = 40 / 100 = 0.4." },
        { d: "Hard", q: "If Q1 = 20 and Q3 = 60, the coefficient of quartile deviation is:", o: ["0.25","0.5","0.67","2"], a: 1, e: "(60 - 20) / (60 + 20) = 40 / 80 = 0.5." },
        { d: "Easy", q: "A data set has mean 25 and standard deviation 5. Find its coefficient of variation.", o: ["5%","20%","25%","125%"], a: 1, e: "CV=(5/25)×100%=20%." },
        { d: "Medium", q: "Class A has mean 40, SD 4; Class B has mean 20, SD 3. Which has the lower CV?", o: ["A: 10%","B: 10%","A: 15%","B: 15%"], a: 0, e: "CV_A=4/40×100=10%; CV_B=3/20×100=15%. A has lower relative dispersion." },
        { d: "Medium", q: "For a data set with largest value 90 and smallest value 30, the coefficient of range is:", o: ["0.50","0.60","0.67","2.00"], a: 0, e: "(H-L)/(H+L)=(90-30)/(90+30)=60/120=0.50." },
        { d: "Medium", q: "A data set has Q1=12 and Q3=28. Its coefficient of quartile deviation is:", o: ["0.25","0.40","0.50","0.75"], a: 1, e: "(Q3-Q1)/(Q3+Q1)=16/40=0.40." },
        { d: "Hard", q: "If the mean is 80 and the coefficient of variation is 12.5%, what is the standard deviation?", o: ["8","10","12.5","640"], a: 1, e: "SD=(CV/100)×mean=0.125×80=10." },
        { d: "Hard", q: "Two series are measured in different units. Which measure is more suitable for comparing their relative variability?", o: ["Range","Variance","Coefficient of variation","Mean deviation"], a: 2, e: "The coefficient of variation is unit-free because it divides standard deviation by the mean." },
        { d: "Hard", q: "Group A: mean 60, SD 9. Group B: mean 40, SD 7. Which is more consistent?", o: ["A: CV 15%","B: CV 17.5%","A: CV 17.5%","B: CV 15%"], a: 0, e: "CV_A=9/60×100=15%; CV_B=7/40×100=17.5%. Group A has the lower CV and is more consistent." }
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
        { d: "Easy", q: "In a symmetric distribution, the mean, median and mode are:", o: ["All different","Equal","Zero","Always negative"], a: 1, e: "Symmetry places all three measures at the centre." },
        { d: "Medium", q: "In a positively skewed distribution:", o: ["mean < median","mean = median","mean > median","median = 0"], a: 2, e: "The long right tail pulls the mean above the median." },
        { d: "Medium", q: "A cumulative frequency curve (ogive) can be used to estimate the:", o: ["Median and quartiles","Number of classes","Range of the sample frame","Sampling error"], a: 0, e: "Reading off cumulative frequency gives medians, quartiles and percentiles." },
        { d: "Hard", q: "If mean < median < mode, the distribution is:", o: ["Symmetric","Positively skewed","Negatively skewed","Uniform"], a: 2, e: "Mean below median below mode indicates a long left tail." },
        { d: "Hard", q: "A frequency polygon is drawn by joining:", o: ["The tops of the bars at the class limits","The midpoints of the tops of the bars","The bottoms of the bars","Cumulative frequencies"], a: 1, e: "A frequency polygon connects the midpoints of the tops of the histogram bars." },
        { d: "Easy", q: "A class interval is 10≤x<20. What is its midpoint?", o: ["10","15","20","30"], a: 1, e: "Midpoint=(10+20)/2=15." },
        { d: "Medium", q: "Class frequencies are 5, 8, 7 for intervals 0–10, 10–20, 20–30. What is the cumulative frequency up to 20?", o: ["5","8","13","20"], a: 2, e: "Add the first two frequencies: 5+8=13." },
        { d: "Medium", q: "An ogive is most useful for estimating which value?", o: ["The exact mode of raw data","The median and quartiles","The class midpoint only","The standard deviation directly"], a: 1, e: "An ogive plots cumulative frequency and can estimate medians, quartiles, and percentiles." },
        { d: "Medium", q: "A distribution has a long tail to the left. Which relation is typical?", o: ["mean > median > mode","mean = median = mode","mean < median < mode","mode < mean < median"], a: 2, e: "In negative skew, the tail pulls the mean left, giving mean < median < mode." },
        { d: "Hard", q: "A frequency polygon is constructed by plotting class midpoints against:", o: ["Cumulative frequency","Class frequency","Class width","Lower class boundary only"], a: 1, e: "Each point uses the class midpoint on the horizontal axis and its frequency on the vertical axis." },
        { d: "Hard", q: "For a positively skewed distribution, which statement is generally true?", o: ["The tail is right and mean > median","The tail is left and mean < median","The distribution is symmetric","Mean, median and mode are always equal"], a: 0, e: "A positive (right) tail pulls the mean furthest right: typically mean > median > mode." },
        { d: "Hard", q: "An ogive reaches cumulative frequency 40 at x=50. If the total frequency is 80, what does x=50 represent approximately?", o: ["First quartile","Median","Third quartile","Maximum"], a: 1, e: "Half of 80 is 40, so the value at cumulative frequency 40 estimates the median." }
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
        { d: "Easy", q: "The entire group of people or items being studied is the:", o: ["Sample","Population","Stratum","Cluster"], a: 1, e: "The population is the whole group; a sample is a part of it." },
        { d: "Medium", q: "A population of 1,000 is sampled systematically to get 50 items. The sampling interval k is:", o: ["5","20","50","950"], a: 1, e: "k = N / n = 1,000 / 50 = 20." },
        { d: "Medium", q: "Dividing a population into groups and sampling from each group in proportion to its size is called:", o: ["Cluster sampling","Convenience sampling","Stratified sampling","Systematic sampling"], a: 2, e: "That is the definition of stratified sampling." },
        { d: "Medium", q: "Randomly choosing 3 schools from a district and surveying every student in them is:", o: ["Cluster sampling","Stratified sampling","Quota sampling","Census"], a: 0, e: "Whole groups are selected at random, which is cluster sampling." },
        { d: "Hard", q: "Surveying only the students who happen to be standing near the gate is an example of:", o: ["Simple random sampling","Systematic sampling","Convenience sampling, which may be biased","Stratified sampling"], a: 2, e: "People are chosen because they are easy to reach, not by a known chance, so bias is likely." },
        { d: "Easy", q: "A researcher selects every 12th name after a random starting point. Which method is used?", o: ["Simple random","Systematic","Stratified","Convenience"], a: 1, e: "Selecting at a fixed interval after a random start is systematic sampling." },
        { d: "Medium", q: "A school has 600 girls and 400 boys. A proportional stratified sample of 50 students should include:", o: ["30 girls and 20 boys","25 girls and 25 boys","20 girls and 30 boys","50 girls only"], a: 0, e: "Girls are 60% of the population, so sample 30; boys are 40%, so sample 20." },
        { d: "Medium", q: "A survey uses only volunteers who answer a social-media post. What is the main concern?", o: ["It is a census","Volunteer bias may make it unrepresentative","It is stratified","It guarantees equal selection chances"], a: 1, e: "People who volunteer may differ from those who do not, creating volunteer bias." },
        { d: "Medium", q: "A district randomly selects 4 schools, then surveys every student in those schools. This is:", o: ["Systematic sampling","Cluster sampling","Convenience sampling","Stratified sampling"], a: 1, e: "Each selected school is a cluster, and all students in chosen clusters are surveyed." },
        { d: "Hard", q: "A population contains 800 urban and 200 rural households. For a proportional sample of 100, how many rural households should be selected?", o: ["10","20","25","80"], a: 1, e: "Rural households are 200/1000=20% of the population; 20% of 100 is 20." },
        { d: "Hard", q: "Which method best ensures that both rural and urban groups are represented in proportion to their sizes?", o: ["Convenience","Cluster only","Proportional stratified","Volunteer"], a: 2, e: "Separate the population into rural and urban strata, then sample proportionally from each." },
        { d: "Hard", q: "Why can sampling every 10th item be biased if a production line has a repeating cycle of 10?", o: ["The interval is too large","The sample may align with the repeating pattern","It becomes a census","Systematic samples cannot be random"], a: 1, e: "A periodic pattern matching the interval can repeatedly select the same type of item." }
      ]
    }
  ]
};

