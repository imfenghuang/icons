const CompRaw = Object.fromEntries(ICON_LIST.map(v => [v.name, v.raw]));

export const getCompRaw = (name: string): string => {
  return CompRaw[name as keyof typeof CompRaw] || '';
};

export const downloadFile = (fileName: string, fileContent: string): void => {
  // 创建文件对象
  const file = new Blob([fileContent], { type: 'text/plain' });

  // 创建下载链接
  const aLink = document.createElement('a');
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(file);

  // 触发下载
  document.body.appendChild(aLink); // 将链接添加到文档中
  aLink.click(); // 触发点击事件
  document.body.removeChild(aLink); // 下载后移除链接
};

export const getShareLink = (name: string): string => {
  if (name === '') return REPO_URL;
  return `${REPO_URL}/blob/main/src/icons/${name}.vue`;
};
