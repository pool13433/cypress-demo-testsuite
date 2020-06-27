Cypress.Commands.add('csvMapper', (csvName) => {
  let headers = []
  let result = []
  cy.fixture(csvName).then(data => {
    console.log('data ::==', JSON.stringify(data))
    const datas = data.split(/\n/)

    datas.forEach((row, index) => {
      console.log('row::==' + row)
      if (index > 0) {
        const items = row.split(',')
        let record = {}
        headers.forEach((col, index) => {
          record[col] = items[index]
        })
        result.push(record)
      } else {
        headers = row.split(',')
      }
    })
    console.log('result ::==', result)
    return result
  })
})

Cypress.Commands.add('uploadFile', { prevSubject: true }, (subject, fileName, fileType = '') => {
  cy.fixture(fileName,'binary').then(content => {
    return Cypress.Blob.binaryStringToBlob(content, fileType).then(blob => {
      const el = subject[0];
      const testFile = new File([blob], fileName, {type: fileType});
      const dataTransfer = new DataTransfer();

      dataTransfer.items.add(testFile);
      el.files = dataTransfer.files;
      cy.wrap(subject).trigger('change', { force: true });
    });
  });
});


describe('ตัวอย่างโค๊ดการ Load Data from Excel File', () => {
  it('load data from csv', () => {
    cy.csvMapper('cypress-data').should('have.length', 4)
  })
  it('load data from json', () => {
    cy.fixture('example').should('have.property', 'name')
  })

  it('load image attachFile input:file', () => {
    cy.visit('/elements.html')
    .get('input[type="file"]').uploadFile('cypress.jpg', 'image/jpeg');
  })
})