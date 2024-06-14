function removeDuplicates(arr) {
    const seen = new Set();
    return arr.filter((item) => {
      const duplicate = seen.has(item.label);
      seen.add(item.label);
      return !duplicate;
    });
  }

  function getShortDescription(text, wordLimit) {
      const words = text.split(' ');
      return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  }


  export {removeDuplicates,getShortDescription}