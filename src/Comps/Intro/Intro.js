import React from "react";
import styles from './Intro.module.css';

export const Intro = () =>{
	return <>
	    <div className={styles.container}>
	    
  <section className={styles.text}>
	Welcome to the site. </section>
	
  <section className={styles.text}>Here you will find important
   information about my skills, aspirations and areas of interest
  along with an example of work.</section>
  
  <section className={styles.text}>Deployed application and its
   source code are available via links.</section>
  
  <section className={styles.text}>I also made it possible to write
     me an email directly from the "Contacts" section.</section>
     
  <section className={styles.text}>All photos are copyrighted.</section>
  
    </div>
    </>
}
