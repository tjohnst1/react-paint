import expect from 'expect';
import {hexToRgbObj, darkenRgbObj, rgbObjToHex, darkenHex} from '../app/js/utilities/colorUtilities';

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
  describe('rgbObjToHex', () => {
    it('convert a RGB object into a hex value', () => {
      expect(rgbObjToHex({r: 125, g: 125, b: 125})).toEqual("#7D7D7D");
    });
  });
  describe('darkenHex', () => {
    it('should return a darker hex value', () => {
      expect(darkenHex('#646464')).toEqual('#313131');
    })
  })
})
