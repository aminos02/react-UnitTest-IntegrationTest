import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import  moxios  from "moxios";


var wrapped;

beforeEach(()=>{
     wrapped=mount(<Root>
        <App/>
    </Root>)
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{
            name:'comment 1'
        },{
            name:'comment 2'
        }]
    })
})
afterEach(()=>{
    moxios.uninstall()
})


it('can fetch a list of comments and display them',(done)=>{
    let wrapped=mount(<Root>
        <App/>
    </Root>)

    wrapped.find('.fetcher').simulate('click');
    wrapped.update()
    moxios.wait(()=>{
        wrapped.update()
        expect(wrapped.find('li').length).toEqual(2)
        done()
        wrapped.unmount()
    })
})