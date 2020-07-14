const Bio = async () => {

    const url= "http://localhost:1337/bio";
    const ftch = await fetch(url);
    const data = await ftch.json();
    const result = data;
    console.log(result);

    document.getElementById("bio").innerHTML = `
    <h1>${result.title}</h1>
    <p>${result.position}</p>
    <p>${result.desc}</p>
    <p>${result.email}</p>
    <p>${result.created_at}</p> <span>${result.updated_at}</span>
    `;
}

Bio();