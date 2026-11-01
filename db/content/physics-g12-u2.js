module.exports = {
  subject: 'physics', grade: 12, unitNo: 2, unitTitle: 'Two-dimensional Motion',
  topics: [
    {
      section: '2.1', name: 'Projectile Motion',
      description: 'Resolve projectile motion into independent horizontal and vertical components.',
      lesson: {
        objectives: ['Resolve velocity into components.', 'Calculate flight time, range and maximum height for equal launch and landing levels.'],
        sections: [
          { heading: 'Two independent motions', body: ['Ignoring air resistance, horizontal acceleration is zero and vertical acceleration is g downward. If initial speed is u at angle θ, then ux = u cos θ and uy = u sin θ.', 'Use x = ux t horizontally and y = uy t − ½gt² vertically. For equal launch and landing heights, T = 2u sin θ/g, H = u² sin² θ/(2g), and R = u² sin(2θ)/g.'] }
        ],
        example: { title: 'Horizontal launch', steps: ['A ball leaves a 20 m high table at 6 m/s horizontally; take g = 10 m/s².', 'From −20 = −½(10)t², flight time is 2 s.', 'Horizontal distance is 6 × 2 = 12 m.'] },
        key: 'Horizontal and vertical motions share time but have separate velocity and acceleration equations.'
      },
      questions: [
        { d:'Easy', q:'A 20 m/s launch at 30° has what initial vertical velocity? (sin 30° = 0.5)', o:['5 m/s','10 m/s','17.3 m/s','20 m/s'], a:1, e:'uy = u sin θ = 20 × 0.5 = 10 m/s.' },
        { d:'Easy', q:'Ignoring air resistance, what is the horizontal acceleration of a projectile?', o:['0 m/s²','g downward','g upward','It increases with time'], a:0, e:'Gravity acts vertically, so horizontal acceleration is zero.' },
        { d:'Medium', q:'A ball is launched horizontally at 8 m/s and stays airborne for 3 s. How far does it travel horizontally?', o:['8 m','16 m','24 m','72 m'], a:2, e:'x = vt = 8 × 3 = 24 m.' },
        { d:'Medium', q:'A projectile is launched at 20 m/s at 30° and lands at the same height. With g = 10 m/s², find its flight time.', o:['1 s','2 s','2√3 s','4 s'], a:1, e:'T = 2u sin θ/g = 2(20)(0.5)/10 = 2 s.' },
        { d:'Medium', q:'At the highest point of an ideal projectile path, which is true?', o:['Both velocity components are zero','Vertical velocity is zero; horizontal velocity remains','Horizontal velocity is zero; vertical remains','Acceleration is zero'], a:1, e:'Only the vertical velocity is momentarily zero. Acceleration remains g downward.' },
        { d:'Hard', q:'A projectile is launched at 20 m/s at 30° and lands at its launch level. What is its range? (sin 60° = √3/2)', o:['20 m','20√3 m','40 m','40√3 m'], a:1, e:'R = u² sin(2θ)/g = 400(√3/2)/10 = 20√3 m.' },
        { d:'Hard', q:'Two projectiles are launched at equal speeds at 30° and 60° over level ground. Ignoring air resistance, compare their ranges.', o:['30° range is twice as large','60° range is twice as large','Their ranges are equal','Mass is needed to compare'], a:2, e:'sin 60° = sin 120°, so R = u²sin(2θ)/g is equal.' },
        { d:'Medium', q:'A projectile has velocity components 12 m/s horizontally and 5 m/s vertically. What is its speed?', o:['7 m/s','13 m/s','17 m/s','60 m/s'], a:1, e:'Speed = √(12² + 5²) = 13 m/s.' }
      ]
    },
    {
      section: '2.2', name: 'Rotational Motion',
      description: 'Use angular quantities and relate angular motion to tangential motion.',
      lesson: {
        objectives: ['Calculate angular speed and angular acceleration.', 'Convert between angular and tangential speed.', 'Relate period and frequency.'],
        sections: [
          { heading: 'Angular and tangential quantities', body: ['Angular velocity ω = Δθ/Δt and angular acceleration α = Δω/Δt. One revolution is 2π radians. Frequency f and period T satisfy f = 1/T; ω = 2πf.', 'A point at radius r has tangential speed v = rω and tangential acceleration at = rα. A rigid wheel shares one angular velocity, but points at larger radii move faster tangentially.'] }
        ],
        example: { title: 'Speed at a wheel rim', steps: ['A wheel turns at 4 rad/s and has radius 0.5 m.', 'The rim speed is v = rω = 0.5 × 4 = 2 m/s.'] },
        key: 'For a rigid rotating body, angular velocity is shared; tangential speed equals rω.'
      },
      questions: [
        { d:'Easy', q:'How many radians are in one complete revolution?', o:['π/2','π','2π','4π'], a:2, e:'A full circle is 2π radians.' },
        { d:'Medium', q:'A wheel rotates at 3 revolutions per second. What is ω?', o:['3 rad/s','6π rad/s','3π rad/s','12π rad/s'], a:1, e:'ω = 2πf = 6π rad/s.' },
        { d:'Medium', q:'A point 0.25 m from an axis rotates at 8 rad/s. Find its tangential speed.', o:['0.5 m/s','2 m/s','8 m/s','32 m/s'], a:1, e:'v = rω = 0.25 × 8 = 2 m/s.' },
        { d:'Medium', q:'A fan speeds up from 2 to 14 rad/s in 4 s. Find its average angular acceleration.', o:['3 rad/s²','4 rad/s²','12 rad/s²','16 rad/s²'], a:0, e:'α = (14 − 2)/4 = 3 rad/s².' },
        { d:'Hard', q:'A disc starts from rest with α = 2 rad/s². What angle does it turn through in 5 s?', o:['10 rad','20 rad','25 rad','50 rad'], a:2, e:'θ = ½αt² = ½(2)(25) = 25 rad.' },
        { d:'Medium', q:'A wheel makes 20 revolutions in 10 s. What is its period?', o:['0.5 s','2 s','10 s','20 s'], a:0, e:'f = 2 Hz, so T = 1/f = 0.5 s.' },
        { d:'Hard', q:'On a rigid disc, point B is three times farther from the axis than point A. Compare their speeds.', o:['ωB=3ωA and vB=vA','ωB=ωA and vB=3vA','ωB=ωA and vB=vA/3','ωB=ωA/3 and vB=3vA'], a:1, e:'Angular velocity is common; v = rω, so B has triple tangential speed.' },
        { d:'Easy', q:'A rotating object makes 5 revolutions each second. What is its frequency?', o:['0.2 Hz','1 Hz','5 Hz','10π Hz'], a:2, e:'Frequency is cycles per second: 5 Hz.' }
      ]
    },
    {
      section: '2.3', name: 'Rotational Dynamics',
      description: 'Relate torque and rotational inertia to angular acceleration.',
      lesson: {
        objectives: ['Calculate a force’s turning effect.', 'Apply τnet = Iα.', 'Explain how mass distribution changes rotational inertia.'],
        sections: [
          { heading: 'Torque and inertia', body: ['Torque magnitude is τ = rF sin φ, where φ is the angle between the lever arm and force. A perpendicular force produces maximum torque.', 'For rotation about a fixed axis, τnet = Iα. Rotational inertia I depends on how far mass lies from the axis. Rotational equilibrium requires zero net torque.'] }
        ],
        example: { title: 'A spanner', steps: ['A perpendicular force of 30 N acts 0.20 m from a bolt.', 'τ = rF = 0.20 × 30 = 6 N·m.'] },
        key: 'Net torque produces angular acceleration; a larger rotational inertia reduces the acceleration for a given torque.'
      },
      questions: [
        { d:'Easy', q:'A 10 N force acts perpendicular to a 0.4 m lever arm. What torque is produced?', o:['2.5 N·m','4 N·m','10.4 N·m','25 N·m'], a:1, e:'τ = rF = 0.4 × 10 = 4 N·m.' },
        { d:'Medium', q:'A 12 N·m net torque acts on I = 3 kg·m². Find α.', o:['0.25 rad/s²','4 rad/s²','9 rad/s²','36 rad/s²'], a:1, e:'α = τ/I = 12/3 = 4 rad/s².' },
        { d:'Medium', q:'A 20 N force acts at 0.5 m and 30° to the lever. Find the torque magnitude.', o:['2.5 N·m','5 N·m','8.7 N·m','10 N·m'], a:1, e:'τ = rF sin30° = 0.5 × 20 × 0.5 = 5 N·m.' },
        { d:'Medium', q:'For equal mass and radius, which has greater inertia about its central axis: a thin ring or a solid disc?', o:['Thin ring','Solid disc','Always equal','Not determined by mass distribution'], a:0, e:'More ring mass lies far from the axis; I_ring=MR² while I_disc=½MR².' },
        { d:'Hard', q:'A door is pushed with 40 N at 0.8 m from its hinge, at 60° to the door. Find torque magnitude.', o:['16 N·m','27.7 N·m','32 N·m','55.4 N·m'], a:1, e:'τ = rF sin60° = 0.8 × 40 × √3/2 ≈ 27.7 N·m.' },
        { d:'Medium', q:'A rotor with I = 5 kg·m² accelerates at 2 rad/s². Find the net torque.', o:['2.5 N·m','7 N·m','10 N·m','25 N·m'], a:2, e:'τ = Iα = 5 × 2 = 10 N·m.' },
        { d:'Hard', q:'A wheel (I=2 kg·m²) has 10 N·m clockwise and 6 N·m counterclockwise torques. Find α.', o:['2 rad/s² clockwise','2 rad/s² counterclockwise','8 rad/s² clockwise','8 rad/s² counterclockwise'], a:0, e:'Net torque is 4 N·m clockwise; α = 4/2 = 2 rad/s² clockwise.' },
        { d:'Easy', q:'For the same force and lever distance, when is torque largest?', o:['Force along the lever','Force perpendicular to the lever','Force toward the pivot','All directions are equal'], a:1, e:'τ = rF sinφ is maximum at φ = 90°.' }
      ]
    },
    {
      section: '2.4', name: "Planetary Motion and Kepler's Laws",
      description: "Apply Kepler's laws and compare the orbits of bodies around the same central mass.",
      lesson: {
        objectives: ["State Kepler's laws.", 'Use T² proportional to a³ for bodies orbiting the same central mass.', 'Explain why orbital speed changes along an elliptical orbit.'],
        sections: [
          { heading: "Kepler's laws and gravity", body: ['Planets follow elliptical orbits with the Sun at one focus. A line from the Sun to a planet sweeps equal areas in equal times, so the planet moves faster when closer to the Sun. The square of period T is proportional to the cube of semi-major axis a.', 'For two bodies around the same central mass, T₁²/T₂² = a₁³/a₂³. In a circular orbit, gravity supplies centripetal force and v = √(GM/r).'] }
        ],
        example: { title: 'Compare two orbits', steps: ['A body orbits at four times another body’s orbital radius around the same star.', 'By Kepler’s third law, (T₂/T₁)² = 4³ = 64.', 'Thus T₂ = 8T₁.'] },
        key: 'For the same central body, T²/a³ is constant; a planet moves fastest near the central mass.'
      },
      questions: [
        { d:'Easy', q:"Kepler's first law describes planetary orbits as", o:['circles with the Sun at their centre','ellipses with the Sun at one focus','parabolas','straight lines'], a:1, e:'A planet moves in an ellipse with the Sun at one focus.' },
        { d:'Easy', q:"Kepler's second law says the Sun-planet line sweeps", o:['equal distances in equal times','equal areas in equal times','equal angles in equal times','equal speeds everywhere'], a:1, e:'Equal areas are swept in equal time intervals.' },
        { d:'Medium', q:'A body orbits the same star at twice another body’s orbital radius. What is the period ratio?', o:['2','2√2','4','8'], a:1, e:'(T₂/T₁)² = 2³ = 8, so T₂/T₁ = 2√2.' },
        { d:'Medium', q:'Where does a planet in an elliptical orbit move fastest?', o:['Farthest from the star','Closest to the star','Only at the semi-major axis','At constant speed'], a:1, e:'Equal areas per equal time require greater speed near the star.' },
        { d:'Hard', q:'A planet has period T at radius a. What period corresponds to radius 9a around the same star?', o:['3T','9T','27T','81T'], a:2, e:'(T₂/T)² = 9³ = 729, so T₂ = 27T.' },
        { d:'Medium', q:'A planet’s orbital radius increases. According to Kepler’s third law, its period', o:['decreases','stays constant','increases','becomes zero'], a:2, e:'T² ∝ a³, so a larger orbit has a longer period.' },
        { d:'Hard', q:'Two satellites orbit the same planet at radii r and 4r. What is v(4r)/v(r)?', o:['1/4','1/2','2','4'], a:1, e:'v = √(GM/r), so the ratio is √(r/4r) = 1/2.' },
        { d:'Medium', q:'A planet sweeps 3 × 10¹⁰ m² in 2 days. How much area does it sweep in 5 days?', o:['3 × 10¹⁰','6 × 10¹⁰','7.5 × 10¹⁰','15 × 10¹⁰ m²'], a:2, e:'Area is proportional to time: 3 × 10¹⁰ × 5/2 = 7.5 × 10¹⁰ m².' }
      ]
    },
    {
      section: '2.5', name: "Newton's Law of Universal Gravitation",
      description: 'Apply the inverse-square law and calculate gravitational field strength.',
      lesson: {
        objectives: ["Use F = Gm₁m₂/r².", 'Predict how force changes with masses and separation.', 'Relate field strength to distance from a spherical body.'],
        sections: [
          { heading: 'Force and field', body: ["Any two masses attract with force F = Gm₁m₂/r², where r is the distance between their centres. The force is proportional to each mass and inversely proportional to the square of separation.", 'Gravitational field strength is force per unit mass. For a spherical mass M, g = GM/r² at distance r from its centre. The interaction forces on the two masses have equal magnitude and opposite directions.'] }
        ],
        example: { title: 'Increase separation', steps: ['Two masses exert force F at separation r.', 'At separation 3r, force scales by 1/3².', 'The new force is F/9.'] },
        key: 'Gravitational force and field strength follow inverse-square dependence on centre-to-centre distance.'
      },
      questions: [
        { d:'Easy', q:'Which formula gives the force between masses m₁ and m₂ separated by r?', o:['Gm₁m₂/r','G(m₁+m₂)/r²','Gm₁m₂/r²','Gr²/(m₁m₂)'], a:2, e:'Newton’s law is F = Gm₁m₂/r².' },
        { d:'Easy', q:'If separation doubles, gravitational force becomes', o:['twice as large','half as large','one quarter','four times'], a:2, e:'The inverse-square factor gives 1/2² = 1/4.' },
        { d:'Medium', q:'One mass is tripled while the other mass and separation remain fixed. The force', o:['becomes one third','triples','becomes nine times','does not change'], a:1, e:'Force is directly proportional to each mass.' },
        { d:'Medium', q:'A force is 80 N at distance r. What is it at 2r?', o:['10 N','20 N','40 N','160 N'], a:1, e:'80/2² = 20 N.' },
        { d:'Medium', q:'What is the field strength at the surface of a spherical planet of mass M and radius R?', o:['GM/R','GM/R²','GMR²','GR²/M'], a:1, e:'At the surface, r = R, hence g = GM/R².' },
        { d:'Medium', q:'The force on each of two interacting masses is', o:['larger on the more massive object','larger on the smaller object','equal in magnitude and opposite in direction','equal in magnitude and same direction'], a:2, e:'Newton’s third law gives equal and opposite force pairs.' },
        { d:'Hard', q:'At distance r from a planet’s centre, g = 12 m/s². What is g at 2r?', o:['3 m/s²','6 m/s²','24 m/s²','48 m/s²'], a:0, e:'Field strength varies as 1/r², so 12/4 = 3 m/s².' },
        { d:'Hard', q:'Both masses are doubled and their separation is also doubled. How does force change?', o:['F/4','F/2','F','4F'], a:2, e:'The numerator and r² denominator both multiply by four, so force stays F.' }
      ]
    }
  ]
};

