

describe('Excel', () => {
  it('read excel', () => {
    cy.task('parseXlsx', { filePath: 'D:\\Skill\\cypress\\course-ptt\\testsuite\\cypress\\fixtures\\cypress-data.xlsx' })
      .then(data => {
        console.log('data ::==', data)
        data.forEach((row, index) => {
          console.log('data ::==' + JSON.stringify(row))
          cy.log(JSON.stringify(row))
        })
      })
  })
})