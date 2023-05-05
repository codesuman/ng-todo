const RESPONSE_DELAY: number = 1000; // In milli-seconds

function getTodosListFileName(){
  return `todos/list.json`;
}

export function initInterceptors() {
  cy.intercept({
    url: '/api/todos',
    method: 'GET'
  }, async (req) => {
    const fixtureFilename = await getTodosListFileName();

    req.reply({
        fixture: fixtureFilename,
        delay: RESPONSE_DELAY
    })
  })
  .as('getTodoList');
}