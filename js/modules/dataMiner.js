function getData(targeturl, callback) {
    fetch(targeturl)
        .then(response => response.json())
        .then(data => {
            callback(data);
        })
    .catch(error => console.error(error));
}

export { getData }