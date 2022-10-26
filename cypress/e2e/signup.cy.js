/// <reference types ="cypress"/>

//import faker from '@faker-js/faker'

it('deve cadastrar um novo usuario', function(){

    const name = 'Thiago Cavallari'
    const email = 'thiagocavallari@outlook.com'
    const password = 'thiago123'

    cy.task('removeUser', email)
        .then(res => {
            console.log(res)
        })

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(name)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Senha"]').type(password)
    
    // cy.intercept('POST', '/users', {
    //     statusCode: 200
    // }).as('postUser') // Interceptar a chamada para alterar o statusCode no momento de cadastrar um Usuario. Esse teste fica a nivel de front sem integração com banco
    
    cy.contains('button', 'Cadastrar').click()

    // cy.wait('@postUser')
    
    cy.get('.toast') // Localizo a mensagem toast. (.toast é a classe)
        .should('be.visible') // Verifico se ela está visivel
        .find('p') //Dentro de .toast existe o elemento P que contem a mensagem
        .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')

})