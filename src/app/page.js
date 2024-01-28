"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";
import animationData2 from "./assets/animation2.json";
import animationData3 from "./assets/animation3.json";
import Summary from "./summary_content/summary_page";

export default function Home() {
  return (
    <>

      <h1 className={styles.h1}>Welcome to FinQuest</h1>
      <h2 className={styles.h2}>
        Embark on a journey to achieve financial 
        <div className={styles.waviy}>
          <span style={{ '--i': 1 }}>F</span>
          <span style={{ '--i': 2 }}>r</span>
          <span style={{ '--i': 3 }}>e</span>
          <span style={{ '--i': 4 }}>e</span>
          <span style={{ '--i': 5 }}>d</span>
          <span style={{ '--i': 6 }}>o</span>
          <span style={{ '--i': 7 }}>m</span>
        </div>
      </h2>
      <div className={styles.container1}>
        <Lottie animationData={animationData} className={`${styles.superhero} ${styles.item}`}></Lottie>
        <p className={`${styles.p1} ${styles.item}`}>
          Embark on an exciting journey towards financial literacy with FinQuest, an interactive 
          choose-your-own-adventure web app designed to empower players with essential money management skills
          <br></br> <br></br> 
          Navigate through a series of engaging scenarios that mimic real-life financial situations, offering 
          players the opportunity shape their financial future
          <br></br> <br></br> 
          As you progress through the game, you will learn about the importance of budgeting, saving, investing,
          and more!  
        </p>
      </div>
      <div className={styles.container2}>
        <div className={styles.div1}>
        <p>
          What you can expect:
          <br></br> <br></br>
          - A fun, interactive experience that will teach you about personal finance
          <br></br> <br></br>
          - A series of scenarios that will help you learn about budgeting, saving, investing
          <br></br> <br></br>
          - A personalized summary of your financial journey
            
        </p>  
        </div>
        <Lottie animationData={animationData2} className={`${styles.woman} ${styles.item}`}></Lottie>
      </div>
      <div className={styles.container3}>
        <Lottie animationData={animationData3} className={`${styles.arrow} ${styles.item}`}></Lottie>
      </div>
      <h2 className={styles.h22}>Journeys:</h2>
      <div className={styles.adiv}>
        <div>
          <a href="/pf" className={styles.aref}>Personal Finance</a> 
          <p>
            New to finance? Start here! Take a journey through the stages of life and learn about the basics of 
            personal finance including the basics of budgeting, saving, investing, and more!
            <br></br> <br></br>
            Focuses: 
            <br></br> 
            - Budgeting
            <br></br> 
            - Assets vs liabilities
            <br></br> 
            - Best practices
          </p>
          <br></br>
          <a href="" className={styles.aref}>Investing</a>
          <p>
            Learn how to invest your money and grow your wealth! 
            <br></br> <br></br>
            Focuses: 
            <br></br> 
            - Stocks/bonds
            <br></br> 
            - Interest
            <br></br> 
            - Brockers
          </p>
          <br></br>
          <a href="" className={styles.aref}>Building Credit</a>
          <p>
            Learn about the importance of credit and how to build your credit score.
            <br></br> <br></br>
            Focuses: 
            <br></br> 
            - Credit cards
            <br></br> 
            - Loands and interest
            <br></br> 
            - Mortgages
          </p>
          <br></br>
          <a href="" className={styles.aref}>Spending</a>
          <p>
            Learn how to spend your money wisely and avoid debt. Practice how to track your spending 
            and navigate through common spending scenarios.
            <br></br> <br></br>
            Focuses: 
            <br></br> 
            - Income
            <br></br> 
            - Tracking spending
            <br></br> 
            - Financial literacy
          </p>
          <br></br>
        </div>
      </div>
    </>
  );
}

