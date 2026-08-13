// 상세 보기 토글 (진단 리포트 카드용 재사용 패턴)
const toggleBtn = document.getElementById('toggleDetailBtn');
const detailBox = document.getElementById('detailBox');

if (toggleBtn && detailBox) {
  toggleBtn.addEventListener('click', () => {
    detailBox.classList.toggle('hidden');
    toggleBtn.textContent = detailBox.classList.contains('hidden')
      ? '상세 보기'
      : '접기';
  });
}
