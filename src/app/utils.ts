// src/app/utils/utils.ts
export function selected(event: Event): void {
    const targeted = event.target as HTMLElement;
    const clicked = targeted.parentElement;
  
    if (!clicked) return;
  
    const child = clicked.children;
    console.log(child);
  
    for (let i = 0; i < child.length; i++) {
      const childElement = child[i] as HTMLElement;
      if (childElement.classList.contains("text-white")) {
        console.log(childElement);
        childElement.classList.remove("text-white", "bg-indigo-600");
        childElement.classList.add(
          "text-gray-600",
          "bg-gray-50",
          "border",
          "border-white"
        );
      }
    }
  
    targeted.classList.remove(
      "text-gray-600",
      "bg-gray-50",
      "border",
      "border-white"
    );
    targeted.classList.add("text-white", "bg-indigo-600");
  }
  
  export function selectNew(): void {
    const newL = document.getElementById("list");
    const arrowSVG = document.getElementById("ArrowSVG");
  
    if (newL && arrowSVG) {
      newL.classList.toggle("hidden");
      arrowSVG.classList.toggle("rotate-180");
    }
  }
  
  export function selectedSmall(event: Event): void {
    const targeted = event.target as HTMLElement;
    const text = targeted.innerText;
    const newL = document.getElementById("list");
    const newText = document.getElementById("textClicked");
    const arrowSVG = document.getElementById("ArrowSVG");
    const s1 = document.getElementById("s1");
  
    if (newL && newText && arrowSVG && s1) {
      newL.classList.add("hidden");
      arrowSVG.classList.toggle("rotate-180");
      newText.innerText = text;
      s1.classList.remove("hidden");
    }
  }
  