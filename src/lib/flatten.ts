// Flatten nested array to single array
export function flatten(arr: any[]): any[] {
  return arr.reduce(function(a, b) {
    return a.concat(Array.isArray(b) ? flatten(b) : b);
  }, []);
}
