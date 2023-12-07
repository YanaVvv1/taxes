function calculateSalary() {
    const salaryInput = document.getElementById('salary');
    const salary = parseFloat(salaryInput.value);

    if (isNaN(salary)) {
      alert('Будь ласка, введіть суму заробітної плати.');
      return;
    }

    const pdfoRate = 0.18;
    const militaryRate = 0.015;
    const esvRate = 0.22;

    const pdfo = salary * pdfoRate;
    const military = salary * militaryRate;
    const esv = salary * esvRate;

    const netSalary = salary - pdfo - military - esv;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `${netSalary.toFixed(2)} грн.`;
  }

  function submitQuiz() {
    const answers = ['b', 'b', 'c'];
    let score = 0;

    for (let i = 1; i <= 3; i++) {
      const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
      if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === answers[i - 1]) {
          score++;
        }
      }
    }

    const result1Element = document.getElementById('result1');
    result1Element.innerHTML = `Ви набрали ${score} з 3 балів.`;
  }
