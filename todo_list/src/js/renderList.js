const entriesList = document.querySelector("[data-list]");

export const renderList = (entries) => {
  const entriesToHTML = entries
    .map(
      ({
        category,
        title,
        text,
        id,
        completed,
      }) => `<li class="entry-item" data-category="${category}" data-id="${id}" data-completed="${completed}">
               <div class="entry-item-container">
                 <p class="entry-tag">${category}</p>
                 <ul class="entry-controllers-list">
                   <li class="entry-controllers-item">
                     <button class="entry-controller-btn btn-icon" type="button" data-edit>
                       <svg class="controller-btn-icon">
                         <use href="/public/sprite.svg#icon-edit"></use>
                       </svg>
                     </button>
                   </li>
                   <li class="entry-controllers-item">
                     <button class="entry-controller-btn btn-icon" type="button" data-delete>
                       <svg class="controller-btn-icon">
                         <use href="/public/sprite.svg#icon-delete"></use>
                       </svg>
                     </button>
                   </li>
                 </ul>
               </div>
               <h2 class="entry-title">${title}</h2>
               <p class="entry-text">
                 ${text}
               </p>
              <button class="entry-status-btn primary-btn" type="button" data-change>
                 <svg class="entry-status-btn-icon">
                   <use href="/public/sprite.svg#icon-save"></use>
                 </svg>
                 ${completed ? "Відновити" : "Завершити"}
               </button>
             </li>`
    )
    .join("");
  entriesList.innerHTML = entriesToHTML;
};
