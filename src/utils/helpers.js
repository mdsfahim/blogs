export const CATS = {
  Tech: { k: "cpu", c: ["#5b4bff", "#8f7bff"] },
  Design: { k: "pen", c: ["#ff5d8f", "#ff9a6c"] },
  Travel: { k: "plane", c: ["#0ea5a5", "#4ad6b8"] },
  Lifestyle: { k: "leaf", c: ["#3b9c5a", "#8fcf5f"] },
  Culture: { k: "film", c: ["#d9480f", "#ffb347"] },
  Business: { k: "chart", c: ["#2563eb", "#60a5fa"] }
};

export const getCatInfo = (cat) => CATS[cat] || { k: "tag", c: ["#8a8fa8", "#b9bdd0"] };

export const getReadTime = (content) => {
  const words = content ? content.trim().split(/\s+/).length : 0;
  return Math.max(1, Math.ceil(words / 225));
};

export const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
};