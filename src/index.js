import _ from 'lodash';
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
for (let i = 0; i < toDoList.length; i + 1) {
  const work = toDoList[i];
  let workItem = ` <li class="list-items">`;
  if(work.completed){
               ` <span class="material-icons check-box">
                  check_box_outline_blank
                </span>
                <p> Road run</p>
               `; 
  }
                <span class="material-icons more-bars">
                  more_vert
                </span>
              </li>`
}
