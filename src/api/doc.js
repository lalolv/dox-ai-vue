import service from ".";

// 上传文档
export function upDoc(formData, onUpProgress) {
  return service({
    method: "POST",
    url: `/doc/upload`,
    headers: { "Content-Type": "multipart/form-data" },
    data: formData,
    onUploadProgress: onUpProgress,
  });
}
