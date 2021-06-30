// export const getHeadingIDs = (
//   toc,
//   traverseFullDepth = true,
//   recursionDepth = 1,
// ) => {
//   const idList = [];
//   const hashToId = str => str.slice(1);

//   if (toc) {
//     toc.forEach(item => {
//       if (item.url) {
//         idList.push(hashToId(item.url));
//       }
//       if (item.items && traverseFullDepth && recursionDepth) {
//         idList.push(...getHeadingIDs(item.items, true, recursionDepth + 1));
//       }
//     });
//   }
//   return idList;
// };
