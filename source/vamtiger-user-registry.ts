import constructor, { name } from './element';

const { VamtigerBrowserMethod } = self;
const { defineCustomElement } = VamtigerBrowserMethod;

defineCustomElement({
    name,
    constructor
});