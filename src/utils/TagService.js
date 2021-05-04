exports.TagService = class Tag {
  makeCountedTag(edges) {
    const tagList = concatTag(edges);
    const countedTag = countingTag(tagList);
    return countedTag;
  }
};

function concatTag(edges) {
  const concatedTag = edges.reduce((accum, current) => {
    const tagList = current.node.frontmatter.tagList;
    const test = accum.concat(tagList);
    return test;
  }, []);
  console.log('concate ', concatedTag);
  return concatedTag;
}

function countingTag(tagList) {
  const test = tagList.reduce((accum, current) => {
    const prev = accum;
    const findTagIdx = prev.findIndex(item => item.tagName === current);
    console.log(findTagIdx);
    if (findTagIdx !== -1) {
      prev[findTagIdx].count++;
    } else {
      prev.push({
        tagName: current,
        count: 1,
      });
    }
    return prev;
  }, []);
  return test;
}
