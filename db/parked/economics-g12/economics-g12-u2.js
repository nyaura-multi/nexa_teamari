module.exports = {
  subject: "economics", grade: 12, unitNo: 2,
  unitTitle: "Aggregate Demand and Aggregate Supply Analysis",
  topics: [
    {
      section: "2.1", name: "Aggregate Demand and the AD Curve",
      description: "What aggregate demand is, its four components, and why the AD curve slopes downward.",
      lesson: {
        objectives: [
          "Define aggregate demand and list its four components.",
          "Explain why the aggregate demand curve slopes downward.",
          "Distinguish a change in quantity demanded from a change in aggregate demand."
        ],
        sections: [
          { heading: "What is aggregate demand?", body: [
            "Aggregate demand (AD) is the total amount that households, firms and the government are willing to spend on the goods and services produced in an economy in a given period. It has four components, so AD = C + I + G + (X - M), where C is household consumption, I is private investment, G is government purchases and X - M is net exports.",
            "Consumption depends mainly on disposable income (income after taxes), wealth and the price level. Investment depends on the level of output, the cost of capital and expectations. Government purchases are set directly by government decisions. Net exports depend on domestic and foreign incomes, relative prices and exchange rates."
          ]},
          { heading: "Why the AD curve slopes downward", body: [
            "The AD curve shows the real output buyers want to purchase at each price level, other things equal. The relationship is inverse: a lower price level means a larger quantity of real GDP demanded. Three effects explain this.",
            "The real balance effect: a lower price level raises the purchasing power of money holdings, so people feel wealthier and spend more. The interest rate effect: a lower price level reduces the demand for money, lowering interest rates and encouraging borrowing for investment and durable goods. The international trade effect: if domestic prices fall, home goods become cheaper relative to foreign goods, so exports rise and imports fall."
          ]},
          { heading: "Movement along versus shift of the curve", body: [
            "A change in the price level causes a change in the quantity of real GDP demanded, shown as a movement along the same AD curve. A change in any other determinant, such as income, interest rates or foreign demand, changes aggregate demand itself and shifts the whole curve."
          ]}
        ],
        example: { title: "Worked example: adding up AD", steps: [
          "Suppose C = 900, I = 250, G = 300, exports X = 180 and imports M = 230 (billion Birr).",
          "Net exports = X - M = 180 - 230 = -50.",
          "AD = C + I + G + (X - M) = 900 + 250 + 300 + (-50) = 1,400.",
          "If the price level falls and the quantity demanded rises, we move down along the same AD curve. If instead G rises by 100 at the same price level, the whole curve shifts right."
        ]},
        key: "AD = C + I + G + (X - M). The AD curve slopes downward because of the real balance, interest rate and international trade effects."
      },
      questions: [
        { d: "Easy", q: "Which expression gives aggregate demand?", o: ["C + S + T + M", "C + I + G + (X - M)", "Y - T + G", "W + R + I + P"], a: 1, e: "AD is the sum of consumption, investment, government purchases and net exports." },
        { d: "Easy", q: "The aggregate demand curve slopes:", o: ["Upward, because a higher price level raises spending", "Downward, because a lower price level raises the quantity of real GDP demanded", "Vertically, at full employment", "Horizontally, at the natural rate"], a: 1, e: "The relationship between the price level and real GDP demanded is inverse." },
        { d: "Medium", q: "A fall in the price level raises the purchasing power of people's money holdings and increases spending. This is the:", o: ["Interest rate effect", "International trade effect", "Real balance effect", "Crowding-out effect"], a: 2, e: "The real balance effect works through the value of monetary wealth." },
        { d: "Medium", q: "A change in the price level causes:", o: ["A shift of the AD curve", "A movement along the AD curve", "A shift of the LRAS curve", "No change in quantity demanded"], a: 1, e: "Price level changes move us along the curve; other determinants shift it." },
        { d: "Hard", q: "If C = 700, I = 200, G = 250, X = 150 and M = 180, aggregate demand is:", o: ["1,300", "1,150", "1,280", "1,120"], a: 3, e: "AD = C + I + G + (X - M) = 700 + 200 + 250 + (150 - 180) = 1,120." }
      ]
    },
    {
      section: "2.1.3", name: "Shifts in Aggregate Demand",
      description: "The factors that shift the AD curve: consumption, investment, government spending and net exports.",
      lesson: {
        objectives: [
          "Explain how consumption, investment, government spending and net exports shift AD.",
          "Predict the direction of shift for common changes such as taxes or interest rates.",
          "Explain how the exchange rate affects net exports."
        ],
        sections: [
          { heading: "The rule", body: [
            "AD changes when spending on a country's goods and services changes at a given price level. If consumption, investment, government purchases or net exports rise, AD rises and the curve shifts right. If any of them falls, AD falls and the curve shifts left."
          ]},
          { heading: "Consumption and investment", body: [
            "Consumption rises with wealth, with expectations of higher future income or prices, with lower interest rates (which make borrowing for durable goods cheaper), and with lower income taxes (which raise disposable income). The opposite changes reduce consumption.",
            "Investment rises when interest rates fall, when firms expect higher future sales, and when business taxes fall, because each raises expected profitability. Higher interest rates, pessimism and higher business taxes cut investment."
          ]},
          { heading: "Government spending and net exports", body: [
            "More government purchases shift AD right, provided taxes and interest rates do not change in response; less spending shifts it left. Net exports rise with foreign income, because foreigners buy more of our exports, and with a depreciation of the domestic currency, which makes our goods cheaper abroad and imports dearer at home. An appreciation has the opposite effect."
          ]}
        ],
        example: { title: "Worked example: tracing a shift", steps: [
          "The government cuts income taxes.",
          "Disposable income rises, so households consume more at every price level.",
          "Higher consumption raises aggregate demand.",
          "The AD curve shifts to the right, and at the same price level more real GDP is demanded.",
          "Now suppose the Birr depreciates: Ethiopian goods become cheaper abroad, exports rise, imports fall, net exports rise and AD shifts right again."
        ]},
        key: "Anything that raises C, I, G or net exports at a given price level shifts the AD curve right; anything that lowers them shifts it left."
      },
      questions: [
        { d: "Easy", q: "An increase in government purchases of goods and services, with taxes and interest rates unchanged, will:", o: ["Shift AD to the left", "Shift AD to the right", "Shift LRAS to the right", "Not affect AD"], a: 1, e: "Government purchases are a component of AD, so an increase shifts the curve right." },
        { d: "Medium", q: "A rise in interest rates will most likely:", o: ["Increase investment and shift AD right", "Reduce investment and consumption of durables, shifting AD left", "Increase net exports", "Have no effect on AD"], a: 1, e: "Higher interest rates make borrowing costlier, reducing investment and durable-goods consumption." },
        { d: "Medium", q: "If foreign real incomes rise, Ethiopia's aggregate demand will:", o: ["Fall, because imports fall", "Rise, because exports and net exports rise", "Stay the same", "Fall, because prices rise"], a: 1, e: "Foreigners with higher incomes buy more Ethiopian goods, raising net exports." },
        { d: "Hard", q: "When the Birr depreciates, which combination is most likely?", o: ["Exports fall, imports rise, AD falls", "Exports rise, imports fall, AD rises", "Exports and imports both rise, AD is unchanged", "Exports rise, imports rise, AD falls"], a: 1, e: "A depreciation makes exports cheaper abroad and imports dearer, raising net exports and AD." }
      ]
    },
    {
      section: "2.2", name: "Aggregate Supply and the Short-Run AS Curve",
      description: "The meaning of aggregate supply, why the short-run AS curve slopes upward, and what shifts it.",
      lesson: {
        objectives: [
          "Define aggregate supply and the short run and long run.",
          "Explain sticky wages and worker misperceptions.",
          "Calculate a real wage.",
          "List the factors that shift the SRAS curve."
        ],
        sections: [
          { heading: "Aggregate supply", body: [
            "Aggregate supply is the quantity of all goods and services (real GDP) that firms are willing to supply at each price level, other things equal. In the short run, at least one input cannot be varied; in the long run, all inputs can be changed. The short-run aggregate supply (SRAS) curve slopes upward: a higher price level leads firms to supply more output."
          ]},
          { heading: "Why SRAS slopes upward", body: [
            "Sticky wages: wages are often fixed for a period by contracts or social norms. Real wage = nominal wage / price level. If the price level falls while the nominal wage is locked in, the real wage rises, firms hire fewer workers, and output falls. So a lower price level goes with lower output.",
            "Worker misperceptions: workers may notice that their nominal wage has fallen but not realise by how much prices have fallen. They believe their real wage has dropped, supply less labour, and output falls."
          ]},
          { heading: "What shifts SRAS", body: [
            "A change in the price level moves us along SRAS. Other factors shift it: input prices (especially wages), the availability of resources such as labour and capital, productivity, technology, business taxes and subsidies, and weather, which matters particularly for agriculture. Profit per unit = price - cost per unit, so higher wages raise costs, lower profits and shift SRAS to the left; lower costs shift it right."
          ]}
        ],
        example: { title: "Worked example: sticky wages", steps: [
          "A firm has a contract to pay a nominal wage of 60 Birr an hour. The price index is 1.20.",
          "Real wage = 60 / 1.20 = 50 Birr.",
          "The price level falls to 1.00 but the contract keeps the nominal wage at 60.",
          "New real wage = 60 / 1.00 = 60 Birr, higher than expected.",
          "The firm hires fewer workers, so output falls. A lower price level therefore goes with lower output, which gives an upward-sloping SRAS curve."
        ]},
        key: "The SRAS curve slopes upward because of sticky wages and worker misperceptions. Real wage = nominal wage / price level."
      },
      questions: [
        { d: "Easy", q: "The short-run aggregate supply curve slopes:", o: ["Downward", "Upward", "Vertically", "It has no slope"], a: 1, e: "In the short run a higher price level leads firms to supply more output." },
        { d: "Medium", q: "A nominal wage of 90 Birr and a price index of 1.50 give a real wage of:", o: ["135", "60", "91.5", "45"], a: 1, e: "Real wage = 90 / 1.50 = 60." },
        { d: "Medium", q: "Which event shifts the SRAS curve to the left?", o: ["A fall in wage rates", "An improvement in technology", "A rise in the cost of inputs", "Good weather for farming"], a: 2, e: "Higher input costs reduce profit per unit and cut the quantity supplied at each price level." },
        { d: "Hard", q: "With sticky nominal wages, a fall in the price level leads to lower output because:", o: ["The real wage rises, so firms hire fewer workers", "The real wage falls, so workers work more", "Firms' costs fall sharply", "Aggregate demand rises"], a: 0, e: "A fixed nominal wage divided by a lower price level means a higher real wage, so firms cut employment and output." }
      ]
    },
    {
      section: "2.2.3", name: "The Long-Run AS Curve",
      description: "Why the long-run aggregate supply curve is vertical at natural real GDP.",
      lesson: {
        objectives: [
          "Explain what the long run means in AS analysis.",
          "Define natural real GDP.",
          "Explain why the LRAS curve is vertical."
        ],
        sections: [
          { heading: "From the short run to the long run", body: [
            "Short-run supply slopes upward because of sticky wages and worker misperceptions. Given enough time, wages become flexible and misperceptions turn into accurate perceptions. When both conditions no longer hold, the economy is in the long run."
          ]},
          { heading: "Natural real GDP", body: [
            "In the long run the economy produces its full-employment or natural real GDP, written QN. The long-run aggregate supply (LRAS) curve is therefore vertical at QN: changes in the price level do not change long-run output, because wages and prices have fully adjusted. Long-run equilibrium is the level of real GDP when wages and prices have reached their final equilibrium levels and workers have no misperceptions.",
            "The classical view of aggregate supply is the same idea: a vertical curve, with the labour market always at full employment. The Keynesian view of a horizontal curve applies to an economy with high unemployment, where firms supply whatever is demanded at the existing price."
          ]}
        ],
        example: { title: "Worked example: what the vertical curve means", steps: [
          "Suppose natural real GDP QN is 1,000 billion Birr.",
          "If the price level doubles and wages and prices fully adjust, the economy still produces 1,000 in the long run.",
          "Output in the long run is determined by resources and technology, not by the price level.",
          "So a rise in aggregate demand in the long run raises prices but not real output."
        ]},
        key: "The LRAS curve is vertical at natural real GDP, because in the long run wages and prices fully adjust."
      },
      questions: [
        { d: "Easy", q: "The long-run aggregate supply curve is:", o: ["Upward sloping", "Downward sloping", "Vertical at natural real GDP", "Horizontal"], a: 2, e: "In the long run output is at natural (full-employment) real GDP regardless of the price level." },
        { d: "Medium", q: "In the long run, wages become flexible and misperceptions disappear. This means the economy produces:", o: ["Zero output", "Natural real GDP", "Output that depends on aggregate demand", "Only exports"], a: 1, e: "Once the sticky wage and misperception conditions no longer hold, output equals natural real GDP." },
        { d: "Medium", q: "Which view of aggregate supply is vertical, with the labour market always at full employment?", o: ["Keynesian", "Classical", "Monetarist short-run view", "Marxist"], a: 1, e: "The classical aggregate supply curve is vertical." },
        { d: "Hard", q: "In the long run, an increase in aggregate demand will mainly:", o: ["Raise real GDP permanently", "Raise the price level without changing real GDP", "Lower the price level", "Shift LRAS to the right"], a: 1, e: "With a vertical LRAS curve, higher AD raises prices but leaves output at natural real GDP." }
      ]
    },
    {
      section: "2.3", name: "Equilibrium of Aggregate Demand and Aggregate Supply",
      description: "How AD and AS together determine the price level and real GDP in the short run and the long run.",
      lesson: {
        objectives: [
          "Define macroeconomic equilibrium.",
          "Explain how surpluses and shortages move the economy toward equilibrium.",
          "Distinguish short-run from long-run equilibrium."
        ],
        sections: [
          { heading: "Finding equilibrium", body: [
            "Short-run equilibrium is at the intersection of the AD curve and the SRAS curve. It determines the equilibrium price level (PE) and the equilibrium real GDP (QE). Long-run equilibrium is where the AD curve intersects the LRAS curve.",
            "If the price level is above equilibrium, the quantity of real GDP supplied exceeds the quantity demanded: there is a surplus, so the price level falls, firms cut output and buyers spend more. If the price level is below equilibrium, there is a shortage, so the price level rises. Either way the economy moves toward equilibrium. If AD and AS do not change, the economy stays at the natural rate of output."
          ]}
        ],
        example: { title: "Worked example: surplus and shortage", steps: [
          "At a price level of 120, quantity demanded is 900 and quantity supplied is 1,100. Supply exceeds demand by 200: a surplus.",
          "Firms cut prices and output, and buyers spend more as prices fall, so the price level moves down.",
          "At a price level of 80, quantity demanded is 1,100 and quantity supplied is 900. Demand exceeds supply by 200: a shortage.",
          "The price level rises. At a price level of 100, both quantities are 1,000, so 100 is the equilibrium price level and 1,000 the equilibrium real GDP."
        ]},
        key: "Short-run equilibrium is where AD meets SRAS; long-run equilibrium is where AD meets LRAS. Surpluses push the price level down and shortages push it up."
      },
      questions: [
        { d: "Easy", q: "Short-run macroeconomic equilibrium occurs where:", o: ["AD meets SRAS", "LRAS meets the x-axis", "SRAS meets LRAS", "AD meets the price axis"], a: 0, e: "The intersection of AD and SRAS gives the short-run equilibrium price level and real GDP." },
        { d: "Medium", q: "If the price level is above the equilibrium level:", o: ["There is a shortage and prices rise", "There is a surplus and prices fall", "The economy is already in equilibrium", "LRAS shifts"], a: 1, e: "At a high price level, quantity supplied exceeds quantity demanded, creating a surplus." },
        { d: "Medium", q: "Long-run equilibrium is where the aggregate demand curve intersects the:", o: ["Short-run aggregate supply curve", "Long-run aggregate supply curve", "Price axis", "Investment curve"], a: 1, e: "Long-run equilibrium occurs at the intersection of AD and LRAS." },
        { d: "Hard", q: "At a price level of 90, quantity demanded is 1,200 and quantity supplied is 950. What happens next?", o: ["The price level falls", "The price level rises toward equilibrium", "Nothing, this is equilibrium", "Output rises with no price change"], a: 1, e: "Demand exceeds supply by 250, so there is a shortage and the price level rises." }
      ]
    },
    {
      section: "2.3.1", name: "Shocks to Aggregate Demand and Aggregate Supply",
      description: "How demand shocks and supply shocks change the price level and real GDP.",
      lesson: {
        objectives: [
          "Define demand shocks and supply shocks.",
          "Predict the effect of a shock on price and output.",
          "Explain why supply shocks move price and output in opposite directions."
        ],
        sections: [
          { heading: "Demand shocks", body: [
            "A demand shock is an unexpected change in aggregate demand. It can come from expansionary monetary or fiscal policy or from a change in desired spending. An expansionary demand shock shifts AD to the right and raises both the price level and real GDP. A contractionary demand shock shifts AD to the left and lowers both. Price and output move in the same direction."
          ]},
          { heading: "Supply shocks", body: [
            "A supply shock is a sudden change in aggregate supply. Better technology or more labour and capital shift SRAS right, raising output and lowering prices. A crop-destroying storm or an interruption to imported inputs such as oil shifts SRAS left, lowering output and raising prices. Supply shocks therefore move the price level and real GDP in opposite directions."
          ]}
        ],
        example: { title: "Worked example: an oil price rise", steps: [
          "The world price of imported oil rises sharply, raising firms' costs.",
          "At every price level firms now supply less, so SRAS shifts left.",
          "The new equilibrium has lower real GDP (output falls) and a higher price level.",
          "Compare with a demand boost from higher government spending: AD shifts right and both output and the price level rise."
        ]},
        key: "Demand shocks move price and output in the same direction; supply shocks move them in opposite directions."
      },
      questions: [
        { d: "Easy", q: "An expansionary demand shock shifts the AD curve:", o: ["To the left", "To the right", "Vertically", "It does not shift"], a: 1, e: "Expansionary means a rightward shift of AD." },
        { d: "Medium", q: "A sharp rise in the price of imported oil causes:", o: ["SRAS to shift right, output to rise", "SRAS to shift left, output to fall and prices to rise", "AD to shift left only", "No change in output"], a: 1, e: "Higher input costs shift SRAS left, lowering real GDP and raising the price level." },
        { d: "Medium", q: "An improvement in production technology will:", o: ["Raise prices and lower output", "Shift SRAS to the right, raising output and lowering the price level", "Shift AD to the left", "Reduce employment"], a: 1, e: "Better technology increases supply at each price level." },
        { d: "Hard", q: "Which statement is correct?", o: ["Demand shocks move price and output in opposite directions", "Supply shocks move price and output in opposite directions", "Both shocks move price and output in the same direction", "Neither shock affects price"], a: 1, e: "Supply shocks move price and output in opposite directions; demand shocks move them together." }
      ]
    }
  ]
};
