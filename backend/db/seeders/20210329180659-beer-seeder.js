'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Beers', [
        {
          name: 'Dimensions of Time - 1',
          breweryId: 1,
          abv: 14,
          ibu: 40,
          styleId: 10,
          description: 'Deep, rich chocolate flavor with smooth barrel character and low roast. This imperial stout has spent 15 months in a variety of barrels including 1792, WLW, OWA, Buffalo Trace, and Elijah Craig. Blend 1 is straight forward non-adjunct. This beer was brewed with Ellison Brewing + Spirits in East Lansing, MI as part of the BSP membership.'
        },
        {
          name: 'Rye Barrel Aged Chili Stout',
          breweryId: 1,
          abv: 9.7,
          ibu: 34,
          styleId: 10,
          description: ''
        },
        {
          name: 'Oude Bruin',
          breweryId: 1,
          abv: 7,
          ibu: 24,
          styleId: 22,
          description: 'Oude Bruin style beer aged 2 years then aged 3 months on figs.'
        },
        {
          name: 'Black Agnes',
          breweryId: 2,
          abv: 14,
          ibu: null,
          styleId: 73,
          description: 'A black currant melomel'
        },
        {
          name: 'Blackberry',
          breweryId: 2,
          abv: 14,
          ibu: null,
          styleId: 73,
          description: "Schramm's Blackberry Mead is made with raw, unfiltered honey and whole blackberries. It is an intensely fruity, medium sweet melomel with vanilla and cinnamon aromatics. This hand-crafted beverage pairs well with creamy cheeses, duck, veal and good company. Serve at cellar temperature or lightly chilled."
        },
        {
          name: 'Bounty Hunter',
          breweryId: 3,
          abv: 12.7,
          ibu: 79,
          styleId: 8,
          description: `A toasted coconut/blueberrry/vanilla Imperial Porter is hunting you...it's watching you right now....waiting to strike! It promised "no disintegrations", but at this strength, you'll be lucky if you're in one piece when it's done with you...`
        },
        {
          name: "Vader's Pyre",
          breweryId: 3,
          abv: 12.8,
          ibu: 93,
          styleId: 10,
          description: 'A smoked Imperial Stout, with marshmallows and cinder toffee. The perfect accompaniment to bonfire night...or the immolation of your dark side seduced father? You decide.'
        },
        {
          name: 'Kessel Run',
          breweryId: 3,
          abv: 13.1,
          ibu: 54,
          styleId: 8,
          description: 'A peanut butter/jelly Porter. Redolent of sepia-tinged childhood, playing army with your mates on those endless summer days when you were 9....back home for butties and pop....and not a Peruvian bear in sight.'
        },
        {
          name: 'Senescence',
          breweryId: 4,
          abv: 6.1,
          ibu: null,
          styleId: 28,
          description: 'Dry hopped spelt saison that was open fermented with our mixed culture'
        },
        {
          name: 'Golden Future',
          breweryId: 4,
          abv: 5.2,
          ibu: null,
          styleId: 13,
          description: ''
        },
        {
          name: 'Fuzzy (Blend #3)',
          breweryId: 5,
          abv: 8,
          ibu: null,
          styleId: 14,
          description: 'American Wild Ale fermented in Chardonnay barrels with spontaneous yeast and our house sour blend and aged with Missouri peaches. [Released 3/10/18]'
        },
        {
          name: 'Strawberry Banana',
          breweryId: 6,
          abv: 5.1,
          ibu: null,
          styleId: 83,
          description: 'heavily fruited hard seltzer, loaded with actual blueberry & lemon. technically a seltzer... but with a thick, smoothie-like, texture'
        },
        {
          name: 'Man Tan Banan',
          breweryId: 6,
          abv: 5,
          ibu: null,
          styleId: 83,
          description: 'heavily fruited hard seltzer, loaded with all natural mango, tangerine & banana. technically a seltzer... but with a thick, smoothie-like, texture'
        },
        {
          name: 'Abrikoos',
          breweryId: 7,
          abv: 6,
          ibu: null,
          styleId: 23,
          description: '1, 2 & 3 year old lambic with 3 variatals of apricot from the Rhône valley in France. Harvest July and August 2018. Bottled january 2019.'
        },
        {
          name: 'Grasshopper',
          breweryId: 7,
          abv: 6,
          ibu: null,
          styleId: 25,
          description: 'Collaboration with Ehren "Sensei" Schmidt at Mikkeller Baghaven. We brewed a traditional saison together and once it arrived in Belgium, it was blended with 1, 2 & 3 year old lambic, and aged on Würzer barrels. Bottled February 2019.'
        },
        {
          name: 'Framboos Pjassel (2019)',
          breweryId: 7,
          abv: 6,
          ibu: null,
          styleId: 23,
          description: '1, 2 and 3 year old lambic with 3 varietals of raspberries and red vineyard peaches. The brightness of the raspberries blended with the softness of the vineyard peaches gives way to a very smooth mouthfeel. Bottled January 2020.'
        },
        {
          name: 'Pistol Sauce',
          breweryId: 8,
          abv: 12,
          ibu: null,
          styleId: 73,
          description: 'A mead with layers of various wild berries and maple.'
        },
        {
          name: 'Bilberry Doofus',
          breweryId: 8,
          abv: 11,
          ibu: null,
          styleId: 73,
          description: 'Bilberry mead (also called wild blueberries) made with caramelized sunflower honey, extra dark maple syrup and further conditioned on American oak staves.'
        },
        {
          name: 'End of the World',
          breweryId: 8,
          abv: 11.5,
          ibu: null,
          styleId: 73,
          description: 'Cherry mead that has conditioned on Haitian cocoa nibs (roasted by the Norwegian chocolate producer "Fjåk"), organic vanilla beans from Uganda and american oak staves.'
        },
        {
          name: 'Collusion',
          breweryId: 9,
          abv: 16,
          ibu: null,
          styleId: 73,
          description: 'Dense dessert mead made with black currants, marionberry, and black raspberry. We topped it off with Madagascar vanilla beans and Vermont maple syrup'
        },
        {
          name: 'Blacklisted',
          breweryId: 9,
          abv: 14,
          ibu: null,
          styleId: 73,
          description: 'Black Raspberry Mead in collaboration with Blacklisted Tattoos.'
        },
        {
          name: 'Classic Gueuze',
          breweryId: 10,
          abv: 5,
          ibu: null,
          styleId: 25,
          description: ''
        },
        {
          name: 'Mouth Hug',
          breweryId: 11,
          abv: 8,
          ibu: null,
          styleId: 11,
          description: 'Brewed with 100% Citra hops'
        },
        {
          name: 'Stonefruit Popsicle',
          breweryId: 11,
          abv: 3.5,
          ibu: null,
          styleId: 14,
          description: 'Popsicle style Gose with Apricot, White peaches, blood orange and pink sea salt'
        },
        {
          name: 'Holy Cow IPA',
          breweryId: 12,
          abv: 5.16,
          ibu: null,
          styleId: 11,
          description: 'For hops lovers - this bitter ale is pale colored and made with a blend of 6 different malts and 5 different hops. This ale is dry-hopped for extra flavor and aroma.'
        },
        {
          name: 'Rapture',
          breweryId: 12,
          abv: 7,
          ibu: null,
          styleId: 11,
          description: 'Rapture is an American IPA brewed with Galaxy and Citra hops.'
        },
        {
          name: 'Jacktown Haze Batch #4',
          breweryId: 13,
          abv: 7,
          ibu: 100,
          styleId: 71,
          description: 'Citra/Simcoe/Amarillo'
        },
        {
          name: 'Lab Experiment',
          breweryId: 13,
          abv: 8.8,
          ibu: 25,
          styleId: 46,
          description: 'Chocolate and Coffee Oatmeal Stout'
        },
        {
          name: "Galaxy's Edge",
          breweryId: 14,
          abv: 7.1,
          ibu: null,
          styleId: 11,
          description: ''
        },
        {
          name: 'Twice the Mud',
          breweryId: 14,
          abv: 11.8,
          ibu: null,
          styleId: 81,
          description: 'Cocoa nibs, Ecuador coffee, Madagascar vanilla, Maple Syrup, Peanut Butter and Vanilla Wafer.'
        },
        {
          name: 'Choc Walnut Brownie Ale',
          breweryId: 15,
          abv: 6.2,
          ibu: 40,
          styleId: 42,
          description: ''
        },
        {
          name: 'Daytime IPA',
          breweryId: 21,
          abv: 4,
          ibu: 31,
          styleId: 11,
          description: "This beer has achieved what we all hope for ourselves; to be made new again. There is freedom in burning down the house of expectations and it confers an undeniable lightness to being. We didn't invent these truths; they invented us"
        },
        {
          name: 'Hop Stoopid',
          breweryId: 21,
          abv: 8,
          ibu: 102,
          styleId: 11,
          description: 'The beer with a guarantee built right into the name, this one is destined to blast through the flavors from the night before. Massively dry-hopped for your aromatic pleasure.'
        },
        {
          name: 'Bourbon County Stout',
          breweryId: 20,
          abv: 15.2,
          ibu: 60,
          styleId: 19,
          description: 'Originally brewed in honor of the 1000th batch at our original Clybourn brewpub. A liquid as dark and dense as a black hole with thick foam the color of a bourbon barrel. The nose is an intense mix of charred oak, chocolate, vanilla, caramel and smoke. One sip has more flavor than your average case of beer'
        },
        {
          name: 'Nugget Nectar',
          breweryId: 32,
          abv: 7.5,
          ibu: 93,
          styleId: 9,
          description: "Squeeze those hops for all they're worth and prepare to pucker up: Nugget Nectar Ale, will take hopheads to nirvana with a heady collection of Nugget, Warrior and Tomahawk hops. Starting with the same base ingredients of our flagship HopBack Amber Ale, Nugget Nectar intensifies the malt and hop flavors to create an explosive hop experience"
        },
        {
          name: 'Mad Elf',
          breweryId: 32,
          abv: 11,
          ibu: 15,
          styleId: 24,
          description: 'The holidays at Tröegs start with our inner Mad Elf momentarily taking over the brew deck. So blame "him" for this cheerful ruby red creation brewed with honey, cherries and Belgian yeast reminiscent of cinnamon, clove and allspice.'
        },
        {
          name: 'Broken Heels',
          breweryId: 40,
          abv: 7,
          ibu: null,
          styleId: 71,
          description: 'Broken Heels is a “Hazy” India Pale Ale. Brewed with oats and pilsner malts and hopped aggressively with an assortment of newer American grown hops in the Pacific Northwest. This beer has a full mouthfeel with low bitterness meant to be soft on the palette. High aromatics lead the consumer through a treasure trove of their favorite tropical fruits and wanting more of the very quaffable beer.'
        },
        {
          name: 'Hammock',
          breweryId: 40,
          abv: 9,
          ibu: null,
          styleId: 71,
          description: 'Hammock is a Hazy Double IPA brewed with a luscious amount of oats. Hopped leisurely with all mighty Citra. Expect deep notes of candied orange, mango flesh & rich tropicals. Kick back and relax on this one, it’s going to be all right'
        },
        {
          name: 'Fat Tire',
          breweryId: 27,
          abv: 5.2,
          ibu: 22,
          styleId: 9,
          description: 'Fat Tire Amber is the easy-drinking Amber Ale born in Colorado from New Belgium Brewing Company, a certified B-Corp. '
        },
        {
          name: 'Citradelic',
          breweryId: 27,
          abv: 6,
          ibu: 50,
          styleId: 11,
          description: 'Tune in and hop out with New Belgium Citradelic. Set adrift on a kaleidoscopic wave of hoppiness brought to you by a mystical marriage of Citra hops and tangerine peel, which elevates each sip onto a plane of pure tropical, fruity pleasure. Citradelic’s namesake hop and fruit combine to jam with visions of additional hops like citrusy Mandarina Bavaria, tropical Azzaca, and fruity Galaxy for a colorful explosion that’s grounded by just a touch of malty sweetness. Bored by the status quo? Expand your palate with a pour of Citradelic.'
        },
        {
          name: 'Voodoo Ranger IPA',
          breweryId: 27,
          abv: 7,
          ibu: 50,
          styleId: 11,
          description: 'Bursting with tropical aromas and juicy fruit flavors from Mosaic and Amarillo hops, this golden IPA is perfectly bitter with a refreshing, sublime finish'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Beers', null, {});
  }
};
