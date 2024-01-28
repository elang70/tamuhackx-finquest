"use client";
import Image from "next/image";
import styles from "./page.module.css";
<<<<<<< HEAD
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";
=======
import Summary from "./summary_content/summary_page";
>>>>>>> 5eb86f09b121c0c4d6c25940bfe88f49958dcbb0

export default function Home() {
  return (
    <>
      <h1>Welcome to FinQuest, your answer to financial freedom</h1>
      <Lottie animationData={animationData} className={styles.superhero}></Lottie>
      <p>Description: lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem 
        ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
        </p>
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

      <Summary></Summary>

    </>
  );
}
