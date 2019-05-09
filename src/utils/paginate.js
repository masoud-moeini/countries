import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // let temp = _.slice(items, startIndex);
  // let temp2 = _.take(temp, 10);
  // console.log(temp2);
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
