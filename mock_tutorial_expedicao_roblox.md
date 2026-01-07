# MOCK_TUTORIAL_EXPEDICAO_ROBLOX

## 1. Contexto do projeto

Este projeto é um mock funcional de um plugin de tutoriais para Roblox Studio.

A interface é dividida em duas áreas fixas:
- 25% da tela à esquerda: painel do tutorial
- 75% da tela à direita: mock visual do Roblox Studio

O mock não precisa implementar lógica real do Roblox. Ele deve simular estados, transições e variações de tela para demonstrar o funcionamento do tutorial.

---

## 2. Regras globais

- Todos os cards compartilham:
  - mesmas larguras
  - mesmas alturas relativas
  - mesmas posições de título e botões
- Os números dos cards **não aparecem na interface final**
- Os números existem apenas como **indexadores técnicos**
- As imagens na pasta `/references` são **referências visuais**, não assets finais
- O mock do Roblox Studio (lado direito) é sempre o mesmo
- Apenas o painel esquerdo muda de estado

---

## 3. Estrutura de pastas esperada

```
/project-root
  /references
    card-01.png
    card-02.png
    card-03.png
    card-04.png
    card-05.png
    card-05-1.png
    card-07.png
    card-08.png
    card-09.png
    card-10.png
    card-11.png
  /src
```

---

## 4. Mapa de telas (cards)

### Card 01–02 — Seleção

Função:
- Escolha de trilha de tutoriais
- Escolha de tutorial específico

Comportamento:
- Painel esquerdo exibe opções clicáveis
- Mock do Roblox Studio permanece estático

---

### Card 03 — Escolha de modo

Função:
- Definir como o usuário quer aprender

Opções:
- Modo demonstrativo
- Modo interativo

Comportamento:
- Define o comportamento dos próximos cards
- Nenhuma ação no mock do Studio

---

### Card 04 — Introdução do tutorial

Função:
- Explicar o que será aprendido

Elementos:
- Título do tutorial
- Texto descritivo
- Botão "iniciar"

Comportamento:
- Avança para a execução do tutorial
- Nenhuma ação no Studio

---

### Card 05 — Etapa do tutorial (antes da ação)

Função:
- Instruir e preparar a demonstração

Elementos:
- Tema do tutorial
- Etapa X/Y
- Título da etapa
- Lista de comandos no Roblox Studio
- Descrição do que será visto na tela

Botões:
- Demonstrar
- Voltar passo

Comportamento:
- "Demonstrar" simula a ação no mock do Studio

---

### Card 05.1 — Conceito importante (opcional)

Função:
- Explicar um conceito que surgiu na etapa

Elementos:
- Título conceitual
- Texto explicativo
- Feedback 👍 👎
- Botão "Continuar"

Comportamento:
- Não altera o estado do Studio

---

### Card 06 — Etapa do tutorial (após ação)

Função:
- Confirmar a execução

Diferença principal:
- Botão principal vira "Próximo passo"

---

### Card 07 — Convite à interação (modo interativo)

Função:
- Oferecer tentativa prática ao usuário

Opções:
- Tentar executar o passo
- Continuar sem tentar

---

### Card 08 — Tentativa do usuário

Função:
- Permitir que o usuário execute o mesmo passo

Elementos:
- Mesmo layout da etapa
- Botão "Já fez? Clique aqui para ver o seu resultado"
- Opção de pular passo

---

### Card 09 — Feedback positivo

Função:
- Confirmar acerto

Botões:
- Fazer de novo
- Continuar

---

### Card 10 — Feedback negativo

Função:
- Informar erro

Botões:
- Fazer de novo
- Continuar

---

### Card 11 — Encerramento

Função:
- Finalizar o tutorial

Elementos:
- Mensagem de conclusão
- Botão para registrar experiência
- Informação sobre recompensa futura
- Botões Menu e Reiniciar disponíveis

---

## 5. Regra de fluxo

- O tutorial é sempre linear
- A interação é opcional e não cria ramificações
- Mesmo em caso de erro, o fluxo continua
- O estado do Studio pode ser resetado por etapa

---

## 6. Simulação do Roblox Studio (mock)

O Roblox Studio exibido no lado direito (75% da tela) é **apenas um mock visual**.

Ele deve simular ações simples para dar percepção de movimento, tempo e transformação visual durante o tutorial.

### Objetivo da simulação

- Ajudar a visualizar o que está acontecendo
- Demonstrar ritmo entre etapas
- Tornar claro quando algo é criado, alterado ou removido

### Ações visuais permitidas

- Criar um objeto simples (ex: bloco retangular cinza)
- Alterar tamanho do objeto
- Alterar posição do objeto
- Remover objeto da cena
- Destacar menus fictícios do Studio
- Limpar a cena entre etapas

### Importante

- Não implementar lógica real do Roblox
- Não usar física, scripts ou validações reais
- Apenas alternar estados visuais predefinidos
- Usar transições simples para indicar passagem de tempo

Essas simulações servem apenas para demonstrar fluxo e comportamento do tutorial.

