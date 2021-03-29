'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        username: 'FiestyGath12',
        email: 'Candido_Bailey84@gmail.com',
        hashedPassword: bcrypt.hashSync('iNCdEDEHl2LmmmG')
      },
      {
        username: 'Flamesters4',
        email: 'Kayleigh_Farrell@hotmail.com',
        hashedPassword: bcrypt.hashSync('I4YWfYo76Z6l4yu')
      },
      {
        username: 'Formineen',
        email: 'Mathias36@hotmail.com',
        hashedPassword: bcrypt.hashSync('WFLeLhgCLIXrC6k')
      },
      {
        username: 'GlossyStud23',
        email: 'Gregorio54@gmail.com',
        hashedPassword: bcrypt.hashSync('rLMNDjURPXMYuMC')
      },
      {
        username: 'HeadQuit2',
        email: 'Porter_Kshlerin50@hotmail.com',
        hashedPassword: bcrypt.hashSync('UmLNpCTjCMVXKsi')
      },
      {
        username: 'IfallExclusive',
        email: 'Clare73@gmail.com',
        hashedPassword: bcrypt.hashSync('E59Jf5gjfNvjBUD')
      },
      {
        username: 'JinBreeze5',
        email: 'Marisol.Ernser@hotmail.com',
        hashedPassword: bcrypt.hashSync('mzLWyz9yKxIRrrN')
      },
      {
        username: 'HopHunter20',
        email: 'Omari.Tremblay@yahoo.com',
        hashedPassword: bcrypt.hashSync('egSABd6WsZWfIhO')
      },
      {
        username: 'LeadCasual',
        email: 'Gilberto.Bashirian@hotmail.com',
        hashedPassword: bcrypt.hashSync('5o85o2y9jHun7_J')
      },
      {
        username: 'ActiveHops9',
        email: 'Karelle.Jakubowski31@hotmail.com',
        hashedPassword: bcrypt.hashSync('ktFiMDOmWTInYXk')
      },
      {
        username: 'Cranbri18',
        email: 'Pierre_Schmidt@gmail.com',
        hashedPassword: bcrypt.hashSync('VmLhOINobcnTqnd')
      },
      {
        username: 'Diddyfina',
        email: 'Vaughn.Ryan55@gmail.com',
        hashedPassword: bcrypt.hashSync('xbeUPpcBCJnn6vT')
      },
      {
        username: 'SnoopCar08',
        email: 'Lourdes85@yahoo.com',
        hashedPassword: bcrypt.hashSync('zFVjRqHgQy1a3tO')
      },
      {
        username: 'SillyFilly10',
        email: 'Armando42@yahoo.com',
        hashedPassword: bcrypt.hashSync('3aBuVs4zOcfQz90')
      },
      {
        username: 'Ninjagroco',
        email: 'Oswaldo_Dietrich63@gmail.com',
        hashedPassword: bcrypt.hashSync('p3X2HPelenRVe24')
      },
      {
        username: 'Pitlands',
        email: 'Moses63@hotmail.com',
        hashedPassword: bcrypt.hashSync('WdEHYZTRNwUzMWg')
      },
      {
        username: 'BestIng7',
        email: 'Leonel74@gmail.com',
        hashedPassword: bcrypt.hashSync('tkWyslo178ut72a')
      },
      {
        username: 'TartTerror5',
        email: 'Logan83@yahoo.com',
        hashedPassword: bcrypt.hashSync('UfoHaKsQeZMK9fw')
      },
      {
        username: 'Dwinesse',
        email: 'Terence54@hotmail.com',
        hashedPassword: bcrypt.hashSync('3oGPGhSTw9l91NV')
      },
      {
        username: 'PatSam20',
        email: 'Lottie_Lemke14@hotmail.com',
        hashedPassword: bcrypt.hashSync('AfUv2BfCq8Mnf9g')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
