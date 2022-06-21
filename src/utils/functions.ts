export const getLocalItems = async (key: string) => {
  const fromLocal = await localStorage.getItem(key);
  return fromLocal ? JSON.parse(fromLocal) : [];
};
export const setLocalItems = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
