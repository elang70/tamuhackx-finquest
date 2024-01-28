"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";
import Summary from "./summary_content/summary_page";

export default function Home() {
  return (
    <>

      <h1 className={styles.h1}>Welcome to FinQuest</h1>
      <h2 className={styles.h2}>Embark on a journey to achieve financial freedom</h2>
      <div className={styles.container1}>
      <Lottie animationData={animationData} className={`${styles.superhero} ${styles.item}`}></Lottie>
      <p className={`${styles.p1} ${styles.item}`}>
        Embark on an exciting journey towards financial literacy with FinQuest, an interactive 
        choose-your-own-adventure web app designed to empower players with essential money management skills. 
        Navigate through a series of engaging scenarios that mimic real-life financial situations, offering 
        players the opportunity shape their financial
      </p>
      </div>
      <h2>Levels</h2>
      <p>Select what you want to focus on in your journey!</p>
      <ul>
        <li>
          <a href="/pf">Personal Finance</a> 
        </li>
        <li>
          <a>Investment</a> 
        </li>
      </ul>
      
    </>
  );
}

