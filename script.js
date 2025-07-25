const simboli = ['🍒', '🔔', '🍋', '💎', '7️⃣', '🍀'];
const payout = {
  '🍒': 10,
  '🔔': 20,
  '🍋': 5,
  '💎': 50,
  '7️⃣': 100,
  '🍀': 25
};

let saldo = 100;

function gira() {
  if (saldo < 10) {
    document.getElementById('messaggio').innerText = '💸 Credito insufficiente!';
    return;
  }

  saldo -= 10;

  const rulli = [];
  for (let i = 0; i < 3; i++) {
    const simbolo = simboli[Math.floor(Math.random() * simboli.length)];
    rulli.push(simbolo);
    document.querySelectorAll('.reel')[i].innerText = simbolo;
  }

  let vincita = 0;
  if (rulli[0] === rulli[1] && rulli[1] === rulli[2]) {
    vincita = payout[rulli[0]];
    saldo += vincita;
    document.getElementById('messaggio').innerText = `🎉 Hai vinto ${vincita}€!`;
  } else {
    document.getElementById('messaggio').innerText = '😢 Nessuna vincita...';
  }

  document.getElementById('saldo').innerText = saldo;
}
