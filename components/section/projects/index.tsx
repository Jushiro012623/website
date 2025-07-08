"use client";

import Card from "./cards";
import { projects } from "./data";

// import Card from '../components/Card';

export default function Project() {
  return (
    <main className={`mt-[5vh] mb-[50vh]`}>
      {projects.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </main>
  );
}
