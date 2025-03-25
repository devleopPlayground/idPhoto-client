export const base64ToBlob = (base64: string) => {
  const binaryString = atob(base64.split(',')[1]);
  const blob = new Blob([binaryString], { type: 'image/png' });

  return blob;
};
