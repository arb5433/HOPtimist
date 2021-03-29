'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Breweries', [
        { name: 'Barclay Brewing Co', countryId: 1, typeId: 2 },
        { name: "Schramm's Mead", countryId: 1, typeId: 8 },
        { name: "Emperor's Brewery", countryId: 185, typeId: 3 },
        { name: 'Floodland Brewing', countryId: 1, typeId: 2 },
        { name: 'Side Project Brewing', countryId: 1, typeId: 2 },
        { name: 'Smooj', countryId: 1, typeId: 3 },
        { name: 'Bokke', countryId: 18, typeId: 3 },
        { name: 'Marlobobo', countryId: 130, typeId: 8 },
        { name: 'Manic Meadery', countryId: 1, typeId: 8 },
        { name: 'Brasserie Cantillon', countryId: 18, typeId: 2 },
        { name: 'The Answer', countryId: 1, typeId: 4 },
        { name: 'The Alchemist', countryId: 1, typeId: 10 },
        { name: 'Bicentennial Beer Company', countryId: 1, typeId: 4 },
        { name: 'Wood Brothers Brewing Co.', countryId: 32, typeId: 3 },
        { name: 'Old Wives Ales', countryId: 11, typeId: 9 },
        { name: 'Two Metre Tall', countryId: 11, typeId: 2 },
        { name: 'Pagan Cider', countryId: 11, typeId: 7 },
        { name: 'Applehead', countryId: 143, typeId: 7 },
        { name: 'MAHTPA', countryId: 143, typeId: 9 },
        { name: 'Goose Island Beer Co', countryId: 1, typeId: 1 },
        { name: 'Lagunitas Brewing Company', countryId: 1, typeId: 1 },
        { name: "Not Your Father's", countryId: 1, typeId: 1 },
        { name: 'Brouweriji Bosteels', countryId: 1, typeId: 1 },
        { name: 'Magic Rock Brewing', countryId: 185, typeId: 1 },
        { name: 'Cervejaria Antuerpia', countryId: 25, typeId: 1 },
        { name: 'Croce di Malto', countryId: 84, typeId: 1 },
        { name: 'New Belgium Brewing Company', countryId: 1, typeId: 1 },
        { name: "Brasserie Boum'R", countryId: 62, typeId: 1 },
        { name: 'Erdinger Weissbrau', countryId: 66, typeId: 1 },
        { name: 'Franciscan Well Brewery', countryId: 82, typeId: 1 },
        { name: 'Weyerbacher Brewing Company', countryId: 1, typeId: 10 },
        { name: 'Troegs Independent Brewing', countryId: 1, typeId: 10 },
        { name: 'Fidens Brewing Co', countryId: 1, typeId: 2 },
        { name: 'Mindful Ales', countryId: 1, typeId: 3 },
        { name: 'Horus Aged Ales', countryId: 1, typeId: 2 },
        { name: 'Tree House Brewing Company', countryId: 1, typeId: 10 },
        { name: 'Bicentennial Beer Company', countryId: 1, typeId: 4 },
        { name: 'Keeping Together', countryId: 1, typeId: 3 },
        { name: 'Viking Artisan Ales', countryId: 1, typeId: 3 },
        { name: 'New Trail Brewing Co', countryId: 1, typeId: 2 },
        { name: 'Funk Brewing', countryId: 1, typeId: 2 },
        { name: 'Dogfish Head Craft Brewery', countryId: 1, typeId: 10 },
        { name: 'Anheuser-Busch', countryId: 1, typeId: 1 },
        { name: 'Miller Brewing Company', countryId: 1, typeId: 1 },
        { name: 'Coors Brewing Company', countryId: 1, typeId: 1 },
        { name: 'Labatt Brewing Company', countryId: 32, typeId: 1 },
        { name: 'Yuengling Brewery', countryId: 1, typeId: 10 },
        { name: 'Amstel Bier', countryId: 125, typeId: 1 },
        { name: 'Guinness', countryId: 83, typeId: 1 }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Breweries', null, {});
  }
};
