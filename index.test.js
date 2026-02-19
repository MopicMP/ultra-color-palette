const { palette, batch } = require('./index');

describe('ultra-color-palette', () => {
  test('should process string input', () => {
    expect(palette('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => palette(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = palette('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
