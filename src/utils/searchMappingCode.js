/**
 * Load data from session storage.
 * @function
 * @param {string} - key.
 * @returns {object} - Information from stored data.
 */
export const convers = (datas) => {
  const obj = datas.map(function(a) { 
    a.question = a.question.toLowerCase();
    return a;
  });
  
  return obj
}
