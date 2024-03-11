export const parseVideoSrc = (src: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(src, "text/html");
  const iframe = doc.querySelector("iframe");
  return iframe?.src;
};
