const formFileUrl = (file: File) => {
  return URL.createObjectURL(file);
};

export default formFileUrl;
