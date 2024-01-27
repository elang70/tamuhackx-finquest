import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Welcome to FinQuest!</h1>
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
