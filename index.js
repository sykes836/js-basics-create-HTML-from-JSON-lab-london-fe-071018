function replaceContent (movie, part){
    const item = document.getElementById(part);
    while (item.firstChild) item.removeChild(item.firstChild);
    const list = document.createElement ("ul");
<<<<<<< HEAD
    movie[part].forEach (val=> {
      const listItem = document.createElement ("li");
      const itemAndValue = Object.keys(val).forEachKey=> 
        (listItem.innerHTML+=${key}: {val[key]};
      })
=======
    movie[part].forEach (val=>{
      const listItem = document.createElement ("li");
      const itemAndValue = Object.keys(val).forEachKey=> {
        listItem.innerHTML += ${key}: ${val[key]};})
>>>>>>> 943234c81de9a1f1687fcf0dcb82bb3b1c717b56
      list.appendChild(listItem);
    })
    item.appendChild(list);
}

<<<<<<< HEAD
function replace(movie){
  const mainTitle = document.getElementsByTagName("title")[0];
  mainTitle.innerHTML = movie.title;
  ["title", "director","genre","filmrating","description","audienceScore"].forEach(info=>{
    const item = document.getElementById(info);
    item.innerHTML = movie[info];
  })
  document.getElementById("poster").src-movie.poster;
  replaceContent(movie, "cast");
  replaceContent(movie, "reviews");
}

replace(movies.Titanic);
=======
>>>>>>> 943234c81de9a1f1687fcf0dcb82bb3b1c717b56
document.addEventListener("DOMContentloaded", (e) => {
  Object.keys(movies).forEach(movie=>document.getElementById(movie).addEventListener("click", ()=>{
  replace(movies[movie]);
  }))
});
