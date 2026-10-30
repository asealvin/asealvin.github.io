(() => {
  const draw = (button) => {
    const section = button.closest('.annual-recap-year');
    if (!section) return;
    const canvas = document.createElement('canvas'); const scale = 2;
    canvas.width = 1200 * scale; canvas.height = 1500 * scale;
    const ctx = canvas.getContext('2d'); if (!ctx) return; ctx.scale(scale, scale);
    ctx.fillStyle = '#171411'; ctx.fillRect(0, 0, 1200, 1500);
    ctx.fillStyle = '#c9a36a'; ctx.fillRect(72, 94, 180, 3);
    ctx.fillStyle = '#d9b77c'; ctx.font = '500 22px Avenir, PingFang SC, sans-serif'; ctx.fillText('ASEALVIN · WRITING', 72, 148);
    const title = section.querySelector('h2')?.textContent || '年度写作回顾';
    ctx.fillStyle = '#f3ede2'; ctx.font = '600 70px Avenir, PingFang SC, sans-serif'; ctx.fillText(title, 72, 248);
    const stats = [...section.querySelectorAll('.annual-recap-stats div')];
    stats.forEach((item, index) => { const x = 72 + (index % 2) * 530, y = 380 + Math.floor(index / 2) * 250; ctx.fillStyle = '#231d17'; ctx.fillRect(x, y, 480, 190); ctx.fillStyle = '#c9a36a'; ctx.font = '500 20px Avenir, PingFang SC, sans-serif'; ctx.fillText(item.querySelector('dt')?.textContent || '', x + 28, y + 52); ctx.fillStyle = '#f3ede2'; ctx.font = '600 46px Avenir, PingFang SC, sans-serif'; ctx.fillText((item.querySelector('dd')?.textContent || '') + (item.querySelector('span')?.textContent || ''), x + 28, y + 126); });
    ctx.fillStyle = '#8f8679'; ctx.font = '400 20px Avenir, PingFang SC, sans-serif'; ctx.fillText('asealvin.com/annual/', 72, 1410);
    canvas.toBlob((blob) => { if (!blob) return; const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'asealvin-writing-' + button.dataset.year + '.png'; a.click(); URL.revokeObjectURL(a.href); const original = button.textContent; button.textContent = '已保存图片'; window.setTimeout(() => { button.textContent = original; }, 2200); }, 'image/png');
  };
  document.querySelectorAll('[data-annual-export]').forEach((button) => button.addEventListener('click', () => draw(button)));
})();
