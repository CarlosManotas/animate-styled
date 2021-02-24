import * as React from 'react';
import AnimateStyled from '..';
import * as renderer from 'react-test-renderer';

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<AnimateStyled name="backInDown" />);
  const testInstance = component.root;

  expect(testInstance.findByType(AnimateStyled).props.name).toBe('backInDown');

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
