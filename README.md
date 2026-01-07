# Mock Tutorial Roblox Studio

Mock navegável de um plugin de tutoriais para o Roblox Studio, construído com Vite + React.

## Estrutura

O projeto simula um plugin de tutoriais com:

- **Painel do Tutorial (25% esquerda)**: Exibe os cards do tutorial conforme o fluxo
- **Mock do Roblox Studio (75% direita)**: Simulação visual do Studio com animações simples

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Build

```bash
npm run build
```

## Fluxo do Tutorial

O tutorial segue um fluxo linear através dos seguintes cards:

1. **Card 01-02**: Seleção de trilha e tutorial
2. **Card 03**: Escolha de modo (Demonstrativo ou Interativo)
3. **Card 04**: Introdução do tutorial
4. **Card 05**: Etapa antes da ação (com botão "Demonstrar")
5. **Card 05.1**: Conceito importante (opcional, aparece ao clicar no link)
6. **Card 06**: Etapa após ação (confirmação)
7. **Card 07**: Convite à interação (apenas modo interativo)
8. **Card 08**: Tentativa do usuário (apenas modo interativo)
9. **Card 09**: Feedback positivo (apenas modo interativo)
10. **Card 10**: Feedback negativo (apenas modo interativo)
11. **Card 11**: Encerramento

## Características

- Navegação linear entre estados
- Mock visual do Roblox Studio com animações
- Suporte a dois modos: Demonstrativo e Interativo
- Transições suaves entre cards
- Layout responsivo fixo (25% / 75%)

## Notas

- O mock não implementa lógica real do Roblox
- As ações no Studio são apenas simulações visuais
- O fluxo é sempre linear, mesmo em caso de erro
- Não há persistência de dados (tudo é resetado ao recarregar)
