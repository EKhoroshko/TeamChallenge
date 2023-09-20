export function initial(param, type) {
    const typeValue = param.get(type);

    if (typeValue) {
      return typeValue.split(',');
    } else {
      return [];
    }
}