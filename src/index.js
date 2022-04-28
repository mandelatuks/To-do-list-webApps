// import _ from 'lodash';
import './style.css';

const toDoList = [
  {
    description: 'Road Run',
    completed: true,
    index: 0,
  },

  {
    description: 'Bath',
    completed: true,
    index: 1,
  },
  {
    description: 'Code',
    completed: false,
    index: 2,
  },
  {
    description: 'Complete Project',
    completed: false,
    index: 3,
  },
];

const listSection = document.querySelector('.items');
listSection.innerHTML = '';
for (let i = 0; i < toDoList.length; i += 1) {
  const work = toDoList[i];
  let workItem = `
    <li class=" list-items">`;
  if (work.completed) {
    workItem += `<span class="material-icons done" onclick="updateStatus(${work.index}, 'pending')">
          done
        </span>
        <p contenteditable="true" class="completed">
          ${work.description}
        </p>
        `;
  } else {
    workItem += `<span class="material-icons check-box" onClick ="UpdateStatus(${work.index}, 'completed')">
                check_box_outline_blank
                </span>
                <p  contenteditable="true">
                ${work.description}
                </P>`;
  }
  workItem += `
  <span class="material-icons more-bars">
       more_vert
    </span>
   <!-- <span class="material-icons" onclick="deleteTask(${work.index})">
        delete
      </span> -->
   </li>`;
  listSection.innerHTML += workItem;
}

toDoList.sort((a, b) => {
  if (a.index < b.index) return -1;
  if (a.index > b.index) return 1;
  return 0;
});