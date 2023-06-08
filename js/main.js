    const name = 'John';
    const age = 25;
    
    const html = `
      <div>
        <h2>${name}</h2>
        <p>Age: ${age}</p>
      </div>
    `;
    
    document.getElementById('container').innerHTML = html;
  