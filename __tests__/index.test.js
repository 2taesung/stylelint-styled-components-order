const config = require('../src/index');

describe('stylelint-styled-components-order config', () => {
  it('should export a valid config object', () => {
    expect(config).toBeDefined();
    expect(typeof config).toBe('object');
  });

  it('should have stylelint-order plugin', () => {
    expect(config.plugins).toContain('stylelint-order');
  });

  it('should use postcss-styled-syntax as customSyntax', () => {
    expect(config.customSyntax).toBe('postcss-styled-syntax');
  });

  it('should have order/properties-order rule', () => {
    expect(config.rules['order/properties-order']).toBeDefined();
  });

  it('should have order/order rule', () => {
    expect(config.rules['order/order']).toBeDefined();
    expect(config.rules['order/order']).toContain('custom-properties');
    expect(config.rules['order/order']).toContain('declarations');
  });

  it('should define property groups', () => {
    const [groups] = config.rules['order/properties-order'];
    expect(Array.isArray(groups)).toBe(true);
    expect(groups.length).toBeGreaterThan(0);
  });

  it('should have Layout group with display property', () => {
    const [groups] = config.rules['order/properties-order'];
    const layoutGroup = groups.find(g => g.groupName === 'Layout');
    expect(layoutGroup).toBeDefined();
    expect(layoutGroup.properties).toContain('display');
  });

  it('should have Grid properties in Layout group', () => {
    const [groups] = config.rules['order/properties-order'];
    const layoutGroup = groups.find(g => g.groupName === 'Layout');
    expect(layoutGroup.properties).toContain('grid');
    expect(layoutGroup.properties).toContain('gap');
  });

  it('should have Box group with width and height', () => {
    const [groups] = config.rules['order/properties-order'];
    const boxGroup = groups.find(g => g.groupName === 'Box');
    expect(boxGroup).toBeDefined();
    expect(boxGroup.properties).toContain('width');
    expect(boxGroup.properties).toContain('height');
  });

  it('should have Background group', () => {
    const [groups] = config.rules['order/properties-order'];
    const bgGroup = groups.find(g => g.groupName === 'Background');
    expect(bgGroup).toBeDefined();
    expect(bgGroup.properties).toContain('background');
  });

  it('should have Font group with typography properties', () => {
    const [groups] = config.rules['order/properties-order'];
    const fontGroup = groups.find(g => g.groupName === 'Font');
    expect(fontGroup).toBeDefined();
    expect(fontGroup.properties).toContain('color');
    expect(fontGroup.properties).toContain('font-family');
  });

  it('should have Transform group', () => {
    const [groups] = config.rules['order/properties-order'];
    const transformGroup = groups.find(g => g.groupName === 'Transform');
    expect(transformGroup).toBeDefined();
    expect(transformGroup.properties).toContain('transform');
  });

  it('should have Transition group', () => {
    const [groups] = config.rules['order/properties-order'];
    const transitionGroup = groups.find(g => g.groupName === 'Transition');
    expect(transitionGroup).toBeDefined();
    expect(transitionGroup.properties).toContain('transition');
  });

  it('should have Animation group', () => {
    const [groups] = config.rules['order/properties-order'];
    const animationGroup = groups.find(g => g.groupName === 'Animation');
    expect(animationGroup).toBeDefined();
    expect(animationGroup.properties).toContain('animation');
  });

  it('should have Misc group with opacity and cursor', () => {
    const [groups] = config.rules['order/properties-order'];
    const miscGroup = groups.find(g => g.groupName === 'Misc');
    expect(miscGroup).toBeDefined();
    expect(miscGroup.properties).toContain('opacity');
    expect(miscGroup.properties).toContain('cursor');
  });

  it('should have emptyLineBefore threshold for all groups', () => {
    const [groups] = config.rules['order/properties-order'];
    groups.forEach(group => {
      expect(group.emptyLineBefore).toBe('threshold');
    });
  });

  it('should have noEmptyLineBetween set to true', () => {
    const [groups] = config.rules['order/properties-order'];
    groups.forEach(group => {
      expect(group.noEmptyLineBetween).toBe(true);
    });
  });

  it('should have unspecified properties config', () => {
    const [, options] = config.rules['order/properties-order'];
    expect(options.unspecified).toBe('bottomAlphabetical');
    expect(options.emptyLineBeforeUnspecified).toBe('threshold');
    expect(options.emptyLineMinimumPropertyThreshold).toBe(3);
  });
});
