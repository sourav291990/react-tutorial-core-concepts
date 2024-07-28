import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../components/CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((coreconceptItem) => (
          <CoreConcept key={coreconceptItem.title} {...coreconceptItem} />
        ))}
      </ul>
    </section>
  );
}
