import React from "react";
import {Container, Text} from './Intro.styled'
import {ScreenSize} from '../../screen'

export const Intro = () =>{
	
	const screen = ScreenSize()
	
	return <>
	    <Container size={screen}>
	    
  <Text size={screen}>
	Welcome to the site. </Text>
	
  <Text size={screen}>Here you will find information about 
   my skills, aspirations, areas of interest, as well 
                                         as examples of work.</Text>
  
  <Text size={screen}>Full-stack project with its 
                             source code is available via links.</Text>
  
  <Text size={screen}>I also made it possible to write
     me an email directly from the "Contacts" section.</Text>
     
  <Text size={screen}>All photos are copyrighted.</Text>
  
    </Container>
    </>
}
