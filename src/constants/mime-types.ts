const mimeTypes = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
  csv: 'text/csv',
  windowsCsv: 'application/vnd.ms-excel',
  xls: 'application/vnd.ms-excel',
  xlsm: 'application/vnd.ms-excel.sheet.macroenabled.12',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  wpd: 'application/octet-stream',
  txt: 'text/plain',
  bmp: 'image/bmp',
  gif: 'image/gif',
  webp: 'image/webp',
  heic: 'image/heic',
  svg: 'image/svg+xml',
  mp4: 'video/mp4',
  mov: 'video/quicktime',
  webm: 'video/webm',
  glb: 'model/gltf-binary',
  usdz: 'model/vnd.usdz+zip',
};

export const dropzoneImageTypes = [
  '.png',
  '.jpg',
  '.jpeg',
  '.bmp',
  '.gif',
  '.webp',
  '.heic',
  '.svg',
];

export const imageTypes = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'heic', 'svg'];
export const videoTypes = ['mp4', 'mov', 'webm'];
export const modelTypes = ['glb', 'usdz'];

export default mimeTypes;
