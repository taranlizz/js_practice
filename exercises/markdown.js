const paragraphRegex = /^(?!#{1,6}\s|[\-\*\d+\.]\s).+$/gm;
const headerRegex = /^(#{1,6})\s*(.+)$/gm;
const boldRegex = /__(.*)__/gm;
const italicsRegex = /_(.*)_/gm;
const ulRegex = /^\*\s+(.+)$/gm;

const parseParagraph = (markdown) => {
  return markdown
    .replace(paragraphRegex, (match) => {
      return `<p>${match}</p>`;
    })
    .replace(boldRegex, "<strong>$1</strong>")
    .replace(italicsRegex, "<em>$1</em>");
};

const parseHeader = (markdown) => {
  return markdown.replace(headerRegex, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });
};

const parseList = (markdown) => {
  if (markdown.match(ulRegex)) {
    const parsed = markdown.replaceAll(ulRegex, `<li>$1</li>`);

    const firstLi = parsed.indexOf("<li>");
    const lastLi = parsed.lastIndexOf("</li>") + 5;

    const listItems = parsed.slice(firstLi, lastLi);

    return (
      parsed.slice(0, firstLi) + `<ul>${listItems}</ul>` + parsed.slice(lastLi)
    );
  } else {
    return markdown;
  }
};

const eliminateNewLineChar = (markdown) => {
  return markdown.replace(/\n/g, "");
};

const parse = (markdown) => {
  let result = markdown;

  result = parseParagraph(result);
  result = parseHeader(result);
  result = parseList(result);

  result = eliminateNewLineChar(result);

  return result;
};
