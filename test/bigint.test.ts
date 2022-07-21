/* eslint-disable max-len */
import neornd from '../src';

describe('neornd.bigint() : Value Check', () => {
  for (let i = 0; i < 10; i++) {
    it('Small: 45bytes to 60bytes', () => {
      const valToCheck = neornd.bigint(128, 256);
      expect(valToCheck).toBeGreaterThan(
        179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216n,
      );
      expect(valToCheck).toBeLessThan(
        32317006071311007300714876688669951960444102669715484032130345427524655138867890893197201411522913463688717960921898019494119559150490921095088152386448283120630877367300996091750197750389652106796057638384067568276792218642619756161838094338476170470581645852036305042887575891541065808607552399123930385521914333389668342420684974786564569494856176035326322058077805659331026192708460314150258592864177116725943603718461857357598351152301645904403697613233287231227125684710820209725157101726931323469678542580656697935045997268352998638215525166389437335543602135433229604645318478604952148193555853611059596230656n,
      );
    });
  }
});
