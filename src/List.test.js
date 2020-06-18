import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const props = STORE.lists[0];

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List {...props}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();  
  });