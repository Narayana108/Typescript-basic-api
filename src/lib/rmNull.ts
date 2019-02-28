// Remove undefined and null values
export function rmNull(arr: any[]): any[] {
  return arr.filter(i => i);
}
