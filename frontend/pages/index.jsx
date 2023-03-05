import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <main className="bgImg">
        <InstructionsComponent>
        </InstructionsComponent>
      </main>
    </div>
  );
}
