import _ from 'underscore';
import Backbone from 'backbone';
import sinon from 'sinon';
import html5builder from './../src';

const localStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key, value) {
    delete this[key];
  }
};

global.Backbone = Backbone;
global._ = _;
global.sinon = sinon;
global.grapesjs = html5builder;
global.$ = Backbone.$;
global.localStorage = localStorage;
