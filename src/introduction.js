const bar = cb => {
  console.log('1');
  return setImmediate(cb);
};
bar(() => console.log('2'));
console.log('3');
