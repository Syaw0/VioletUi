const makeBubbleSpan = (
  clientX: number,
  clientY: number,
  left: number | string,
  top: number | string
) => {
  const span = document.createElement("span");
  span.style.backgroundColor = "var(--labelColor)";
  span.style.position = "absolute";
  span.style.left = typeof left == "string" ? left : clientX - left + "px";
  span.style.top = typeof top == "string" ? top : clientY - top + "px";
  span.style.borderRadius = "50%";
  span.style.width = "100px";
  span.style.height = "100px";
  return span;
};

export default makeBubbleSpan;
