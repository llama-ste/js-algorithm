// let tree = "";
function printTree(totalLayer) {
  const halfWidth = totalLayer - 1;

  for (let i = 0; i < totalLayer; i++) {
    const left = " ".repeat(halfWidth - i) + "*".repeat(i);
    const center = "*";
    const right = "*".repeat(i) + " ".repeat(halfWidth - i);
    // tree += left + center + right + "\n";

    console.log(left + center + right);
  }
}

printTree(5);

// console.log(tree);
