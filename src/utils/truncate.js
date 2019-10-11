export default function(str, maxChars) {
  const append = '…';
  const charLimit = maxChars + 1;

  if (!str || typeof str !== 'string' || str.length < charLimit) {
    return str;
  }

  let sub = str;
  sub = sub.substr(0, charLimit - append.length);
  sub = sub.substr(0, sub.lastIndexOf(' ')).trim();
  return sub + append;
}
