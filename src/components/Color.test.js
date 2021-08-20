import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const blankColor = {
    id:1,
    color:'',
    code:{hex:''}
}

const testColor = {
    id:1,
    color:'white',
    code:{hex:'#FFFFFF'}
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={blankColor}/>)
});
  
test("Renders the color passed into component", () => {
    render(<Color color={testColor} />)
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", async () => {
    const fakeDelete = jest.fn()
    const fakeEdit = jest.fn()

    render(<Color color={testColor} deleteColor={fakeDelete} toggleEdit={fakeEdit} />)
    
    const deleteColor = screen.getByTestId('delete')
    userEvent.click(deleteColor)

    await waitFor(() => {
        expect(fakeDelete).toHaveBeenCalledTimes(1)
        expect(fakeEdit).toHaveBeenCalledTimes(1)
    })
});

test("Executes setEditColor and toggleEdit property when color div is clicked", async () => {
    const fakeToggle = jest.fn()
    const fakeEdit = jest.fn()

    render(<Color color={testColor} toggleEdit={fakeToggle} setEditColor={fakeEdit} />)
    
    const editColor = screen.getByTestId('color')
    userEvent.click(editColor)

    await waitFor(() => {
        expect(fakeToggle).toHaveBeenCalledTimes(1)
        expect(fakeEdit).toHaveBeenCalledTimes(1)
    })
});