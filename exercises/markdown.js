const paragraphRegex = /^(?!#{1,6}\s|[\-\*\d+\.]\s).+$/gm;
const headerRegex = /^(#{1,6})\s*(.+)$/gm;
const boldRegex = /__(.*)__/gm;
const italicsRegex = /_(.*)_/gm;
const ulRegex = /^\*\s+(.+)$/gm;

const parseInlineFormatting = (markdown) => {
  return markdown
    .replace(boldRegex, "<strong>$1</strong>")
    .replace(italicsRegex, "<em>$1</em>");
};

const parseParaghraphs = (markdown) => {
  return markdown.replace(paragraphRegex, (match) => {
    return `<p>${match}</p>`;
  });
};

const parseHeaders = (markdown) => {
  return markdown.replace(headerRegex, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });
};

const parseLists = (markdown) => {
  return markdown
    .replace(ulRegex, "<li>$1</li>")
    .replace(/<li>.*<\/li>/gms, (match) => `<ul>${match}</ul>`);
};

const eliminateNewLineChar = (markdown) => {
  return markdown.replace(/\n/g, "");
};

export const parse = (markdown) => {
  return eliminateNewLineChar(
    parseLists(parseHeaders(parseParaghraphs(parseInlineFormatting(markdown))))
  );
};
