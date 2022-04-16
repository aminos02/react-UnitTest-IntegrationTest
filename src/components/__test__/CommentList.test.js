import React from 'react'
import CommentList from 'components/CommentList'
import { mount } from 'enzyme/build'
import Root from 'Root'

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root initialState={{comments:['Comment1','Comment2']}}>
            <CommentList />
        </Root>
    )
});

afterEach(() => {
    wrapped.unmount()
});

it('create one  li per comments', () => {
    expect(wrapped.find('li').length).toEqual(2)    
})

it('show the text for each comment',()=>{
    expect(wrapped.text()).toContain('Comment1');
    expect(wrapped.text()).toContain('Comment2');
})