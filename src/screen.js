import React from 'react'

import {mobiS, mobiM, mobiL, tablet,
	            laptS, laptM, laptL} from './Redux/sizeSlice'
import {useSelector, useDispatch} from 'react-redux'
import {sizeSlice} from './Redux/sizeSlice'      
//import setupStore from './Redux/store'
import {useMediaQuery} from 'react-responsive'
                 

export function ScreenSize(){
const size = {
  mobS: useMediaQuery({ query: '(max-width: 350px)'}),
  mobM: useMediaQuery({ query: '(max-width: 450px)'}),
  mobL: useMediaQuery({ query: '(max-width: 600px)'}),
  lapS: useMediaQuery({ query: '(max-width: 800px)'}),
  lapM: useMediaQuery({ query: '(max-width: 1000px)'}),
  lapL: useMediaQuery({ query: '(max-width: 1250px)'})
}
	return size
	     
	}
const width = {
	mobiS: window.innerWidth < 350,
	mobiM: window.innerWidth > 350 && window.innerWidth < 450,
	mobiL: window.innerWidth > 450 && window.innerWidth < 600,
	tablet: window.innerWidth > 600 && window.innerWidth < 850,
    laptS: window.innerWidth > 850 && window.innerWidth < 1000,
    laptM: window.innerWidth > 1000 && window.innerWidth < 1250,
    laptL: window.innerWidth > 1250 
	
	}

const size = {
  mobS: '350px',
  mobM: '450px',
  mobL: '600px',
  tabl: '850px',
  lapt: '1000px',
  lapL: '1250px'
}

export const device = {
	
  mobS: `(max-width: ${size.mobS})`,
  mobM: `(max-width: ${size.mobM})`,
  mobL: `(max-width: ${size.mobL})`,
  tabl: `(max-width: ${size.tabl})`,
  lapt: `(max-width: ${size.lapt})`,
  lapL: `(max-width: ${size.lapL})`,
}

