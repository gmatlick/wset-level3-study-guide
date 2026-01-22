// Comprehensive WSET Level 3 Quiz Data
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
                correct: 1,
                explanation: "Leaf removal improves air circulation around grape clusters and increases sunlight exposure to the fruit zone, which helps prevent disease, improve ripening, and enhance phenolic development in the grapes."
            },
            {
                q: "Which training system uses individual stakes for each vine?",
                options: [
                    "VSP (Vertical Shoot Positioning)",
                    "Guyot",
                    "Bush vines",
                    "Scott Henry"
                ],
                correct: 1,
                explanation: "The Guyot training system uses individual stakes for each vine, with either single or double canes trained along horizontal wires. This system is popular in cooler climates like Burgundy and Bordeaux."
            },
            {
                q: "What is green harvesting?",
                options: [
                    "Harvesting unripe grapes for acidity",
                    "Removing excess grape bunches to concentrate remaining fruit",
                    "Harvesting only green varietals",
                    "Mechanical harvesting with green equipment"
                ],
                correct: 1,
                explanation: "Green harvesting involves removing excess grape bunches during the growing season to concentrate the vine's energy into fewer clusters, resulting in more concentrated flavors and better quality in the remaining fruit."
            },
            {
                q: "Phylloxera primarily attacks which part of the vine?",
                options: [
                    "Leaves",
                    "Grapes",
                    "Roots",
                    "Trunk"
                ],
                correct: 2,
                explanation: "Phylloxera is a root louse that attacks grapevine roots, eventually killing the vine. The solution is to graft European vinifera vines onto resistant American rootstocks."
            },
            {
                q: "What is the term for flowering in grapevines?",
                options: [
                    "Veraison",
                    "Budbreak",
                    "Flowering (anthesis)",
                    "Fruit set"
                ],
                correct: 2,
                explanation: "Flowering (anthesis) is when the vine's flowers bloom and pollination occurs. This typically happens 6-13 weeks after budbreak and is critical for fruit set."
            },
            {
                q: "At what point in the growing season does veraison occur?",
                options: [
                    "Early spring",
                    "Just before harvest",
                    "Mid-summer when grapes begin to change color and soften",
                    "After harvest"
                ],
                correct: 2,
                explanation: "Veraison occurs in mid-summer when grapes begin to change color (from green to red/purple for black grapes, or from green to yellow/gold for white grapes), soften, and accumulate sugar while acidity decreases."
            },
            {
                q: "Which soil type generally provides the best drainage?",
                options: [
                    "Clay",
                    "Sand and gravel",
                    "Loam",
                    "Silt"
                ],
                correct: 1,
                explanation: "Sand and gravel soils provide excellent drainage due to their large particle size and pore spaces. Good drainage is important for wine quality as it stresses the vine appropriately and prevents root diseases."
            },
            {
                q: "What is the primary benefit of using rootstocks?",
                options: [
                    "Increased grape quality",
                    "Resistance to phylloxera",
                    "Better color extraction",
                    "Higher alcohol levels"
                ],
                correct: 1,
                explanation: "Rootstocks provide resistance to phylloxera, which devastated European vineyards in the late 1800s. Most commercial vineyards now use grafted vines with resistant American rootstock."
            },
            {
                q: "Which climate factor is most associated with noble rot development?",
                options: [
                    "Dry conditions throughout growing season",
                    "Humid mornings followed by dry, sunny afternoons in autumn",
                    "Consistent rainfall",
                    "Extreme heat"
                ],
                correct: 1,
                explanation: "Cordon-trained vines have permanent 'arms' (cordons) extending along horizontal wires, from which fruiting spurs or canes grow each year. This is common in warm climates and allows for mechanization."
            },
            {
                q: "What is the purpose of winter pruning?",
                options: [
                    "Remove diseased wood and control yield for next vintage",
                    "Increase water retention",
                    "Prevent spring frost",
                    "Encourage immediate grape ripening"
                ],
                correct: 0,
                explanation: "Botrytis cinerea (noble rot) is essential for producing sweet wines like Sauternes and Tokaji. It concentrates sugars and adds unique flavors of honey, ginger, and dried fruits."
            },
            {
                q: "Which of these is a fungal disease affecting grapevines?",
                options: [
                    "Phylloxera",
                    "Powdery mildew",
                    "Pierce's disease",
                    "Leafroll virus"
                ],
                correct: 1,
                explanation: "Mechanical harvesting is faster and cheaper than hand harvesting, can work at night to bring in cooler grapes, but cannot select individual grape bunches and may include some MOG (material other than grapes)."
            },
            {
                q: "What is coulure?",
                options: [
                    "A type of pruning",
                    "Poor fruit set resulting in reduced yield",
                    "Overripening of grapes",
                    "A fungal disease"
                ],
                correct: 1,
                explanation: "Spring frost can kill developing buds and shoots, potentially reducing or eliminating the harvest. Protection methods include wind machines, heaters, and sprinklers."
            },
            {
                q: "Which factor is most important for growing high-quality Pinot Noir?",
                options: [
                    "Hot climate",
                    "Cool climate with long, moderate growing season",
                    "High humidity throughout summer",
                    "Very dry conditions"
                ],
                correct: 1,
                explanation: "Vine age affects quality as older vines (typically 25+ years) have deeper root systems, produce less fruit but more concentrated grapes, and show better stress tolerance."
            },
            {
                q: "What is the term for the measure of dissolved solids (mainly sugar) in grape juice?",
                options: [
                    "pH",
                    "Titratable acidity",
                    "Brix/Baumé/Oechsle",
                    "Malic acid"
                ],
                correct: 2,
                explanation: "Organic viticulture prohibits synthetic chemicals but allows copper and sulfur. Biodynamic goes further with holistic farming based on lunar cycles and special preparations."
            },
            {
                q: "Which of these vineyard practices is used in organic viticulture?",
                options: [
                    "Synthetic pesticides",
                    "Copper and sulfur treatments",
                    "GMO rootstocks",
                    "Chemical herbicides"
                ],
                correct: 1,
                explanation: "High altitude vineyards experience greater diurnal temperature variation (hot days, cool nights), increased UV radiation, and lower oxygen levels. Cool nights preserve acidity while warm days ripen grapes."
            },
            {
                q: "What is millerandage?",
                options: [
                    "A type of trellis system",
                    "Uneven ripening with bunches containing both normal and small, seedless berries",
                    "A harvesting technique",
                    "A pruning method"
                ],
                correct: 1,
                explanation: "Coulure (poor fruit set) occurs when flowering or pollination fails, resulting in many unfertilized flowers. This is common with varieties like Merlot and Grenache in cool, wet, or windy conditions."
            },
            {
                q: "Which ocean current has a cooling effect on coastal vineyards?",
                options: [
                    "Warm currents only",
                    "Cold currents like the Humboldt or Benguela",
                    "All ocean currents warm coastlines",
                    "Ocean currents have no effect on viticulture"
                ],
                correct: 1,
                explanation: "Machine harvesting uses shaking mechanisms to detach grapes from the vine, collecting them on conveyor belts. It's efficient but less gentle than hand harvesting."
            },
            {
                q: "What is the primary purpose of cover crops in vineyards?",
                options: [
                    "Compete with vines for water and nutrients, manage vigor, prevent erosion",
                    "Increase grape sugar levels",
                    "Provide shade for grapes",
                    "Attract pests away from vines"
                ],
                correct: 0,
                explanation: "Summer pruning (green harvesting, leaf removal) manages canopy to improve air circulation, light penetration, and fruit quality. It's done during the growing season unlike winter pruning."
            },
            {
                q: "At what temperature does frost typically damage vines?",
                options: [
                    "Below 10°C",
                    "Below 5°C",
                    "Below 0°C (32°F)",
                    "Below -10°C"
                ],
                correct: 2,
                explanation: "GDDs measure heat accumulation during the growing season, calculated as (Daily max temp + Daily min temp) / 2 - 10°C. Different varieties have different GDD requirements."
            },
            {
                q: "Which trellising system is designed to increase canopy surface area by dividing shoots into two curtains?",
                options: [
                    "Single Guyot",
                    "Scott Henry or Lyre",
                    "Bush vines",
                    "Cordon"
                ],
                correct: 1,
                explanation: "Head-trained bush vines have no permanent cordon or trellis, with short trunks and canes arranged around the head. Common in hot, dry regions like southern Rhône and old Barossa vineyards."
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
                correct: 1,
                explanation: "Cold soaking extracts color and flavor compounds from grape skins before alcoholic fermentation begins. This gentle extraction occurs without alcohol, which is a more aggressive solvent."
            },
            {
                q: "What is malolactic conversion (MLF)?",
                options: [
                    "Conversion of sugar to alcohol",
                    "Conversion of sharp malic acid to softer lactic acid",
                    "Conversion of alcohol to acetic acid",
                    "Conversion of tannins to color"
                ],
                correct: 1,
                explanation: "Stainless steel tanks are inert, easy to clean, temperature-controllable, and preserve fresh fruit flavors. They're ideal for aromatic white wines like Sauvignon Blanc and Riesling."
            },
            {
                q: "Which winemaking technique involves leaving wine on the lees (dead yeast cells) after fermentation?",
                options: [
                    "Bâtonnage (lees stirring)",
                    "Racking",
                    "Fining",
                    "Cold stabilization"
                ],
                correct: 0,
                explanation: "Sur lie aging keeps wine in contact with dead yeast cells (lees) after fermentation, adding texture, complexity, and flavors of bread, toast, and nuts. Common in Chardonnay and Muscadet."
            },
            {
                q: "What is the purpose of cold stabilization?",
                options: [
                    "Stop fermentation",
                    "Remove tartrate crystals that could form in bottle",
                    "Increase alcohol",
                    "Add freshness"
                ],
                correct: 1,
                explanation: "Malolactic fermentation converts sharp malic acid to softer lactic acid, reducing total acidity and adding buttery, creamy flavors. It's typical for red wines and some fuller-bodied whites."
            },
            {
                q: "Which fining agent is animal-derived and commonly used for red wines?",
                options: [
                    "Bentonite (clay)",
                    "Egg whites",
                    "PVPP (synthetic)",
                    "Activated charcoal"
                ],
                correct: 1,
                explanation: "Whole cluster fermentation includes stems, adding tannin structure, herbal notes, and spice. Used carefully in Pinot Noir (Burgundy, Oregon) to add complexity without excessive harshness."
            },
            {
                q: "What is the primary difference between alcoholic fermentation in white vs. red winemaking?",
                options: [
                    "White wines ferment at higher temperatures",
                    "White wines are typically fermented without skins, red wines with skins for color and tannin extraction",
                    "White wines always use wild yeast",
                    "Red wines ferment faster"
                ],
                correct: 1,
                explanation: "Carbonic maceration occurs with whole, uncrushed grapes in CO2, creating fruity wines with low tannins and distinctive banana/bubble-gum aromas. Traditional in Beaujolais Nouveau."
            },
            {
                q: "What does 'sur lie' aging mean?",
                options: [
                    "Aging in new oak",
                    "Aging on the lees (dead yeast)",
                    "Aging in bottle",
                    "Aging in stainless steel"
                ],
                correct: 1,
                explanation: "Oak barrels add vanilla, toast, spice flavors through compounds like vanillin and lactones. New oak has more impact; used oak adds less flavor but allows micro-oxygenation."
            },
            {
                q: "Which technique involves bleeding off some juice from red wine fermentation to concentrate the remaining must?",
                options: [
                    "Pigeage",
                    "Remontage",
                    "Saignée",
                    "Délestage"
                ],
                correct: 2,
                explanation: "Free-run juice flows naturally from crushed grapes without pressing. It's lighter, fruitier, and lower in tannins compared to press juice which is extracted under pressure."
            },
            {
                q: "What is the ideal fermentation temperature range for white wines?",
                options: [
                    "5-10°C",
                    "12-22°C (cooler to preserve aromatics)",
                    "25-32°C",
                    "Above 35°C"
                ],
                correct: 1,
                explanation: "Punch-down (pigeage) breaks up the cap of grape skins that floats during red wine fermentation, ensuring color, tannin, and flavor extraction while preventing bacterial growth on the cap."
            },
            {
                q: "What is the purpose of whole-bunch/whole-cluster fermentation?",
                options: [
                    "Speed up fermentation",
                    "Add stalky, spicy aromatics and silky tannin texture",
                    "Remove color",
                    "Increase acidity"
                ],
                correct: 1,
                explanation: "Acidification adds tartaric or citric acid to must or wine from warm climates where grapes may be too ripe and low in natural acidity. It balances wine and improves aging potential."
            },
            {
                q: "What is reverse osmosis used for in winemaking?",
                options: [
                    "Reduce alcohol or remove excess water",
                    "Add color",
                    "Increase tannins",
                    "Speed up aging"
                ],
                correct: 0,
                explanation: "Batonnage (lees stirring) during sur lie aging increases contact between wine and lees, enhancing texture, weight, and yeasty, toasty flavors. Common in premium Chardonnay."
            },
            {
                q: "Which type of oak is most commonly used for wine barrels?",
                options: [
                    "Pine",
                    "French or American oak",
                    "Eucalyptus",
                    "Birch"
                ],
                correct: 1,
                explanation: "Chaptalization adds sugar before or during fermentation to increase alcohol levels in cool climates where grapes may not achieve sufficient natural sugar. Legal in some regions, banned in others."
            },
            {
                q: "What is the difference between French and American oak?",
                options: [
                    "American oak typically imparts more pronounced vanilla, coconut flavors",
                    "French oak is always used for white wines only",
                    "American oak adds more acidity",
                    "There is no difference"
                ],
                correct: 0,
                explanation: "Pressing extracts juice from crushed grapes or wine from fermented must. For whites, it's gentle before fermentation; for reds, it's after fermentation to separate wine from skins."
            },
            {
                q: "What is the purpose of punching down (pigeage) during red wine fermentation?",
                options: [
                    "Cool the fermentation",
                    "Submerge the cap of skins to extract color, tannin, and flavor",
                    "Remove stems",
                    "Add oxygen to stop fermentation"
                ],
                correct: 1,
                explanation: "Oak alternatives (chips, staves, planks) provide oak flavor more cheaply and quickly than barrels. They don't offer the same micro-oxygenation or longevity of traditional barrels."
            },
            {
                q: "What is carbonic maceration?",
                options: [
                    "Fermentation of whole, uncrushed grapes in CO2 atmosphere",
                    "Adding carbon dioxide to wine",
                    "Removing CO2 from wine",
                    "Aging in pressurized tanks"
                ],
                correct: 0,
                explanation: "Fining agents (egg whites, bentonite, isinglass) bind to unwanted particles like proteins, phenolics, or tannins, clarifying wine and improving stability without filtration."
            },
            {
                q: "What is the purpose of chaptalization?",
                options: [
                    "Add acidity",
                    "Add sugar before/during fermentation to increase alcohol",
                    "Remove alcohol",
                    "Add color"
                ],
                correct: 1,
                explanation: "Reductive winemaking minimizes oxygen contact, preserving fresh fruit aromas and preventing oxidation. Essential for aromatic whites like Sauvignon Blanc and Pinot Grigio."
            },
            {
                q: "What is flash détente?",
                options: [
                    "Quick chilling of must",
                    "Heating then rapidly cooling grapes to extract color and tannins",
                    "Fast fermentation",
                    "Rapid bottling"
                ],
                correct: 1,
                explanation: "Extended maceration keeps red wine in contact with skins after fermentation completes, extracting additional tannins and building structure. Softens tannins through polymerization."
            },
            {
                q: "What does 'dégorgement' refer to in sparkling wine production?",
                options: [
                    "Adding the liqueur de tirage",
                    "Removing the sediment (lees) from the bottle neck",
                    "Riddling/remuage",
                    "First fermentation"
                ],
                correct: 1,
                explanation: "Barrel fermentation of white wines adds complexity, texture, and integration of oak flavors. Fermentation heat naturally toasts the inside of the barrel, adding more nuanced oak character."
            },
            {
                q: "What is the purpose of SO2 (sulfur dioxide) in winemaking?",
                options: [
                    "Increase alcohol",
                    "Antioxidant and antimicrobial preservative",
                    "Add color",
                    "Speed up fermentation"
                ],
                correct: 1,
                explanation: "Temperature control during fermentation is critical: cool (10-15°C) for white wines preserves aromatics; warm (25-30°C) for reds extracts color and tannins. Too hot kills yeast."
            },
            {
                q: "What is micro-oxygenation?",
                options: [
                    "Controlled addition of small amounts of oxygen to soften tannins",
                    "Removing all oxygen from wine",
                    "Aging in large oak",
                    "Adding CO2"
                ],
                correct: 0,
                explanation: "Racking transfers wine off sediment into a new vessel, removing dead yeast and solid particles. It clarifies wine and controls oxygen exposure for development."
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
                correct: 1,
                explanation: "White wines are typically served at 7-10°C (chilled) to preserve their fresh, crisp character and prevent them from tasting flabby. Warmer temperatures emphasize alcohol over aromatics."
            },
            {
                q: "Why should wine be stored horizontally?",
                options: [
                    "To save space",
                    "To keep the cork moist and prevent oxidation",
                    "To prevent sediment formation",
                    "It makes no difference"
                ],
                correct: 1,
                explanation: "Light-bodied reds like Pinot Noir and Gamay are best slightly chilled (12-15°C) as this accentuates their fresh fruit flavors and elegant tannins without overwhelming the palate."
            },
            {
                q: "What is the ideal serving temperature for full-bodied red wines?",
                options: [
                    "6-8°C",
                    "10-13°C",
                    "15-18°C (59-64°F)",
                    "Room temperature (22°C+)"
                ],
                correct: 2,
                explanation: "Decanting separates wine from sediment in older bottles and aerates young wines, softening tannins and opening up aromatics. Beneficial for tannic young reds and aged wines with sediment."
            },
            {
                q: "What is the ideal serving temperature for light, delicate white wines and sparkling wines?",
                options: [
                    "6-10°C (43-50°F) - well chilled",
                    "12-15°C",
                    "15-18°C",
                    "Room temperature"
                ],
                correct: 0,
                explanation: "Larger bowl glasses for red wines allow more surface area for aeration and room to swirl, releasing complex aromas. Smaller glasses for whites preserve temperature and concentrate delicate aromatics."
            },
            {
                q: "What is the purpose of decanting wine?",
                options: [
                    "Only for visual presentation",
                    "Separate wine from sediment and/or aerate to open up aromas",
                    "Cool the wine",
                    "Add CO2"
                ],
                correct: 1,
                explanation: "Cork taint (TCA) smells like wet cardboard, musty basement, or damp newspaper and strips wine of fruit aromas. It comes from contaminated corks and affects 2-5% of wines with natural cork."
            },
            {
                q: "Which wines benefit most from decanting?",
                options: [
                    "All wines equally",
                    "Young tannic reds and older wines with sediment",
                    "Only white wines",
                    "Only sparkling wines"
                ],
                correct: 1,
                explanation: "A wine's legs or tears result from alcohol evaporation creating surface tension. Thicker, slower legs indicate higher alcohol or residual sugar, but don't indicate quality."
            },
            {
                q: "What causes cork taint in wine?",
                options: [
                    "Old cork",
                    "TCA (2,4,6-Trichloroanisole) contamination",
                    "Too much oxygen",
                    "High alcohol"
                ],
                correct: 1,
                explanation: "Natural corks allow tiny amounts of oxygen through, enabling slow aging. They're traditional and renewable but can cause cork taint. Screwcaps prevent oxidation and cork taint."
            },
            {
                q: "How should you identify a wine with cork taint?",
                options: [
                    "High acidity",
                    "Damp cardboard, musty smell; muted fruit",
                    "Excessive oakiness",
                    "High alcohol"
                ],
                correct: 1,
                explanation: "Sommeliers use the systematic approach (appearance, nose, palate) to objectively evaluate wine quality, typicity, and condition. It provides a framework for consistent assessment."
            },
            {
                q: "What is the primary enemy of wine in long-term storage?",
                options: [
                    "Temperature fluctuation and excessive heat",
                    "Cold only",
                    "Darkness",
                    "Humidity"
                ],
                correct: 0,
                explanation: "Tannins create a drying, astringent sensation on the gums and tongue. They come from grape skins, seeds, and stems (and oak), providing structure and aging potential for red wines."
            },
            {
                q: "What is the ideal humidity level for wine storage?",
                options: [
                    "Very dry (below 30%)",
                    "60-70% to keep corks from drying out",
                    "90-100% (very humid)",
                    "Humidity doesn't matter"
                ],
                correct: 1,
                explanation: "Acidity creates a sharp, mouth-watering sensation and makes wine taste fresh and vibrant. High acidity balances sweetness, carries flavors, and allows wines to age."
            },
            {
                q: "Why should wine be stored away from strong light?",
                options: [
                    "Light can cause premature aging and off-flavors",
                    "It makes labels fade only",
                    "Light increases alcohol",
                    "Light has no effect on wine"
                ],
                correct: 0,
                explanation: "The ideal wine storage is cool (12-15°C), dark, humid (70%), vibration-free, and bottles are laid horizontally to keep corks moist. These conditions slow aging and prevent spoilage."
            },
            {
                q: "What is the purpose of using different glass shapes for different wines?",
                options: [
                    "Purely aesthetic",
                    "Direct wine to appropriate parts of palate and concentrate aromas",
                    "Cool or warm the wine",
                    "Increase alcohol perception"
                ],
                correct: 1,
                explanation: "Wine oxidizes when exposed to oxygen, turning brown, losing fruit character, and developing nutty, sherry-like flavors. Small amounts are good (breathing), but excessive amounts ruin wine."
            },
            {
                q: "What type of glass is ideal for sparkling wine?",
                options: [
                    "Wide-bowled glass",
                    "Tulip or flute shape to preserve bubbles",
                    "Burgundy glass",
                    "Bordeaux glass"
                ],
                correct: 1,
                explanation: "Sulfites (SO2) are added as preservatives to prevent oxidation and microbial spoilage. They're naturally produced during fermentation, but additional amounts are added for stability."
            },
            {
                q: "When should you open and decant an old red wine with sediment?",
                options: [
                    "Several hours before serving",
                    "Just before serving to minimize oxidation",
                    "The day before",
                    "Old wines should never be decanted"
                ],
                correct: 1,
                explanation: "Terroir encompasses all environmental factors affecting grapes: soil, climate, topography, and viticulture practices. It gives wines from specific regions distinctive characteristics."
            },
            {
                q: "What is the recommended amount to pour for a standard wine tasting?",
                options: [
                    "Full glass",
                    "50ml (about 1.5-2 oz) to allow swirling",
                    "Just a few drops",
                    "200ml"
                ],
                correct: 1,
                explanation: "A corked wine with TCA should be returned - it's a wine fault, not a stylistic issue. The establishment should replace it. Other faults include oxidation, reduction, and brett."
            },
            {
                q: "What does it mean if a wine is described as 'oxidized'?",
                options: [
                    "Too much oxygen exposure causing browning, nutty, stale aromas",
                    "Perfect condition",
                    "Too cold",
                    "Too young"
                ],
                correct: 0,
                explanation: "Reduction (opposite of oxidation) occurs without oxygen, creating aromas of rubber, garlic, onion, or rotten eggs from sulfur compounds. Light aeration or decanting usually resolves it."
            },
            {
                q: "How long can most opened wines be kept before significant deterioration?",
                options: [
                    "1-2 hours",
                    "3-5 days if recorked and refrigerated",
                    "2-3 weeks",
                    "Indefinitely"
                ],
                correct: 1,
                explanation: "Food pairing principles: match weight/intensity, consider dominant flavors, balance acid/fat/salt/sweet, and consider regional pairings. Wine's acid cuts richness; tannins pair with protein."
            },
            {
                q: "Why is vibration considered detrimental to wine storage?",
                options: [
                    "It can disturb sediment and potentially accelerate aging",
                    "It increases alcohol",
                    "It improves the wine",
                    "It has no effect"
                ],
                correct: 0,
                explanation: "Vintage variation reflects weather differences between years. Some regions/wines show more variation (Burgundy, Bordeaux) while others are more consistent (warm, dry climates)."
            },
            {
                q: "What is the purpose of aeration/letting wine breathe?",
                options: [
                    "Cool the wine",
                    "Allow oxygen to soften tannins and release aromas",
                    "Add carbonation",
                    "Increase acidity"
                ],
                correct: 1,
                explanation: "Late harvest wines are made from extra-ripe grapes left on the vine longer, concentrating sugars and flavors. They range from medium-sweet to lusciously sweet."
            },
            {
                q: "Which closure type has the highest risk of cork taint?",
                options: [
                    "Screw cap",
                    "Natural cork",
                    "Synthetic cork",
                    "Glass stopper"
                ],
                correct: 1,
                explanation: "Coravin systems use a needle to extract wine without removing the cork, replacing wine with inert argon gas. This preserves wine for months, perfect for expensive bottles enjoyed slowly."
            }
        ]
    }
};
    
    // EUROPEAN REGIONS
    
    france: {
        name: "France",
        questions: [
            {
                q: "Which Bordeaux sub-region is dominated by Merlot on clay soils?",
                options: ["Médoc", "Right Bank (Pomerol/St-Émilion)", "Graves", "Sauternes"],
                correct: 1,
                explanation: "The Right Bank (Pomerol and Saint-Émilion) has clay and limestone soils that favor Merlot, which dominates blends there. The Left Bank's gravel soils favor Cabernet Sauvignon."
            },
            {
                q: "What is the top tier of the Burgundy hierarchy?",
                options: ["Village", "Premier Cru", "Grand Cru", "Regional"],
                correct: 2,
                explanation: "Grand Cru is the highest classification in Burgundy, representing the best vineyard sites. These wines can legally omit the village name on the label, showing only the vineyard name."
            },
            {
                q: "Which noble rot-affected sweet wine comes from Bordeaux?",
                options: ["Vouvray", "Sauternes", "Tokaji", "Beerenauslese"],
                correct: 1,
                explanation: "Sauternes (and Barsac) produce sweet wines from Sémillon, Sauvignon Blanc, and Muscadelle affected by botrytis cinerea (noble rot), concentrated by morning mists from the Ciron river."
            },
            {
                q: "The Côte d'Or in Burgundy is divided into which two main sections?",
                options: ["Beaujolais and Mâconnais", "Chablis and Côte Chalonnaise", "Côte de Nuits and Côte de Beaune", "Pouilly-Fuissé and Meursault"],
                correct: 2,
                explanation: "The Côte d'Or consists of Côte de Nuits (north, primarily red wines from Pinot Noir) and Côte de Beaune (south, famous for both red and white wines)."
            },
            {
                q: "Which region is known for dry Chenin Blanc wines with high acidity?",
                options: ["Vouvray", "Sancerre", "Pouilly-Fumé", "Alsace"],
                correct: 0,
                explanation: "Vouvray in the Loire Valley produces dry, off-dry, sweet, and sparkling wines from Chenin Blanc. The grape's high acidity gives these wines excellent aging potential."
            },
            {
                q: "What is the primary grape of Sancerre and Pouilly-Fumé?",
                options: ["Chardonnay", "Chenin Blanc", "Sauvignon Blanc", "Riesling"],
                correct: 2,
                explanation: "Sauvignon Blanc dominates in Sancerre and Pouilly-Fumé, producing crisp, mineral-driven wines with citrus, green fruit, and herbaceous notes from the Loire's cool climate and limestone/flint soils."
            },
            {
                q: "Which Northern Rhône appellation produces only white wines from Viognier?",
                options: ["Hermitage", "Côte-Rôtie", "Condrieu", "Cornas"],
                correct: 2,
                explanation: "Condrieu is exclusively for white wines from Viognier, producing full-bodied wines with stone fruit, floral aromas (apricot, peach, blossom), and low acidity."
            },
            {
                q: "What is the dominant grape of Châteauneuf-du-Pape?",
                options: ["Syrah", "Grenache", "Mourvèdre", "Carignan"],
                correct: 1,
                explanation: "Grenache dominates Châteauneuf-du-Pape blends, thriving in the hot, dry climate and famous galets (large stones) that retain heat. Up to 13 grape varieties are permitted."
            },
            {
                q: "Which classification ranks top Bordeaux estates from 1855?",
                options: ["Premier Cru", "Grand Cru Classé", "1855 Classification", "Cru Bourgeois"],
                correct: 2,
                explanation: "The 1855 Classification ranked Médoc châteaux (plus Haut-Brion from Graves) into First through Fifth Growths based on price and reputation. Only one change has been made (Mouton-Rothschild promoted to First Growth in 1973)."
            },
            {
                q: "Chablis is known for wines made from which grape?",
                options: ["Sauvignon Blanc", "Chardonnay", "Aligoté", "Pinot Blanc"],
                correct: 1,
                explanation: "Chablis produces Chardonnay exclusively, with a cool climate and Kimmeridgian limestone/clay soils creating lean, mineral-driven wines with high acidity, citrus, and green apple notes (typically unoaked for basic Chablis)."
            },
            {
                q: "Which Burgundy village is most famous for Pinot Noir?",
                options: ["Meursault", "Puligny-Montrachet", "Vosne-Romanée", "Pouilly-Fuissé"],
                correct: 2,
                explanation: "Vosne-Romanée in the Côte de Nuits is legendary for Pinot Noir, home to Romanée-Conti and other Grand Crus. It produces some of the world's most expensive and sought-after red wines."
            },
            {
                q: "What grape is used for Beaujolais Cru wines?",
                options: ["Pinot Noir", "Gamay", "Syrah", "Merlot"],
                correct: 1,
                explanation: "Gamay is the sole red grape of Beaujolais. The 10 Crus (like Morgon, Moulin-à-Vent, Fleurie) produce more structured, age-worthy wines than basic Beaujolais."
            },
            {
                q: "Which Loire region is famous for Cabernet Franc-based reds?",
                options: ["Sancerre", "Vouvray", "Chinon", "Muscadet"],
                correct: 2,
                explanation: "Chinon (along with Bourgueil and Saumur-Champigny) in the Middle Loire produces medium-bodied reds from Cabernet Franc with red fruit, herbaceous notes, and medium tannins."
            },
            {
                q: "What is the main characteristic of Muscadet wines?",
                options: ["Full-bodied with tropical fruit", "Light, crisp, high acidity", "Sweet with botrytis", "Tannic and structured"],
                correct: 1,
                explanation: "Muscadet (from Melon de Bourgogne) is light-bodied, dry, high-acid, with subtle fruit and mineral notes. 'Sur lie' aging adds texture and complexity, making it perfect for oysters and seafood."
            },
            {
                q: "Which region produces Pouilly-Fuissé?",
                options: ["Loire", "Burgundy (Mâconnais)", "Rhône", "Alsace"],
                correct: 1,
                explanation: "Pouilly-Fuissé is from the Mâconnais in southern Burgundy, producing fuller-bodied Chardonnay than Chablis with ripe fruit, often oak-aged, and good value compared to Côte d'Or whites."
            },
            {
                q: "What is the traditional method called in Champagne?",
                options: ["Charmat", "Méthode Ancestrale", "Méthode Champenoise/Traditional Method", "Transfer Method"],
                correct: 2,
                explanation: "The Traditional Method (formerly Méthode Champenoise) involves secondary fermentation in the bottle, creating complex sparkling wines through autolysis, riddling, and disgorgement."
            },
            {
                q: "Which appellation is known for rosé wines from Grenache?",
                options: ["Tavel", "Sancerre Rosé", "Marsannay", "Bandol"],
                correct: 0,
                explanation: "Tavel in the Southern Rhône produces only rosé wines, mainly from Grenache. These are full-bodied, dry rosés with red fruit, herbs, and spice - among France's most serious rosés."
            },
            {
                q: "What makes Hermitage one of the Northern Rhône's greatest wines?",
                options: ["Cool climate Pinot Noir", "Syrah on granite slopes", "Viognier blends", "Carbonic maceration"],
                correct: 1,
                explanation: "Hermitage's steep granite slopes with perfect south-facing exposure produce powerful, age-worthy Syrah with dark fruit, black pepper, smoked meat, and firm tannins. Whites from Marsanne/Roussanne are also highly regarded."
            },
            {
                q: "Which sweet wine region uses Chenin Blanc from the Loire?",
                options: ["Sauternes", "Quarts de Chaume", "Tokaji", "Barsac"],
                correct: 1,
                explanation: "Quarts de Chaume (and nearby Bonnezeaux) in the Loire produce sweet wines from botrytis-affected Chenin Blanc, with honey, quince, and incredible aging potential due to high acidity."
            },
            {
                q: "What is the primary difference between Côte-Rôtie and other Northern Rhône reds?",
                options: ["Uses Grenache instead of Syrah", "Co-fermented with up to 20% Viognier", "Made with carbonic maceration", "Aged in chestnut barrels"],
                correct: 1,
                explanation: "Côte-Rôtie ('roasted slope') allows up to 20% Viognier to be co-fermented with Syrah, adding aromatic complexity and silky texture to these elegant, perfumed wines from steep schist/granite slopes."
            }
        ]
    },
    
    germany: {
        name: "Germany",
        questions: [
            {
                q: "What is the sweetest level of Prädikatswein?",
                options: ["Kabinett", "Spätlese", "Auslese", "Trockenbeerenauslese"],
                correct: 3,
                explanation: "Trockenbeerenauslese (TBA) is made from individually selected botrytis-affected berries, creating intensely sweet, concentrated wines with honey, dried fruit, and incredible aging potential."
            },
            {
                q: "Which region produces the lightest-bodied Rieslings from slate soils?",
                options: ["Rheingau", "Pfalz", "Mosel", "Franken"],
                correct: 2,
                explanation: "The Mosel's steep slate slopes and cool climate produce delicate, light-bodied Rieslings with racy acidity, low alcohol, and flavors of green apple, citrus, and distinctive stony minerality."
            },
            {
                q: "What does 'Trocken' mean on a German wine label?",
                options: ["Sweet", "Dry", "Off-dry", "Late harvest"],
                correct: 1,
                explanation: "Trocken means dry (< 9 g/L residual sugar). This style has grown in popularity as German producers move away from the traditional off-dry style to appeal to international markets."
            },
            {
                q: "Which region is warmest and known for Spätburgunder?",
                options: ["Mosel", "Baden", "Ahr", "Nahe"],
                correct: 1,
                explanation: "Baden in southwest Germany is the warmest region, producing fuller-bodied wines including quality Spätburgunder (Pinot Noir), Grauburgunder (Pinot Gris), and Weissburgunder (Pinot Blanc)."
            },
            {
                q: "What does VDP Grosse Lage indicate?",
                options: ["Village wine", "Regional wine", "Top single-vineyard wine", "Basic quality wine"],
                correct: 2,
                explanation: "VDP Grosse Lage is the highest tier in the VDP classification system (similar to Grand Cru), indicating top single-vineyard sites with strict quality requirements and hand harvesting."
            },
            {
                q: "Which grape is Franken most associated with?",
                options: ["Riesling", "Silvaner", "Müller-Thurgau", "Dornfelder"],
                correct: 1,
                explanation: "Silvaner thrives in Franken's continental climate, producing earthy, medium-bodied dry wines with herbal notes. Franken wines traditionally come in distinctive flagon-shaped Bocksbeutel bottles."
            },
            {
                q: "What is Eiswein?",
                options: ["Artificially frozen grapes", "Grapes harvested and pressed while naturally frozen", "Chilled wine", "Ice-filtered wine"],
                correct: 1,
                explanation: "Eiswein is made from grapes that freeze naturally on the vine (at least -7°C), then are harvested and pressed while frozen. The ice stays behind, concentrating sugars and acids into intensely sweet, pure wines."
            },
            {
                q: "The Rheingau is particularly known for which style of Riesling?",
                options: ["Light and delicate", "Fuller-bodied with more structure", "Sparkling", "Red"],
                correct: 1,
                explanation: "The Rheingau produces fuller-bodied Rieslings with more structure than Mosel, known for both dry wines and exceptional botrytis-affected Auslese, Beerenauslese, and TBA from producers like Schloss Johannisberg."
            },
            {
                q: "What is the minimum must weight for Auslese?",
                options: ["Lower than Kabinett", "Between Kabinett and Spätlese", "Higher than Spätlese", "Same as TBA"],
                correct: 2,
                explanation: "Auslese requires higher must weight than Spätlese, made from selected ripe bunches. These wines can be made dry or sweet, with intense fruit concentration and excellent aging potential."
            },
            {
                q: "Which region is known as a bridge between Mosel and Rheingau styles?",
                options: ["Pfalz", "Nahe", "Ahr", "Mittelrhein"],
                correct: 1,
                explanation: "The Nahe produces diverse Rieslings that bridge the delicacy of Mosel and the body of Rheingau, with varied soils (volcanic, slate, sandstone) contributing complexity."
            },
            {
                q: "What is Spätburgunder?",
                options: ["A white grape variety", "German Pinot Noir", "A wine region", "A classification level"],
                correct: 1,
                explanation: "Spätburgunder is German Pinot Noir. Germany is producing increasingly high-quality examples, especially in Baden, Ahr, and Pfalz, with elegant red fruit, earth, and fine tannins."
            },
            {
                q: "The Pfalz is known for what climate characteristic?",
                options: ["Coolest German region", "Warmest and driest", "Most humid", "Highest rainfall"],
                correct: 1,
                explanation: "The Pfalz (Palatinate) is Germany's warmest and driest region, protected by mountains, producing ripe, fuller-bodied wines from Riesling, Spätburgunder, and other varieties."
            },
            {
                q: "What does Grosses Gewächs (GG) indicate?",
                options: ["Sweet wine", "Dry wine from a top vineyard", "Sparkling wine", "Regional blend"],
                correct: 1,
                explanation: "Grosses Gewächs (Great Growth/GG) is VDP's classification for dry wines from Grosse Lage (top sites), representing Germany's highest quality dry wines with strict production requirements."
            },
            {
                q: "Which style is Kabinett typically?",
                options: ["Driest level of Prädikatswein", "Bone dry", "Medium-sweet", "Dessert wine"],
                correct: 0,
                explanation: "Kabinett is the lightest, least ripe level of Prädikatswein, typically made in an off-dry to medium-dry style with low alcohol (8-10%), fresh acidity, and delicate fruit."
            },
            {
                q: "What is Sekt?",
                options: ["Sweet wine", "German sparkling wine", "Fortified wine", "Ice wine"],
                correct: 1,
                explanation: "Sekt is German sparkling wine, which can be made by Charmat or Traditional Method. Quality Sekt is labeled 'Deutscher Sekt' (from German grapes) or 'Deutscher Sekt b.A.' (from a specific region)."
            },
            {
                q: "The Mittelhaardt in Pfalz is known for what?",
                options: ["Bulk wine production", "Top-quality vineyards", "Sparkling wine", "Sweet wines only"],
                correct: 1,
                explanation: "The Mittelhaardt is the Pfalz's top sub-region, stretching from Neustadt to Wachenheim, containing the finest vineyards with limestone soils producing exceptional Riesling."
            },
            {
                q: "What distinguishes Beerenauslese (BA)?",
                options: ["Made from individually selected berries affected by botrytis", "Driest style", "First harvest", "Sparkling"],
                correct: 0,
                explanation: "Beerenauslese (BA) is made from individually selected overripe berries, typically affected by botrytis, creating sweet wines with honey, dried fruit, and marmalade characteristics."
            },
            {
                q: "Which German region has the most vineyard area?",
                options: ["Mosel", "Rheinhessen", "Baden", "Pfalz"],
                correct: 1,
                explanation: "Rheinhessen is Germany's largest wine region by area, producing a wide range of styles from bulk wines to high-quality Rieslings, especially from the Rheinterrasse along the Rhine River."
            },
            {
                q: "What is the primary soil type in the Mosel?",
                options: ["Limestone", "Clay", "Slate (Schiefer)", "Sand"],
                correct: 2,
                explanation: "Slate (Schiefer) dominates Mosel's steep slopes, retaining heat to aid ripening in the cool climate and contributing distinctive minerality to the wines."
            },
            {
                q: "Halbtrocken means what level of sweetness?",
                options: ["Bone dry", "Off-dry/medium-dry", "Sweet", "Very sweet"],
                correct: 1,
                explanation: "Halbtrocken means off-dry or medium-dry (9-18 g/L residual sugar), offering a balance between the fruity sweetness and refreshing acidity that made German Riesling famous."
            }
        ]
    },
    
    italy: {
        name: "Italy", 
        questions: [
            {
                q: "What is the highest classification level in Italy?",
                options: ["DOC", "DOCG", "IGT", "Vino"],
                correct: 1,
                explanation: "DOCG (Denominazione di Origine Controllata e Garantita) is the highest level, with stricter rules and government testing. Only certain prestigious denominations qualify for DOCG status."
            },
            {
                q: "Which Tuscan wine is made primarily from Sangiovese?",
                options: ["Barolo", "Amarone", "Chianti Classico", "Prosecco"],
                correct: 2,
                explanation: "Chianti Classico is made primarily from Sangiovese (80% minimum) in the heart of Tuscany between Florence and Siena, producing medium-bodied reds with red cherry, herbs, and high acidity."
            },
            {
                q: "Barolo and Barbaresco are made from which grape?",
                options: ["Sangiovese", "Nebbiolo", "Barbera", "Montepulciano"],
                correct: 1,
                explanation: "Nebbiolo produces powerful, tannic, age-worthy wines in Barolo (more powerful) and Barbaresco (more elegant), with tar, roses, red fruit, and requiring years to soften."
            },
            {
                q: "What is Amarone della Valpolicella?",
                options: ["A sparkling wine", "A wine made from dried grapes (appassimento)", "A sweet wine", "A white wine"],
                correct: 1,
                explanation: "Amarone uses appassimento (drying grapes for 3-4 months) to concentrate sugars and flavors, then fermenting to dryness, creating full-bodied, high-alcohol wines with dried fruit, chocolate, and spice."
            },
            {
                q: "Prosecco is produced using which method?",
                options: ["Traditional Method", "Charmat/Tank Method", "Carbonation", "Ancestral Method"],
                correct: 1,
                explanation: "Prosecco uses the Charmat/Tank Method with secondary fermentation in pressurized tanks, preserving the fresh, fruity character of Glera grapes (apple, pear, white flowers) at a lower price point."
            },
            {
                q: "What distinguishes Brunello di Montalcino?",
                options: ["Made from Nebbiolo", "100% Sangiovese, aged 5 years minimum", "A white wine", "Sparkling wine"],
                correct: 1,
                explanation: "Brunello di Montalcino must be 100% Sangiovese Grosso, aged at least 5 years (2 in oak), producing powerful, concentrated, long-lived wines with dark fruit, leather, and earth."
            },
            {
                q: "Which region is known for Nero d'Avola?",
                options: ["Piedmont", "Tuscany", "Sicily", "Veneto"],
                correct: 2,
                explanation: "Nero d'Avola is Sicily's signature red grape, producing full-bodied wines with black fruit, spice, and chocolate notes, thriving in the island's hot, dry Mediterranean climate."
            },
            {
                q: "Recioto della Valpolicella is what style?",
                options: ["Dry red", "Sweet red", "Dry white", "Sparkling"],
                correct: 1,
                explanation: "Recioto is made using appassimento like Amarone, but fermentation is stopped early, leaving significant residual sugar. It's a sweet, concentrated red wine with raisin, chocolate, and spice."
            },
            {
                q: "Super Tuscans were originally classified as what?",
                options: ["DOCG", "DOC", "Vino da Tavola/IGT", "Riserva"],
                correct: 2,
                explanation: "Super Tuscans started as Vino da Tavola because they used non-traditional grapes (like Cabernet) or methods outside DOC rules. Many are now IGT Toscana, commanding premium prices despite 'lower' classification."
            },
            {
                q: "What is Soave made from?",
                options: ["Trebbiano", "Garganega", "Pinot Grigio", "Verdicchio"],
                correct: 1,
                explanation: "Soave is made primarily from Garganega in the Veneto, producing light to medium-bodied whites with stone fruit, almond, and minerality. Top Soave Classico can age beautifully."
            },
            {
                q: "Which wine region surrounds Rome?",
                options: ["Lombardy", "Lazio", "Campania", "Abruzzo"],
                correct: 1,
                explanation: "Lazio (including Frascati DOC) surrounds Rome, producing mostly light, crisp whites from Malvasia and Trebbiano, perfect for early consumption with Roman cuisine."
            },
            {
                q: "Vermentino is associated with which regions?",
                options: ["Piedmont and Lombardy", "Sardinia and Liguria", "Sicily and Calabria", "Veneto and Friuli"],
                correct: 1,
                explanation: "Vermentino produces fresh, aromatic whites with citrus, herbs, and salinity in Sardinia (Vermentino di Gallura DOCG) and Liguria's coast, perfect with seafood."
            },
            {
                q: "What makes Valpolicella Ripasso unique?",
                options: ["Dried grapes", "Wine refermented on Amarone pomace", "Made from white grapes", "Aged in chestnut"],
                correct: 1,
                explanation: "Ripasso involves refermenting regular Valpolicella on the warm, sugar-rich pomace from Amarone production, adding body, complexity, alcohol, and dried fruit character."
            },
            {
                q: "Montepulciano d'Abruzzo is made from which grape?",
                options: ["Sangiovese", "Nebbiolo", "Montepulciano", "Primitivo"],
                correct: 2,
                explanation: "Montepulciano (the grape) makes Montepulciano d'Abruzzo in central Italy - medium to full-bodied reds with soft tannins, black fruit, and herbs. Don't confuse with Vino Nobile di Montepulciano (made from Sangiovese)."
            },
            {
                q: "Franciacorta is known for what type of wine?",
                options: ["Still red wines", "Traditional Method sparkling wines", "Sweet wines", "Fortified wines"],
                correct: 1,
                explanation: "Franciacorta in Lombardy produces Italy's finest Traditional Method sparkling wines from Chardonnay, Pinot Noir, and Pinot Blanc, rivaling Champagne in quality with strict aging requirements."
            },
            {
                q: "What is the primary grape of Chianti Classico?",
                options: ["Nebbiolo", "Sangiovese", "Barbera", "Nero d'Avola"],
                correct: 1,
                explanation: "Sangiovese is the backbone of Chianti Classico (80% minimum), providing high acidity, red cherry fruit, herbal notes, and firm tannins that pair perfectly with Tuscan cuisine."
            },
            {
                q: "Barolo must be aged for how long before release?",
                options: ["1 year", "2 years", "38 months (3 years, 2 months)", "5 years"],
                correct: 2,
                explanation: "Barolo requires 38 months aging (18 months in oak) before release (62 months for Riserva). This extended aging is necessary to soften Nebbiolo's powerful tannins."
            },
            {
                q: "Which region is home to Etna DOC?",
                options: ["Sardinia", "Sicily", "Puglia", "Campania"],
                correct: 1,
                explanation: "Etna DOC on Sicily's Mt. Etna produces distinctive wines from Nerello Mascalese (red) and Carricante (white) grown on volcanic slopes, showing elegance, minerality, and aging potential."
            },
            {
                q: "What does Riserva indicate in Italian wine?",
                options: ["Sweet wine", "Extended aging requirements", "Reserve grapes", "Higher alcohol"],
                correct: 1,
                explanation: "Riserva indicates extended aging beyond the standard DOC/DOCG requirements, varying by region but generally meaning more time in barrel and/or bottle before release, resulting in more developed wines."
            },
            {
                q: "Gavi DOCG is made from which grape?",
                options: ["Pinot Grigio", "Cortese", "Garganega", "Verdicchio"],
                correct: 1,
                explanation: "Gavi (or Cortese di Gavi) from Piedmont is 100% Cortese, producing crisp, light to medium-bodied whites with citrus, green apple, and almond, best enjoyed young."
            }
        ]
    },
    
    spain: {
        name: "Spain",
        questions: [
            {
                q: "What is the highest classification level in Spain?",
                options: ["Vino de la Tierra", "DO", "DOCa/DOQ", "Vino de Mesa"],
                correct: 2,
                explanation: "DOCa (Denominación de Origen Calificada) in most of Spain, or DOQ (Denominació d'Origen Qualificada) in Catalonia, is the highest level. Only Rioja and Priorat currently hold this status."
            },
            {
                q: "Rioja is most associated with which grape?",
                options: ["Garnacha", "Tempranillo", "Monastrell", "Albariño"],
                correct: 1,
                explanation: "Tempranillo is Rioja's primary grape, producing medium to full-bodied reds with red fruit, vanilla (from American oak aging), and good aging potential. It's Spain's noble grape variety."
            },
            {
                q: "What does 'Reserva' mean for Rioja red wines?",
                options: ["1 year aging", "3 years aging (1 in oak)", "5 years aging", "No aging requirement"],
                correct: 1,
                explanation: "Rioja Reserva requires 3 years aging minimum with at least 1 year in oak barrels, creating wines with more integration of oak, tertiary flavors, and complexity than Crianza."
            },
            {
                q: "Priorat is known for wines from which soil type?",
                options: ["Chalk", "Clay", "Llicorella (slate)", "Sand"],
                correct: 2,
                explanation: "Llicorella (decomposed slate/schist) defines Priorat's steep terraced vineyards, producing intense, mineral-driven wines primarily from old-vine Garnacha and Cariñena (Carignan)."
            },
            {
                q: "Albariño is the signature grape of which region?",
                options: ["Rioja", "Ribera del Duero", "Rías Baixas", "Jerez"],
                correct: 2,
                explanation: "Albariño thrives in Rías Baixas' cool, Atlantic-influenced climate in Galicia, producing aromatic, high-acid whites with citrus, stone fruit, and sometimes slight salinity."
            },
            {
                q: "What is Cava?",
                options: ["A red wine region", "Traditional Method sparkling wine", "Sweet fortified wine", "Oak-aged white"],
                correct: 1,
                explanation: "Cava is Spain's Traditional Method sparkling wine, primarily from Catalonia (Penedès), made mainly from Macabeo, Xarel-lo, and Parellada, offering an affordable alternative to Champagne."
            },
            {
                q: "Ribera del Duero is famous for wines made from which grape?",
                options: ["Garnacha", "Tempranillo (Tinto Fino)", "Monastrell", "Mencía"],
                correct: 1,
                explanation: "Tempranillo (called Tinto Fino or Tinta del País here) produces powerful, concentrated reds in Ribera del Duero's high-altitude continental climate, with dark fruit, firm tannins, and structure."
            },
            {
                q: "What style of wine is Jerez (Sherry)?",
                options: ["Dry red", "Sparkling", "Fortified wine", "Sweet still white"],
                correct: 2,
                explanation: "Sherry is fortified wine from Jerez, made from Palomino (dry styles) or PX/Muscat (sweet), using the solera system and either biological aging (flor) or oxidative aging."
            },
            {
                q: "Gran Reserva Rioja requires how much aging?",
                options: ["2 years", "3 years", "5 years (2 in oak)", "7 years"],
                correct: 2,
                explanation: "Rioja Gran Reserva requires 5 years aging minimum (2 years in oak, 3 in bottle) for reds, producing wines with tertiary complexity, integration, and peak maturity upon release."
            },
            {
                q: "Monastrell (Mourvèdre) is a specialty of which region?",
                options: ["Rioja", "Rías Baixas", "Jumilla", "Ribera del Duero"],
                correct: 2,
                explanation: "Monastrell dominates in Jumilla and other southeastern regions' hot, dry climates, producing full-bodied reds with black fruit, spice, and firm tannins from old bush vines."
            },
            {
                q: "What is unique about Toro wines?",
                options: ["Made from Albariño", "Powerful Tempranillo from old vines", "Sparkling wines", "White wines only"],
                correct: 1,
                explanation: "Toro produces powerful, concentrated wines from old-vine Tempranillo (called Tinta de Toro) in an extreme continental climate, rivaling Ribera del Duero in intensity and structure."
            },
            {
                q: "Verdejo is the primary grape of which DO?",
                options: ["Rueda", "Jerez", "Penedès", "Rioja"],
                correct: 0,
                explanation: "Verdejo in Rueda produces fresh, aromatic whites with stone fruit, citrus, herbaceous notes, and good weight. Some premium versions are barrel-fermented for added complexity."
            },
            {
                q: "What is the climate of Rías Baixas?",
                options: ["Hot and dry", "Cool and Atlantic-influenced", "Continental", "Mediterranean"],
                correct: 1,
                explanation: "Rías Baixas has a cool, maritime Atlantic climate with high rainfall, requiring pergola-trained vines to prevent fungal disease while allowing air circulation for the Albariño grapes."
            },
            {
                q: "Manzanilla is a style of Sherry from which town?",
                options: ["Jerez", "Sanlúcar de Barrameda", "El Puerto", "Montilla"],
                correct: 1,
                explanation: "Manzanilla is produced only in Sanlúcar de Barrameda, where the coastal humidity encourages thicker flor development, creating an even more delicate, tangy Fino-style Sherry."
            },
            {
                q: "What grape is used for most dry Sherry?",
                options: ["Tempranillo", "Palomino", "Pedro Ximénez", "Garnacha"],
                correct: 1,
                explanation: "Palomino is the main grape for Fino, Manzanilla, Amontillado, Oloroso, and Palo Cortado Sherries. It's neutral, allowing the solera system and aging style to shape the wine's character."
            },
            {
                q: "Penedès is most famous for producing what?",
                options: ["Rioja-style reds", "Cava", "Sweet wines", "Rosé"],
                correct: 1,
                explanation: "Penedès in Catalonia is the heart of Cava production, with over 95% of Cava made here. The region also produces quality still wines from international and local varieties."
            },
            {
                q: "What does Joven mean on a Spanish wine label?",
                options: ["Aged 5 years", "Young wine, little or no oak aging", "Sweet wine", "Sparkling"],
                correct: 1,
                explanation: "Joven means young, indicating minimal or no oak aging. These wines emphasize fresh fruit and are meant for early consumption, offering value and approachability."
            },
            {
                q: "Bierzo is known for which grape?",
                options: ["Tempranillo", "Mencía", "Garnacha", "Monastrell"],
                correct: 1,
                explanation: "Mencía produces aromatic, medium-bodied reds in Bierzo's Atlantic-influenced climate, with red fruit, floral notes, herbal character, and fresh acidity - often compared to Cabernet Franc."
            },
            {
                q: "What characterizes the Priorat terroir?",
                options: ["Flat plains", "Steep terraced slopes with llicorella", "Sandy soils near coast", "High rainfall"],
                correct: 1,
                explanation: "Priorat's defining feature is steep, terraced hillside vineyards with llicorella (slate/schist) soils and a continental climate, producing intense, mineral-driven wines from heroically difficult viticulture."
            },
            {
                q: "Pedro Ximénez (PX) Sherry is known for what?",
                options: ["Bone dry style", "Lusciously sweet style", "Sparkling", "Light and floral"],
                correct: 1,
                explanation: "PX Sherry is lusciously sweet, made from sun-dried PX grapes, producing syrupy, dark wines with intense flavors of raisins, figs, coffee, and chocolate. Often used as a sweetening agent or dessert wine."
            }
        ]
    
    
    new_zealand: {
        name: "New Zealand",
        questions: [
            {
                q: "What is New Zealand's signature grape variety?",
                options: ["Chardonnay", "Sauvignon Blanc", "Pinot Noir", "Riesling"],
                correct: 1,
                explanation: "Sauvignon Blanc is New Zealand's signature variety, especially from Marlborough. The style features intense passion fruit, gooseberry, and herbaceous notes with crisp acidity."
            },
            {
                q: "Marlborough is divided into which two main valleys?",
                options: ["Wairau and Awatere", "Gibbston and Bannockburn", "Auckland and Waiheke", "Gisborne and Hawke's Bay"],
                correct: 0,
                explanation: "Wairau Valley (warmer, riper fruit) and Awatere Valley (cooler, more herbaceous, higher acidity) are Marlborough's two main valleys, creating different Sauvignon Blanc styles."
            },
            {
                q: "Central Otago is known for what type of climate?",
                options: ["Maritime", "Continental", "Tropical", "Mediterranean"],
                correct: 1,
                explanation: "Central Otago has a continental climate with cold winters and warm summers, producing full-bodied Pinot Noir with ripe fruit, structure, and intensity at the world's southernmost wine region."
            },
            {
                q: "Hawke's Bay is New Zealand's warmest region, known for what?",
                options: ["Sauvignon Blanc only", "Bordeaux-style blends and Syrah", "Sparkling wines", "Riesling"],
                correct: 1,
                explanation: "Hawke's Bay's warmest sites (especially Gimblett Gravels) produce ripe Cabernet-based Bordeaux blends and powerful Syrah, plus Chardonnay and Merlot."
            },
            {
                q: "What makes Martinborough (Wairarapa) distinctive?",
                options: ["Highest altitude", "Pinot Noir comparable to Burgundy", "Tropical climate", "Sparkling wines only"],
                correct: 1,
                explanation: "Martinborough produces elegant, complex Pinot Noir from free-draining gravelly soils and cool climate, often compared favorably to Burgundy for quality and style."
            },
            {
                q: "Gisborne is primarily known for what?",
                options: ["Pinot Noir", "Chardonnay and aromatic whites", "Cabernet Sauvignon", "Fortified wines"],
                correct: 1,
                explanation: "Gisborne (Poverty Bay) is warm and fertile, producing abundant Chardonnay, Gewürztraminer, and other aromatic whites, though quality has improved with better vineyard sites."
            },
            {
                q: "What is unique about Waiheke Island?",
                options: ["Coolest region", "Warm maritime climate ideal for Bordeaux varieties", "Highest elevation", "Sparkling wines only"],
                correct: 1,
                explanation: "Waiheke Island near Auckland has a warm maritime climate, producing ripe Cabernet Sauvignon, Merlot, and Syrah that wouldn't ripen elsewhere in New Zealand."
            },
            {
                q: "Canterbury/Waipara is known for producing what?",
                options: ["Tropical Sauvignon Blanc", "Cool-climate Pinot Noir and Riesling", "Cabernet blends", "Fortified wines"],
                correct: 1,
                explanation: "Canterbury Plains and Waipara Valley produce elegant Pinot Noir, aromatic Riesling, and Chardonnay in a cool climate with limestone soils, showing finesse and minerality."
            },
            {
                q: "Nelson is known for what varieties?",
                options: ["Cabernet and Merlot", "Sauvignon Blanc, Pinot Noir, Chardonnay", "Riesling only", "Syrah"],
                correct: 1,
                explanation: "Nelson has high sunshine hours and maritime influence, producing quality Sauvignon Blanc (distinct from Marlborough), elegant Pinot Noir, and Chardonnay."
            },
            {
                q: "What characterizes New Zealand's wine GI system?",
                options: ["Established 2017, 85% minimum rule", "No regulations", "Only for exports", "Based on French AOC"],
                correct: 0,
                explanation: "New Zealand's GI system was established in 2017, requiring 85% of grapes from the stated region, similar to Australia's system."
            },
            {
                q: "What is distinctive about New Zealand Pinot Noir?",
                options: ["Always light", "Ranges from elegant to full-bodied with pure fruit", "Tannic and oaked", "Sweet"],
                correct: 1,
                explanation: "NZ Pinot Noir shows diversity from elegant (Martinborough, Central Otago Gibbston) to fuller-bodied (Bannockburn), with pure, vibrant fruit character and increasing international recognition."
            },
            {
                q: "Marlborough's climate is best described as how?",
                options: ["Hot and humid", "Cool with high sunshine and low rainfall", "Tropical", "Continental extremes"],
                correct: 1,
                explanation: "Marlborough combines cool temperatures with high sunshine hours and low rainfall, creating ideal conditions for aromatic Sauvignon Blanc with intense flavors and crisp acidity."
            },
            {
                q: "What is the Gimblett Gravels?",
                options: ["A winery", "A sub-region in Hawke's Bay with stony soils", "A grape variety", "A wine style"],
                correct: 1,
                explanation: "Gimblett Gravels is a sub-region of Hawke's Bay with free-draining gravelly soils (former riverbed), producing New Zealand's best Bordeaux-style reds and Syrah."
            },
            {
                q: "What makes New Zealand Sauvignon Blanc distinct from Loire?",
                options: ["Less aromatic", "More intense fruit, tropical notes, higher alcohol", "Sweet style", "Oaked"],
                correct: 1,
                explanation: "NZ Sauvignon Blanc (especially Marlborough) is more intense than Loire, with pronounced passion fruit, gooseberry, and sometimes capsicum notes, higher alcohol, and vibrant acidity."
            },
            {
                q: "Auckland wine regions benefit from what?",
                options: ["Altitude", "Warm maritime climate from surrounding water", "Desert conditions", "Continental extremes"],
                correct: 1,
                explanation: "Auckland's various sub-regions (including Waiheke Island) benefit from warm maritime influence, enabling ripening of Bordeaux varieties and producing diverse wine styles."
            },
            {
                q: "Central Otago is divided into what sub-regions?",
                options: ["Only Gibbston", "Gibbston, Bannockburn, Wanaka, Cromwell Basin", "Marlborough divisions", "North and South only"],
                correct: 1,
                explanation: "Central Otago includes Gibbston (cool, elegant), Bannockburn (warm, powerful), Wanaka, and Cromwell Basin, each producing distinct Pinot Noir styles."
            },
            {
                q: "What viticulture challenge is common in New Zealand?",
                options: ["Drought", "Excessive rainfall and humidity requiring canopy management", "Extreme heat", "Frost is rare"],
                correct: 1,
                explanation: "High rainfall and humidity are major challenges, especially in regions like Gisborne and Marlborough, requiring careful canopy management to prevent disease and ensure ripening."
            },
            {
                q: "New Zealand's long sunshine hours are due to what?",
                options: ["Equatorial location", "Southern latitude and clean air", "Altitude only", "Ocean currents"],
                correct: 1,
                explanation: "New Zealand's southern latitude (similar to Burgundy's northern latitude) and clean air result in long sunshine hours during the growing season, aiding ripening despite cool temperatures."
            },
            {
                q: "What is screwcap usage like in New Zealand?",
                options: ["Rare", "Very common (90%+), especially for Sauvignon Blanc", "Only for cheap wines", "Banned"],
                correct: 1,
                explanation: "New Zealand led the adoption of screwcaps (Stelvin), now used for over 90% of wines. This prevents cork taint and oxidation, preserving fresh, aromatic character especially in Sauvignon Blanc."
            },
            {
                q: "What characterizes the New Zealand wine industry?",
                options: ["Ancient traditions", "Young, innovative, quality-focused", "Mass production only", "No exports"],
                correct: 1,
                explanation: "New Zealand's wine industry is relatively young (modern era from 1970s-80s), characterized by innovation, quality focus, and strong international reputation, especially for Sauvignon Blanc and Pinot Noir."
            }
        ]
    },
    
    south_africa: {
        name: "South Africa",
        questions: [
            {
                q: "What is South Africa's signature red grape?",
                options: ["Cabernet Sauvignon", "Merlot", "Pinotage", "Syrah"],
                correct: 2,
                explanation: "Pinotage (Pinot Noir x Cinsaut cross created in 1925) is South Africa's signature variety, producing distinctive wines with red fruit, smoke, and sometimes earthy or rubbery notes."
            },
            {
                q: "Stellenbosch is known for producing what?",
                options: ["Only white wines", "Premium Bordeaux-style reds and diverse styles", "Sparkling wines", "Fortified only"],
                correct: 1,
                explanation: "Stellenbosch is South Africa's premier red wine region, producing Cabernet, Merlot blends, Pinotage, and Shiraz, with diverse terroirs from mountains to False Bay influence."
            },
            {
                q: "Chenin Blanc in South Africa is also called what?",
                options: ["Colombard", "Steen", "Chardonnay", "Semillon"],
                correct: 1,
                explanation: "Chenin Blanc (called Steen locally) is South Africa's most planted variety, producing diverse styles from sparkling to dry to sweet, with quality improving dramatically in recent decades."
            },
            {
                q: "Constantia is historically famous for what?",
                options: ["Red wines", "Vin de Constance - sweet Muscat wine", "Sparkling wines", "Brandy"],
                correct: 1,
                explanation: "Constantia (especially Klein Constantia) revived the historic Vin de Constance sweet wine from Muscat de Frontignan, once among the world's most celebrated wines in the 18th-19th centuries."
            },
            {
                q: "Walker Bay/Hemel-en-Aarde is known for what?",
                options: ["Hot climate reds", "Cool-climate Pinot Noir and Chardonnay", "Pinotage", "Fortified wines"],
                correct: 1,
                explanation: "Walker Bay's Hemel-en-Aarde Valley has cool maritime climate producing elegant Pinot Noir and Chardonnay, similar to Burgundy, showing South Africa's cooler-climate potential."
            },
            {
                q: "What is the WO system in South Africa?",
                options: ["Water Organization", "Wine of Origin - appellation system", "Wine Organization", "Winemaker's Order"],
                correct: 1,
                explanation: "Wine of Origin (WO) is South Africa's appellation system, certifying origin, vintage, and variety, with regions, districts, and wards providing geographic indication."
            },
            {
                q: "Swartland is emerging as known for what?",
                options: ["Traditional whites", "Old-vine Syrah, Grenache, and Rhône varieties", "Sparkling only", "Pinotage only"],
                correct: 1,
                explanation: "Swartland has emerging reputation for old-vine Syrah, Grenache, and other Rhône varieties, with innovative winemakers producing powerful, terroir-driven wines from dry-farmed bush vines."
            },
            {
                q: "What climate influence affects coastal regions?",
                options: ["Hot desert winds", "Cool Benguela Current and Cape Doctor winds", "Tropical storms", "Continental extremes"],
                correct: 1,
                explanation: "The cold Benguela Current and strong Cape Doctor winds bring cool maritime influence to coastal regions, moderating temperatures and providing ideal conditions for quality viticulture."
            },
            {
                q: "Franschhoek is known for producing what?",
                options: ["Bulk wines", "Diverse premium wines, Semillon, Bordeaux varieties", "Only Pinotage", "Fortified wines"],
                correct: 1,
                explanation: "Franschhoek ('French Corner') produces diverse premium wines including excellent Semillon, Cabernet-based blends, and various styles benefiting from mountain amphitheater terroir."
            },
            {
                q: "What are Cape Blends?",
                options: ["Any South African blend", "Blends featuring 30-70% Pinotage", "Bordeaux blends only", "Sparkling blends"],
                correct: 1,
                explanation: "Cape Blend specifically refers to red blends featuring 30-70% Pinotage blended with Bordeaux varieties, showcasing South Africa's signature grape in a more international style."
            },
            {
                q: "Robertson is known for what?",
                options: ["Cool climate Pinot", "Limestone soils, Chardonnay, and dessert wines", "Pinotage only", "Coastal wines"],
                correct: 1,
                explanation: "Robertson has limestone soils and warm climate, producing quality Chardonnay, Sauvignon Blanc, and Muscadel dessert wines, with increasing quality focus in recent years."
            },
            {
                q: "What is a significant sustainability initiative in South Africa?",
                options: ["No initiatives", "IPW (Integrated Production of Wine) - environmental certification", "Conventional only", "Banned organics"],
                correct: 1,
                explanation: "IPW is South Africa's comprehensive environmental certification program, promoting biodiversity, water conservation, and sustainable viticulture, with high participation rates among producers."
            },
            {
                q: "Paarl is characterized by what?",
                options: ["Cool climate only", "Diverse terroirs and climates, varied wine styles", "Single grape focus", "No quality wines"],
                correct: 1,
                explanation: "Paarl is a large, diverse region with varied elevations, soils, and climates, producing everything from Shiraz to Chenin Blanc to Bordeaux blends, including premium wines."
            },
            {
                q: "What challenge has historically affected South African wine quality?",
                options: ["Too cool", "Virus-affected vineyards, now improving with disease-free clones", "No water", "No tradition"],
                correct: 1,
                explanation: "Leafroll and other viruses historically reduced quality and yields. Modern virus-free clones and replanting have dramatically improved quality since the 1990s."
            },
            {
                q: "Elgin is known for producing what?",
                options: ["Desert wines", "Cool-climate Sauvignon Blanc and Pinot Noir", "Pinotage", "Fortified only"],
                correct: 1,
                explanation: "Elgin's high altitude (200-400m) creates cool conditions ideal for crisp Sauvignon Blanc, elegant Pinot Noir, and Chardonnay, showing distinctive minerality."
            },
            {
                q: "What is distinctive about South African Shiraz style?",
                options: ["Light and delicate", "Ripe, full-bodied with black fruit and spice", "Sweet", "Sparkling"],
                correct: 1,
                explanation: "South African Shiraz (sometimes labeled Syrah for cooler-climate) shows ripe fruit, full body, and distinctive spice character, rivaling Australian and Rhône styles."
            },
            {
                q: "Tulbagh is known for what?",
                options: ["Coastal wines", "Mountain amphitheater with Mediterranean climate", "Tropical climate", "Flat plains"],
                correct: 1,
                explanation: "Tulbagh is enclosed by mountains creating a warm Mediterranean climate, producing quality Shiraz, Cabernet, and aromatic whites with good diurnal temperature variation."
            },
            {
                q: "What percentage is required for single-variety labeling?",
                options: ["75%", "85%", "95%", "100%"],
                correct: 1,
                explanation: "South African WO requires 85% minimum of stated variety (or vintage, or region) on the label, similar to EU and Australian regulations."
            },
            {
                q: "What style of Chenin Blanc is South Africa known for?",
                options: ["Sweet only", "Diverse: dry, off-dry, sweet, sparkling, old-vine", "Sparkling only", "None"],
                correct: 1,
                explanation: "South Africa produces incredibly diverse Chenin Blanc styles, from fresh unoaked to complex barrel-fermented old-vine examples, showcasing the variety's versatility."
            },
            {
                q: "Durbanville is known for what characteristic?",
                options: ["Hot inland", "Cool maritime influence, Sauvignon Blanc", "Altitude only", "Fortified wines"],
                correct: 1,
                explanation: "Durbanville benefits from Atlantic maritime influence, producing crisp Sauvignon Blanc and Merlot, despite being relatively close to warm inland areas."
            }
        ]
    },
    
    south_america: {
        name: "South America (Chile & Argentina)",
        questions: [
            {
                q: "What is Argentina's signature red grape?",
                options: ["Cabernet Sauvignon", "Merlot", "Malbec", "Syrah"],
                correct: 2,
                explanation: "Malbec is Argentina's signature variety, producing powerful, ripe wines with dark fruit, sweet spice, and velvety tannins, especially from Mendoza's high-altitude vineyards."
            },
            {
                q: "Where are most of Argentina's quality vineyards located?",
                options: ["Coastal plains", "Andes foothills at high altitude", "Pampas", "Amazon basin"],
                correct: 1,
                explanation: "Argentine vineyards are at high altitude (600-1,500m+) in the Andes foothills, providing cool nights, intense sunlight, low disease pressure, and need for irrigation from snowmelt."
            },
            {
                q: "Casablanca Valley in Chile is known for what?",
                options: ["Hot climate reds", "Cool-climate Sauvignon Blanc and Chardonnay", "Malbec", "Fortified wines"],
                correct: 1,
                explanation: "Casablanca Valley's cool Pacific influence creates ideal conditions for Sauvignon Blanc, Chardonnay, and Pinot Noir, showing Chile's coastal cooler-climate potential."
            },
            {
                q: "What makes Chile's vineyards unusual?",
                options: ["Highest rainfall", "Never affected by phylloxera - own-rooted vines", "Warmest climate", "No mountains"],
                correct: 1,
                explanation: "Chile's geographic isolation (Andes, Pacific, Atacama Desert, Patagonia) kept phylloxera out. Most vines are ungrafted, growing on their own roots, unique in the modern world."
            },
            {
                q: "Mendoza is divided into what main sub-regions?",
                options: ["North and South", "Luján de Cuyo, Uco Valley, East Mendoza", "Coastal and inland", "None"],
                correct: 1,
                explanation: "Mendoza includes Luján de Cuyo (historic Malbec), Uco Valley (high-altitude, elegant), and East Mendoza (warmer, bulk), each producing distinct styles."
            },
            {
                q: "Carmenère is Chile's signature grape, originally from where?",
                options: ["Argentina", "Spain", "Bordeaux, France", "Italy"],
                correct: 2,
                explanation: "Carmenère is a Bordeaux variety nearly extinct in France, rediscovered in Chile in the 1990s (mistaken for Merlot). It produces full-bodied wines with red fruit, green pepper, and herbal notes."
            },
            {
                q: "What characterizes the Uco Valley?",
                options: ["Low altitude", "High altitude (1,000-1,500m), elegant wines", "Coastal", "Tropical"],
                correct: 1,
                explanation: "Uco Valley's high elevation provides cool nights and intense sun, producing elegant, structured Malbec and other varieties with finesse, acidity, and aging potential."
            },
            {
                q: "Colchagua Valley in Chile is known for what?",
                options: ["Whites only", "Full-bodied Carmenère and Cabernet", "Sparkling wines", "Dessert wines"],
                correct: 1,
                explanation: "Colchagua's warm climate produces ripe, full-bodied reds, especially Carmenère and Cabernet Sauvignon, representing Chile's powerful red wine style."
            },
            {
                q: "Salta in Argentina is known for what?",
                options: ["Sea-level vineyards", "World's highest vineyards producing Torrontés", "Coolest region", "Coastal wines"],
                correct: 1,
                explanation: "Salta (including Cafayate) has some of the world's highest vineyards (up to 3,000m+), producing distinctive aromatic Torrontés white wines with floral, peach, and lychee notes."
            },
            {
                q: "What is distinctive about Chilean wine geography?",
                options: ["Flat terrain", "Long narrow country between Andes and Pacific", "Island nation", "Desert only"],
                correct: 1,
                explanation: "Chile's narrow strip between Andes and Pacific creates diverse climates from north to south, with cool coastal influence, warm valleys, and varied terroirs in short distances."
            },
            {
                q: "Maipo Valley is known for producing what?",
                options: ["White wines", "Traditional Chilean Cabernet Sauvignon", "Torrontés", "Sparkling"],
                correct: 1,
                explanation: "Maipo Valley near Santiago is Chile's traditional red wine heartland, producing classic Cabernet Sauvignon with ripe fruit, eucalyptus notes, and good structure."
            },
            {
                q: "Torrontés is what type of wine?",
                options: ["Red wine", "Aromatic white with floral character", "Sparkling", "Fortified"],
                correct: 1,
                explanation: "Torrontés (especially Torrontés Riojano) is Argentina's signature white, producing aromatic dry wines with intense floral (rose, jasmine), lychee, and peach notes with fresh acidity."
            },
            {
                q: "What irrigation challenge do Argentine vineyards face?",
                options: ["Excessive rainfall", "Dependence on Andes snowmelt", "Coastal flooding", "None"],
                correct: 1,
                explanation: "Argentine vineyards are in rain-shadow desert (100-250mm rain), relying entirely on irrigation from Andes snowmelt via canals and rivers. Climate change affects water availability."
            },
            {
                q: "Limarí Valley in Chile is known for what?",
                options: ["Traditional bulk wines", "Cool coastal influence, Syrah and Chardonnay", "Carmenère", "No wines"],
                correct: 1,
                explanation: "Limarí's cool Pacific influence and limestone soils produce distinctive Syrah and Chardonnay with elegance, minerality, and freshness, representing Chile's northern quality regions."
            },
            {
                q: "What makes Argentine Malbec distinctive from Cahors?",
                options: ["Lighter", "Riper, fuller-bodied with sweeter tannins", "More acidic", "Sparkling"],
                correct: 1,
                explanation: "Argentine Malbec is riper and fuller than French Cahors due to high altitude, intense sun, and warm climate, with dark fruit, sweet spice, and velvety tannins rather than rustic structure."
            },
            {
                q: "Aconcagua Valley produces what style?",
                options: ["Only whites", "Powerful reds, especially Cabernet and Syrah", "Sweet wines", "Sparkling only"],
                correct: 1,
                explanation: "Aconcagua Valley's warm climate (with cooler coastal extension) produces powerful Cabernet Sauvignon, Syrah, and Carmenère with ripe fruit and good concentration."
            },
            {
                q: "Patagonia regions (Argentina/Chile) are characterized by what?",
                options: ["Tropical heat", "Cool climate, windy, Pinot Noir and Malbec", "Desert only", "No viticulture"],
                correct: 1,
                explanation: "Patagonia (Neuquén, Río Negro in Argentina; parts of southern Chile) is cool and windy, producing elegant Pinot Noir, Malbec, and Sauvignon Blanc with fresh acidity."
            },
            {
                q: "What is Chile's DO system based on?",
                options: ["Grape varieties", "Geographic regions", "Producer size", "Age requirements"],
                correct: 1,
                explanation: "Chile's DO (Denominación de Origen) system is based on geography, with regions, sub-regions, and zones. 75% minimum rule for variety, region, and vintage labeling."
            },
            {
                q: "San Juan in Argentina is known for what?",
                options: ["Cool climate wines", "Warm climate, Syrah, and bulk wines", "Only Torrontés", "Coastal wines"],
                correct: 1,
                explanation: "San Juan is warm and sunny (north of Mendoza), producing Syrah, Bonarda, and significant bulk wine production, though quality is improving in cooler sub-regions."
            },
            {
                q: "What is Carmenère's distinctive characteristic?",
                options: ["High acidity", "Green pepper/herbaceous notes when underripe, red fruit when ripe", "Sweet", "Sparkling"],
                correct: 1,
                explanation: "Carmenère's challenge is achieving full phenolic ripeness; underripe shows green pepper/herbaceous character. Ripe examples show red fruit, spice, and soft tannins with distinctive character."
            }
        ]
    },
    
    canada: {
        name: "Canada",
        questions: [
            {
                q: "Canada is most famous internationally for what wine style?",
                options: ["Dry red", "Icewine", "Sparkling", "Rosé"],
                correct: 1,
                explanation: "Icewine is Canada's signature style, made from grapes frozen naturally on the vine (at least -8°C), concentrated into intensely sweet wines. Canada is the world's largest producer."
            },
            {
                q: "What is VQA in Canadian wine?",
                options: ["A grape variety", "Vintners Quality Alliance - appellation system", "A winery", "A wine style"],
                correct: 1,
                explanation: "VQA (Vintners Quality Alliance) certifies wines are 100% from grapes grown in the specified region, meeting quality standards. It's Canada's appellation system in Ontario and British Columbia."
            },
            {
                q: "Which grape is most used for Canadian Icewine?",
                options: ["Chardonnay", "Riesling and Vidal", "Cabernet Sauvignon", "Pinot Noir"],
                correct: 1,
                explanation: "Riesling produces Canada's finest Icewine with elegance and acidity. Vidal (hybrid) is also common - cold-hardy with thick skins that hang well through winter for consistent Icewine production."
            },
            {
                q: "Niagara Peninsula is Canada's most important region for what reason?",
                options: ["Warmest climate", "Lake Ontario moderates climate, enables quality viticulture", "Highest elevation", "Desert conditions"],
                correct: 1,
                explanation: "Lake Ontario's moderating effect provides warmth in spring/fall and protection from extreme winter cold, enabling Riesling, Chardonnay, Cabernet Franc, and Icewine production."
            },
            {
                q: "Okanagan Valley in BC is known for what?",
                options: ["Coastal vineyards", "Glacial lake, diverse microclimates, Pinot Gris/Pinot Noir", "Tropical climate", "Only Icewine"],
                correct: 1,
                explanation: "Okanagan Valley benefits from Okanagan Lake's moderation, creating diverse microclimates in a rain shadow. It produces Pinot Gris, Pinot Noir, Chardonnay, Riesling, and Merlot."
            },
            {
                q: "What makes Canadian wine regions challenging?",
                options: ["Too warm", "Cold continental climate with winter damage risk", "Excessive rain", "No challenges"],
                correct: 1,
                explanation: "Canadian wine regions face harsh continental winters with potential for winter kill. Regions depend on lake moderation, site selection, and cold-hardy varieties/hybrids."
            },
            {
                q: "Cabernet Franc is Ontario's most planted red grape for what reason?",
                options: ["High yields", "Cold-hardy with Loire-style character", "Sweet wines", "Sparkling"],
                correct: 1,
                explanation: "Cabernet Franc is more cold-hardy than Cabernet Sauvignon, producing quality red wines in Ontario with red fruit, herbaceous notes, and medium body similar to Loire Valley."
            },
            {
                q: "What is unique about Okanagan Valley's geography?",
                options: ["Coastal location", "Desert/semi-arid in rain shadow", "Rainforest", "Highest elevation"],
                correct: 1,
                explanation: "Okanagan sits in a rain shadow with semi-arid/desert conditions receiving only 250-300mm rain annually, requiring irrigation but enabling diverse grape varieties in long, sunny days."
            },
            {
                q: "Which region produces most of Canada's wine?",
                options: ["British Columbia", "Ontario", "Quebec", "Nova Scotia"],
                correct: 1,
                explanation: "Ontario (especially Niagara Peninsula) produces about 2/3 of Canadian wine, with British Columbia (especially Okanagan) producing most of the rest."
            },
            {
                q: "What is Vidal's advantage for Icewine production?",
                options: ["Lowest sugar", "Hybrid with thick skins, cold-hardy, reliable", "Makes dry wines only", "Earliest ripening"],
                correct: 1,
                explanation: "Vidal is a French hybrid with thick skins that resist rot and hang well through winter, making it reliable for Icewine in years when Riesling might fail."
            },
            {
                q: "Prince Edward County in Ontario is known for what?",
                options: ["Icewine only", "Emerging Pinot Noir and Chardonnay region", "Warmest region", "Bulk wines"],
                correct: 1,
                explanation: "Prince Edward County is an emerging cool-climate region with limestone soils producing elegant Pinot Noir, Chardonnay, and other Burgundian-style wines."
            },
            {
                q: "What is required for VQA Icewine certification?",
                options: ["Any frozen grapes", "Natural freezing at -8°C minimum, 35° Brix minimum", "Artificial freezing ok", "No requirements"],
                correct: 1,
                explanation: "VQA Icewine must be from grapes naturally frozen on the vine at -8°C or colder, achieving minimum 35° Brix, harvested and pressed while frozen. Artificial freezing is not permitted."
            },
            {
                q: "Similkameen Valley in BC is characterized by what?",
                options: ["Coastal fog", "Warm, organic viticulture, diverse varieties", "Only whites", "No wines"],
                correct: 1,
                explanation: "Similkameen Valley is warm and dry with organic viticulture focus, producing diverse varieties including Syrah, Merlot, Pinot Noir, and aromatic whites."
            },
            {
                q: "What is the harvest timing for Canadian Icewine?",
                options: ["Late August", "December through February", "April", "June"],
                correct: 1,
                explanation: "Icewine grapes are left on the vine through fall and winter, harvested from December to February (sometimes March) when naturally frozen, often picked at night."
            },
            {
                q: "Fraser Valley in BC is known for what?",
                options: ["Desert conditions", "Cool, wet maritime climate", "Highest altitude", "Warmest region"],
                correct: 1,
                explanation: "Fraser Valley has a cool, wet maritime climate challenging for viticulture, but producing aromatic whites and some Pinot Noir, with focus on disease-resistant varieties."
            },
            {
                q: "What style of still table wines is Ontario known for?",
                options: ["Only reds", "Riesling, Chardonnay, Cabernet Franc, Pinot Noir", "Fortified only", "None"],
                correct: 1,
                explanation: "Beyond Icewine, Ontario produces quality still wines including crisp Riesling, Chardonnay, elegant Pinot Noir, and structured Cabernet Franc, gaining international recognition."
            },
            {
                q: "What makes Okanagan's growing season unique?",
                options: ["Short season", "Long daylight hours at northern latitude", "No sun", "Tropical nights"],
                correct: 1,
                explanation: "Okanagan's northern latitude (49-50°N) provides long summer daylight hours (16+ hours), aiding ripening and flavor development despite cool nights."
            },
            {
                q: "Nova Scotia's wine industry focuses on what?",
                options: ["Red wines", "Sparkling wines from L'Acadie Blanc and other hybrids", "Icewine", "Fortified"],
                correct: 1,
                explanation: "Nova Scotia's cool maritime climate is ideal for Traditional Method sparkling wines from L'Acadie Blanc and other cold-hardy hybrids, gaining quality recognition."
            },
            {
                q: "What percentage must VQA wines contain from stated region?",
                options: ["75%", "85%", "100%", "95%"],
                correct: 2,
                explanation: "VQA requires 100% of grapes from the stated appellation and 100% vinifera or approved hybrid varieties, stricter than most appellation systems."
            },
            {
                q: "What is Canadian Icewine's typical flavor profile?",
                options: ["Dry and austere", "Intensely sweet with stone fruit, honey, citrus, balanced acidity", "Savory", "Bitter"],
                correct: 1,
                explanation: "Canadian Icewine is intensely sweet (typical RS 180-280 g/L) but balanced by high acidity, with flavors of apricot, peach, honey, citrus, and tropical fruit depending on variety."
            }
        ]
    },
    
    fortified: {
        name: "Fortified Wines",
        questions: [
            {
                q: "What is the primary grape for Fino and Manzanilla Sherry?",
                options: ["Pedro Ximénez", "Palomino", "Muscat", "Tempranillo"],
                correct: 1,
                explanation: "Palomino is the main grape for dry Sherry styles (Fino, Manzanilla, Amontillado, Oloroso, Palo Cortado). It's neutral, allowing the production method and aging to define the wine's character."
            },
            {
                q: "What is flor in Sherry production?",
                options: ["A type of oak", "A yeast layer that protects wine from oxidation", "A grape variety", "A filtering process"],
                correct: 1,
                explanation: "Flor is a layer of yeast (mainly Saccharomyces cerevisiae) that forms on Fino/Manzanilla/Amontillado Sherry, protecting from oxidation, consuming glycerol, and creating acetaldehyde (apple/almond notes)."
            },
            {
                q: "What is the solera system?",
                options: ["A type of oak barrel", "Fractional blending system moving wine through aging scales", "A fortification technique", "A filtration method"],
                correct: 1,
                explanation: "The solera system blends younger wine into progressively older criaderas (scales), maintaining consistency, complexity, and the house style while never completely emptying any level."
            },
            {
                q: "Port is fortified at what point in fermentation?",
                options: ["Before fermentation", "During fermentation (5-9% ABV)", "After fermentation", "Never"],
                correct: 1,
                explanation: "Port is fortified during fermentation at 5-9% ABV with 77% ABV aguardente (grape spirit), stopping fermentation and retaining ~90-100 g/L residual sugar, creating 19-22% ABV sweet wine."
            },
            {
                q: "What distinguishes Vintage Port from other styles?",
                options: ["Lowest quality", "Single-vintage, unfiltered, ages decades in bottle", "Oxidative aged", "Dry style"],
                correct: 1,
                explanation: "Vintage Port is from a single exceptional year, bottled after 2-3 years, unfiltered, developing in bottle for decades, throwing sediment, and reaching peak maturity at 20-40+ years."
            },
            {
                q: "Tawny Port is aged how?",
                options: ["In bottle only", "In pipes (large oak barrels) oxidatively", "In stainless steel", "Underground"],
                correct: 1,
                explanation: "Tawny Port ages oxidatively in pipes (550-650L oak barrels), developing brick-red color and flavors of caramel, nuts, dried fruit, and spice. Aged Tawny shows average age (10/20/30/40+)."
            },
            {
                q: "What is LBV Port?",
                options: ["Light Bottled Vintage", "Late Bottled Vintage", "Long Barrel Vintage", "Low Budget Vintage"],
                correct: 1,
                explanation: "LBV (Late Bottled Vintage) is from a single vintage, aged 4-6 years in oak before bottling. Most are filtered and ready to drink; 'Traditional' LBV is unfiltered like Vintage."
            },
            {
                q: "Amontillado Sherry undergoes what process?",
                options: ["Oxidative aging only", "Biological aging under flor, then oxidative", "Biological only", "No aging"],
                correct: 1,
                explanation: "Amontillado starts as Fino (biological aging under flor), then the flor dies (fortification to 16-18%), and it continues aging oxidatively, combining characteristics of both styles."
            },
            {
                q: "What is unique about Manzanilla Sherry?",
                options: ["Sweetest style", "Only from Sanlúcar, thicker flor, tangy", "Red wine", "No flor"],
                correct: 1,
                explanation: "Manzanilla must be produced in Sanlúcar de Barrameda where coastal humidity encourages thicker flor year-round, creating an even more delicate, tangy style than Fino."
            },
            {
                q: "PX (Pedro Ximénez) Sherry is made how?",
                options: ["Dry white", "From sun-dried grapes, lusciously sweet", "Biological aging", "Sparkling"],
                correct: 1,
                explanation: "PX Sherry is made from sun-dried Pedro Ximénez grapes, creating extremely sweet (400+ g/L RS), dark, viscous wines with intense raisin, fig, coffee, and chocolate flavors."
            },
            {
                q: "What soil type is crucial in Jerez?",
                options: ["Clay", "Albariza (chalky limestone)", "Sand", "Granite"],
                correct: 1,
                explanation: "Albariza soil (porous chalky limestone) retains water through hot, dry summers, providing vine water while excellent drainage prevents waterlogging - crucial for Palomino in Jerez's climate."
            },
            {
                q: "What is the Douro Superior known for?",
                options: ["Coolest sub-region", "Driest, hottest; top-quality Port", "Coastal region", "Only white wines"],
                correct: 1,
                explanation: "Douro Superior is the furthest inland, hottest, driest Douro sub-region, producing some of the finest, most concentrated Port from schist slopes with intense heat and low rainfall."
            },
            {
                q: "Oloroso Sherry is characterized by what?",
                options: ["Light and delicate", "Full-bodied, oxidatively aged, no flor", "Sweet", "Sparkling"],
                correct: 1,
                explanation: "Oloroso is fortified to 17-18% (preventing flor), aged oxidatively in solera, developing full body, walnut, toffee, leather flavors, and mahogany color. Naturally dry unless sweetened."
            },
            {
                q: "What is foot treading (pisa) in Port production?",
                options: ["Filtering method", "Traditional crushing in granite lagares by foot", "Bottling process", "Aging technique"],
                correct: 1,
                explanation: "Foot treading in granite lagares (shallow tanks) is traditional Port extraction. Gentle but effective, it extracts color and tannins without crushing seeds, used for premium Vintage Port."
            },
            {
                q: "Ruby Port is characterized by what?",
                options: ["Aged oxidatively", "Maintains primary fruit, minimal oxygen contact", "Always vintage-dated", "Dry style"],
                correct: 1,
                explanation: "Ruby Port preserves fresh fruit character through short aging in large vats or stainless steel with minimal oxygen contact, maintaining deep ruby color and fruity, youthful style."
            },
            {
                q: "What distinguishes Rutherglen Muscat from other fortified wines?",
                options: ["Dry and light", "Lusciously sweet, oxidatively aged, raisin/toffee flavors", "Sparkling", "No fortification"],
                correct: 1,
                explanation: "Rutherglen Muscat (from Muscat à Petits Grains Rouge) is Australia's iconic sweet wine, aged oxidatively for decades in a solera-like system, creating intense raisin, toffee, and coffee flavors."
            },
            {
                q: "What is Colheita Port?",
                options: ["Vintage Port", "Single-vintage Tawny aged minimum 7 years", "Ruby Port", "White Port"],
                correct: 1,
                explanation: "Colheita is single-vintage Tawny Port aged oxidatively for at least 7 years in cask before bottling. The label shows vintage and bottling date, combining specific vintage with tawny character."
            },
            {
                q: "Cream Sherry is what style?",
                options: ["Bone dry", "Sweetened Oloroso or Fino", "Sparkling", "Unfortified"],
                correct: 1,
                explanation: "Cream Sherry is Oloroso (or Pale Cream from Fino) sweetened with PX or rectified concentrated must, creating sweet, smooth styles popular in export markets."
            },
            {
                q: "What is Vin Doux Naturel (VDN)?",
                options: ["German sweet wine", "French fortified wine (Muscat de Beaumes-de-Venise, Banyuls)", "Italian dessert wine", "Spanish brandy"],
                correct: 1,
                explanation: "VDN (Naturally Sweet Wine) is French fortified wine like Muscat de Beaumes-de-Venise (unaged, floral Muscat) or Banyuls (Grenache-based, can age oxidatively), fortified during fermentation."
            },
            {
                q: "What makes Palo Cortado Sherry rare?",
                options: ["Most common style", "Ambiguous aging between Amontillado and Oloroso", "Sweet always", "No aging"],
                correct: 1,
                explanation: "Palo Cortado is rare, starting as Amontillado (with flor) but developing Oloroso's body mysteriously. It combines Amontillado's finesse with Oloroso's power - the most enigmatic Sherry style."
            }
        ]
    },
    
    sparkling: {
        name: "Sparkling Wines",
        questions: [
            {
                q: "What is the Traditional Method called in Champagne?",
                options: ["Charmat", "Méthode Champenoise", "Carbonation", "Asti"],
                correct: 1,
                explanation: "The Traditional Method (formerly Méthode Champenoise) involves secondary fermentation in the bottle where wine is sold, creating complex sparkling wine through autolysis, riddling, and disgorgement."
            },
            {
                q: "What are the three main grapes of Champagne?",
                options: ["Cabernet, Merlot, Malbec", "Chardonnay, Pinot Noir, Meunier", "Riesling, Gewürz, Pinot Gris", "Chenin, Colombard, Ugni Blanc"],
                correct: 1,
                explanation: "Chardonnay (elegance, citrus, finesse), Pinot Noir (body, structure, red fruit), and Meunier (fruity, early-maturing) are Champagne's primary varieties, each contributing distinct characteristics."
            },
            {
                q: "What is autolysis in sparkling wine production?",
                options: ["Pressing technique", "Yeast breakdown adding bread/biscuit flavors", "Filtration", "Carbonation"],
                correct: 1,
                explanation: "Autolysis occurs when dead yeast cells (lees) break down after secondary fermentation, releasing flavor compounds that add bread, brioche, toast, and nut notes - crucial for Traditional Method quality."
            },
            {
                q: "Prosecco is made using which method?",
                options: ["Traditional Method", "Charmat/Tank Method", "Carbonation", "Ancestral"],
                correct: 1,
                explanation: "Prosecco uses the Charmat/Tank Method with secondary fermentation in pressurized tanks, preserving Glera's fresh, fruity character (apple, pear, flowers) at lower cost than Traditional Method."
            },
            {
                q: "What does 'Blanc de Blancs' mean?",
                options: ["White from red grapes", "White wine from white grapes (100% Chardonnay)", "Rosé style", "Sweet"],
                correct: 1,
                explanation: "Blanc de Blancs means 'white from whites,' typically 100% Chardonnay in Champagne, producing elegant, citrus-driven, age-worthy wines with high acidity and finesse."
            },
            {
                q: "What is riddling (remuage)?",
                options: ["Pressing", "Gradually moving sediment to bottle neck", "Adding dosage", "Harvesting"],
                correct: 1,
                explanation: "Riddling gradually rotates and tilts bottles from horizontal to inverted vertical, moving yeast sediment to the neck for disgorgement. Done manually (pupitres) or mechanically (gyropalettes)."
            },
            {
                q: "What is dosage (liqueur d'expédition)?",
                options: ["Sugar added before second fermentation", "Sugar/wine mixture added after disgorgement determining sweetness", "Yeast addition", "Filtration"],
                correct: 1,
                explanation: "Dosage is wine plus sugar added after disgorgement, determining final sweetness (Brut, Extra Dry, etc.) and rounding out the wine. The amount defines the sweetness classification."
            },
            {
                q: "Cava is made using which method and where?",
                options: ["Charmat, Italy", "Traditional Method, primarily Spain (Penedès)", "Carbonation, France", "Asti, Germany"],
                correct: 1,
                explanation: "Cava uses the Traditional Method, made primarily in Penedès (Catalonia) from Macabeo, Xarel-lo, and Parellada, offering quality sparkling wine at accessible prices."
            },
            {
                q: "What defines Vintage Champagne?",
                options: ["Made every year", "From exceptional single vintage, aged 3+ years", "Cheapest style", "Non-vintage blend"],
                correct: 1,
                explanation: "Vintage Champagne is from a single exceptional year, aged at least 3 years (often longer), showcasing vintage character. Only declared in best years (~3 in 10)."
            },
            {
                q: "What is the Asti method?",
                options: ["Same as Champagne", "Single fermentation stopped early, retaining sweetness", "Charmat", "Carbonation"],
                correct: 1,
                explanation: "Asti method involves one fermentation in pressurized tanks, stopped early by chilling/filtration, retaining Muscat's grape sugars (~7% ABV) and fresh, grapey, floral character."
            },
            {
                q: "What does 'Brut Nature' mean?",
                options: ["Sweetest level", "0-3 g/L residual sugar, no dosage added", "Medium sweet", "Made with natural yeast"],
                correct: 1,
                explanation: "Brut Nature (or Zero Dosage/Brut Zéro) has 0-3 g/L sugar with no dosage added, showing purest expression of terroir, requiring exceptional base wine quality."
            },
            {
                q: "Crémant differs from Champagne how?",
                options: ["Different method", "Made outside Champagne using Traditional Method", "Always sweet", "Red wine only"],
                correct: 1,
                explanation: "Crémant is French sparkling wine made outside Champagne using Traditional Method (Crémant de Loire, Bourgogne, Alsace, etc.) with 9 months minimum lees aging versus Champagne's 15 months."
            },
            {
                q: "What is a Prestige Cuvée?",
                options: ["Cheapest wine", "Producer's top-tier Champagne (e.g., Dom Pérignon, Cristal)", "Entry-level", "Sweet style"],
                correct: 1,
                explanation: "Prestige Cuvée (or Tête de Cuvée) is a house's top offering, from best parcels/vintages, aged longer, in special bottles - like Dom Pérignon, Cristal, La Grande Dame."
            },
            {
                q: "What characterizes Franciacorta?",
                options: ["Prosecco from Veneto", "Traditional Method sparkling from Lombardy", "Spanish Cava", "German Sekt"],
                correct: 1,
                explanation: "Franciacorta is Italy's premier Traditional Method sparkling wine from Lombardy (Chardonnay, Pinot Noir, Pinot Blanc), with strict aging requirements rivaling Champagne quality."
            },
            {
                q: "What is Pét-Nat (Pétillant Naturel)?",
                options: ["Fully sparkling", "Ancestral Method - single fermentation finished in bottle", "Same as Champagne", "Carbonation"],
                correct: 1,
                explanation: "Pét-Nat uses Ancestral Method - bottling before fermentation completes, creating light fizz naturally. May or may not disgorge, typically cloudy, funky, lower pressure than Traditional Method."
            },
            {
                q: "Why is Champagne's climate ideal for sparkling wine?",
                options: ["Warmest region", "Cool climate preserves acidity needed for sparkling", "No seasons", "Tropical"],
                correct: 1,
                explanation: "Champagne's cool continental climate (at northern limit of viticulture) produces high-acid, lower-alcohol base wines perfect for secondary fermentation - acidity is crucial for balance in sparkling wine."
            },
            {
                q: "What does 'sur lie' aging contribute to sparkling wine?",
                options: ["Nothing", "Autolysis flavors, complexity, creaminess", "Color only", "Alcohol"],
                correct: 1,
                explanation: "Extended lees contact (sur lie) during aging creates autolysis flavors (bread, brioche, toast, nuts), adds texture/creaminess, and increases complexity - longer aging develops more character."
            },
            {
                q: "What distinguishes English sparkling wine?",
                options: ["Hot climate", "Cool climate, chalk soils, Traditional Method quality", "Uses Muscat", "Tank method"],
                correct: 1,
                explanation: "English sparkling wine benefits from cool maritime climate and chalk soils (similar to Champagne), producing high-quality Traditional Method wines from Chardonnay, Pinot Noir, Meunier."
            },
            {
                q: "What is the Transfer Method?",
                options: ["Same as Traditional", "Second fermentation in bottle, then transferred to tank for dosage/filtering", "Tank method", "No second fermentation"],
                correct: 1,
                explanation: "Transfer Method has second fermentation in bottle but wine is transferred to tank under pressure for filtering and dosage before rebottling. Can label 'bottle-fermented' but not Traditional Method."
            },
            {
                q: "What pressure is typical in a Champagne bottle?",
                options: ["1-2 atmospheres", "5-6 atmospheres", "10 atmospheres", "No pressure"],
                correct: 1,
                explanation: "Champagne typically has 5-6 atmospheres of pressure (vs. ~2.5-3 atm in car tires), created by secondary fermentation producing CO₂ that dissolves in wine, requiring thick glass bottles."
            }
        ]
    }
};
};