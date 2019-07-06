
const doLogin = () => {
  cy.visit('https://amazon.com.br')
  cy.get('#nav-link-accountList').click()
  cy.get('#ap_email').type('contato+cypress@campinasfrontend.com.br')
  cy.get('#ap_password').type('DojoCypress')
  cy.get('#signInSubmit').click()
}

describe('Amazon website', () => {



  it('Should login', () => {
    doLogin()
  })

  context('logged tests', () => {
    beforeEach(() => {
      cy.clearCookies()
      doLogin()
    })

    it('Adiciona e remove do carrinho', () => {
      cy.get('#80c8c274 > span > div > div.deals-shoveler-card-image > a').click()

      cy.get('#add-to-cart-button').click()

      cy.visit('https://www.amazon.com.br/gp/cart/view.html/ref=lh_cart')
      cy.contains('Excluir').eq(0).click()
    })

    it('Criar uma lista de desejo', ()=>{
      cy.get('#80c8c274 > span > div > div.deals-shoveler-card-image > a').click()

      cy.get('#add-to-wishlist-button').click()
      cy.get('#atwl-dd-create-list').click()

      cy.get('#WLNEW_list_name').clear().type('piniquinho ifood')
      cy.get('#WLNEW_create > span > span > input').click()

      cy.get('#wl-huc-post-create-msg > div > div.a-button-stack.a-spacing-top-small > span.a-button.a-button-base > span > a').click()

      cy.get('#a-autoid-7 > span > input').click()
    })


  })


})
