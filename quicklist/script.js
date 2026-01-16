
document.addEventListener('DOMContentLoaded', () => {
      const inputTodo = document.getElementById('inputTodo');
      const addTodo = document.getElementById('addTodo');
      const listTodo = document.getElementById('listTodo');

      if (!inputTodo || !addTodo || !listTodo) {
            return;
      }

      const adicionarTarefa = () => {
            const texto = inputTodo.value.trim();
            if (texto === '') return; // Evita tarefas vazias

            const label = document.createElement('div');
            label.classList.add('itens');
            label.innerHTML = `
                  <label class="checkbox">
                        <input type="checkbox" class="checkbox-input" />
                        <span class="checkbox-control"></span>
                        <span class="nome-item">${texto}</span>
                  </label>
                  <button class="btn-primary">Remove</button>
            `;
            listTodo.appendChild(label);
            inputTodo.value = '';

            const checkbox = label.querySelector('.checkbox-input');
            checkbox.addEventListener('change', () => {
                  const nomeItem = label.querySelector('.nome-item');
                  nomeItem.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
                  nomeItem.style.opacity = checkbox.checked ? '0.6' : '1';
            });

            // remove button
            const removeButton = label.querySelector('.btn-primary');
            removeButton.addEventListener('click', () => {
                  listTodo.removeChild(label);
            });
      }

      addTodo.addEventListener('click', adicionarTarefa);

      inputTodo.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                  adicionarTarefa();
            }
      });

})