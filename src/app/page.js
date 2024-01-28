"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Lottie from "lottie-react";
import animationData from "./assets/animation.json";

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
    </>
  );
}
