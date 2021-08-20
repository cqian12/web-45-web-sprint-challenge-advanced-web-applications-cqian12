import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
jest.mock('../services/fetchColorService')

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

test("Renders without errors", ()=> {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    render(<BubblePage />)

    let colors = 0

    fetchColorService.mockResolvedValueOnce(testColors)
    .then(res=> colors=res.data.length)

    expect(colors).toHaveLength(2)
});