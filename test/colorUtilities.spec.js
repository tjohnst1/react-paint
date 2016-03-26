import expect from 'expect';
import {hexToRgbObj, darkenRgbObj, rgbToHex, darkenHex} from '../app/js/utilities/colorUtilities';

describe('color utilities', () => {
  describe('hextoRgb', () => {
    it('should convert a color hex value into a rgb object', () => {
      expect(hexToRgbObj('#FFFFFF')).toEqual({r: 255, g: 255, b: 255});
    });
  });
  describe('darkenRgbObj', () => {
    it('should darken a color value by a input percentage (relative to 255)', () => {
      expect(darkenRgbObj({r: 100, g: 100, b: 100}, 20)).toEqual({r: 49, g: 49, b: 49});
    });
    it('should not return negative values', () => {
      expect(darkenRgbObj({r: 0, g: 0, b: 0}, 20)).toEqual({r: 0, g: 0, b: 0});
    })
  });
  describe('rgbToHex', () => {
    it('converts a RGB object into a hex value', () => {
      expect(rgbToHex({r: 125, g: 125, b: 125})).toEqual("#7D7D7D");
    });
    it('converts a RGB string into a hex value', () => {
      expect(rgbToHex('rgb(125, 125, 125)')).toEqual("#7D7D7D");
    });
    it('handles cases where there is a single digit hex value (for either Red, Green, or Blue)', () => {
      // notice the trailing '8' is converted to '08'
      expect(rgbToHex({r: 193, g: 27, b: 8})).toEqual("#C11B08");
    });
  });
  describe('darkenHex', () => {
    it('should return a darker hex value', () => {
      expect(darkenHex('#646464', 20)).toEqual('#313131');
    })
  })
})
