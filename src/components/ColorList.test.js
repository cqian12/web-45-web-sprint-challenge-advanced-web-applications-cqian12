import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import ColorList from './ColorList';

const testColors = [
    {
        id:1,
        color:'white',
        code:{hex:'#FFFFFF'}
    },
    {
        id:2,
        color:'black',
        code:{hex:'#000000'}
    }
]

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]}/>) 
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColors}/>) 
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    let editVal = true

    const {rerender} = render(<ColorList colors={testColors} editing={editVal}/>)

    let editForm = screen.queryAllByTestId('edit_menu')
    expect(editForm).toHaveLength(1) 

    editVal = false
    rerender(<ColorList colors={testColors} editing={editVal} />)

    editForm = screen.queryAllByTestId('edit_menu')
    expect(editForm).toHaveLength(0)
});
