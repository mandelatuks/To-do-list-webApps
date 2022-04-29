import './style.css';
import List from './list.js';

const todolist = new List();
todolist.display();

document.querySelector('#form-area').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todolist.addWork(activity);
  e.target.reset();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todolist.clearAll();
});

// const toDoList = [
//   {
//     description: 'Road Run',
//     completed: true,
//     index: 0,
//   },

//   {
//     description: 'Bath',
//     completed: true,
//     index: 1,
//   },
//   {
//     description: 'Code',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Complete Project',
//     completed: false,
//     index: 3,
//   },
// ];

// const listSection = document.querySelector('.items');
// listSection.innerHTML = '';
// for (let i = 0; i < toDoList.length; i += 1) {
//   const work = toDoList[i];
//   let workItem = `
//     <li class=" list-items">`;
//   if (work.completed) {
//     workItem += `<span class="material-icons done" onclick="updateStatus(${work.index}, 
//  'pending')">
//           done
//         </span>
//         <p contenteditable="true" class="completed">
//           ${work.description}
//         </p>
//         `;
//   } else {
//     workItem += `<span class="material-icons check-box" onClick ="UpdateStatus(${work.index}
//    'completed')">
//                 check_box_outline_blank
//                 </span>
//                 <p  contenteditable="true">
//                 ${work.description}
//                 </P>`;
//   }
//   workItem += `
//   <span class="material-icons more-bars">
//        more_vert
//     </span>
//    <!-- <span class="material-icons" onclick="deleteTask(${work.index})">
//         delete
//       </span> -->
//    </li>`;
//   listSection.innerHTML += workItem;
// }

// toDoList.sort((a, b) => {
//   if (a.index < b.index) return -1;
//   if (a.index > b.index) return 1;
//   return 0;
// });