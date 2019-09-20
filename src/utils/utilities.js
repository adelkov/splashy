export   const divideImagesToColumns = images => {
    const len = images.length;
    const chunk = Math.floor(len / 3);
    const col1 = images.slice(0, chunk);
    const col2 = images.slice(chunk, len - chunk);
    const col3 = images.slice(len - chunk, len);
    return [col1, col2, col3];
  };