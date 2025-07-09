const getItem = (key) => JSON.parse(sessionStorage.getItem(key));
const setItem = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));
const removeItem = (key) => sessionStorage.removeItem(key);

export { getItem, setItem, removeItem };
