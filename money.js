
const form = document.getElementById('form');
const moneyInput = document.getElementById('money');
const zakatSpan = document.getElementById('zakat');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const money = parseFloat(moneyInput.value) ; // معالجة الإدخال الفارغ

  const nisab = 85 * 2.43; // قيمة النصاب بالدينار الأردني

  // اختبار عدم إدخال قيمة

  if (!money) {
    errorMessage.style.display = 'block';
    zakatSpan.textContent = '0';
    return;
  }

  // اختبار قيمة المال

  if (money < nisab) {
    zakatSpan.textContent = '0';
    return;
  }

  // حساب الزكاة

  const zakat = money * 2.5 / 100;

  // إخفاء رسالة الخطأ وعرض النتيجة

  errorMessage.style.display = 'none';
  zakatSpan.textContent = zakat.toFixed(2);
});

