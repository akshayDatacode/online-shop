export const handleTextVisibility = (text, limit) => {
  if (text) {
    return `${text.slice(0, limit)}${text.length > limit ? "..." : ""}`;
  }
};
