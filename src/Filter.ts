export default function filter<
  T0,
  K0 extends keyof T0,
  T1 extends T0[K0],
  K1 extends keyof T0[K0],
  T2 extends T0[K0][K1],
  K2 extends keyof T0[K0][K1],
  T3 extends T0[K0][K1][K2],
  E0 = T0[K0]
>(
  arr: T0[],
  key1: K0,
  value?: T1 | E0 | T2 | T3,
  key2?: K1,
  key3?: K2
): T0 | T0[] | T0[K0][] | T0[K0][K1][] {
  if (key1 !== undefined) {
    if (value !== undefined) {
      console.log(['INFO'], ' filtering value --> ', [value], ' in ', [key1]);
    }

    console.log(['INFO'], ' filtering key1 --> ', [key1]);
  }

  if (
    key1 === 'id' &&
    key2 === undefined &&
    key3 === undefined &&
    value !== undefined
  ) {
    // layer 1 obj
    const item: T0[] = [];

    arr.forEach((e) => {
      const current: T0 = e; // current obj
      const currentObjVal = current[key1]; // current val;

      if (currentObjVal === value) {
        item.push(current);
      }
    });

    let element: T0 = item[0];

    return element;
  } else if (
    key1 === 'duration' &&
    key2 !== undefined &&
    key3 === undefined &&
    value === undefined
  ) {
    // layer 2 obj
    return arr.map((e) => e[key1][key2]);
  } else if (value !== undefined) {
    const items: T0[] = [];

    if (key1 === 'duration' && key2 !== undefined && key3 !== undefined) {
      // layer 3 obj
      arr.forEach((e) => {
        const current: T0 = e; // current obj
        const currentObjVal = current[key1][key2][key3]; // current val;

        if (currentObjVal === value) {
          items.push(current);
        }
      });

      return items;
    } else {
      arr.forEach((e) => {
        const current: T0 = e; // current obj
        const currentVal: T0[K0] = e[key1]; // current obj key1 value

        if (
          typeof value !== 'number' &&
          typeof value !== 'string' &&
          value !== null
        ) {
          // if value is an enum or object
          if (typeof currentVal === 'number' && currentVal in value) {
            items.push(current);
          }
        } else {
          if (currentVal === value) {
            // if value is an object

            items.push(current);
          }
        }
      });

      return items;
    }
  } else {
    return arr.map((obj) => obj[key1]);
  }
}

export function query<T, K extends keyof T, T1 extends T[K]>(
  arr: T[],
  key1: K,
  value: T1
): T | undefined {
  // layer 1 obj
  return arr.find((e) => (e[key1] === value ? e : undefined));
}
