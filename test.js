const { get } = require('axios');
require('should');

const meaning = { 'Content-type': 'application/json' };

const options = [24, 676548, 1];

options.forEach(x =>
  describe(`${x} должен быть получен после второго запроса`, () => {
    it('второй запрос выдает ', async () => {
      const { data: y } = await get(`https://kodaktor.ru/api2/there/${x}`, { meaning });
      const { data: z } = await get(`https://kodaktor.ru/api2/andba/${y}`, { meaning });
      z.should.equal(x);
    });
  }));
