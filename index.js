const posts = document.querySelector('.posts');

function listData(data) {
    data.results.splice(1, 5).forEach(item => {
        posts.innerHTML += `
        <div class='post'>
            <div class='text'>
                <div class='top-text'>
                    <strong>${item.byline.slice(3,)}</strong><span> in </span> 
                    <strong>${item.item_type}</strong><span> &nbsp&nbsp·&nbsp&nbsp 
                    ${new Date(item.published_date).getDate()} 
                    ${['January','February','March','April','May',
                        'June','July','August','September',
                        'October','November','December'][new Date(item.published_date).getMonth()]}
                        </span>
                </div>
                <div class='main-text'>
                    <h3>${item.title}</h3>
                    <p>${item.abstract}</p>
                </div>
                <div class='bottom-text'>
                    <span class='bottom-section'>${item.section}</span> 
                    <span class='simple-text'>10 min read &nbsp&nbsp·&nbsp&nbsp Selected for you
                </div>
            </div>
            <div class='picture'>
                <img src='${item.multimedia[1].url}'>
            </div>        
        </div>
        `
    })
}

async function fetchData(posts) {
    try {
        const responce = await fetch('https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=iHEI5T4aGCbhA5KmiAOzo22cPafsc8uK');
        const data = await responce.json();
        listData(data);
    }
    catch(error) {
        console.error(error);
    }
}

fetchData(posts);