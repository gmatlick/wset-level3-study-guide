// Comprehensive Wine Education Quiz Data
const quizData = {
    viticulture: {
        name: "Viticulture",
        questions: [
            {
                q: "What is the primary purpose of leaf removal (canopy management)?",
                options: [
                    "Increase water uptake",
                    "Improve air circulation and sunlight penetration",
                    "Prevent frost damage",
                    "Increase nitrogen in soil"
                ],
                correct: 1
            },
            {
                q: "Which training system uses individual stakes for each vine?",
                options: [
                    "VSP (Vertical Shoot Positioning)",
                    "Guyot",
                    "Bush vines",
                    "Scott Henry"
                ],
                correct: 1
            },
            {
                q: "What is green harvesting?",
                options: [
                    "Harvesting unripe grapes for acidity",
                    "Removing excess grape bunches to concentrate remaining fruit",
                    "Harvesting only green varietals",
                    "Mechanical harvesting with green equipment"
                ],
                correct: 1
            },
            {
                q: "Phylloxera primarily attacks which part of the vine?",
                options: [
                    "Leaves",
                    "Grapes",
                    "Roots",
                    "Trunk"
                ],
                correct: 2
            },
            {
                q: "What is the term for flowering in grapevines?",
                options: [
                    "Veraison",
                    "Budbreak",
                    "Flowering (anthesis)",
                    "Fruit set"
                ],
                correct: 2
            },
            {
                q: "At what point in the growing season does veraison occur?",
                options: [
                    "Early spring",
                    "Just before harvest",
                    "Mid-summer when grapes begin to change color and soften",
                    "After harvest"
                ],
                correct: 2
            },
            {
                q: "Which soil type generally provides the best drainage?",
                options: [
                    "Clay",
                    "Sand and gravel",
                    "Loam",
                    "Silt"
                ],
                correct: 1
            },
            {
                q: "What is the primary benefit of using rootstocks?",
                options: [
                    "Increased grape quality",
                    "Resistance to phylloxera",
                    "Better color extraction",
                    "Higher alcohol levels"
                ],
                correct: 1
            },
            {
                q: "Which climate factor is most associated with noble rot development?",
                options: [
                    "Dry conditions throughout growing season",
                    "Humid mornings followed by dry, sunny afternoons in autumn",
                    "Consistent rainfall",
                    "Extreme heat"
                ],
                correct: 1
            },
            {
                q: "What is the purpose of winter pruning?",
                options: [
                    "Remove diseased wood and control yield for next vintage",
                    "Increase water retention",
                    "Prevent spring frost",
                    "Encourage immediate grape ripening"
                ],
                correct: 0
            },
            {
                q: "Which of these is a fungal disease affecting grapevines?",
                options: [
                    "Phylloxera",
                    "Powdery mildew",
                    "Pierce's disease",
                    "Leafroll virus"
                ],
                correct: 1
            },
            {
                q: "What is coulure?",
                options: [
                    "A type of pruning",
                    "Poor fruit set resulting in reduced yield",
                    "Overripening of grapes",
                    "A fungal disease"
                ],
                correct: 1
            },
            {
                q: "Which factor is most important for growing high-quality Pinot Noir?",
                options: [
                    "Hot climate",
                    "Cool climate with long, moderate growing season",
                    "High humidity throughout summer",
                    "Very dry conditions"
                ],
                correct: 1
            },
            {
                q: "What is the term for the measure of dissolved solids (mainly sugar) in grape juice?",
                options: [
                    "pH",
                    "Titratable acidity",
                    "Brix/Baumé/Oechsle",
                    "Malic acid"
                ],
                correct: 2
            },
            {
                q: "Which of these vineyard practices is used in organic viticulture?",
                options: [
                    "Synthetic pesticides",
                    "Copper and sulfur treatments",
                    "GMO rootstocks",
                    "Chemical herbicides"
                ],
                correct: 1
            },
            {
                q: "What is millerandage?",
                options: [
                    "A type of trellis system",
                    "Uneven ripening with bunches containing both normal and small, seedless berries",
                    "A harvesting technique",
                    "A pruning method"
                ],
                correct: 1
            },
            {
                q: "Which ocean current has a cooling effect on coastal vineyards?",
                options: [
                    "Warm currents only",
                    "Cold currents like the Humboldt or Benguela",
                    "All ocean currents warm coastlines",
                    "Ocean currents have no effect on viticulture"
                ],
                correct: 1
            },
            {
                q: "What is the primary purpose of cover crops in vineyards?",
                options: [
                    "Compete with vines for water and nutrients, manage vigor, prevent erosion",
                    "Increase grape sugar levels",
                    "Provide shade for grapes",
                    "Attract pests away from vines"
                ],
                correct: 0
            },
            {
                q: "At what temperature does frost typically damage vines?",
                options: [
                    "Below 10°C",
                    "Below 5°C",
                    "Below 0°C (32°F)",
                    "Below -10°C"
                ],
                correct: 2
            },
            {
                q: "Which trellising system is designed to increase canopy surface area by dividing shoots into two curtains?",
                options: [
                    "Single Guyot",
                    "Scott Henry or Lyre",
                    "Bush vines",
                    "Cordon"
                ],
                correct: 1
            }
        ]
    },
    
    winemaking: {
        name: "Winemaking",
        questions: [
            {
                q: "What is the primary purpose of alcoholic fermentation?",
                options: [
                    "Convert malic acid to lactic acid",
                    "Convert sugar to alcohol and CO2",
                    "Extract color from skins",
                    "Add tannins to wine"
                ],
                correct: 1
            },
            {
                q: "What is malolactic conversion (MLF)?",
                options: [
                    "Conversion of sugar to alcohol",
                    "Conversion of sharp malic acid to softer lactic acid",
                    "Conversion of alcohol to acetic acid",
                    "Conversion of tannins to color"
                ],
                correct: 1
            },
            {
                q: "Which winemaking technique involves leaving wine on the lees (dead yeast cells) after fermentation?",
                options: [
                    "Bâtonnage (lees stirring)",
                    "Racking",
                    "Fining",
                    "Cold stabilization"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of cold stabilization?",
                options: [
                    "Stop fermentation",
                    "Remove tartrate crystals that could form in bottle",
                    "Increase alcohol",
                    "Add freshness"
                ],
                correct: 1
            },
            {
                q: "Which fining agent is animal-derived and commonly used for red wines?",
                options: [
                    "Bentonite (clay)",
                    "Egg whites",
                    "PVPP (synthetic)",
                    "Activated charcoal"
                ],
                correct: 1
            },
            {
                q: "What is the primary difference between alcoholic fermentation in white vs. red winemaking?",
                options: [
                    "White wines ferment at higher temperatures",
                    "White wines are typically fermented without skins, red wines with skins for color and tannin extraction",
                    "White wines always use wild yeast",
                    "Red wines ferment faster"
                ],
                correct: 1
            },
            {
                q: "What does 'sur lie' aging mean?",
                options: [
                    "Aging in new oak",
                    "Aging on the lees (dead yeast)",
                    "Aging in bottle",
                    "Aging in stainless steel"
                ],
                correct: 1
            },
            {
                q: "Which technique involves bleeding off some juice from red wine fermentation to concentrate the remaining must?",
                options: [
                    "Pigeage",
                    "Remontage",
                    "Saignée",
                    "Délestage"
                ],
                correct: 2
            },
            {
                q: "What is the ideal fermentation temperature range for white wines?",
                options: [
                    "5-10°C",
                    "12-22°C (cooler to preserve aromatics)",
                    "25-32°C",
                    "Above 35°C"
                ],
                correct: 1
            },
            {
                q: "What is the purpose of whole-bunch/whole-cluster fermentation?",
                options: [
                    "Speed up fermentation",
                    "Add stalky, spicy aromatics and silky tannin texture",
                    "Remove color",
                    "Increase acidity"
                ],
                correct: 1
            },
            {
                q: "What is reverse osmosis used for in winemaking?",
                options: [
                    "Reduce alcohol or remove excess water",
                    "Add color",
                    "Increase tannins",
                    "Speed up aging"
                ],
                correct: 0
            },
            {
                q: "Which type of oak is most commonly used for wine barrels?",
                options: [
                    "Pine",
                    "French or American oak",
                    "Eucalyptus",
                    "Birch"
                ],
                correct: 1
            },
            {
                q: "What is the difference between French and American oak?",
                options: [
                    "American oak typically imparts more pronounced vanilla, coconut flavors",
                    "French oak is always used for white wines only",
                    "American oak adds more acidity",
                    "There is no difference"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of punching down (pigeage) during red wine fermentation?",
                options: [
                    "Cool the fermentation",
                    "Submerge the cap of skins to extract color, tannin, and flavor",
                    "Remove stems",
                    "Add oxygen to stop fermentation"
                ],
                correct: 1
            },
            {
                q: "What is carbonic maceration?",
                options: [
                    "Fermentation of whole, uncrushed grapes in CO2 atmosphere",
                    "Adding carbon dioxide to wine",
                    "Removing CO2 from wine",
                    "Aging in pressurized tanks"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of chaptalization?",
                options: [
                    "Add acidity",
                    "Add sugar before/during fermentation to increase alcohol",
                    "Remove alcohol",
                    "Add color"
                ],
                correct: 1
            },
            {
                q: "What is flash détente?",
                options: [
                    "Quick chilling of must",
                    "Heating then rapidly cooling grapes to extract color and tannins",
                    "Fast fermentation",
                    "Rapid bottling"
                ],
                correct: 1
            },
            {
                q: "What does 'dégorgement' refer to in sparkling wine production?",
                options: [
                    "Adding the liqueur de tirage",
                    "Removing the sediment (lees) from the bottle neck",
                    "Riddling/remuage",
                    "First fermentation"
                ],
                correct: 1
            },
            {
                q: "What is the purpose of SO2 (sulfur dioxide) in winemaking?",
                options: [
                    "Increase alcohol",
                    "Antioxidant and antimicrobial preservative",
                    "Add color",
                    "Speed up fermentation"
                ],
                correct: 1
            },
            {
                q: "What is micro-oxygenation?",
                options: [
                    "Controlled addition of small amounts of oxygen to soften tannins",
                    "Removing all oxygen from wine",
                    "Aging in large oak",
                    "Adding CO2"
                ],
                correct: 0
            }
        ]
    },
    
    service: {
        name: "Service & Storage",
        questions: [
            {
                q: "What is the ideal long-term storage temperature for wine?",
                options: [
                    "0-5°C",
                    "10-15°C (50-59°F) - cool and constant",
                    "18-22°C",
                    "Above 25°C"
                ],
                correct: 1
            },
            {
                q: "Why should wine be stored horizontally?",
                options: [
                    "To save space",
                    "To keep the cork moist and prevent oxidation",
                    "To prevent sediment formation",
                    "It makes no difference"
                ],
                correct: 1
            },
            {
                q: "What is the ideal serving temperature for full-bodied red wines?",
                options: [
                    "6-8°C",
                    "10-13°C",
                    "15-18°C (59-64°F)",
                    "Room temperature (22°C+)"
                ],
                correct: 2
            },
            {
                q: "What is the ideal serving temperature for light, delicate white wines and sparkling wines?",
                options: [
                    "6-10°C (43-50°F) - well chilled",
                    "12-15°C",
                    "15-18°C",
                    "Room temperature"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of decanting wine?",
                options: [
                    "Only for visual presentation",
                    "Separate wine from sediment and/or aerate to open up aromas",
                    "Cool the wine",
                    "Add CO2"
                ],
                correct: 1
            },
            {
                q: "Which wines benefit most from decanting?",
                options: [
                    "All wines equally",
                    "Young tannic reds and older wines with sediment",
                    "Only white wines",
                    "Only sparkling wines"
                ],
                correct: 1
            },
            {
                q: "What causes cork taint in wine?",
                options: [
                    "Old cork",
                    "TCA (2,4,6-Trichloroanisole) contamination",
                    "Too much oxygen",
                    "High alcohol"
                ],
                correct: 1
            },
            {
                q: "How should you identify a wine with cork taint?",
                options: [
                    "High acidity",
                    "Damp cardboard, musty smell; muted fruit",
                    "Excessive oakiness",
                    "High alcohol"
                ],
                correct: 1
            },
            {
                q: "What is the primary enemy of wine in long-term storage?",
                options: [
                    "Temperature fluctuation and excessive heat",
                    "Cold only",
                    "Darkness",
                    "Humidity"
                ],
                correct: 0
            },
            {
                q: "What is the ideal humidity level for wine storage?",
                options: [
                    "Very dry (below 30%)",
                    "60-70% to keep corks from drying out",
                    "90-100% (very humid)",
                    "Humidity doesn't matter"
                ],
                correct: 1
            },
            {
                q: "Why should wine be stored away from strong light?",
                options: [
                    "Light can cause premature aging and off-flavors",
                    "It makes labels fade only",
                    "Light increases alcohol",
                    "Light has no effect on wine"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of using different glass shapes for different wines?",
                options: [
                    "Purely aesthetic",
                    "Direct wine to appropriate parts of palate and concentrate aromas",
                    "Cool or warm the wine",
                    "Increase alcohol perception"
                ],
                correct: 1
            },
            {
                q: "What type of glass is ideal for sparkling wine?",
                options: [
                    "Wide-bowled glass",
                    "Tulip or flute shape to preserve bubbles",
                    "Burgundy glass",
                    "Bordeaux glass"
                ],
                correct: 1
            },
            {
                q: "When should you open and decant an old red wine with sediment?",
                options: [
                    "Several hours before serving",
                    "Just before serving to minimize oxidation",
                    "The day before",
                    "Old wines should never be decanted"
                ],
                correct: 1
            },
            {
                q: "What is the recommended amount to pour for a standard wine tasting?",
                options: [
                    "Full glass",
                    "50ml (about 1.5-2 oz) to allow swirling",
                    "Just a few drops",
                    "200ml"
                ],
                correct: 1
            },
            {
                q: "What does it mean if a wine is described as 'oxidized'?",
                options: [
                    "Too much oxygen exposure causing browning, nutty, stale aromas",
                    "Perfect condition",
                    "Too cold",
                    "Too young"
                ],
                correct: 0
            },
            {
                q: "How long can most opened wines be kept before significant deterioration?",
                options: [
                    "1-2 hours",
                    "3-5 days if recorked and refrigerated",
                    "2-3 weeks",
                    "Indefinitely"
                ],
                correct: 1
            },
            {
                q: "Why is vibration considered detrimental to wine storage?",
                options: [
                    "It can disturb sediment and potentially accelerate aging",
                    "It increases alcohol",
                    "It improves the wine",
                    "It has no effect"
                ],
                correct: 0
            },
            {
                q: "What is the purpose of aeration/letting wine breathe?",
                options: [
                    "Cool the wine",
                    "Allow oxygen to soften tannins and release aromas",
                    "Add carbonation",
                    "Increase acidity"
                ],
                correct: 1
            },
            {
                q: "Which closure type has the highest risk of cork taint?",
                options: [
                    "Screw cap",
                    "Natural cork",
                    "Synthetic cork",
                    "Glass stopper"
                ],
                correct: 1
            }
        ]
    }
};
