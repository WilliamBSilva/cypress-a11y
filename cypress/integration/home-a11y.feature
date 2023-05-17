Feature: Home a11y

Como usuario, desejo ter acessibilidade na home
Para que todos clientes possam navegar na home

@SerieA
Scenario Outline: Home a11y
  Given que estou na tela do site Cielo
  And realizo o login "<ec>", "<usuario>" e "<senha>"
  When sou direcionado para home do site cielo
  Then valido se a Home esta de acordo com acessibilidade
  
  Examples:
      | ec         | usuario           | senha  |
      | 2000463023 |automacao-site@loli| 123456 |
