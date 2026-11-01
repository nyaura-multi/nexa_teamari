module.exports = {
  subject: "math", grade: 12, unitNo: 4,
  unitTitle: "Introduction to Linear Programming",
  topics: [
    {
      section: "4.1", name: "Graphical Solutions of Systems of Linear Inequalities",
      description: "Graphing linear inequalities in two variables and finding the feasible region of a system.",
      lesson: {
        objectives: [
          "Graph a linear inequality in two variables.",
          "Decide whether a point satisfies an inequality.",
          "Find the feasible region and its vertices for a system of inequalities."
        ],
        sections: [
          { heading: "Graphing one inequality", body: [
            "To graph ax + by ≤ c, first draw the boundary line ax + by = c. Use a solid line for ≤ or ≥ (points on the line are included) and a dashed line for < or > (they are not). Then test a point not on the line, usually (0, 0): if it satisfies the inequality, shade the side containing it; otherwise shade the other side."
          ]},
          { heading: "Systems and the feasible region", body: [
            "A system of inequalities is a set of inequalities that must all hold at once. Its solution set is the overlap of all the shaded regions, called the feasible region. The corner points of this region are its vertices, found by solving pairs of boundary equations together.",
            "Constraints such as x ≥ 0 and y ≥ 0 restrict the region to the first quadrant, which is typical when x and y are quantities that cannot be negative."
          ]}
        ],
        example: { title: "Worked example: a triangular region", steps: [
          "Graph x + y ≤ 4, x ≥ 0 and y ≥ 0.",
          "The boundary x + y = 4 passes through (4, 0) and (0, 4). Testing (0, 0): 0 ≤ 4 is true, so shade toward the origin.",
          "With x ≥ 0 and y ≥ 0, the feasible region is the triangle with vertices (0, 0), (4, 0) and (0, 4).",
          "To find where x + y = 6 meets x - y = 2, add the equations: 2x = 8, so x = 4 and y = 2, giving the point (4, 2)."
        ]},
        key: "The feasible region is where all the shaded regions overlap. Its vertices come from solving pairs of boundary lines."
      },
      questions: [
        { d: "Easy", q: "The boundary line for x + y ≤ 6 should be drawn as:", o: ["Dashed","Solid","Curved","Not drawn"], a: 1, e: "The symbol ≤ includes the boundary, so the line is solid." },
        { d: "Medium", q: "Does the point (1, 2) satisfy 2x + y ≤ 5?", o: ["Yes, because 4 ≤ 5","No, because 5 > 4","Yes, because 3 ≤ 5","No, because 2x = 2"], a: 0, e: "2(1) + 2 = 4, and 4 ≤ 5 is true." },
        { d: "Medium", q: "What are the vertices of the region x + y ≤ 4, x ≥ 0, y ≥ 0?", o: ["(0,0), (4,0), (0,4)","(0,0), (2,2), (4,4)","(1,1), (4,0), (0,4)","(0,0), (4,4), (0,4)"], a: 0, e: "It is a triangle formed by the axes and the line x + y = 4." },
        { d: "Medium", q: "Where do the lines x + y = 6 and x - y = 2 intersect?", o: ["(2, 4)","(4, 2)","(3, 3)","(6, 0)"], a: 1, e: "Adding gives 2x = 8, so x = 4 and y = 2." },
        { d: "Hard", q: "Which point lies in the feasible region of x ≥ 0, y ≥ 0 and x + 2y ≤ 8?", o: ["(2, 3)","(4, 3)","(8, 1)","(0, 5)"], a: 0, e: "(2, 3) gives 2 + 2(3) = 8, which is ≤ 8. Each of the other points gives 10, which exceeds 8." },
        { d: "Easy", q: "For x+y≤6, which point is on the boundary line?", o: ["(2,3)","(1,4)","(4,2)","(0,5)"], a: 2, e: "A boundary point satisfies x+y=6. Only (4,2) sums to 6." },
        { d: "Medium", q: "Does (2,1) satisfy 3x+2y≤8?", o: ["Yes, because 8≤8","Yes, because 7≤8","No, because 8>7","No, because 3>2"], a: 0, e: "Substitute: 3(2)+2(1)=8, so the inequality is satisfied at equality." },
        { d: "Medium", q: "Find the intersection of x+y=7 and x-y=1.", o: ["(3,4)","(4,3)","(5,2)","(2,5)"], a: 1, e: "Add the equations: 2x=8, so x=4; then y=3." },
        { d: "Medium", q: "For x+y≤5 with x≥0 and y≥0, which point is feasible?", o: ["(4,2)","(-1,2)","(2,3)","(3,1)"], a: 3, e: "At (3,1), both coordinates are nonnegative and x+y=4≤5." },
        { d: "Hard", q: "A boundary line is x+2y=8. Its intercepts are:", o: ["(8,0) and (0,4)","(4,0) and (0,8)","(8,0) and (0,8)","(4,0) and (0,4)"], a: 0, e: "Set y=0 to get x=8; set x=0 to get 2y=8, hence y=4." },
        { d: "Hard", q: "Which point is the intersection of 2x+y=8 and x+y=5?", o: ["(2,3)","(3,2)","(4,0)","(1,4)"], a: 1, e: "Subtract the second equation from the first: x=3. Then y=2." },
        { d: "Hard", q: "For x≥0, y≥0, x+y≤6 and x+2y≤8, which listed point is a vertex of the feasible region?", o: ["(0,6)","(4,2)","(6,0)","(0,8)"], a: 1, e: "The two sloping boundaries meet at x+y=6 and x+2y=8, giving y=2 and x=4." }
      ]
    },
    {
      section: "4.2", name: "Maximum and Minimum Values",
      description: "Objective functions and the corner point method for finding optimal solutions.",
      lesson: {
        objectives: [
          "Define an objective function and a feasible solution.",
          "Use the corner point method to find a maximum or minimum.",
          "Explain why the optimum occurs at a vertex."
        ],
        sections: [
          { heading: "The objective function", body: [
            "Linear programming optimises (maximises or minimises) a linear objective function such as z = ax + by, subject to a set of linear constraints. Every point in the feasible region is a feasible solution, and the best one is the optimal solution."
          ]},
          { heading: "The corner point method", body: [
            "If a linear programming problem has an optimal solution over a bounded feasible region, it occurs at a vertex (corner point). So: graph the feasible region, find all vertices, evaluate z at each, and choose the largest value for a maximum or the smallest for a minimum.",
            "This works because the objective is linear: moving across the region changes z steadily, so the extreme values sit at the edges and corners."
          ]},
          { heading: "Checking vertices with a spreadsheet", body: [
            "A spreadsheet makes the corner point method quick. List each vertex in a row, with x in column A and y in column B. In column C enter the objective function as a formula, such as =3*A2+2*B2, and fill it down for every vertex. Then use =MAX(C2:C4) to find the maximum or =MIN(C2:C4) for the minimum, and read off which vertex gave it. Changing the coefficients in the formula lets you test other objective functions instantly."
          ]}
        ],
        example: { title: "Worked example: maximise z = 3x + 2y", steps: [
          "Constraints: x + y ≤ 4, x ≥ 0, y ≥ 0. The vertices are (0, 0), (4, 0) and (0, 4).",
          "z at (0, 0) = 0. z at (4, 0) = 12. z at (0, 4) = 8.",
          "The largest value is 12, so the maximum is 12 at (4, 0).",
          "For a minimum problem, we would pick the smallest value instead."
        ]},
        key: "Evaluate the objective function at every vertex of the feasible region: the largest value is the maximum and the smallest is the minimum."
      },
      questions: [
        { d: "Easy", q: "In linear programming, the objective function is:", o: ["A constraint that must be satisfied","The quantity to be maximised or minimised","The graph's boundary line","The set of feasible points"], a: 1, e: "The objective function is the linear quantity being optimised." },
        { d: "Medium", q: "Evaluate z = 2x + 3y at (3, 2).", o: ["10","12","13","15"], a: 1, e: "2(3) + 3(2) = 12." },
        { d: "Medium", q: "Maximise z = x + y over the vertices (0, 0), (5, 0), (0, 4) and (3, 3). The maximum is:", o: ["5","6","7","4"], a: 1, e: "z = 0, 5, 4 and 6, so the maximum is 6." },
        { d: "Medium", q: "Minimise z = 2x + y over the vertices (1, 1), (4, 0) and (0, 5). The minimum is:", o: ["3","5","8","1"], a: 0, e: "z = 3, 8 and 5, so the minimum is 3." },
        { d: "Hard", q: "For a bounded feasible region, where does the optimal value of a linear objective function occur?", o: ["At the centre of the region","At a vertex of the region","Only on the x-axis","Outside the region"], a: 1, e: "A linear function reaches its maximum and minimum at corner points of a bounded region." },
        { d: "Easy", q: "Evaluate z=3x+2y at (2,4).", o: ["10","12","14","16"], a: 2, e: "z=3(2)+2(4)=6+8=14." },
        { d: "Hard", q: "At (2,2), (4,0), and (0,5), find the minimum of z=3x+2y.", o: ["10","12","15","16"], a: 0, e: "Evaluate z: 10, 12, and 10. The minimum value is 10, attained at two vertices." },
        { d: "Hard", q: "A bounded feasible region has vertices (0,0), (4,0), (2,3). Which is the maximum of z=5x+2y?", o: ["18","20","22","24"], a: 1, e: "Values are 0, 20, and 16. The maximum is 20 at (4,0)." },
        { d: "Hard", q: "For objective z=2x+4y, vertices A=(4,0) and B=(0,2) both give the same value. What follows?", o: ["There are at least two optimal vertices","The problem is infeasible","The maximum is zero","No optimum exists"], a: 0, e: "Both values equal 8, so both listed vertices are optimal (and the edge between them may also be optimal)." },
        { d: "Medium", q: "At vertices (0,0), (4,0), (2,3), evaluate z=2x+3y. What is the maximum?", o: ["8","11","13","15"], a: 2, e: "The values are 0, 8, and 13; the maximum is 13." },
        { d: "Medium", q: "At which point is z=4x+y smallest: (0,5), (2,1), or (3,0)?", o: ["(0,5)","(2,1)","(3,0)","All are equal"], a: 0, e: "The values are 5, 9, and 12; the minimum is 5 at (0,5)." },
        { d: "Medium", q: "At vertices (0,0), (6,0), (0,4), find the maximum of z=2x+3y.", o: ["12","15","18","24"], a: 0, e: "The values are 0, 12, and 12; the maximum is 12 at two vertices." }
      ]
    },
    {
      section: "4.3", name: "Applications of Linear Programming",
      description: "Turning real problems into constraints and an objective function, then solving them.",
      lesson: {
        objectives: [
          "Define decision variables from a word problem.",
          "Write the constraints and the objective function.",
          "Solve the problem and interpret the answer."
        ],
        sections: [
          { heading: "Formulating the problem", body: [
            "Step 1: choose decision variables for the quantities to be decided (for example x chairs and y tables). Step 2: write constraints from the limited resources (time, materials, money). Step 3: include non-negativity constraints x ≥ 0 and y ≥ 0, because quantities cannot be negative. Step 4: write the objective function, such as total profit or total cost."
          ]},
          { heading: "Solving and interpreting", body: [
            "Graph the constraints, find the vertices of the feasible region, evaluate the objective function at each, and select the best. Finally, state the answer in words with units: how many of each item, and what the maximum profit or minimum cost is."
          ]}
        ],
        example: { title: "Worked example: a carpenter's profit", steps: [
          "A carpenter makes x chairs and y tables. A chair takes 2 hours and a table 3 hours, with 24 hours available: 2x + 3y ≤ 24. At most 9 chairs can be sold: x ≤ 9. Also x ≥ 0 and y ≥ 0.",
          "Profit is P = 20x + 40y. The vertices are (0, 0), (9, 0), (9, 2) and (0, 8). (At x = 9: 18 + 3y = 24, so y = 2.)",
          "P = 0, 180, 260 and 320 respectively.",
          "The maximum profit is 320 Birr, from making 0 chairs and 8 tables."
        ]},
        key: "Define variables, write constraints and the objective, graph the feasible region, then test the vertices."
      },
      questions: [
        { d: "Easy", q: "Decision variables in a linear programming problem represent:", o: ["The unknown quantities to be decided","The constraints","The profit only","The graph axes labels only"], a: 0, e: "They are the quantities, such as numbers of items, that the solution will decide." },
        { d: "Medium", q: "A shop wants x notebooks and y pens with at most 50 items in total. The constraint is:", o: ["x + y ≥ 50","x + y ≤ 50","xy ≤ 50","x - y ≤ 50"], a: 1, e: "The total number of items must not exceed 50." },
        { d: "Medium", q: "A machine needs 2 hours for each unit of product A and 3 hours for each unit of product B, with 60 hours available. The constraint is:", o: ["2x + 3y ≤ 60","3x + 2y ≤ 60","2x + 3y ≥ 60","5(x + y) ≤ 60"], a: 0, e: "Total machine time is 2x + 3y, and it cannot exceed 60 hours." },
        { d: "Medium", q: "Why do we add the constraints x ≥ 0 and y ≥ 0?", o: ["To make the graph smaller","Because quantities produced cannot be negative","Because profit is always positive","To remove the objective function"], a: 1, e: "You cannot make a negative number of items." },
        { d: "Hard", q: "Maximise P = 5x + 4y over the vertices (0, 0), (6, 0), (4, 3) and (0, 5). The maximum is:", o: ["30","32","20","35"], a: 1, e: "P = 0, 30, 32 and 20, so the maximum is 32 at (4, 3)." },
        { d: "Easy", q: "A product A earns 6 Birr profit and product B earns 9 Birr. If x and y are quantities, the profit objective is:", o: ["P=6x+9y","P=15xy","P=x+y+15","P=6x-9y"], a: 0, e: "Add each product's profit multiplied by its quantity: P=6x+9y." },
        { d: "Medium", q: "A workshop has 40 hours. Each table takes 4 hours and each chair 2 hours. The time constraint is:", o: ["4x+2y≤40","2x+4y≤40","4x+2y≥40","6(x+y)≤40"], a: 0, e: "Total time is 4x+2y and cannot exceed the 40 available hours." },
        { d: "Medium", q: "A business must make at least 10 units in total. The constraint is:", o: ["x+y≤10","x+y=10","x+y≥10","xy≥10"], a: 2, e: "At least 10 means the total may be 10 or greater." },
        { d: "Medium", q: "A seller earns 12 Birr on A and 8 Birr on B. Which is the objective to maximise?", o: ["12x+8y","20xy","12x-8y","x+y"], a: 0, e: "Total profit is 12x+8y, and the problem asks to maximise it." },
        { d: "Hard", q: "A company makes x chairs and y desks. Wood allows x+2y≤20 and labor allows 3x+2y≤30. What is the intersection of the boundary lines?", o: ["(5,7.5)","(10,5)","(0,10)","(10,0)"], a: 0, e: "Subtract equations: 2x=10, x=5. Then 5+2y=20, so y=7.5." },
        { d: "Hard", q: "Maximise P=4x+3y at vertices (0,0), (5,0), (3,4), (0,6). What is P_max?", o: ["18","20","24","30"], a: 2, e: "Values are 0, 20, 24, and 18; the maximum is 24 at (3,4)." },
        { d: "Hard", q: "A farm has 30 hours. Crop A takes 2 hours per plot, crop B takes 5. At most 8 plots of B can be planted. Which pair satisfies both constraints?", o: ["(7,5)","(10,5)","(8,9)","(2,4)"], a: 3, e: "For (2,4), hours=2(2)+5(4)=24≤30 and crop B is 4≤8. The other options violate a constraint." }
      ]
    }
  ]
};

