// Gerando os dias da semana
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Array com os dias do mês de dezembro
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Gerando os dias do mês de dezembro
decemberDaysList.forEach((day) => {
  const dayListItem = document.createElement('li');
  dayListItem.className = 'day';

  if (day === 24 || day === 25 || day === 31) {
    dayListItem.classList.add('holiday');
  }
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    dayListItem.classList.add('friday');
  }
  
  dayListItem.innerText = day;
  document.querySelector('#days').appendChild(dayListItem);
});

// Adiciona  cor de fundo aos feriados e remove quando clicado novamente
document.querySelector('#btn-holiday').addEventListener('click', () => {
  const holidays = document.querySelectorAll('.holiday');

  holidays.forEach((holiday) => {
    if (holiday.style.backgroundColor === 'rgb(162, 233, 255)') {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday.style.backgroundColor = 'rgb(162, 233, 255)';
    }
  });
});

// Adiciona  cor de fundo as sexta-feiras e remove quando clicado novamente
document.querySelector('#btn-friday').addEventListener('click', () => {
  const fridays = document.querySelectorAll('.friday');
  
  fridays.forEach((friday) => {
    if (friday.innerText === 'SEXTOU') {
      friday.innerText = friday.dataset.originalText;
    } else {
      friday.dataset.originalText = friday.innerText;
      friday.innerText = 'SEXTOU';
    }
  });
});

// Atribui a classe selected ao elemento clicado
document.querySelectorAll('.task, selected').forEach(element => {
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('selected') && event.target.classList.contains('task')) {
      return event.target.classList.remove('selected');
    }
    if (event.target.classList.contains('task')) {
      if (document.querySelector('.selected')) {
        document.querySelector('.selected').className = 'task';
      }
      event.target.classList.add('selected');
    }
  });
});

// Adiciona a cor selecionada da tarefa ao dia clicado
document.querySelectorAll('.day').forEach((day) => {
  day.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.style.color !== selected.style.backgroundColor) {
      event.target.style.color = selected.style.backgroundColor;
    } else {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
});

// Adiciona tarefa ao clicar no botão
function adicionarTarefa() {
  const taskList = document.querySelector('#task-list');
  const taskInput = document.querySelector('#task-input');

  if (taskInput.value === '') {
    return alert('Erro: Nenhum valor inserido!');
  }

  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = '';
}
document.querySelector('#btn-add').addEventListener('click', adicionarTarefa);
document.querySelector('#task-input').addEventListener('keydown', (event) => {if (event.key === 'Enter') {adicionarTarefa()}});