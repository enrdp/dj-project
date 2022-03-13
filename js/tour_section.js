let newsContainer = document.querySelector('.owl-carousel_tour');
if (newsContainer) {
    newsContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target.nodeName == "LI") {
            for (let item of target.parentNode.children) {
                item.classList.remove('active');
            }
            target.classList.add('active');
        }
    });
}

let newsMenu = document.querySelector('.main__tourSchedule__calendar__list');
if (newsMenu) {
    newsMenu.addEventListener('click', (e) =>{
        let target = e.target;
        if (target.nodeName == "A") {
            for (let item of target.parentNode.children) {
                item.classList.remove('active_calendar');            
            }
            target.classList.add('active_calendar');
        }
    });
}
function changeHeight(newHeight) {
    document.documentElement.style.setProperty("--anchor-height", newHeight);
  }

