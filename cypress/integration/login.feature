Feature: Login

Como usuario, desejo realizar o login
Para que possa acessar o site

@SerieA
Scenario Outline: Login
  Given que estou na tela do site Cielo
  And realizo o login "<ec>", "<usuario>" e "<senha>"
  When sou direcionado para home do site cielo
  Then valido o nome do usuario na home "<nome>"
  
  Examples:
      | ec         | usuario           | senha  | nome      |
      | 2000463023 |automacao-site@loli| 123456 | automacao |
      | 2000463023 |automacao-site@loli| 123456 | William   |
