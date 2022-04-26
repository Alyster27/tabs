const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
    // console.log(e.target.dataset.id);

    // the next lines are doing by the boat
  /* if(e.target.classList.contains('tab-btn')) {
    btns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    articles.forEach(article => article.classList.remove('active'));
    const id = e.target.getAttribute('data-id');
    document.getElementById(id).classList.add('active');
  } */

    // the next lines are doing by the developer
    const id = e.target.dataset.id;
    if(id) {
        // remove active from all btns
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide all articles
        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        // show the article with the id
        document.getElementById(id).classList.add('active');
    }
});